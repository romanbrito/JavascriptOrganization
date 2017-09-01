var EVT = new EventEmitter2(); // now can be used in multiple places,
                                    // doesn't need to be inside document.ready

$(document).ready(function () {

    EVT.emit("init");

});
