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
      <el-input v-model="email" label="Email-Adresse" :errorMessage="errorEmail" />
      <el-input v-model="password" label="Password" type="password" :errorMessage="errorPassword" />
      <el-grid class="align-items-center justify-content-space-between actions">
        <el-button type="submit">Anmelden</el-button>
        <el-checkbox v-model="remember" label="Passwort merken" />
      </el-grid>
    </form>
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
      errorEmail: ref(''),
      password: ref(''),
      errorPassword: ref(''),
      remember: ref(''),
    }
  },
  methods: {
    checkForm: function (e) {
      if (!this.password) {
        this.errorPassword = 'Bitte legen Sie ein Passwort an'
      } else {
        this.errorPassword = ''
      }

      if (!this.validEmail(this.email)) {
        this.errorEmail = 'Bitte Email-Adresse eingeben'
      } else {
        this.errorEmail = ''
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email ?? '');
    }
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