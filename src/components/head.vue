<template>
    <div class="head">
        <slot name="label"></slot>
        <slot name="title"></slot>
        <slot name="add"></slot>
    </div>
</template>

<script>
export default {
    name: "head-top"
}
</script>

<style lang="scss" scoped>
.head {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #32c9ff;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
}
</style>

