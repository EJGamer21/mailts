<template>
  <div id="app">
    <NavBar/>

    <div v-if="isLogged" class="section">
      <router-view/>
    </div>

    <div v-else>
      <Login/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Login from "@/components/Login"

export default {
  name: "App",
  components: {
    NavBar,
    Login
  },
  computed: {
    isLogged() {
      return this.$store.state.user.logged
    }
  }
}
</script>