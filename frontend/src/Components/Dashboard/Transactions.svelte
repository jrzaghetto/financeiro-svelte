<script>
</script>

<style>
  .transactions{
    margin-top: 0px;
  }

  .filters{
    display: grid;
    grid-template-columns: 4fr 3fr;
  }

  .select{
    color: var(--azul-escuro);
    cursor: pointer;
  }

  .down{
    font-size: 8px;
    margin-top: 4px;
    margin-left: 3px;
    position: absolute;
  }

  .titles {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    font-family: 'Kufam';
    font-size: 10px;
    color: var(--cinza-claro);
    gap: 70px;
  }

  .item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
    font-weight: bold;
    padding-bottom: 15px;
    margin-top: 15px;
    border-bottom: 2px solid var(--branco-medio);
    gap: 70px;
  }

  .item.final{
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
    color: var(--verde)
  }

  .cashOut {
    color: var(--vermelho)
  }
</style>

<div class="transactions">
  <div class="filters">
    <div class="filterCard">
      <h4>Transactions by <span class="select">all cards <span class="down">▼</span></span></h4>
    </div>
  </div>
  <div class="titles">
    <div class="description">Description</div>
    <div class="type">Type</div>
    <div class="card">Card</div>
    <div class="date">Date</div>
    <div class="amount">Amount</div>
  </div>
  <div class="item">
    <div class="description">
      <span class="icon">
        <i class="fa fa-usd"></i>
      </span>
      Mobile Connection
    </div>
    <div class="type">Services</div>
    <div class="card">•••• 0990</div>
    <div class="date">Today, 12:41</div>
    <div class="amount cashOut">R$ 40</div>
  </div>
  <div class="item">
    <div class="description">
      <span class="icon">
        <i class="fa fa-shopping-bag"></i>
      </span>
      Nike T-shirt
    </div>
    <div class="type">Shopping</div>
    <div class="card">•••• 0990</div>
    <div class="date">Today, 18:29</div>
    <div class="amount cashOut">R$ 25,78</div>
  </div>
  <div class="item">
    <div class="description">
      <span class="icon">
        <i class="fa fa-cutlery"></i>
      </span>
      iFood
    </div>
    <div class="type">Fast Food</div>
    <div class="card">•••• 0990</div>
    <div class="date">Today, 22:13</div>
    <div class="amount cashOut">R$ 44,15</div>
  </div>
  <div class="item final">
    <div class="description">
      <span class="icon">
        <i class="fa fa-exchange"></i>
      </span>
      Emily
    </div>
    <div class="type">Transfer</div>
    <div class="card">•••• 1442</div>
    <div class="date">28 Dec, 10:41</div>
    <div class="amount cashIn">R$ 250</div>
  </div>
</div>