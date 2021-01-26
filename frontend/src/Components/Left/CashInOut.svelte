<script>
  let linkViewCards = "#";

  let people = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhG48QOJmoWq0S1C73NHtDe-DYo9Q3DFdW-A&usqp=CAU",
    "https://www.dadafest.co.uk/Images/people/Hanna2-300x300px.jpg",
    "https://a.slack-edge.com/02792/marketing/img/avatars/persona_b/persona-b.png",
  ];
</script>

<style>
  .title {
    padding-top: 75px;
  }

  .title h4 {
    display: inline-flex;
    float: left;
    margin: 0px;
  }

  .title p {
    font-size: 14px;
    float: right;
    padding-top: 2px;
    margin: 0px;
    color: var(--azul-claro);
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
  }

  .title a {
    cursor: pointer;
    text-decoration: none;
  }

  .title a:visited {
    color: var(--azul-escuro);
    cursor: pointer;
    text-decoration: none;
  }

  .people {
    display: grid;
    text-align: center;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    cursor: pointer;
  }

  .image:hover {
    box-shadow: 0 0 0.2em var(--azul-escuro);
  }

  .image:focus {
    box-shadow: 0 0 0.2em var(--azul-escuro);
  }

  .newPeople {
    margin: 0;
    align-items: center;
    align-content: center;
    align-self: center;
    justify-self: center;
  }

  .people1 {
    align-self: center;
    justify-self: center;
  }
  .people2 {
    align-self: center;
    justify-self: center;
  }
  .people3 {
    align-self: center;
    justify-self: center;
  }

  .newPeople .image {
    margin-top: 20px;
    border-radius: 10%;
    background-color: var(--branco-claro);
    color: var(--azul-medio);
    width: 85px;
    height: 85px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .newPeople .name {
    margin-left: 0px;
  }

  .image {
    margin-top: 20px;
    border-radius: 10%;
    background-color: var(--branco-claro);
    width: 85px;
    height: 85px;
    margin-bottom: 5px;
    background-size: 85px;
  }

  .name {
    margin-left: 15px;
    margin-top: 10px;
    font-size: 0.8em;
  }

  .amount {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 5fr 1fr;
  }

  .amount .value {
    background-color: #dde4f5;
    border-radius: 7px;
    padding: 10px;
  }

  .amount .value input {
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: 0;
    color: var(--azul-medio);
  }

  .amount .value input:focus {
    outline: none;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--azul-medio);
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--azul-medio);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--azul-medio);
  }

  .sendValue {
    float: right;
    padding: 12px 16px 12px 16px;
    background: #dde4f5;
    color: var(--azul-medio);
    font-size: 19px;
    cursor: pointer;
    border-radius: 50%;
    margin-bottom: 0;
    margin-right: 5px;
    border: 0;
    margin-top: 1px;
  }

  .badge {
    display: inline-block;
    min-width: 10px;
    padding: 5px 7px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: orange;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    background-color: var(--branco-claro);
    border-radius: 10px;
  }

  .badgebox {
    opacity: 0;
  }

  .badgebox + .badge {
    /* Move the check mark away when unchecked */
    text-indent: -999999px;
    /* Makes the badge width stay the same checked and unchecked */
    width: 27px;
  }

  .badgebox:focus + .badge {
    /* Set something to make the badge looks focused */
    /* This really depends on the application, in my case it was: */

    /* Adding a light border */
    box-shadow: inset 0px 0px 5px;
  }

  .badgebox:checked + .badge {
    /* Move the check mark back when checked */
    text-indent: 0;
  }
  .btn-cashIn {
    color: #fff;
    background-color: #21BF73;
    border-color: #21BF73;
    font-family: "Quicksand", sans-serif;
  }
  .btn-cashIn .badge {
    color: #21BF73;
    background-color: #fff;
}
  .btn-cashOut {
    color: #fff;
    background-color: #FD5E53;
    border-color: #FD5E53;
    font-family: "Quicksand", sans-serif;
  }
  .btn-cashOut .badge {
    color:#FD5E53;
    background-color: #fff;
}
  .btn {
    display: flex;
    padding: 12px 12px;
    margin-bottom: 0;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
  }

  .btnInput {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 10fr 1fr 10fr;
  }
</style>

<div>
  <div class="title">
    <h4>Cash In / Out</h4>
    <p><a href={linkViewCards}>View All</a></p>
  </div>
  <div class="people">
    <div class="newPeople">
      <div class="image"><i class="fa fa-plus" /></div>
      <span class="name">New</span>
    </div>
    <div class="people1">
      <div class="image" style="background-image: url({people[0]})" />
      <span class="name">Emily</span>
    </div>
    <div class="people2">
      <div class="image" style="background-image: url({people[1]})" />
      <span class="name">Julia</span>
    </div>
    <div class="people3">
      <div class="image" style="background-image: url({people[2]})" />
      <span class="name">Aaron</span>
    </div>
  </div>
  <div class="btnInput">
    <label for="cashIn" class="btn btn-cashIn">
      Cash In
      <input type="checkbox" id="cashIn" class="badgebox" />
      <span class="badge">&check;</span></label>
    <div />
    <label for="cashOut" class="btn btn-cashOut">
      Cash Out
      <input type="checkbox" id="cashOut" class="badgebox" />
      <span class="badge">&check;</span></label>
  </div>
  <div class="amount">
    <div class="value"><input type="text" placeholder="Amount" /></div>
    <div>
      <button class="sendValue"><i class="fa fa-arrow-right" /></button>
    </div>
  </div>
</div>
