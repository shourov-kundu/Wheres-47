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
                document.getElementById("pin").style.visibility = 'hidden';
                var iframe = document.createElement('iframe');
                iframe.id = mapButtons[i].id;
                iframe.src = mapButtons[i].id + ".html"; 
                iframe.style.width = '50%'; 
                iframe.style.height = '100%';  
                iframe.setAttribute("scrolling", "no");
                // document.body.appendChild(iframe, document.getElementById('home'));
                document.getElementById('map-holder').insertBefore(iframe, document.getElementById('map-holder').firstChild);
                document.querySelector('iframe').addEventListener('load', mapSetUp);
            }
        }
    });
}

menu.addEventListener('click', mobileMenu);
const mapSetUp = () => {
    var icons = document.querySelector('iframe').contentWindow.document.getElementsByClassName("leaflet-interactive");
    var checkExist = setInterval(function() {
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
     }, 25);
}
document.querySelector('iframe').addEventListener('load', mapSetUp);
document.getElementById('guess-button').addEventListener('click', ()=>{
    var imgElement = document.querySelector('iframe').contentWindow.document.querySelector('[style*="translate3d(158px, 255px, 0px)"]');
    console.log(imgElement);
    imgElement.style.display = 'block';
});

//Use MATH to find player coordinates (extrapolate from icons)