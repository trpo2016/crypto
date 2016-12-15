const assert = require("assert");
const crypto = require("./crypto.js");

const { ciphers, helpers } = crypto;
const text = "hello world!";

describe("Ceasar", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.ceasar.encode(10, text);
      assert.equal(encoded, "rovvy gybvn!");
      assert.equal(typeof encoded, 'string');
    });
  });
  describe("#decode()", () => {
    it("should return decoded text for given key, decoded text should always stay the same.", () => {
      const decoded = ciphers.ceasar.decode(10, "rovvy gybvn!");
      assert.equal(decoded, text);
      assert.equal(typeof decoded, 'string');
    });
  });
});

describe("Vigenere", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.vigenere.encode("abc", text);
      assert.equal(encoded, "hfnlp yosnd!");
      assert.equal(typeof encoded, 'string');
    });
  });
  describe("#decode()", () => {
    it("should return decoded text for given key, decoded text should always stay the same.", () => {
      const decoded = ciphers.vigenere.decode("abc", "hfnlp yosnd!");
      assert.equal(decoded, text);
      assert.equal(typeof decoded, 'string');
    });
  });
});

describe("Vernam", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.vernam.encode("abcdefghijkl", text);
      assert.equal(encoded, "omeln\"tkwjc)");
      assert.equal(typeof encoded, 'string');
    });
  });
  describe("#decode()", () => {
    it("should return decoded text for given key, decoded text should always stay the same.", () => {
      const decoded = ciphers.vernam.decode("abcdefghijkl", "omeln\"tkwjc)");
      assert.equal(decoded, text);
      assert.equal(typeof decoded, 'string');
    });
  });
});
