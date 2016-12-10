const assert = require("assert");
const crypto = require("crypto");

const { ciphers, helpers } = crypto;

describe("Ceasar", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.ceasar.encode(10, "hello world!");
      assert(encoded, "rovvy gybvn!");
    });
  });
  describe("#decode()", () => {
    const decoded = ciphers.ceasar.decode(10, "rovvy gybvn!");
    assert(decoded, "hello world!");
  });
});


describe("Vigenere", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.vigenere.encode("abc", "hello world!");
      assert(encoded, "hfnlp yosnd!");
    });
  });
  describe("#decode()", () => {
    const decoded = ciphers.vigenere.decode("abc", "hfnlp yosnd!");
    assert(decoded, "hello world!");
  });
});


describe("Vernam", () => {
  describe("#encode()", () => {
    it("should return encoded text for given key, encoded text should always stay the same.", () => {
      const encoded = ciphers.vigenere.encode("abc123", "8;>9#<*=j92c");
      assert(encoded, "rovvy gybvn!");
    });
  });
  describe("#decode()", () => {
    const decoded = ciphers.vigenere.decode("abc123", "8;>9#<*=j92c");
    assert(decoded, "hello world!");
  });
});
