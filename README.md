# Description

A lightweight JavaScript library that's make dealing with `localStorage` and `sessionStorage` so easy.

**By:**
   * Storing data with types so you don't need to convert objects or any other data type before and after using `Storage`.
   * Making a shortcuts for `Storage` functions names.
   * Adding new functions.
---

# Usage

just include `ls.min.js` file in your page.

`<script src="path/to/ls.min.js"></script>`

# Available functions

**Note:**
    - that all functions below are aviable for `localStorage` and `sessionStroage`.
    - `ls` is a shortcut for `localStorage` and `ss` is short cut for `sessionStorage`.

* `ls.l` => equals to `localStorage.length`.

* `ls.set(key, val)` => equals to `localStorage.setItem(key, val)`
* `ls.get(key)` => equals to `localStorage.setItem(key)` but convert the returned value to by with it's original type.
* `ls.remove(key)` => equals to `localStorage.removeItem(key)` 
* `ls.rm(key)` => equals to `localStorage.removeItem(key)` 
* `ls.clear()` => equals to `localStorage.clear()` 
* `ls.c()` => equals to `localStorage.clear()` 
* `ls.keys()` => returns all stored keys
* `ls.values()` => returns all stored values
* `ls.getType(key)` => returns the type of that `key`
* `ls.pushTo(key, item)` => if the stored value with key `key` is an array then push the new `item` to it






