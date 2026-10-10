import test from 'node:test';
import assert from 'node:assert/strict';
import { createReceipt } from '../src/receipt.js';

test('genera un recibo con los productos y el total', () => {
const items = [
{ sku: 'LIB-003', name: 'Libro: Pro Git', price: 40 },
{ sku: 'CAF-004', name: 'Cafe de Los Yungas 500g', price: 18 },
];

const receipt = createReceipt(items, 58);

assert.equal(
receipt,
'LIB-003 Libro: Pro Git: Bs 40.00\nCAF-004 Cafe de Los Yungas 500g: Bs 18.00\nTotal: Bs 58.00'
);
});

test('genera un recibo cuando no hay productos', () => {
assert.equal(createReceipt([], 0), 'Total: Bs 0.00');
});
