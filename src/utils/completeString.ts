export function padBinary(value: string, bits: number): string {
    return value.padStart(bits, '0');
}