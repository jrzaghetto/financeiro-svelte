<script>
import Overview from "./Dashboard/Overview.svelte";
import TopBanner from "./Dashboard/TopBanner.svelte";
import Transactions from "./Dashboard/Transactions.svelte";


</script>

<style>

.right {
  background-color: #fff;
  width: 70vw;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 876px;
}
 
</style>

<div id="right" class="right">
  <TopBanner />
  <Overview />
  <Transactions />
</div>