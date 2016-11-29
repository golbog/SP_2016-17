/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topnavResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

/**
 * Toggle between showing and hiding text by clicking on a button
 */
function growDiv(txtId, btnId) {
    var growDiv = document.getElementById(txtId);
    if (growDiv.clientHeight) {
        growDiv.style.height = 0;
    } else {
        growDiv.style.height = growDiv.scrollHeight + "px";
    }
    document.getElementById(btnId).value = document.getElementById(btnId).value == 'Read more' ? 'Read less' : 'Read more';
}

/**
 * Initialize google map div
 */
function initMap() {
    var uluru = {
        lat: 46.0515208,
        lng: 14.5038743
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
