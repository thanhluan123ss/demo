import { birthday } from '@/lib/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getThisYearBirthday() {
  const year = new Date().getFullYear()
  const month = birthday.getMonth()
  const date = birthday.getDate()
  return new Date(year, month, date)
}
