_ = function(selector) {
  return document.querySelector(selector);
}
__ = function(selector) {
  return document.querySelectorAll(selector);
}

// waiting for document to be ready
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
