var Carousel = (function () {

    function scrollLeft(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position > 0) {
            position = Math.max(0, position - 250);
        }

        $items.css({left: (-position) + "px"});
    }

    function scrollRight(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position < maxPosition) {
            position = Math.min(maxPosition, position + 250);
        }

        $items.css({left: (-position) + "px"});
    }

    function clickPerson(evt) {
        var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1"); //regular expression

        EVT.emit("person-selected", ID); // emitting event don't care who gets it

    }

    function init() {
        $content = $("[rel=js-carousel] > [rel=js-content]");
        $items = $content.children("[rel=js-items]");
        $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
        $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");


        contentWidth = $content.width();
        itemsWidth = $items.width();
        position = 0;
        maxPosition = (itemsWidth - contentWidth);


        $left.on("click", scrollLeft);
        $right.on("click", scrollRight);

        $items.on("click", "[rel*='js-item-']", clickPerson);
    }

    EVT.on("init", init);

    var $content, $left, $right, $items, contentWidth, itemsWidth, position, maxPosition;

    return {
        init: init
    };


})();
