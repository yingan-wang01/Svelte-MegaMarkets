<script>
  import { marketState } from "../store";
  export let index;

  console.log($marketState);
  console.log(marketState);


</script>


<div class="marketBox">
  <!-- <h3>Market Id: <span>{props.marketList[props.num].marketId}</span></h3>
  <h3>Location: <span>{props.marketList[props.num].location}</span></h3>
  <h3>Cards: <span>{props.marketList[props.num].cards}</span></h3>
  <h3>% of total: <span>{props.marketList[props.num].percentOfTotal}</span></h3> -->
  <h3>Market Id: <span>{$marketState.marketList[index].marketId}</span></h3>
  <h3>Location: <span>{$marketState.marketList[index].location}</span></h3>
  <h3>Cards: <span>{$marketState.marketList[index].cards}</span></h3>
  <h3>% of total: <span>{$marketState.marketList[index].percentOfTotal}</span></h3>
  <!-- <div style= {{display: 'flex'}}> -->
  <div>
    <button on:click={marketState.addCard(index)}>Add Card </button>
    <button on:click={marketState.deleteCard(index)}>Delete Card </button>
  </div>
</div>