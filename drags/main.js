(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Observable = Rx.Observable;

var parent = document.getElementById('parent');
var widget = document.getElementById('widget');

var mouseDowns = Observable.fromEvent(widget, 'mousedown');
var parentMouseMoves = Observable.fromEvent(parent, 'mousemove');
var parentMouseUps = Observable.fromEvent(parent, 'mouseup');

var drags =
    mouseDowns.map(function(e) {
        return parentMouseMoves.
            takeUntil(parentMouseUps);
    }).concatAll();

    drags.forEach( function(e) {
        widget.style.left = e.clientX + "px";
        widget.style.top = e.clientY + "px";
    });
},{}]},{},[1]);
