!<template>
    <div>
<div class="">Player Score: {{playerScore}}</div>
<div class="">Computer Score: {{computerScore}}</div>
<div class="">Draws: {{drawScore}}</div>

    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'
    export default {
        name: "GameScore",
          computed: {
        ...mapState(useMainStore,['playerScore', 'computerScore', 'drawScore'])
    }
    }
  
</script>

<style lang="scss" scoped>

</style>