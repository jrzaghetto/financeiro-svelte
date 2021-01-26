<script>
import Left from "./Left.svelte";
import Right from "./Right.svelte";
import Payments from "./Payments.svelte"

import Router from 'svelte-spa-router';

	const routes = {
    '/Dashboard/': Right,
    '/Payments/': Payments,
    '*': Right,
}


</script>

<style>
  .container {
    display: flex;
    max-width: 1280px;
    margin: auto;
    height: calc(100vh - 10vh);
    min-height: 876px;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  
</style>
  <div id="container" class="container">
    <Left />
    <Router {routes}/>
  </div>