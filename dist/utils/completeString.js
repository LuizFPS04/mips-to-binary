"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padBinary = padBinary;
function padBinary(value, bits) {
    return value.padStart(bits, '0');
}
