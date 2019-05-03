"use strict";

const _ = function (selector) {
  return document.querySelector(selector);
};
const __ = function (selector) {
  return document.querySelectorAll(selector);
};

// waiting for document to be ready
function ready(callback) {
  // in case the document is already rendered
  if (document.readyState !== 'loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') callback();
    });
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
