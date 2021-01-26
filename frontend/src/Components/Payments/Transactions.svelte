<script>
  import { transactions } from "../../Store";
  import Content from "../Modal/Content.svelte";
  import Modal from "../Modal/Modal.svelte";
</script>

<style>
  .transactions {
    margin-top: 30px;
  }

  .filters {
    display: grid;
    grid-template-columns: 4fr 3fr;
    margin-bottom: 30px;
  }

  .select {
    color: var(--azul-escuro);
    cursor: pointer;
  }

  .down {
    font-size: 8px;
    margin-top: 4px;
    margin-left: 3px;
    position: absolute;
  }

  .titles {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    font-family: "Kufam";
    font-size: 14px;
    color: var(--cinza-claro);
    gap: 70px;
    margin-bottom: 30px;
  }

  .item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    font-family: "Quicksand", sans-serif;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 15px;
    margin-top: 15px;
    border-bottom: 2px solid var(--branco-medio);
    gap: 70px;
  }

  .item.final {
    border-bottom: 0px;
  }

  .icon {
    background-color: var(--branco-escuro);
    border-radius: 50%;
    padding: 4px 5px 5px 6px;
    color: var(--azul-escuro);
    margin-right: 5px;
  }

  .icon i {
    width: 15px;
    text-align: center;
    height: 15px;
  }

  .cashIn {
    color: var(--verde);
  }

  .cashOut {
    color: var(--vermelho);
    opacity: 60%;
  }

  li {
    display: block;
    opacity: 70%;
    cursor: pointer;
  }

  li:hover {
    opacity: 100%;
  }

  .showing {
    display: grid;
    grid-template-columns: 10fr 1fr;
    align-self: center;
  }

  .buttons {
    align-self: center;
    text-align: center;
  }

  .btn {
    border-radius: 5px;
    margin: 0px;
    background-color: var(--branco-escuro);
    color: var(--cinza-claro);
    font-size: 12px;
    border: 0;
    cursor: pointer;
  }

  .btn:hover {
    color: var(--azul-medio);
  }

  .btn.left {
    border-radius: 5px 0px 0px 5px;
  }

  .btn.right {
    border-radius: 0px 5px 5px 0px;
    margin-left: -3px;
  }

  .showingText h6 {
    color: var(--cinza-claro);
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
  }

  .showingText span {
    color: var(--cinza-claro);
    font-weight: bold;
  }

  #state {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0.33;
    font-size: 0.8em;
  }
</style>

<div class="transactions">
  <div class="filters">
    <div class="filterCard">
      <h4>
        Transactions history by
        <span class="select">all cards <span class="down">▼</span></span>
      </h4>
    </div>
    <Modal>
      <Content />
    </Modal>
  </div>
  <div class="items">
    <div class="titles">
      <div class="description">Description</div>
      <div class="type">Type</div>
      <div class="card">Card</div>
      <div class="date">Date</div>
      <div class="amount">Amount</div>
    </div>
    {#each $transactions as teste, i}
      {#if $transactions.length - 1 != i}
        <li>
          <div class="item">
            <div class="description">
              {#if $transactions[i].type == 'Services'}
                <span class="icon"> <i class="fa fa-usd" /> </span>
              {:else if $transactions[i].type == 'Shopping'}
                <span class="icon"> <i class="fa fa-shopping-bag" /> </span>
              {:else if $transactions[i].type == 'Fast Food'}
                <span class="icon"> <i class="fa fa-cutlery" /> </span>
              {:else if $transactions[i].type == 'Transfer'}
                <span class="icon"> <i class="fa fa-exchange" /> </span>
              {/if}
              {teste.description}
            </div>
            <div class="type">{teste.type}</div>
            <div class="card">{teste.card}</div>
            <div class="date">{teste.date}</div>
            <div class="amount cashOut">R$ {teste.amount}</div>
          </div>
        </li>
      {:else}
        <li>
          <div class="item final">
            <div class="description">
              <span class="icon"> <i class="fa fa-exchange" /> </span>
              {teste.description}
            </div>
            <div class="type">{teste.type}</div>
            <div class="card">{teste.card}</div>
            <div class="date">{teste.date}</div>
            <div class="amount cashIn">R$ {teste.amount}</div>
          </div>
        </li>
      {/if}
    {/each}
    <div class="showing">
      <div class="showingText">
        <h6>Showing <span>1 - 10 of 200</span> transaction</h6>
      </div>
      <div class="buttons">
        <button class="btn left"><i
            class="fa fa-arrow-left"
            aria-hidden="true" /></button>
        <button class="btn right"><i
            class="fa fa-arrow-right"
            aria-hidden="true" /></button>
      </div>
    </div>
  </div>
</div>
