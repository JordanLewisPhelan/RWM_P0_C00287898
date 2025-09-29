<script lang="ts">
  import { createEventDispatcher } from 'svelte';
<<<<<<< HEAD
  export let label: string = 'Click me';
  export let disabled: boolean = false;
=======
  export let label: string = 'Submit'; // from A
  export let variant: 'primary' | 'secondary' = 'primary'; // from A
  export let disabled: boolean = false; // from B
>>>>>>> branch_a

  const dispatch = createEventDispatcher<{ pressed: { at: number } }>();

  function handleClick() {
    if (disabled) return;
    dispatch('pressed', { at: Date.now() });
  }
</script>

<<<<<<< HEAD
<button class="btn" {disabled} on:click={handleClick}>
=======
<button
  class="btn"
  data-variant={variant}
  {disabled}
  on:click={handleClick}
>
>>>>>>> branch_a
  {label}
</button>

<style>
  .btn {
    padding: 0.5rem 1rem;
    background: #eeeeee;
    color: #222222;
    border-radius: 0.375rem;
    opacity: var(--opacity, 1);
  }
  .btn:disabled { --opacity: 0.6; cursor: not-allowed; }
<<<<<<< HEAD
=======
  .btn[data-variant="primary"] { background: #2563eb; }
  .btn[data-variant="secondary"] { background: #6b7280; }
>>>>>>> branch_a
</style>

