// refactor to module pattern

var Header = (function () { // iife pattern immediately invoked function expression,
// it declares and calls it at the same time instead of declare and then assign

    function headerLinkClicks(evt) {
        // managing this event so that we handle it and it doesn't bubble anywhere
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        var url = $(evt.target).attr("href");

        // ajax call
        $.ajax(url, {dataType: "text"})
            .then(function (contents) {
                $modal.html(contents).show();
            });

    }

    function init() {
        $modal = $("[rel='js-modal']"); // $ prefixed to make clear is dealing jquery

        $("[rel='js-controls']").on("click", "[rel*='js-']", headerLinkClicks);
    }

    var $modal;

    return {
        init: init
    };

})();
