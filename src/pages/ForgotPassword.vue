<template>
  <el-panel>
    <h1>Passwort vergessen?</h1>
    <h3>Bitte geben Sie Ihre E-Mail-Adresse ein um Ihr Passwort zurückzusetzen.</h3>
    <form
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post"
      novalidate="true"
    >
      <el-input v-model="email" label="Email-Adresse" :errorMessage="errorEmail" />
      <el-grid class="align-items-center justify-content-space-between actions">
        <el-button type="submit">Passwort zurücksetzen</el-button>
      </el-grid>
    </form>
    <template v-slot:footer>
      <router-link to="/">Zurück zur Anmeldung</router-link>
    </template>
  </el-panel>
  <el-toast :show="!!message" dismiss="5">
    {{ message }}
  </el-toast>
</template>

<script>
import { ref } from 'vue'
import validEmail from '@/helpers/validEmail'

export default {
  name: 'ForgotPassword',
  setup() {
    return {
      message: ref(''),
      email: ref(''),
      errorEmail: ref(''),
    }
  },
  methods: {
    checkForm: function (e) {
      this.message = ''
      
      if (!validEmail(this.email)) {
        this.errorEmail = 'Bitte Email-Adresse eingeben'
      } else {
        this.errorEmail = ''
      }

      if (this.email && !this.errorEmail) {
        this.message = 'Link zum Zurücksetzen des Passworts gesendet.'
        setTimeout(() => this.message = '', 3000)
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
