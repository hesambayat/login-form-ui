<template>
  <el-panel>
    <h1>Passwort vergessen?</h1>
    <h3>Bitte geben Sie Ihre E-Mail-Adresse ein um Ihr Passwort zurückzusetzen.</h3>
    <el-input v-model="email" label="Email-Adresse" />
    <el-grid class="align-items-center justify-content-space-between actions">
      <el-button>Passwort zurücksetzen</el-button>
    </el-grid>
    <template v-slot:footer>
      <router-link to="/">Zurück zur Anmeldung</router-link>
    </template>
  </el-panel>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ForgotPassword',
  setup() {
    return {
      email: ref(''),
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
