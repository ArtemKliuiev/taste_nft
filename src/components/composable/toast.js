import { useToastStore } from '@/data/store/store.js'

export function toast(text) {
  const useToast = useToastStore()
  useToast.info.text = text
  useToast.info.current++
}
