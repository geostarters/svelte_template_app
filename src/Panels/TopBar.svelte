<script>
  import { stateDrawer } from "../Utils/stores.js";
  import SearchBar from "./SearchBar.svelte";
  import Modal from "./Modal.svelte";
  import TopAppBar, {
    Row,
    Section,
    Title,
    FixedAdjust,
    DenseFixedAdjust,
    ProminentFixedAdjust,
    ShortFixedAdjust
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  let dense = false;
  let prominent = false;
  let variant = "fixed";
  let collapsed = false;
  let title = "Title";
  let Adjust = ShortFixedAdjust;
  
  export let show = false;
  let modal_show = false;

  function changeDrawerState() {
    console.info("update", stateDrawer);

    //tateDrawer.update(n => n = !n);
    stateDrawer.set(function() {
      return true;
    });
  }

  function openInfoDialog(){

    openModalInfo = true;
    console.info(openModalInfo);
  }
</script>

<Modal bind:show={modal_show} />
<div class="top-app-bar-container flexor">
<TopAppBar variant="short"  {dense} {prominent} bind:collapsed>
  <Row>
    <Section>
      <IconButton on:click={changeDrawerState} class="material-icons">
        menu
      </IconButton>  
      <SearchBar></SearchBar>    
    </Section>
   
    <Section align="middle" toolbar>
      <Title>{title}</Title>
    </Section>
   
    <Section align="end" toolbar>
      <IconButton on:click={() => {modal_show = true; show = false;}} class="bt-info material-icons" aria-label="Informació">info</IconButton>
    
    </Section>
  </Row>
</TopAppBar>
<div use:Adjust />
</div>
