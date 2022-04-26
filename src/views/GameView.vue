<template>
  <div>
    <!-- 
    Player Selection  
    -->
    <PlayerSelection />
    <ComputerSelection />
    <SelectionButton />
    <GameScore />
    
    <!-- 
      PC Selection
    -->
    <!-- 
      Player Choice Button
    -->
  </div>
</template>

<script>
import SelectionButton from '@/components/SelectionButton.vue'
import PlayerSelection from '@/components/PlayerSelection.vue'
import ComputerSelection from '@/components/ComputerSelection.vue'
import GameScore from '@/components/GameScore.vue'

  export default {
    name: "GameView",
  components: {
    SelectionButton,
    PlayerSelection,
    ComputerSelection,
    GameScore
  }
  }
</script>

<style lang="scss" scoped>

</style>