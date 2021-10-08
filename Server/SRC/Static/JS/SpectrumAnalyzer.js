callUpdate = function () {
    $.getJSON(`/parametrers/10/11/100/30`, update);

}
callUpdate()

setInterval(function () {
    callUpdate()

}, 20000)