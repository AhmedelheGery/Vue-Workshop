<template>
    <div>
        <h3>Input Component</h3>
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