"use strict";

const _ = function (selector) {
  return document.querySelector(selector);
};
const __ = function (selector) {
  return document.querySelectorAll(selector);
};

// waiting for document to be ready
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// adds a class
function addClass(el, className) {
  if (!el) return;
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

// removes a class
function removeClass(el, className) {
  if (!el) return;
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

// set the hash
function pushHash(hashName) {
  if (history.pushState) {
    history.pushState(null, null, '#' + hashName);
  } else {
    location.hash = '#' + hashName;
  }
}
