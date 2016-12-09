const treshold = 50;

const helpers = {
  prettyPrint: function (badString){
    return badString.map(curr => String.fromCharCode(curr)).join("");
  },

  isUpper: function (c) {
  	return c >= 65 && c <= 90;  // 65 is the character code for 'A'. 90 is for 'Z'.
  },

  isLower: function (c) {
  	return c >= 97 && c <= 122;  // 97 is the character code for 'a'. 122 is for 'z'.
  },

  isLetter: function (c) {
    return this.isUpper(c) || this.isLower(c);
  },

  filterKey: function (key) {
    if (typeof key === 'string'){
      var result = [];
      for (var i = 0; i < key.length; i++) {
        var c = key.charCodeAt(i);
        if (this.isLetter(c))
          result.push((c - 65) % 32);
      }
      return result;
    }
    else return key;
  }
};

const ciphers = {
  ceasar: {
    encode: function (key, text){
      let result = "";
      text.split("").forEach((curr, index) => {
        let c = curr.charCodeAt(0);
        if (helpers.isUpper(c)) result += String.fromCharCode((c - 65 + key) % 26 + 65) // Upper
        else if (helpers.isLower(c)) result += String.fromCharCode((c - 97 + key) % 26 + 97) // Lower
        else result += curr // Copy
      });

      return result;
    },

    decode: function (key, text){
      return this.encode((-1)*key, text);
    }
  }
};

module.exports = {
  ciphers,
  helpers
};
