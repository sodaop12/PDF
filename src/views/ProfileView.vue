<template>
  <div class="profile-container">
    <h1 class="profile-title">User Profile</h1>
    <div class="profile-info">
      <div class="profile-field">
        <strong>Username:</strong>
        <p>{{ $store.state.username }}</p>
      </div>
      <div class="profile-field">
        <strong>Role:</strong>
        <p>{{ $store.state.user }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null, // Placeholder for user data
    };
  },
  methods: {
    logout() {
      // Send a request to the backend to log out the user
      axios
        .get('http://127.0.0.1:5000/logout') // Adjust the URL to match your Flask backend's logout route
        .then(() => {
          // After successfully logging out, redirect to the login page
          this.$router.push('/login');
        })
        .catch((error) => {
          // Handle logout error, if any
          console.error('Logout error:', error);
        });
    },
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
.profile-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.profile-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-field {
  margin-bottom: 15px;
  font-size: 18px;
}

.profile-field strong {
  font-weight: bold;
  color: #555;
}

.profile-field p {
  margin: 0;
}

.logout-button {
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #ff4444;
}
</style>
