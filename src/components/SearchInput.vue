<template>
    <div>
        <h1>Input Component</h1>
        <input type="text" v-on:input="onInputChange">
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
    }
    
}
</script>

<style>

</style>