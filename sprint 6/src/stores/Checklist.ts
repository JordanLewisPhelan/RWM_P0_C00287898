import { writable, derived } from 'svelte/store';

export interface Item {
  id: number;
  label: string;
  done: boolean;
}

// Writable store for items
export const itemsStore = writable<Item[]>([
  { id: 1, label: 'Item 1', done: false },
  { id: 2, label: 'Item 2', done: false },
  { id: 3, label: 'Item 3', done: false },
  { id: 4, label: 'Item 4', done: false },
  { id: 5, label: 'Item 5', done: false },
]);

// Derived store: number of completed items
export const completedStore = derived(itemsStore, $items =>
  $items.filter(i => i.done).length
);

// Derived store: percentage complete
export const percentStore = derived(itemsStore, $items =>
  $items.length ? Math.round(100 * $items.filter(i => i.done).length / $items.length) : 0
);
