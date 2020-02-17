 <script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  import H6 from '@smui/common/H6.svelte';
  import { createEventDispatcher } from 'svelte';
  import { stateDrawer } from '../Utils/stores.js';
  const dispatch = createEventDispatcher();
  let clicked = 'nothing yet';
  let myDrawer;
  let myDrawerOpen = false;
  let active = 'Gray Kittens';
  let myDrawer2;
  export let myDrawer2Open = false;
  let active2 = 'Inbox';
  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }
  function setActive2(value) {
    active2 = value;
    myDrawer2Open = false;
    console.info(myDrawer2Open);
  }


 const unsubscribe = stateDrawer.subscribe(value => {
		myDrawer2Open = value;
	});


  console.info(myDrawer2Open);
</script>

<style>
  .drawer-container {
    position: relative;
    display: flex;
    height: 350px;
    max-width: 600px;
    border: 1px solid rgba(0,0,0,.1);
    overflow: hidden;
    z-index: 0;
  }
  * :global(.mdc-drawer--modal, .mdc-drawer-scrim) {
    /* This is not needed for a page-wide modal. */
    position: absolute;
  }
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
 
 <div class="drawer-container">
      <Drawer variant="modal" bind:this={myDrawer2} bind:open={myDrawer2Open}>
        <Header>
          <Title>Fons</Title>
          <Subtitle>Subtitol</Subtitle>
        </Header>
        <Content>
          <List>
            <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>
              <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
              <Text>Opcions</Text>
            </Item>

            <Separator nav />
            <Subheader component={H6}>Capes</Subheader>
            <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>
              <Graphic class="material-icons" aria-hidden="true">done_outline</Graphic>
              <Text>Buildings</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>
              <Graphic class="material-icons" aria-hidden="true">done_outline</Graphic>
              <Text>Networks</Text>
            </Item>
            <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>
              <Graphic class="material-icons" aria-hidden="true">done_outline</Graphic>
              <Text>Work</Text>
            </Item>
          </List>
        </Content>
      </Drawer>

      <Scrim />
     
    </div>
 
