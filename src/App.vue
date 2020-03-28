<template>
  <div>
    <h2>App Component</h2>
    <SearchInput v-on:inputChange="onInputChange" />
    <button @click="onFetchData">get data</button>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput";
import axios from "axios";

export default {
  name: "App",
  components: {
    SearchInput
  },
  methods: {
    onInputChange: function(value) {
      console.log("value from parent", value);
    },
    onFetchData: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => console.log(res.data));
    }
  },
  computed: {}
};
</script>

<style>
*{
  margin: 2%;
}
</style>
