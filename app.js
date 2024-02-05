const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const mapButtons = document.getElementsByClassName('map-button');
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
// remove and remake map after clicking different map
for (let i = 0; i < mapButtons.length; i++) {
    mapButtons[i].addEventListener('click', function(){
        let x = document.getElementsByTagName('iframe');
        if (x.length > 0){
            if (x[0].id !== mapButtons[i].id){
                x[0].remove();
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
                document.getElementById("pin").style.visibility = 'hidden';
                document.querySelector('#connection').setAttribute('x1', 300);
                document.querySelector('#connection').setAttribute('y1', 280);
                var iframe = document.createElement('iframe');
                iframe.id = mapButtons[i].id;
                iframe.src = mapButtons[i].id + ".html"; 
                iframe.style.width = '600px'; 
                iframe.style.height = '100%';  
                iframe.setAttribute("scrolling", "no");
                var lineHolder =document.getElementById('line-holder');
                lineHolder.parentNode.insertBefore(iframe, lineHolder.nextSibling)
                document.querySelector('iframe').addEventListener('load', mapSetUp);
            }
        }
    });
}
// After map loads, adjust it to hide unneeded aspects
const mapSetUp = () => {
    //  Wait for hide-items button to show up (can't just alter tags because they are reset)
    var itemButtons = document.querySelector('iframe').contentWindow.document.getElementsByClassName("hide-select-button");    
    function waitUp(){
        itemButtons = document.querySelector('iframe').contentWindow.document.getElementsByClassName("hide-select-button");
        if (itemButtons.length == 2){
            proceed();
        } else {
            setTimeout(waitUp, 50);
        }
    }
    waitUp();
    function proceed(){
        //Press button to hide items
        itemButtons[0].click();
        // Open navigation menu and then select area button to show location names
        document.querySelector('iframe').contentWindow.document.getElementsByClassName('card-header')[4].firstChild.click();
        document.querySelector('iframe').contentWindow.document.querySelectorAll('img[alt="Area Icon"]')[0].click();

        // Hide sidebar (all done with it by now)
        document.querySelector('iframe').contentWindow.document.getElementsByClassName("navbar-dark")[0].style.visibility = 'hidden';

        // Remove counts of items on each level
        var counts = document.querySelector('iframe').contentWindow.document.getElementsByClassName('item-count');
        while (counts.length) {
            counts[0].remove();
        }
        
        // Make names unclickable (just for show)
        var areas = document.querySelector('iframe').contentWindow.document.getElementsByClassName('area-icon');
        for (let i = 0; i < areas.length; i++) {
            areas[i].classList.remove('leaflet-interactive');
        }
        document.getElementById("pin").style.visibility = 'visible';

        document.getElementById('guess-button').disabled = false;
        positionOverlay();
    }
}
window.addEventListener('resize', () =>{
    positionOverlay();
    if (window.getComputedStyle(menuLinks).getPropertyValue('display') === 'flex'){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});
document.querySelector('iframe').addEventListener('load', mapSetUp);
document.getElementById('guess-button').addEventListener('click', ()=>{
    //Fully zoomed, paris1 pic is -140,-150 vpixels from VIP Parking icon

    // Show agent image on map
    var agentImage = document.querySelector('iframe').contentWindow.document.querySelector('.leaflet-marker-pane').getElementsByTagName('img')[0];
    agentImage.src = "/agent_pics/Tuxedo2021.webp";
    agentImage.style.pointerEvents = 'none';// taking this out puts the click function back 
    
    //Alter transperency based on floor
    adjustAgentImage(document.querySelector('iframe').contentWindow.document.querySelector('.floor-info.selected'));
    var floorList = document.querySelector('iframe').contentWindow.document.getElementsByClassName('floor-info');
    for (let i = 0; i < floorList.length; i++) {
        floorList[i].addEventListener('click',  () => {
            adjustAgentImage(floorList[i]);
        });
    }
    function adjustAgentImage(currentFloor){
        agentImage.style.display = 'block';
        agentImage.style.opacity = currentFloor.querySelector('span').textContent.includes("1") ? 1 : .5;
    }

    document.querySelector('iframe').contentWindow.document.querySelector('.leaflet-marker-pane').insertBefore(agentImage, null);

    //draw line on map. 
    updateLine(agentImage.getBoundingClientRect());
    
    document.getElementById('guess-button').disabled = true;
    
    const callback = function(mutationsList, observer) {
        updateLine(agentImage.getBoundingClientRect());
    };
    function updateLine(agentLocation){
        document.querySelector('#connection').setAttribute('x1', agentLocation.left + agentLocation.width / 2);
        document.querySelector('#connection').setAttribute('y1', agentLocation.top + agentLocation.height / 2);
    }
    const observer = new MutationObserver(callback);
    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(document.querySelector('iframe').contentWindow.document.querySelector('.leaflet-map-pane'), config);
    // TODO: Make other end of line move (easy)
    // TODO: Add custom locations (hard). Maybe make it so the agent location is (random base element location) + scale*distance
    // leaflet-proxy to find scale
});
function positionOverlay() {
    var iframeRect = document.querySelector('iframe').getBoundingClientRect();
    var pin = document.getElementById('pin');
    pin.style.top = iframeRect.top + 300 + 'px'; 
    pin.style.left = iframeRect.left + 300 + 'px';
}
//Use MATH to find player coordinates (extrapolate from icons)
// Find absolute positions of two icons
//Then find pin's absolute position (head) to find absolute difference in pixels


//Paris, Bartoli's in security room
// 376, 708 vs 376, 729 (fully zoomed in), 21 vPixels 
// space between elements remains constant after zooming in/out (of map OR whole window), resizing window, different browsers, even different resolutions

//TO FIND ZOOM: Just use leaflet-proxy style attribute

// After
// switch to correct floor
// autozoom out as far as needed to show guess and actual location
// then draw line between two (resizes with zoom?)

// Show next button


//NOTE: area name elements only show up when on correct floor, need to calculate translation for each floor?
//TODO: google analytics