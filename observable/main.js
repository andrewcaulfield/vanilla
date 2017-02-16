(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Observables can be used to model events, asynchronous requests, and animations. Observables can also be transformed, combined, and consumed using the Array methods
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

},{}]},{},[1]);
