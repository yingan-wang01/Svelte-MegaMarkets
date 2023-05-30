<script>
  import { markets, addCard, deleteCard } from "../store";
  export let index;


</script>


<div class="marketBox">
  <!-- <h3>Market Id: <span>{props.marketList[props.num].marketId}</span></h3>
  <h3>Location: <span>{props.marketList[props.num].location}</span></h3>
  <h3>Cards: <span>{props.marketList[props.num].cards}</span></h3>
  <h3>% of total: <span>{props.marketList[props.num].percentOfTotal}</span></h3> -->
  <h3>Market Id: <span>{$markets.marketList[index].marketId}</span></h3>
  <h3>Location: <span>{$markets.marketList[index].location}</span></h3>
  <h3>Cards: <span>{$markets.marketList[index].cards}</span></h3>
  <h3>% of total: <span>{$markets.marketList[index].percentOfTotal}</span></h3>
  <!-- <div style= {{display: 'flex'}}> -->
  <div>
    <button on:click={()=>addCard(index)}>Add Card </button>
    <button on:click={()=>deleteCard(index)}>Delete Card </button>
  </div>
</div>