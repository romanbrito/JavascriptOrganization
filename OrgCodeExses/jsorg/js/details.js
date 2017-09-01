var Details = (function () {

    function loadPerson(ID) {

        $.ajax("details/" + ID + ".html", {dataType: "text"}).then(function (contents) {
            $content.html(contents);
        });
    }

    function init() {
        $content = $("[rel=js-details]");

        EVT.on("person-selected", loadPerson); // subscribing to the event
    }

    var $content;

    EVT.on("init", init);

    return {
        init: init,
        loadPerson: loadPerson
    };

})();
