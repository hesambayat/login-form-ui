<template>
  <el-panel>
    <h1>
      <small>Herzlich willkommen bei</small>
      DataGuard!
    </h1>
    <form
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
      novalidate="true"
    >
      <el-input v-model="email" label="Email-Adresse" :errorMessage="errorEmail" type="email" autocomplete="email" />
      <el-input v-model="password" label="Password" type="password" :errorMessage="errorPassword" autocomplete="current-password" />
      <el-grid class="align-items-center justify-content-space-between actions">
        <el-button type="submit">Anmelden</el-button>
        <el-checkbox v-model="remember" label="Passwort merken" />
      </el-grid>
    </form>
    <template v-slot:footer>
      <router-link to="/forgot-password">Passwort vergessen?</router-link>
    </template>
  </el-panel>
  <el-toast :show="!!message">
    {{ message }}
  </el-toast>
</template>

<script>
import { ref } from 'vue'
import validEmail from '@/helpers/validEmail'

export default {
  name: 'Login',
  setup() {
    return {
      message: ref(''),
      email: ref(''),
      errorEmail: ref(''),
      password: ref(''),
      errorPassword: ref(''),
      remember: ref(''),
    }
  },
  methods: {
    checkForm: function (e) {
      this.message = ''
      
      if (!this.password) {
        this.errorPassword = 'Bitte legen Sie ein Passwort an'
      } else {
        this.errorPassword = ''
      }

      if (!validEmail(this.email)) {
        this.errorEmail = 'Bitte Email-Adresse eingeben'
      } else {
        this.errorEmail = ''
      }

      if (this.password && !this.errorPassword && this.email && !this.errorEmail) {
        this.message = 'Anmeldung erfolgreich. Bitte warten Sie, während wir umleiten...'
      }

      e.preventDefault();
    },
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .actions {
    margin-top: 34px;
  }
}
</style>