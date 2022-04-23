!<template>
    <div>
<button @click="getSun">☀</button>
<button @click="getSnow">☃</button>
<button @click="getRain">☂</button>

    </div>
</template>

<script>
import { useMainStore } from "@/store/main";
import { mapState } from "pinia";
    export default {
        name: "SelectionButton",
        computed: {
            ...mapState(useMainStore, ["getSun", "getSnow", "getRain"])
        }
    }
</script>

<style lang="scss" scoped>

</style>