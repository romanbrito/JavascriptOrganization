$(document).ready(function () {

    var $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
    var $content = $("[rel=js-details]");

    // on click of a carousel item, do an Ajax request for
    // the "details/2.html" (or whatever) file for the person
    // clicked, and load those contents into the `$content` div.

    // hint: you will probably want to use "event propagation"
    // (aka "event delegation"), by attaching a single event
    // handler the `$content` element rather than individual
    // event handlers to each item in the carousel.

    function loadPerson (evt) {
        var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1"); //regular expression
        //debugger;
        $.ajax("details/" + ID + ".html", {dataType: "text"}).then(function (contents) {
            $content.html(contents);
        });


    }

    $items.on("click", "[rel*='js-item-']", loadPerson);


});
