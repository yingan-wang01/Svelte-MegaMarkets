<script>
  import { markets } from "../store";

</script>

<div class="innerbox" id="totals">
    <label for="totalCards">Total Cards: </label>
    <span id="totalCards">{$markets.totalCards}</span>
    <p>
      <label for="totalMarkets">Total Markets: </label>
      <span id="totalCards">{$markets.totalMarkets}</span>
    </p>
  </div>