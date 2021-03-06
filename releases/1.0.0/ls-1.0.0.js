/*
 * typed-dom-storage v1.0.0
 * https://github.com/mohamedabbasos/typed-dom-storage
 *
 * Author: Mohamed Abbas
 * GitHub: https://github.com/mohamedabbasos
 *
 * Copyright 2016, 2017 Mohamed Abbas
 *
 * Date: 2017-06-26
 */
/*global window*/
function Store(storeType) {
    "use strict";
    var _this = this;
    _this.storeType = storeType;
    _this.l = _this.storeType.length;
    _this.isSet = function (key) {
        return _this.storeType.getItem(key) !== null;
    };
    _this.set = function (key, val) {
        var obj = {
            type: val instanceof Date
                ? "date"
                : typeof val,
            value: val
        };
        _this.storeType.setItem(key, JSON.stringify(obj));
        _this.updateLength();
    };
    _this.updateLength = function () {
        _this.l = _this.storeType.length;
    };
    _this.get = function (key) {
        if (!_this.isSet(key)) {
            return undefined;
        }
        var obj = JSON.parse(_this.storeType.getItem(key));
        if (obj.type === "date") {
            return new Date(obj.value);
        }
        return obj.value;
    };
    _this.remove = function (key) {
        var keys = (key instanceof Array)
            ? key
            : [key];
        keys.map(function (key) {
            _this.storeType.removeItem(key);
        });
        _this.updateLength();
    };
    _this.rm = _this.remove;

    _this.clear = function () {
        _this.storeType.clear();
        _this.updateLength();
    };
    _this.c = _this.clear;
    _this.keys = function () {
        return Object.keys(_this.storeType);
    };

    _this.values = function () {
        return _this.keys().map(function (key) {
            return _this.get(key);
        });
    };
    _this.getType = function (key) {
        if (!_this.isSet(key)) {
            return undefined;
        } else {
            return typeof _this.get(key);
        }
    };
    _this.pushTo = function (key, item) {
        if (!_this.isSet(key) || !(_this.get(key) instanceof Array)) {
            return;
        }
        var arr = _this.get(key);
        arr.push(item);
        _this.set(key, arr);
        return arr;
    };
}

window.ls = new Store(window.localStorage);
window.ss = new Store(window.sessionStorage);

/**
 * TODO
 * - setFor
 * - Testing
 */