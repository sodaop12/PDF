<template>
  <nav class="navbar">
    <div class="nav-left" v-if="$store.state.isAuthenticated" >
      <router-link class="nav-link" to="/upload">Upload</router-link>
      <router-link class="nav-link" to="/profile">Profile</router-link>
      <router-link class="nav-link" to="/permisson">File</router-link>
       <router-link class="nav-link" to="/chart">Chart</router-link>
      <div class="nav-left" v-if="$store.state.user == ('admin')  " >
        <router-link class="nav-link" to="/adduser">Adduser</router-link>
      </div>
    </div>
    <div class="nav-right">
      <router-link class="nav-link" v-if="!$store.state.isAuthenticated" to="/">Login</router-link>
      <button v-if="$store.state.isAuthenticated" @click="logout" class="logout-button">Logout</button>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push('/'); 
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.navbar {
  background-color: #ffffff; /* White background color */
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #3498db; /* Modern border */
}

.nav-left {
  display: flex;
  gap: 20px; /* Add spacing between links */
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px; /* Add spacing between links and button */
   margin-left: auto; /* Push buttons to the right */
}

.nav-link {
  text-decoration: none;
  color: #000000; /* Black font color */
  font-family: "Roboto", sans-serif; /* Use a simple font */
  font-size: 16px; /* Increase the font size */
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #3498db; /* Highlight color on hover */
}

.logout-button {
  background-color: transparent;
  border: none;
  color: #000000; /* Black font color */
  cursor: pointer;
  font-family: "Roboto", sans-serif; /* Use a simple font */
  font-size: 16px; /* Increase the font size */
  font-weight: bold;
  transition: color 0.3s;
}

.logout-button:hover {
  color: #3498db; /* Highlight color on hover */
}

@media (max-width: 768px) {
  .nav-link {
    font-size: 14px; /* Reduce the font size on smaller screens */
  }

  .logout-button {
    font-size: 14px; /* Reduce the font size on smaller screens */
  }
}
</style>
