<script>
</script>

<style>
  .overview{
    margin-top: 40px;
  }

  .values {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10px;
  }

  .title {
    grid-area: title;
    font-size: 10px;
    color: var(--cinza-claro)
  }

  .value {
    grid-area: value;
    margin-top: 3px;
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }

  .icon {
    grid-area: icon;
    background-color: var(--branco-escuro);
    border-radius: 50%;
    padding: 5px 5px 5px 5px;
    color: var(--azul-escuro);
    margin-right: 10px;
    font-size: 25px;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-self: center;
    justify-self: center;
    display: grid;
  }

  .blue {
    color: var(--azul-medio);
    opacity: 80%;
  }

  .green {
    color: var(--verde);
    opacity: 80%;
  }

  .red {
    color: var(--vermelho);
    opacity: 60%;
  }

  .separator{
    display: grid;
    grid-template-areas:
        "icon title title title title title title"
        "icon value value value value value value";
  }

  .iconTop{
    justify-content: center;
    align-self: center;
    justify-self: center;
    display: grid;
  }
</style>

<div class="overview">
  <div class="values">
    <div class="separator">
        <span class="icon">
          <i class="iconTop blue fa fa-usd"></i>
        </span>
      <div class="title">Current balance</div>
      <div class="value blue">R$ 124,720.60</div>
    </div>
    <div class="separator">
      <span class="icon">
        <i class="iconTop green fa fa-arrow-up"></i>
      </span>
      <div class="title">Income</div>
      <div class="value green">R$ 279,433.00</div>
    </div>
    <div class="separator">
      <span class="icon">
        <i class="iconTop red fa fa-arrow-down"></i>
      </span>
      <div class="title">Outcome</div>
      <div class="value red">R$ 154,712.40</div>
    </div>
  </div>
</div>