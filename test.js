const assert = require("assert");
const crypto = require("./crypto.js");

const { ciphers, helpers } = crypto;
const text = "hello world!";

describe("Ceasar", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.ceasar.encode(10, text);
      assert.equal(encoded, "rovvy gybvn!");
    });
  });
  describe("#decode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const decoded = ciphers.ceasar.decode(10, "rovvy gybvn!");
      assert.equal(decoded, text);
    });
  });
});

describe("Vigenere", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.vigenere.encode("abc", text);
      assert.equal(encoded, "hfnlp yosnd!");
    });
  });
  describe("#decode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const decoded = ciphers.vigenere.decode("abc", "hfnlp yosnd!");
      assert.equal(decoded, text);
    });
  });
});

describe("Vernam", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.vernam.encode("abcdefghijkl", text);
      assert.equal(encoded, "omeln\"tkwjc)");
    });
  });
  describe("#decode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const decoded = ciphers.vernam.decode("abcdefghijkl", "omeln\"tkwjc)");
      assert.equal(decoded, text);
    });
  });
});
