<script>
  let avatar = "/images/avatar.png"
</script>

<style>
  .topBanner{
    display: grid;
    grid-template-columns: 12fr 1fr 1fr 1fr;
  }

  .menu {
    display: grid;
    text-align: center;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 6fr;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin-top: 40px;
    font-weight: 600;
    gap: 40px;
  }

  .menu a {
    text-decoration: none;
  }

  .menu a:visited {
    text-decoration: none;
    color: #333;
  }

  .menu a:link {
    text-decoration: none;
    color: #333;
  }

  .menu p {
    margin: 0;
    padding: 0px 0px 10px 0px;
    cursor: pointer;
  }

  .menu p:hover {
    border-bottom: 2px solid var(--azul-claro);
  }

  .selected {
    border-bottom: 2px solid var(--azul-medio);
  }

  .messages{
    display: grid;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin-top: 21px;
    font-weight: 600;
    font-size: 20px;
    color: #E0E0E0;
    cursor: pointer;
  }

  .messages:hover{
    color: var(--azul-claro)
  }

  .notifications{
    display: grid;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin-top: 21px;
    font-weight: 600;
    font-size: 20px;
    color: #E0E0E0;
    cursor: pointer;
  }

  .notifications:hover{
    color: var(--azul-claro)
  }

  .profile{
    display: grid;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-self: center;
    justify-self: center;
    margin-top: 24px;
    font-weight: 600;
    font-size: 20px;
    color: #E0E0E0;
    cursor: pointer;
    background-size: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .profile:hover{
    box-shadow: 0 0 0.2em var(--azul-escuro);
  }
</style>

<div class="topBanner">
  <div class="menu">
    <p><a href="#/">Dashboard</a></p>
    <p class="selected">Payments</p>
    <p>Services</p>
    <p>Currency</p>
  </div>
  <div class="messages">
    <i class="fa fa-envelope"></i>
  </div>
  <div class="notifications">
    <i class="fa fa-bell"></i>
  </div>
  <div class="profile" style="background-image: url({avatar})">  </div>
</div>