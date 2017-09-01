$(document).ready(function () {

    window.EVT = new EventEmitter2(); // now can be used in multiple places

    Header.init();
    Carousel.init();
    Details.init();
});
