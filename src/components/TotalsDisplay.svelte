<script>
  import { marketState } from "../store";

</script>

<div class="innerbox" id="totals">
    <label for="totalCards">Total Cards: </label>
    <span id="totalCards">{$marketState.totalCards}</span>
    <p>
      <label for="totalMarkets">Total Markets: </label>
      <span id="totalCards">{$marketState.totalMarkets}</span>
    </p>
  </div>