<template>
  <el-panel>
    <h1>
      <small>Herzlich willkommen bei</small>
      DataGuard!
    </h1>
    <el-input v-model="email" label="Email-Adresse" />
    <el-input v-model="password" label="Password" type="password" />
    <el-grid class="align-items-center justify-content-space-between actions">
      <el-button>Anmelden</el-button>
      <el-checkbox v-model="remember" label="Passwort merken" />
    </el-grid>
    <template v-slot:footer>
      <router-link to="/forgot-password">Passwort vergessen?</router-link>
    </template>
  </el-panel>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Login',
  setup() {
    return {
      email: ref(''),
      password: ref(''),
      remember: ref(''),
    }
  },
}
</script>

<style>
@media screen and (min-width: 768px) {
  .actions {
    margin-top: 34px;
  }
}
</style>