export const BTN_CLS = 'hover:scale-110 transition-all duration-300 rounded-lg p-1 w-full'

export function cn(...inputs: any[]): string {
  const inp = Array.isArray(inputs[0]) ? inputs[0] : [...inputs]
  return inp.filter(Boolean).join(' ')
}
