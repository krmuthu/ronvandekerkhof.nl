import { ENV } from '../config/app';

export function isDebug() {
    return ENV === 'dev';
}

export function isProduction() {
    return ENV === 'prod';
}