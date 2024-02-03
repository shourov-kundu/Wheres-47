const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const mapButtons = document.getElementsByClassName('map-button');
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

for (let i = 0; i < mapButtons.length; i++) {
    mapButtons[i].addEventListener('click', function(){

        let x = document.getElementsByTagName('iframe');
        if (x.length > 0){
            if (x[0].id !== mapButtons[i].id){
                x[0].remove();
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
                document.getElementById("pin").style.visibility = 'hidden';
                var iframe = document.createElement('iframe');
                iframe.id = mapButtons[i].id;
                iframe.src = mapButtons[i].id + ".html"; 
                iframe.style.width = '50%'; 
                iframe.style.height = '100%';  
                iframe.setAttribute("scrolling", "no");
                document.getElementById('map-holder').insertBefore(iframe, document.getElementById('map-holder').firstChild);
                document.querySelector('iframe').addEventListener('load', mapSetUp);
            }
        }
    });
}

menu.addEventListener('click', mobileMenu);
const mapSetUp = () => {
    // Press button to hide all elements (can't just alter tags because they are reset)
    var itemButtons = document.querySelector('iframe').contentWindow.document.getElementsByClassName("hide-select-button");    
    function waitUp(){
        itemButtons = document.querySelector('iframe').contentWindow.document.getElementsByClassName("hide-select-button");
        if (itemButtons.length == 2){
            proceed();
        } else {
            setTimeout(waitUp, 1000);
        }
    }
    waitUp();
    function proceed(){
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

    }
}
window.addEventListener('resize', () =>{
    if (window.getComputedStyle(menuLinks).getPropertyValue('display') === 'flex'){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
});
document.querySelector('iframe').addEventListener('load', mapSetUp);
document.getElementById('guess-button').addEventListener('click', ()=>{
    var elements = document.querySelector('iframe').contentWindow.document.getElementsByClassName('area-icon');
    for (let i = 0; i < elements.length; i++) {
        var VipX;
        var VipY;
        var TerraceX;
        var TerraceY;
        var terrace;
        if (elements[i].textContent.includes("VIP")){
            VipX = elements[i].getBoundingClientRect().x;
            VipY = elements[i].getBoundingClientRect().y;
            //Fully zoomed, paris1 pic is -140,-150 vpixels from VIP Parking icon
        }
        if (elements[i].textContent.includes("Kitchen")){
            terrace = elements[i];
            TerraceX = elements[i].getBoundingClientRect().x;
            TerraceY = elements[i].getBoundingClientRect().y;
        }
        // We can now calculate how far they are in real pixels. Also use the tag to find their distance in vPixels
        // Then, use some sort of lookup table to find the level of zoom.
        // Once we know the zoom, calculate how many pixels away they were 
    }
    var agentImage = document.querySelector('iframe').contentWindow.document.querySelector('.leaflet-marker-pane').getElementsByTagName('img')[0];
    agentImage.textContent = "FOUNDME";
    agentImage.style.display = "block";
    agentImage.src = "/agent_pics/Tuxedo2021.webp"; 
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            agentImage.style.display = 'block';
        });    
    });
    observer.observe(agentImage, { 
        attributes: true, 
        attributeFilter: ['style'] 
    });
    var currentFloor = document.querySelector('iframe').contentWindow.document.querySelector('.floor-info.selected');
    var floorList = document.querySelector('iframe').contentWindow.document.getElementsByClassName('floor-info');
    for (let i = 0; i < floorList.length; i++) {
        floorList[i].addEventListener('click', () => {
            currentFloor = document.querySelector('iframe').contentWindow.document.querySelector('.floor-info.selected');
            if (currentFloor.querySelector('span').textContent.includes("1")){
                agentImage.style.opacity = 1;
            }else{
                agentImage.style.opacity = .5;
            }

        });
    }
    document.querySelector('iframe').contentWindow.document.querySelector('.leaflet-marker-pane').insertBefore(agentImage, terrace);
});

function distance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Use MATH to find player coordinates (extrapolate from icons)
// Find absolute positions of two icons
//Then find pin's absolute position (head) to find absolute difference in pixels


//Paris, Bartoli's in security room
// 376, 708 vs 376, 729 (fully zoomed in), 21 vPixels 
// space between elements remains constant after zooming in/out (of map OR whole window), resizing window, different browsers, even different resolutions
// So, we can use distance between elements to find level of zoom. 
// Once we know level of zoom, we can use calculate how far the distance in pixels actually represents, tell them in feet or meters or something

// After
// switch to correct floor
// autozoom out as far as needed to show guess and actual location
// then draw line between two (resizes with zoom?)

// Show next button


//NOTE: area name elements only show up when on correct floor, need to calculate translation for each floor?