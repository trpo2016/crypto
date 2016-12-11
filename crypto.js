// const treshold = 150;

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
  vernam: {
    encode: function (key, text){
      let result = "";

      if (key.length != text.length)
        key = this.generateRandomKey(text);
      else if (key.length == text.length)
        key = this.prepairKey(key);

      text = text.split("");
      result = text.map((curr, index, arr) => {
        return (curr.charCodeAt(0) ^ key[index]);
      });

      return helpers.prettyPrint(result);
    },

    decode: function (key, text){
      let result = "";
      key = this.prepairKey(key);

      text = text.split("");
      result =  text.map((curr, index, arr) => {
        return (curr.charCodeAt(0) ^ key[index]);
      });

      return helpers.prettyPrint(result);
    },

    generateRandomKey: function (text){
      console.log(`Generating random key...`);
      text = text.split("");
      return text.map((curr, index, arr) => {
        return (Math.round(Math.random() * 10) -1); // from 0 to 9
      });
    },

    prepairKey: function (key){
      return key.split("")
                .map((curr, index) => { return curr.charCodeAt(0) % 10; });
    }
  },

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
      key = (26 - key) % 26;
      return this.encode(key, text);
    }
  },

  vigenere: {
    encode: function (key, text){
      key = helpers.filterKey(key);
      let result = "";
      let j = 0;

      text.split("").forEach((curr, index) => {
        let c = curr.charCodeAt(0);
        if (helpers.isUpper(c)) {
          result += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65); // Upper
          j++;
        }
        else if (helpers.isLower(c)) {
          result += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97); // Lower
          j++;
        }
        else result += curr // Copy
      });

      return result;
    },

    decode: function (key, text){
      key = helpers.filterKey(key);
      for (let i = 0; i < key.length; i++){
        key[i] = (26 - key[i]) % 26;
      }

      return this.encode(key, text);
    }
  }
};

module.exports = {
  ciphers,
  helpers
};
