import CryptoJS from 'crypto-js';
import { ICard, IChoice } from '@/models';

/**
 * Get encryption key based on environment (server-side or client-side)
 * Server-side: Uses ENCRYPTION_KEY from process.env
 * Client-side: Uses NEXT_PUBLIC_ENCRYPTION_KEY from process.env
 */
const getEncryptionKey = (): string => {
  // Check if running on server-side
  console.log('getEncryptionKey: ', typeof window === 'undefined');
  if (typeof window === 'undefined') {
    return process.env.ENCRYPTION_KEY || 'your-encryption-key';
  }
  // Client-side: use NEXT_PUBLIC_ prefixed variable
  return process.env.NEXT_PUBLIC_ENCRYPTION_KEY || 'your-encryption-key';
};

export const cryptoUtils = {
  // Encrypt data
  encrypt: (data: string): string => {
    if (!data || typeof data !== 'string') {
      return data;
    }

    try {
      const ENCRYPTION_KEY = getEncryptionKey();
      return CryptoJS.AES.encrypt(data, ENCRYPTION_KEY).toString();
    } catch (error) {
      console.error('Encryption error:', error);
      return data; // Return original data if encryption fails
    }
  },

  // Decrypt data
  decrypt: (encryptedData: string): string => {
    if (!encryptedData || typeof encryptedData !== 'string') {
      return encryptedData;
    }

    try {
      const ENCRYPTION_KEY = getEncryptionKey();

      // Validate that CryptoJS is properly loaded
      if (!CryptoJS || !CryptoJS.AES || !CryptoJS.enc || !CryptoJS.enc.Utf8) {
        console.error('CryptoJS not properly loaded');
        return encryptedData;
      }

      console.log('ENCRYPTION_KEY: ', ENCRYPTION_KEY);
      console.log("encryptedData: ", encryptedData);

      const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);

      // Validate bytes object before calling toString
      if (!bytes) {
        console.warn('Decryption returned null/undefined bytes');
        return encryptedData;
      }

      const decrypted = bytes.toString(CryptoJS.enc.Utf8);

      console.log("decrypted: ", decrypted);

      // If decryption fails, return original data
      if (!decrypted) {
        console.warn('Decryption returned empty string, returning original data');
        return encryptedData;
      }

      return decrypted;
    } catch (error) {
      console.error('Decryption error:', error);
      return encryptedData; // Return original data if decryption fails
    }
  },

  // Encrypt object
  encryptObject: (obj: any): string => {
    const jsonString = JSON.stringify(obj);
    return cryptoUtils.encrypt(jsonString);
  },

  // Decrypt to object
  decryptToObject: <T>(encryptedData: string): T => {
    const decryptedString = cryptoUtils.decrypt(encryptedData);
    return JSON.parse(decryptedString) as T;
  },

  // Generate random string
  generateRandomString: (length: number = 32): string => {
    return CryptoJS.lib.WordArray.random(length / 2).toString();
  },

  // Hash string with SHA256
  hash: (data: string): string => {
    return CryptoJS.SHA256(data).toString();
  },

  /**
   * Decrypt card data (question.text, explanation, choices.content)
   * This function handles both encrypted and plain text data
   */
  decryptCard: (card: ICard): ICard => {
    try {
      return {
        ...card,
        // Decrypt question text if encrypted
        question: {
          ...card.question,
          text: card.question.text ? cryptoUtils.decrypt(card.question.text) : card.question.text,
        },
        // Decrypt explanation if encrypted
        explanation: card.explanation ? cryptoUtils.decrypt(card.explanation) : card.explanation,
        // Decrypt choices content if encrypted
        choices: card.choices?.map((choice: IChoice) => ({
          ...choice,
          content: choice.content ? cryptoUtils.decrypt(choice.content) : choice.content,
          // Handle isCorrect decryption (for backward compatibility)
          isCorrect: typeof choice.isCorrect === 'string'
            ? cryptoUtils.decrypt(choice.isCorrect) === 'true'
            : choice.isCorrect,
        })),
        // Recursively decrypt child cards if they exist
        childCards: card.childCards?.map((childCard: ICard) => cryptoUtils.decryptCard(childCard)),
      };
    } catch (error) {
      console.error('Error decrypting card:', error);
      return card; // Return original card if decryption fails
    }
  },

  /**
   * Decrypt multiple cards
   */
  decryptCards: (cards: ICard[]): ICard[] => {
    return cards.map(card => cryptoUtils.decryptCard(card));
  },
};
