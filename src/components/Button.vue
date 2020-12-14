<template>
    <button class="button" type="button" name="button">Big Boy Button</button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button{
        margin: 10px;
        padding: 5px 10px;
        border: 1px solid green;
        border-radius: 10px;
        background-color: seagreen;
        cursor: pointer;
        font-size: 20px;
        font-weight: normal;
        color: black;
    }

    .button:hover{
        border-color: blue;
        background-color: lightblue;
        /* font-weight: bold; */
        color: white;
    }
</style>
