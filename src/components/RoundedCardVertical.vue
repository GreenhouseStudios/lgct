<template>
    <div id="rounded-card-vertical" class="bg-moon-gray w-50-l w-90 pa2 h-75 flex items-center justify-center shadow-4 z-0">
        <h1 class="f-headline-l f1 mb7">
        <slot></slot>
        </h1>
    </div>
</template>

<script>
    export default {
        name: "RoundCardVertical"
    }
</script>

<style lang="scss" scoped>
#rounded-card-vertical{
    border-radius: 1000px 1000px 0 0;
}
</style>