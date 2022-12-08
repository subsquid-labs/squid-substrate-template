import { codec } from '@subsquid/ss58'
import config from '../../config'

export const arrayToHexString = (hash: Uint8Array) => `0x${Buffer.from(hash).toString('hex')}`;
export const hexStringToString = (data: string) =>
	`${Buffer.from(data.startsWith('0x') ? data.substring(2) : data, 'hex').toString('utf-8')}`;
export const addressCodec = codec(config.prefix);
export const signerCodec = codec(42);

export const encodeSigner = (signer: string) => signer;
export const isCIDValid = (cid: string | null) => cid !== null && cid.length < 50 && !!cid.match(/^[a-z0-9]+$/i);

export const slugify = (text: string) => {
	return text
	  .toString()                   // Cast to string (optional)
	  .normalize('NFKD')            // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
	  .toLowerCase()                // Convert the string to lowercase letters
	  .trim()                       // Remove whitespace from both sides of a string (optional)
	  .replace(/\s+/g, '-')         // Replace spaces with -
	  .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
	  .replace(/\_/g,'-')           // Replace _ with -
	  .replace(/\-\-+/g, '-')       // Replace multiple - with single -
	  .replace(/\-$/g, '');         // Remove trailing -
  }