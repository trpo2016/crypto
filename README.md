#Crypto

Crypto - CLI утилита для шифрования данных. Поддерживается работа с 3 шифрами:

- **Цезаря**
- **Вернама**
- **Виженера**

##Пример

```js
 node index.js --input "Hello, World" --cipher "vigenere"  --key "abc" --encrypt

```

## Установка

1. Клонировать репозиторий
2. Выполнить команду `yarn install`

## Тесты

Для выполнения тестирования выполнить команду:

`yarn run test`

## Требования

1. Node.js 7.1.0
2. yarn (package manager) 0.17.10