!<template>
    <div>
<img v-bind:src="playerCard.icon" alt="" />
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'

    export default {
        name: "PlayerSelection",
        computed: {
            ...mapState(useMainStore, ["playerCard"])
        }
    }
</script>

<style lang="scss" scoped>

</style>