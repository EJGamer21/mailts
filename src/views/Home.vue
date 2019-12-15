<template>
  <div class="home">
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import db from '@/database/firebaseInit'
const userCollecion = db.collection('users')

export default {
  name: 'Home',
  data() {
    return {
      users: []
    }
  },
  created() {
    userCollecion.get()
      .then(querySnapshot => {
        querySnapshot.forEach(user => {
          const data = {
            id: user.id,
            firstname: user.data().name.firstname,
            lastname: user.data().name.lastname,
            email: user.data().email,
            image: user.data().image
          }

          this.users.push(data)
        })
      })
      .catch(err => console.error(err))
  },
  mounted() {
  }
}
</script>
