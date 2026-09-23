export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidFullName(value: string): boolean {
  const words = value
    .trim()
    .split(/\s+/)
    .filter((word) => word.length >= 2);
  return words.length >= 2;
}

export function formatPhoneBR(value: string): string {
  const digits = digitsOnly(value).slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length < 3) return `(${digits}`;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (digits.length <= 6) return `(${ddd}) ${rest}`;
  if (digits.length <= 10) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
}

export function isValidPhoneDigits(value: string): boolean {
  const digits = digitsOnly(value);
  return digits.length === 10 || digits.length === 11;
}

export function formatCEP(value: string): string {
  const digits = digitsOnly(value).slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export function isValidCEPDigits(value: string): boolean {
  return digitsOnly(value).length === 8;
}

export function formatCPF(value: string): string {
  const digits = digitsOnly(value).slice(0, 11);
  const p1 = digits.slice(0, 3);
  const p2 = digits.slice(3, 6);
  const p3 = digits.slice(6, 9);
  const p4 = digits.slice(9, 11);

  if (digits.length <= 3) return p1;
  if (digits.length <= 6) return `${p1}.${p2}`;
  if (digits.length <= 9) return `${p1}.${p2}.${p3}`;
  return `${p1}.${p2}.${p3}-${p4}`;
}

/**
 * Official CPF check-digit algorithm. Also rejects the 10 repeated-digit
 * sequences (000.000.000-00, 111.111.111-11, ...) which pass the checksum
 * math trivially but are never real CPFs.
 */
export function isValidCPF(value: string): boolean {
  const cpf = digitsOnly(value);
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  const digits = cpf.split("").map(Number);

  const checkDigit = (base: number[], factorStart: number) => {
    const sum = base.reduce((acc, digit, index) => acc + digit * (factorStart - index), 0);
    const remainder = (sum * 10) % 11;
    return remainder === 10 ? 0 : remainder;
  };

  if (checkDigit(digits.slice(0, 9), 10) !== digits[9]) return false;
  if (checkDigit(digits.slice(0, 10), 11) !== digits[10]) return false;

  return true;
}
