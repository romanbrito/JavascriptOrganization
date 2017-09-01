var Details = (function () {

    function loadPerson(evt) {
        var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1"); //regular expression
        //debugger;
        $.ajax("details/" + ID + ".html", {dataType: "text"}).then(function (contents) {
            $content.html(contents);
        });
    }

    function init() {
        $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
        $content = $("[rel=js-details]");
        $items.on("click", "[rel*='js-item-']", loadPerson);
    }

    var $items;
    var $content;

    return {
        init: init
    };

})();


$(document).ready(Details.init);
