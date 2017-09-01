var Details = (function () {

    function loadPerson(ID) {

        $.ajax("details/" + ID + ".html", {dataType: "text"}).then(function (contents) {
            $content.html(contents);
        });
    }

    function selectPerson(evt) {
        evt.preventDefault();
        var ID = $(evt.target).attr("data-person");

        loadPerson(ID);

    }

    function init() {
        $content = $("[rel=js-details]");

        $content.on("click","[rel=js-select-person]", selectPerson);

        EVT.on("person-selected", loadPerson); // subscribing to the event
    }

    var $content;

    EVT.on("init", init);

    return {
        init: init,
        loadPerson: loadPerson
    };

})();
