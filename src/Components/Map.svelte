<script>
  import { onMount, setContext } from "svelte";
  import mapbox from 'mapbox-gl';
  import {keyApp } from "../constants";

  setContext(keyApp,{
    getMap: () => map
  });

  export let lat;
  export let lon;
  export let zoom;
  export let style;

  let container;
  let map;

  onMount(() => {
   
      map = new mapbox.Map({
        container,
        style,
        hash: true,
        center: [lon, lat],
		zoom,
		attributionControl: false
      });

      
});
</script>

<style>
  #map {
    width: 100%;
    height: 100%;
	  margin:0;
	
  }
</style>

<div id="map" bind:this={container}>
  {#if map}
    <slot />
  {/if}
</div>
