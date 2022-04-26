<template>
  <div>
    <div class="">
      Email: <input type="email" name="" id="email" v-model="emailHandle"/>
    </div>
    <div class="">
      Password: <input type="password" name="" id="password" v-model="password"/>
    </div>
     <button @click="getLogin">Login</button>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useMainStore } from '@/store/main';

export default {
  name: "LoginComponent",
  computed: {
      ...mapState(useMainStore, ['getLogin'])
  },
  data: function () {
    return {
      emailHandle: undefined,
      password: undefined,
    };
  },
};
</script>

<style lang="scss" scoped></style>
