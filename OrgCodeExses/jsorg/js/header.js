// put event handlers for header links here
$(document).ready(function () {  // dom is parsed and ready

    var $modal = $("[rel='js-modal']"); // prefixed to make clear is dealing jquery

 $("[rel='js-controls']").on("click", "[rel*='js-']", function (evt) {
     // managing this event so that we handle it and it doesn't bubble anywhere
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    var url = $(evt.target).attr("href");

    // ajax call
     $.ajax(url, { dataType: "text"})
         .then(function (contents) {
             $modal.html(contents).show();
         });

 });


});
