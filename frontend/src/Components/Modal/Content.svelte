<script>
  import { getContext } from 'svelte';
  import Popup from './Popup.svelte';
 
  const { open } = getContext('simple-modal');
 
  const showPopup = () => {
    open(Popup);
  };
</script> 

<style>
.buttonAddTransaction {
    padding: 10px;
    margin-bottom: 0;
    font-size: 15px;
    line-height: 1.42857143;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    align-self: end;
    width: 200px;
    background-color: #dde4f5;
    color: var(--azul-medio);
    font-weight: 600;
  }

  .buttonAddTransaction:hover {
    box-shadow: 0 0 0.2em var(--azul-escuro);
    color: var(--azul-escuro);
  }

  .addTransaction {
    display: grid;
    align-self: center;
    justify-content: end;
  }
</style>
 
<div class="addTransaction">

  <button class="buttonAddTransaction" on:click={showPopup}> Add Transaction </button>

</div>
