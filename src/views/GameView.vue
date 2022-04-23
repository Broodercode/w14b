<template>
  <div>
    <!-- 
    Player Selection  
    -->
    <SelectionButton />
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

  export default {
    name: "GameView",
  components: {
    SelectionButton,
  }
  }
</script>

<style lang="scss" scoped>

</style>