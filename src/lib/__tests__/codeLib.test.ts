import { describe, expect, test } from '@jest/globals';
import { convertBytes } from '../codeLib';

describe('convert Bytes tests', () => {

  test('should return 0 bytes for 0', () => {
    const response = convertBytes(0);
    expect(response).toBe('0 bytes');
  });

  test('should return 1 byte for 1', () => {
    const response = convertBytes(1);
    expect(response).toBe('1 byte');
  });

  test('should return 1023 bytes for 1023', () => {
    const response = convertBytes(1023);
    expect(response).toBe('1023 bytes');
  });

  test('should return 1 Mb bytes for 1024', () => {
    const response = convertBytes(1100);
    expect(response).toBe('1.1 kb');
  });

  test('should return 1 Mb bytes for 1024', () => {
    const response = convertBytes(102494827349873423);
    expect(response).toBe('91 pb');
  });
});

