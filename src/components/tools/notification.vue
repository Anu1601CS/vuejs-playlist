<template>
  <v-card>
    <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :color="color"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        snackbar: true,
        y: 'bottom',
        x: 'left',
        color: '',
        mode:'',
        timeout: 5000,
        text: 'Saved'
      }
    }
  }
</script>
