const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const mapButtons = document.getElementsByClassName('navbar__links');
embed = document.getElementById('map');
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    var sideBar = embed.getElementsByClassName('item-count');

    console.log(document.getElementById('map').contentWindow.document.getElementsByClassName("navbar-dark"));
};

const loadMap = () => {
    
}
for (let i = 0; i < mapButtons.length; i++) {
    mapButtons[i].addEventListener('click', loadMap);
}

menu.addEventListener('click', mobileMenu);

document.getElementById('map').addEventListener('load', function(event){
    var icons = document.getElementById('map').contentWindow.document.getElementsByClassName("leaflet-interactive");
    var checkExist = setInterval(function() {
        if (icons.length > 100) {
            clearInterval(checkExist);

            // Press button to hide all elements (can't just alter tags because they are reset)
            document.getElementById('map').contentWindow.document.getElementsByClassName("hide-select-button")[0].click();

            // Open navigation menu and then select area button to show location names
            document.getElementById('map').contentWindow.document.getElementsByClassName('card-header')[4].firstChild.click();
            document.getElementById('map').contentWindow.document.querySelectorAll('img[alt="Area Icon"]')[0].click();

            // Hide sidebar (all done with it by now)
            document.getElementById('map').contentWindow.document.getElementsByClassName("navbar-dark")[0].style.visibility = 'hidden';

            // Remove counts of items on each level
            var counts = document.getElementById('map').contentWindow.document.getElementsByClassName('item-count');
            while (counts.length) {
                counts[0].remove();
            }
            
            // Make names unclickable (just for show)
            var areas = document.getElementById('map').contentWindow.document.getElementsByClassName('area-icon');
            for (let i = 0; i < areas.length; i++) {
                areas[i].classList.remove('leaflet-interactive');
              }
        }
     }, 25);
});