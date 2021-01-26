<script>
  let linkViewCards = "#";
</script>

<style>
  .title {
    padding-top: 50px;
  }

  .title h4 {
    display: inline-flex;
    float: left;
    margin: 0px;
    font-family: 'Kufam', cursive;
    font-weight: bold;
  }

  .title p {
    font-size: 14px;
    float: right;
    padding-top: 2px;
    margin: 0px;
    color: var(--azul-claro);
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }

  .title a {
    cursor: pointer;
    text-decoration: none;
  }

  .title a:visited {
    color: var(--azul-escuro);
    text-decoration: none;
    cursor: pointer;
  }

  .ccOpen {
    /* background-image: linear-gradient(to right, var(--azul-medio), var(--azul-claro)); */
    margin-top: 25px;
    /* border-radius: 7px; */
    /* padding: 15px; */
    /* color: var(--branco-claro); */
    box-shadow: 1px 1px #aaa3a3;
    /* top: 0; */
    /* position: absolute; */
    /* z-index: 1000; */
    /* left: 0; */
    display: inline-block;
    width: 366px;
    height: 187px;
    background-image: url(https://image.ibb.co/bVnMrc/g3095.png), linear-gradient(to right, var(--azul-medio), var(--azul-claro));
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    -webkit-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    color: var(--branco-claro);
  }

  .cardLine1 {
    padding-top: 7px;
  }
  .cardLine2 {
    padding-top: 65px;
  }
  .cardLine3 {
    padding-top: 30px;
    font-family: 'Quicksand', sans-serif;
  }

  .titleCard {
    position: absolute;
    padding-top: 13px;
    font-weight: 500;
    letter-spacing: 3px;
    padding-left: 15px;
  }

  .modelCard {
    font-size: 38px;
    float: right;
    padding-right: 15px;
  }

  .chipCard {
    font-size: 28px;
    padding-left: 15px;
  }

  .numberCard {
    float: right;
    padding-top: 11px;
    font-family: 'Space Mono', monospace;
    letter-spacing: 3px;
    font-size: 16px;
    padding-right: 15px;
  }

  .nameCard {
    letter-spacing: 1px;
    padding-left: 15px;
  }

  .valueCard {
    float: right;
    font-weight: bold;
    padding-right: 15px;
  }

  .ccClosed {
    background-color: var(--branco-claro);
    border-radius: 7px;
    padding: 15px;
    margin-top: 10px;
    height: 18px;
  }

  .ccTitle {
    float: left;
  }

  .ccValue{
    float:  right;
    color: var(--azul-escuro);
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }
</style>

<div>
  <div class="title">
    <h4>Your Cards</h4>
    <p><a href={linkViewCards}>View All</a></p>
  </div>
  <div class="ccOpen">
    <div class="cardLine1">
      <span class="titleCard">NuBank</span>
      <span class="modelCard"> <i class="fa fa-cc-visa" /> </span>
    </div>
    <div class="cardLine2">
      <span class="chipCard"> <img src="/images/chip.png" width="45px"> </span>
      <span class="numberCard">1852 0225 4555 1442</span>
    </div>
    <div class="cardLine3">
      <span class="nameCard">Marcos A Z Junior</span>
      <span class="valueCard">R$ 1.104,52</span>
    </div>
  </div>
  <div class="ccClosed">
    <span class="ccTitle">Itaú</span>
    <span class="ccValue">R$ 967,88</span>
  </div>
  <div class="ccClosed">
    <span class="ccTitle">Next</span>
    <span class="ccValue">R$ 322,17</span>
  </div>
</div>
