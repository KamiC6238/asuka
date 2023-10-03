import { atom, createStore } from 'jotai'

export const store = createStore()
export const runningAtom = atom(false)
