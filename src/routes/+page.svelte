<script lang="ts">
  import { cubes } from '$lib/filters';
  import { dupeCheck } from '$lib/filters';
  let raw = '1 3 5 7 9 999';
  $: input = raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: output = cubes(input);

  $: dupeInput = raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: dupeOutput = dupeCheck(dupeInput);

</script>

<h1>Sequence Filter Demo</h1>
<label>
  Input (space-separated integers)
  <input bind:value={raw} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Output</h2>
<p>{"Sequence Output for Cubed Values: " + output.join(' ')}</p>

<p>{"Sequence Output for Dupe Prevented Values: " + dupeOutput.join(' ')}</p>


<style>
  label { display: block; margin: 1rem 0; }
  input { width: 100%; max-width: 30rem; }
</style>
