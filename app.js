const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const mapButtons = document.getElementsByClassName('map-button');
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    console.log(document.getElementById('map').contentWindow.document.getElementsByClassName("navbar-dark"));
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
    var checkExist = setInterval(function() {
        var icons = document.querySelector('iframe').contentWindow.document.getElementsByClassName("leaflet-interactive");
        if (icons.length > 100) {
            clearInterval(checkExist);

            document.getElementById("pin").style.visibility = 'visible';
            // Press button to hide all elements (can't just alter tags because they are reset)
            document.querySelector('iframe').contentWindow.document.getElementsByClassName("hide-select-button")[0].click();

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
        }
     }, 10);
}
document.querySelector('iframe').addEventListener('load', mapSetUp);
document.getElementById('guess-button').addEventListener('click', ()=>{
    var elements = document.querySelector('iframe').contentWindow.document.getElementsByClassName('area-icon');
    console.log(elements.length)
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.includes("The North")){
            console.log(elements[i].style.transform);
        }
      }
});

//Use MATH to find player coordinates (extrapolate from icons)
// Find absolute positions of two icons
//Then find pin's absolute position (head) to find absolute difference in pixels


//Paris, Bartoli's in security room
// 376, 708 vs 376, 729 (fully zoomed in), 21 pixels 
// space between elements remains constant after zooming in/out, resizing window, different browsers, even different resolutions
// So, we can use distance between elements to find level of zoom. 
// Once we know level of zoom, we can use calculate how far the distance in pixels actually represents, tell them in feet or meters or something

// After
// switch to correct floor
// autozoom out as far as needed to show guess and actual location
// then draw line between two (resizes with zoom?)

// Show next button


//Pictures: TO get mission-agnostic pictures use 