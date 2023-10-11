<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" class="form-input" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" class="form-input" />
      </div>
      <div class="form-group">
        <button type="submit" class="login-button">Login</button>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Send a POST request to the Flask backend for authentication
      axios
        .post(' http://127.0.0.1:5000/login', {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
            console.log(response.data)
          // Redirect to the profile page or handle the response as needed
          if (response.data.message === 'Logged in successfully') {
             this.$store.dispatch("login",response.data.role );
             this.$store.dispatch("setusername",response.data.username );
             this.$router.push('/profile'); 
              console.log(response.data.username)
          } else {
            // Handle login error
            console.error('Login failed');
          }
        })
        .catch((error) => {
          // Handle network or server error
          console.error('Network error', error);
        });
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: 300px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  align-content: center;
}

label {
  font-weight: bold;
  display: block;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  position: relative;
  right: 10px;

}

.login-button {
  background-color: #42b983;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #2fa372;
}
</style>