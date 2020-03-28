<template>
  <div>
    <div>
      <h2>App Component</h2>
      <SearchInput v-on:inputChange="onInputChange" v-bind:users="users" />
      <button @click="onFetchData">get data</button>
    </div>
   <router-view>
   </router-view>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      users: null
    };
  },
  components: {
    SearchInput
  },
  methods: {
    onInputChange: function(value) {
      console.log("value from parent", value);
    },
    onFetchData: function() {
      axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
        console.log(res.data);
        return (this.users = res.data.length);
      });
    }
  },
  computed: {}
};
</script>

<style>
* {
  margin: 2%;
}
</style>
