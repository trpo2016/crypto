const crypto = require('./crypto.js');
const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage')
const optionsDef = require('./options.js');

const { ciphers, helpers } = crypto;
const sections = [
  {
    header: 'Crypto CLI',
    content: 'Encrypts input text/file using some basic ciphers. Application only supports 3 ciphers – Ceasar, Vernam and Vigenere'
  },
  {
    header: 'Synopsis',
    content: [
      '$ example [[bold]{--input} [underline]{text}] [bold]{--encrypt} [underline]{ceasar} ...',
      '$ example [[bold]{--input} [underline]{text}] [bold]{--decrypt} [bold]{--key} path',
      '$ example [bold]{--help}'
    ]
  },
  {
    header: 'Options',
    optionList: optionsDef
  },
  {
    content: "Project home: [underline]{https://github.com/app}"
  }
];

const usage = getUsage(sections)
const options = commandLineArgs(optionsDef);

let c = options.cipher;
let text = options.input;
let key = options.key;

const handleCipher = (type, key, text) => {
  let result;

  if (options.encrypt){
    result = ciphers[type].encode(key, text);
  } else {
    result = ciphers[type].decode(key, text)
  }

  return result
}

let result;

switch (c){
  case 'ceasar': {
    key = parseInt(key);
    result = handleCipher('ceasar', key, text);
    console.log(result);

    break;
  };
  case 'vernam': {
    if (!key) key = ciphers.vernam.generateRandomKey(text);
    result = handleCipher('vernam', key, text);
    console.log(result);

    break;
  };
  case 'vigenere': {
    result = handleCipher('vigenere', key, text);
    console.log(result);

    break;
  };
  default: {
    console.log(usage);
  }
};

// const key = ciphers.vernam.generateRandomKey(text);
// console.log(`Key = ${key}`);
// const result = ciphers.vernam.encode(key, text);
// console.log(`Encoded = ${helpers.prettyPrint(result)}`);
// const decrypted = ciphers.vernam.decode(key, result);
// console.log(`Decrypted = ${helpers.prettyPrint(decrypted)}`);
