<template>
  <div id="app">
     <SearchInput v-on:inputChange="onInputChange" />
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput";

export default {
  name: 'App',
  components: {
    SearchInput
  },
  methods : {
    onInputChange : function(value){
      console.log("value from parent",value)
    }
  }
}
</script>

<style>

</style>
