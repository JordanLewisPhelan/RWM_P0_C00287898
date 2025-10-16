<script lang="ts">
  import ChecklistItem from './ChecklistItem.svelte';

  type ChecklistChangeEvent = CustomEvent<{ id: number; done: boolean }>;

  let items = [
    { id: 1, label: 'Item 1', done: false },
    { id: 2, label: 'Item 2', done: false },
    { id: 3, label: 'Item 3', done: false },
    { id: 4, label: 'Item 4', done: false },
    { id: 5, label: 'Item 5', done: false },
  ];

  let visibleProgress = 0;

  function handleChange(event: ChecklistChangeEvent) {
    const { id, done } = event.detail;
    items = items.map(i => i.id === id ? { ...i, done } : i);
  }

  function submitProgress() {
    const doneCount = items.filter(i => i.done).length;
    visibleProgress = Math.round((doneCount / items.length) * 100);
  }
</script>


{#each items as item}
  <ChecklistItem {...item} on:change={handleChange} />
{/each}

<p data-testid="progress">Progress: {visibleProgress}%</p>
<button on:click={submitProgress}>Submit</button>
