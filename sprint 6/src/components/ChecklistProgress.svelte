<script lang="ts">
    
  import ChecklistItem from './ChecklistItem.svelte';
  import { itemsStore, percentStore } from '../stores/Checklist';
  import { get } from 'svelte/store';
  import { tick } from 'svelte';

  let items = [];
  itemsStore.subscribe(v => (items = v));

  let visibleProgress = 0;
  let animatedProgress = 0;

  function handleChange(event: CustomEvent<{ id: number; done: boolean }>) {
    const { id, done } = event.detail;
    itemsStore.update(arr => arr.map(i => (i.id === id ? { ...i, done } : i)));
  }

  async function submitProgress() {
    const newProgress = get(percentStore);
    visibleProgress = newProgress;

    // animate
    const start = animatedProgress;
    const end = newProgress;
    const duration = 1000; // ms
    const steps = 60;
    for (let i = 1; i <= steps; i++) {
      animatedProgress = start + ((end - start) * i) / steps;
      await tick();
      await new Promise(r => setTimeout(r, duration / steps));
    }
  }
</script>

<div>
  {#each items as item (item.id)}
    <ChecklistItem {...item} on:change={handleChange} />
  {/each}

<div class="progress-container">
  <div class="progress-target" style="width: {visibleProgress}%"></div>
  <div class="progress-animated" style="width: {animatedProgress}%"></div>
</div>

  <p data-testid="progress">Progress: {visibleProgress}%</p>
  <button on:click={submitProgress}>Submit</button>
</div>


<style>
.progress-container {
  position: relative;
  height: 20px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
}

.progress-target {
  position: absolute;
  height: 100%;
  background: lightgreen;
  z-index: 1;
}

.progress-animated {
  position: absolute;
  height: 100%;
  background: green;
  z-index: 2;
  transition: width 1s ease;
}
</style>