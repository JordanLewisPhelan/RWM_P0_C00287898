<script lang="ts">
  import { combinedFilter } from '$lib/filters/combined/combined';
  import { dupeCheck } from '$lib/filters/removeDupes';

  const JordanRaw = "16 36 64 144 256 36 36";
  $: JordanInput = JordanRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: JordanOutput = dupeCheck(JordanInput);

  const NathanRaw = "4 2 8 3 9 4 10 5 11 6";
  $: NathanInput = NathanRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: NathanOutput = combinedFilter(NathanInput);
</script>

<h1>Combined (peer -- mine)</h1>
<p>{"Nathan's Test: " + NathanOutput.join(" ")}</p>
<p>{"Jordan's Test: " + JordanOutput.join(" ")}</p>
