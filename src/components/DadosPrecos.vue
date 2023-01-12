<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    created(){
        axios.get("http://localhost:4000").then(res => {

        }).catch(err => {

        })
        console.log("Ola")
    }
}
</script>

<style scoped>

</style>