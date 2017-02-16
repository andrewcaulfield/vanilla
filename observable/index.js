/*
Observables can be used to model events, asynchronous requests, and animations. Observables can also be transformed, combined, and consumed using the Array methods

We must forEach over the Observable for it to work.
*/
var Observable = Rx.Observable;

var button = document.getElementById('button');

var clicks = Observable.fromEvent(button, 'click');

var points =
    clicks.map(function(e) {
        return {x: e.clientX, y: e.clientY };
    });

var subscription =
    points.forEach(function onNext(point) {
        alert('clicked: ' + JSON.stringify(point));
        subscription.dispose();
    },
    function onError(e) {
        console.log(e);
    },
    function onCompleted() {
        console.log('Done');
    });
