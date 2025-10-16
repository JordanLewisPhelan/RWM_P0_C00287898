import ChecklistItem from './ChecklistItem.svelte';

export default {
  title: 'Checklist/Item',  // how it appears in Storybook sidebar
  component: ChecklistItem,
  argTypes: {
    done: { control: 'boolean' },
    label: { control: 'text' },
  },
};

// --- STORIES (examples) ---

export const Default = {
  args: {
    id: 1,
    label: 'Default unchecked item',
    done: false,
  },
};

export const Checked = {
  args: {
    id: 2,
    label: 'Completed item',
    done: true,
  },
};
