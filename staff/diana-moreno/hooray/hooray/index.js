/**
 * Emulates an array following "EXACTLY" (the most accurate possible :) Array.prototype method's.
 *
 * @param args {*} The initial length of the Hooray (on single numeric argument), or the initial values (on multiple arguments).
 */
function Hooray() {
  for (var i = 0; i < arguments.length; i++)
    this[i] = arguments[i];

  this.length = arguments.length;
};
