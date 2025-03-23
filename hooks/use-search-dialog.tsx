"use client"

import { create } from "zustand"

interface SearchDialogStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useSearchDialog = create<SearchDialogStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

