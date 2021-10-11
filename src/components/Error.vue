<template>
    <div class="section">
        <div class="h-100 flex flex-column justify-center items-center">
        <p class="center f-headline v-mid">This page does not exist!</p>
        </div>
        <home-logo></home-logo>
    </div>
</template>

<script>
import HomeLogo from './HomeLogo.vue'
    export default {
  components: { HomeLogo},
        name: "Error"
    }
</script>