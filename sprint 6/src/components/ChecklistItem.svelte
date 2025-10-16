<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let id;
  export let label;
  export let done = false;

  function onChange(event) 
  {
    dispatch('change', { id, done: event.target.checked });
  }
</script>

<label>
  <input type="checkbox" checked={done} on:change={onChange} />
  {label}
</label>