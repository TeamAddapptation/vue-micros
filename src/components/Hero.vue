<template>
    <div id="hero">
        <div class="hero_content">
            <Heading2 />
            <Description />
            <Button />
        </div>
    </div>
</template>

<script>
import Heading2 from './Heading2.vue'
import Description from './Description.vue'
import Button from './Button.vue'
export default {
    name: 'Hero',
    components: {
        Heading2,
        Description,
        Button
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hero{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 400px;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: goldenrod;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.hero_content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* background: seagreen; */

    max-width: inherit;
    height: 100%;
    margin: 40px;
    padding: 10px;
    box-sizing: border-box;
    border:1px solid blue;
}
</style>
