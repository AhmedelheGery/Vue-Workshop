<template>
    <div>
        <h3>Input Component</h3>
        <input type="text" v-on:input="onInputChange">
         <h4>users number {{ users }}</h4>

    </div>
</template>

<script>
export default {
    name : "SearchInput",
    methods : {
        onInputChange : function(e){
            // console.log("value from child",e.target.value);
            this.$emit("inputChange",e.target.value)
        }
    },
    props : ["users"]
    
}
</script>

<style>

</style>