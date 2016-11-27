/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Simulate message of a server every few seconds.
 */
function simulateWsServerResponse() {
    var res = new Object();
    res.total = parseInt(document.getElementById("totalTickets").innerHTML) + getRandomInt(1, 4);
    res.closed = parseInt(document.getElementById("todayClosed").innerHTML) + getRandomInt(1, 3);
    res.opened = parseInt(document.getElementById("todayOpened").innerHTML) + getRandomInt(1, 4);
    updateWidget(JSON.stringify(res));
}

/**
 * Updates widget according to the given message.
 */
function updateWidget(res) {
    var res = JSON.parse(res);
    document.getElementById("totalTickets").innerHTML = res.total;
    document.getElementById("todayClosed").innerHTML = res.closed;
    document.getElementById("todayOpened").innerHTML = res.opened;
    var total = 100 * res.closed / res.opened;
    document.getElementById("chartClosed").style.height = total + "%";
    document.getElementById("chartOpened").style.height = (100 - total) + "%";
}

/**
 * Simulate websocket server which sends message every 5 seconds.
 */
document.addEventListener("DOMContentLoaded", function() {
    setInterval('simulateWsServerResponse()', 5000);
});