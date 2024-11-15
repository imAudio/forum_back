import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'PZVJXlIsOGMgHpBFX50HHD3201/K1j+zbbokHKs9bjA=';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);