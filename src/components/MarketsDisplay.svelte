<script>
  import Market from "./Market.svelte";
  import { markets } from "../store";

</script>


<div class="displayBox">
  <h3>Markets</h3>
  <!-- <Market index={1}/> -->
  {#each $markets.marketList as market, i}
    <Market index={i}/>
  {/each}
 </div>