import { SW_NAMES } from './sw-names'

export const all = () => { return SW_NAMES.slice() } //Shadow copy of the array to avoid mutations
