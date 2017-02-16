/*
Observables can be used to model events, asynchronous requests, and animations. Observables can also be transformed, combined, and consumed using the Array methods
*/

var Rx = require('rxjs');

var Observable = Rx.Observable;

var button = document.getElementById('button');

var clicks = Observable.fromEvent(button, 'click');

var subscription =
    clicks.forEach(function onNext(e) {
        alert('clicked');
    });
