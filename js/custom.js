// MAP
function initMap() {
    // 36.601970318006735, -119.44093293537397 MAP CENTER
    const center = new google.maps.LatLng(36.601970318006735, -119.44093293537397);
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13.4,
        mapId: '3b04d26cd78510d1',
        center: center,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });
    marker = new google.maps.Marker({
        //   36.60482860941221, -119.4394791911965 MAP PIN LOCATION
        position: {
            lat: 36.60482860941221,
            lng: -119.4394791911965
        },
        title: "MapPin.svg",
        map,
        //   visibility:visible,
        icon: {
            url: "../images/MapPin.svg",
            scaledSize: new google.maps.Size(38, 31),
        },
        animation: google.maps.Animation.DROP,
    });
    const infowindow = new google.maps.InfoWindow({
        content: "<h6>California, USA</h6><p>9342 East Green Hill Rd.New Milford,Panorama Hotel</p>",
    });
    // ALWAYS SHOW POPUP
    infowindow.open(map, marker);
    // FOR CLICK TO SHOW POPUP
    // marker.addListener("click",() =>{
    //     infowindow.open(map,marker);
    // });
}
// MAP  
// OWL CAROUSEL
jQuery(document).ready(function ($) {
    $('.owl-carousel0').owlCarousel({
        loop: true,
        center: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            800: {
                items: 2.5
            }
        }
    })
    $('.owl-carousel2').owlCarousel({
        loop: true,
        center: false,
        margin: 15,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1.1,
            },
            576: {
                items: 1.5,
            },
            768: {
                items: 2.5,
                margin: 25,
            },
            991: {
                items: 3,
                loop: false,
                center: false,
                dots: false,
                margin: 25,
            }
        }
    })
    $('.owl-carousel3').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1.5,
            },
            800: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    })
});
$(function () {
    var owl = $('.owl-carousel1');
    owl.owlCarousel({
        autoplay: 2000,
        items: 1,
        margin: 30,
        nav: true,
        center: true,
        dots: false,
        loop: true,
        responsiveClass: true,
        responsive: {
            items: 1,
        },
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter //When the translation of the stage has finished.
    });
    function counter(event) {
        var element = event.target; // DOM element, in this example .owl-carousel
        var items = event.item.count; // Number of items
        var item = event.item.index + -3; // Position of the current item
        // it loop is true then reset counter from 1
        if (item > items) {
            item = item - items
        }
        $('#counter').html("" + item + "/" + items)
        $(".owl-next").html('<i class="rarrow"></i>');
        $(".owl-prev").html('<i class="larrow"></i>');
    }
});
// OWL CAROUSEL
// COUNTER
const counters = document.querySelectorAll('.count');
const speed = 200;
counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('id');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 0.1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});
// COUNTER
// TABS
const tabs = document.querySelectorAll('[data-role="tab"]'),
    tabContents = document.querySelectorAll(".tab-panel");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tc) => {
            tc.classList.remove("is-active");
        });
        target.classList.add("is-active");

        tabs.forEach((t) => {
            t.classList.remove("is-active");
        });
        tab.classList.add("is-active");
    });
});
// TABS