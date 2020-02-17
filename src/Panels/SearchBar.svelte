<script>
  import Textfield, {Input, Textarea} from '@smui/textfield';
  import Icon from '@smui/textfield/icon/index';
  import HelperText from '@smui/textfield/helper-text/index';
  import CharacterCounter from '@smui/textfield/character-counter/index';
  import {Icon as CommonIcon} from '@smui/common';
  import FloatingLabel from '@smui/floating-label';
  import LineRipple from '@smui/line-ripple';
  import NotchedOutline from '@smui/notched-outline';

  let name = '';
  let valueOutlinedC ="Cercar..";
</script>

<!--
  Normally you wouldn't provide a floating label, but you can manually set up a
  textfield like this:
-->
 <div class="search-text-input">
        <Textfield variant="outlined" withTrailingIcon bind:value={valueOutlinedC}  input$aria-controls="helper-text-outlined-c" input$aria-describedby="helper-text-outlined-c">
          <Icon class="material-icons">search</Icon>
        </Textfield>
      </div>

<style>




</style>

