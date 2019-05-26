import encUtf8 from 'crypto-js/enc-utf8';
import aes from 'crypto-js/aes';

const { STORE_KEY } = process.env;


export const encryptData = (data) => {
  let encryptedString = aes.encrypt(JSON.stringify(data), STORE_KEY);
  encryptedString = encryptedString.toString();
  return encryptedString;
};

export const decryptData = (encryptedString) => {
  try {
    const decryptedString = aes.decrypt(encryptedString.toString(), STORE_KEY);
    const decryptedObject = JSON.parse(decryptedString.toString(encUtf8));
    return decryptedObject;
  } catch (error) {
    throw Error(error);
  }
};
