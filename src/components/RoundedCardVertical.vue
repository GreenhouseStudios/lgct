<template>
    <div id="rounded-card-vertical" class="bg-light-gray w-66-l w-90 pa4 flex items-center justify-center shadow-4 z-0" style="height: 85%">
        <h1 class="f-headline-l f1 mb7 pa4">
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