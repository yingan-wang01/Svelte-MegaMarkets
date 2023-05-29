<script>
  import { marketState } from "../store";

  let location = '';
</script>

<div>
  <h2>Create New Market</h2>
  <!-- <label htmlFor="location">Location:</label> -->
  <label>Location:</label>
  <input type="text" id="location" bind:value={location} placeholder="Enter a location">
  <button on:click={marketState.addMarket(location)}>Add Market</button>
  </div>