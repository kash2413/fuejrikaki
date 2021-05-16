var videoPlayBtn = window.document.querySelectorAll('.playBtn'),
    videoHideBtn = window.document.querySelectorAll('.lightboxClose'),
    featSlider = window.document.querySelectorAll('.awItemSliderFeatured');
if (videoPlayBtn) {
    for (var i = 0; i < videoPlayBtn.length; i++) {
        videoPlayBtn[i].addEventListener('click', playVideo);
    }
}

if (videoHideBtn) {
    for (var i = 0; i < videoHideBtn.length; i++) {
        videoHideBtn[i].addEventListener('click', hideVideo);
    }
}

if (featSlider && featSlider.length > 0) {
    var classRemove = new Array("slider-arrows1", "slider-arrows1-pos-top-right", "slider-pagination1"),
        classAdd = new Array("slider-arrows2");
    modSliderClass(classRemove, classAdd);
}

function modSliderClass(classRemove, classAdd) {
    for (var i = 0; i < featSlider.length; i++) {
        if (featSlider[i].hasChildNodes) {
            if (featSlider[i].children && featSlider[i].children[0]) {
                classRemove.forEach(function (element) {
                    featSlider[i].children[0].classList.remove(element);
                });
                classAdd.forEach(function (element) {
                    featSlider[i].children[0].classList.add(element);
                });
            }
        }
    }
}

function playVideo() {
    var element = this,
        iframe = document.createElement("iframe"),
        awParentElement = element.parentElement,
        lightBox = awParentElement.getElementsByClassName('lightbox')[0],
        youtubeLink = lightBox.dataset.videourl,
        ytId = '',
        videoWrapper = awParentElement.getElementsByClassName('video-container')[0];

    ytId = youtubeLink.replace(/^(https?:\/\/(www\.)?youtu\.be\/|.*[&?]v=)([^&?\/]+).*$/, '$3');
    if (ytId && ytId !== youtubeLink) {
        iframe.setAttribute("src", 'https://www.youtube.com/embed/' + ytId + '?rel=0&autoplay=1');
        iframe.setAttribute("frameborder", '0');
        iframe.setAttribute("allow", 'autoplay; encrypted-media');
        iframe.setAttribute("allowfullscreen", '');
        iframe.setAttribute("autoplay", '1');
        iframe.setAttribute("class", 'youtubeIframe');
        videoWrapper.appendChild(iframe);
        element.style.display = 'none';
        lightBox.style.display = 'flex';
    } else {
        console.error('something wents wrong with youtube url');
    }
    return null;
}

function hideVideo() {
    var element = this,
        lightbox = element.parentElement.parentElement.parentElement;
    iframe = lightbox.getElementsByClassName('youtubeIframe')[0];
    lightbox.style.display = 'none';
    iframe.parentNode.removeChild(iframe);
    lightbox.parentElement.getElementsByClassName('playBtn')[0].style.display = 'block';
    return null;
}

var wantMenuOpen = 'none';

new MutationObserver(function (arg) {
    if (window.innerWidth < 768) {
        var t = arg[0].target;
        var p = t.parentNode;
        var n = p.querySelector('#header-nav');
        var s = p.querySelector('#header-search');
        p.insertBefore(s, n);
        if (t.classList.contains('skip-active')) {
            s.style.display = 'block';
            wantMenuOpen = 'block';
        } else {
            s.style.display = 'none';
            wantMenuOpen = 'none';
        }
    }
}).observe(document.querySelector('.header-m-container [data-skiptarget="#header-nav"]'), {attributes: true});

window.addEventListener('resize', function () {
    var s = document.querySelectorAll("#header-search");
    for (var i = 0; i < s.length; ++i) {
        s[i].style.display = window.innerWidth > 767 ? "block" : wantMenuOpen;
    }
});

setTimeout(function () {
    var logoDesktop = document.querySelector("div#top.header-container2 div.hp-blocks-holder div.hp-block.right-column.grid12-5 .logo-wrapper");
    var logoMobile = document.querySelector(".logo-wrapper--mobile");
    document.querySelector("div#top.header-container2 div.hp-blocks-holder div.hp-block.right-column.grid12-5 div.item").style.position = 'relative';
    var s = document.getElementById("lang-switcher-wrapper-mobile");
    s.style.position = 'absolute';
    var visible = 0;
    setInterval(function () {
        if (logoDesktop.offsetParent) {
            if (visible == 1) {
                return;
            }
            visible = 1;
            s.style.right = '-10px';
            s.style.marginTop = '-5px';
            logoDesktop.appendChild(s);
        } else if (logoMobile.offsetParent) {
            if (visible == 2) {
                return;
            }
            visible = 2;
            s.style.right = '-5px';
            s.style.marginTop = '-10px';
            logoMobile.appendChild(s);
        }
    }, 200);
}, 100);

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        function removeNodes() {
            let searchNode = document.querySelector('#header-container #header-search');
            searchNode.remove();
        }

        removeNodes();

        function changeLinks() {
            let topHundred = document.querySelector('.top100navi');
            topHundred.href = "https://www.severin.de";

            let mainMenu = document.querySelectorAll('#mainmenu .nav-item a');
            for (let i = 0; i < mainMenu.length; i++) {

                if ( mainMenu[i].href.includes('/kaffee-tee') ) { mainMenu[i].href = 'https://www.severin.de/kaffee-fruhstuck'; }
                if ( mainMenu[i].href.includes('/kuche') ) { mainMenu[i].href = 'https://www.severin.de/kuche'; }
                if ( mainMenu[i].href.includes('/grillen') ) { mainMenu[i].href = 'https://www.severin.de/ebbq-funfood'; }
                if ( mainMenu[i].href.includes('/mikrowellen') ) { mainMenu[i].href = 'https://www.severin.de/mikrowellen'; }
                if ( mainMenu[i].href.includes('/kuhlen') ) { mainMenu[i].href = 'https://www.severin.de/kuhlen'; }
                if ( mainMenu[i].href.includes('/haushalt') ) { mainMenu[i].href = 'https://www.severin.de/floorcare'; }

            }
        }

        changeLinks();

    });

    window.addEventListener('load', function () {
        function changeLinksAtEnd() {
            let homeSlider = document.querySelectorAll('.container--homepage .owl-wrapper .product-item-info a');
            if (homeSlider) {
                for (let i = 0; i < homeSlider.length; i++) {
                    homeSlider[i].href = "https://www.severin.de";
                }
            }
        }
        changeLinksAtEnd();
    })


})();
