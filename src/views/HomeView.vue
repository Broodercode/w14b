<template>
  <div class="home">
  
    <LoginComponent />
  </div>
</template>

<script>
// @ is an alias to /src

import LoginComponent from '@/components/LoginComponent.vue'
import { mapState } from 'pinia'
import { useMainStore } from '@/store/main'

export default {
  name: 'HomeView',
  components: {
    LoginComponent,

  }, 
  computed: {
    ...mapState(useMainStore, ["getLogin"])
  }
}
</script>
