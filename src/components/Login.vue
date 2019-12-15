<template>
<div class="column is-half is-offset-one-quarter">
  <form>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>

      <section class="modal-card-body">
        <b-field label="Username">
          <b-input
            type="text"
            :value="username"
            v-model="username"
            placeholder="Your username"
            required
          />
        </b-field>

        <b-field label="Password">
          <b-input
            type="password"
            :value="password"
            v-model="password"
            password-reveal
            placeholder="Your password"
            required
          />
        </b-field>
      </section>
      
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="cancel()">Cancel</button>
        <button class="button is-primary" @click="login()">Login</button>
      </footer>
    </div>
  </form>
</div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      username: '', 
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        // TODO: Login logic
        return true

        // if (this.username === this.$store.state.credentials.username 
        //   && this.password === this.$store.state.credentials.password
        // ) {

          // this.$store.state.user.username = this.username;
          // this.$store.state.user.password = this.password;
          // this.$store.state.user.logged = true;
          
          // this.$swal({
          //   title: 'Confirmación',
          //   text: `Acceso correcto`,
          //   icon: 'success'
          // })

          // this.$router
          //   .push({ name: 'inbox'})
          //   .catch(e => console.error(e));
        // } 
        
        // else {
        //   this.$swal({
        //     title: 'Confirmación',
        //     text: `Acceso incorrecto`,
        //     icon: 'warning'
        //   })
        // }
      } else {
        return false
      }
    },
    cancel() {
      this.$router.go(-1)
    }
  }
}
</script>