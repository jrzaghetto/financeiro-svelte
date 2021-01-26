<script>
</script>

<style>
  .searchLeft{
    align-items: center;
    background-color: #DDE4F5;
    margin-top: 30px;
    position: relative;
    height: 50px;
    border-radius: 7px;
  }

  input{
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    background: transparent;
    color: #6180D0;
    float: right;
    margin-left: 10px;
    letter-spacing: 0.3px;
    font-weight: 300;
    width: 82%;

    border: none; 
    border-width: 0; 
    box-shadow: none;

    font-weight: 600;
  }

  input:focus {
    outline:none;
  }

  .buttonSearch {
  float: left;
  width: 15%;
  padding: 14px;
  background: var(--azul-claro);
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}

.buttonSearch:hover {
  background: var(--azul-medio);
}

button:focus {
    outline:none;
  }
</style>

<div class="searchLeft">
  <button class="buttonSearch" type="submit"><i class="fa fa-search"></i></button>
  <input type="text" placeholder="Search">
</div>