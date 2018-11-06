"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, [{
    key: "clear",
    value: function clear() {
      var _this = this;

      Object.keys(this).forEach(function (key) {
        delete _this[key];
      });
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      this[key] = value;
    }
  }, {
    key: "getItem",
    value: function getItem(key) {
      return this[key];
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      delete this[key];
    }
  }, {
    key: "length",
    get: function get() {
      return Object.keys(this).length;
    }
  }]);

  return LocalStorage;
}();
