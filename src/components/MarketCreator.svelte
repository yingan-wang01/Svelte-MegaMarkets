<script>
  import { markets, addMarket } from "../store";

</script>

<div>
  <h2>Create New Market</h2>
  <!-- <label htmlFor="location">Location:</label> -->
    <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Location:</label>
  <input type="text" id="location" bind:value={$markets.newLocation} placeholder="Enter a location">
  <button on:click={()=>{
    addMarket($markets.newLocation)
    }}>Add Market</button>
  </div>