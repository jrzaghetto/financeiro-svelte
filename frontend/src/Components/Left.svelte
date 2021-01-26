<script>
import CardsLeft from "./Left/CardsLeft.svelte";
import CashInOut from "./Left/CashInOut.svelte";
import SearchLeft from "./Left/SearchLeft.svelte";

</script>

<style>
.left {
  background-color: var(--branco-escuro);
  width: 30vw;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 876px;
}  
</style>

<div id="left" class="left">
  <SearchLeft />
  <CardsLeft />
  <CashInOut />
</div>