<script>
  import Market from "./Market.svelte";
  import { marketState } from "../store";

</script>


<div class="displayBox">
  <h3>Markets</h3>
  <!-- <Market index={1}/> -->
  {#each $marketState.marketList as market, i}
    <Market index={i}/>
  {/each}
 </div>