<template>
    <div>
        <!-- <a href="http://localhost:8081/#/example1" class="ex1">Example1</a>
        <a href="http://localhost:8081/#/example2" class="ex2">Example2</a> -->
        <router-link to="/example1" class="ex1">Перейти к Example1</router-link>
        <router-link to="/example2" class="ex2">Перейти к Example2</router-link>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .ex1{
        margin-right: 20px;
    }
    .ex2{
        margin-left: 20px;
    }
</style>