import { Currency } from '../types';

export const USD_TO_LKR_RATE = 305;

export function formatPrice(amountUSD: number, currency: Currency): string {
  if (currency === 'LKR') {
    const lkrValue = Math.round(amountUSD * USD_TO_LKR_RATE);
    return `LKR ${lkrValue.toLocaleString()}`;
  }
  return `USD $${amountUSD.toLocaleString()}`;
}

export function formatPriceNumber(amountUSD: number, currency: Currency): number {
  if (currency === 'LKR') {
    return Math.round(amountUSD * USD_TO_LKR_RATE);
  }
  return amountUSD;
}
