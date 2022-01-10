
$(".counter").counterUp({
    delay: 10,
    time: 1000
});

$(".main-item").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

new VenoBox({
    selector: '.my-video-links',
});

var venobox = new VenoBox({
    selector: "",
    arrowsColor: '#B6B6B6',
    autoplay: false, 
    bgcolor: '#fff',
    border: '0',
    customClass: false,
    infinigall: false,
    maxWidth: "1200px",
    navigation: true,
    navKeyboard: true,
    navTouch: true,
    navSpeed: 300,
    numeration: false,
    closeBackground: '#161617',
    closeColor: "#d2d2d2",
    framewidth: '',
    frameheight: '',
    gallItems: false,
    htmlClose: '&times;',
    htmlNext: '<span>Next</span>',
    htmlPrev: '<span>Prev</span>',
    numerationBackground: '#161617',
    numerationColor: '#d2d2d2',
    numerationPosition: 'top', 
    overlayClose: true,
    overlayColor: 'rgba(23,23,23,0.85)',
    popup: "false",
    ratio: "16x9",
    share: false,
    shareStyle: 'bar',
    spinner: 'double-bounce', 
    spinColor: '#d2d2d2',
    titleattr: 'title',
    titlePosition: 'top',
    titleBackground: '#161617',
    titleColor: '#d2d2d2',
    toolsBackground: "#1C1C1C",
    toolsColor: '#d2d2d2',
});

