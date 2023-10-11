<template>
  <div class="add-user-container">
    <form @submit.prevent="addUser" class="add-user-form">
      <div class="form-group">
        <label for="username" class="form-label">Username:</label>
        <input
          type="text"
          id="username"
          v-model="newUser.username"
          required
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          id="password"
          v-model="newUser.password"
          required
          class="form-input"
        />
      </div>
      <div class="form-group">
        <label for="role" class="form-label">Role:</label>
        <select
          id="role"
          v-model="newUser.role"
          required
          class="form-select"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Add User</button>
    </form>
    <div v-if="uploadSuccess" class="success-alert">
      User added successfully!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        username: '',
        password: '',
        role: '',
      },
      message: '',
    };
  },
  methods: {
    addUser() {
      // Send a POST request to your Flask API to add the user
      fetch('http://127.0.0.1:5000/add_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.newUser),
      })
        .then((response) => response.json())
        .then((data) => {
          this.message = data.message;
          // Clear the form after successful user addition
          if (data.message === 'User added successfully') {
            this.newUser = {
              username: '',
              password: '',
              role: '',
            };
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          this.message = 'An error occurred.';
        });
    },
  },
};
</script>

<style scoped>
.add-user-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.add-user-form {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-size: 16px;
}

.form-input{
  display: flex;
  position: relative;
  right: 10.75px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

}
.form-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.success-alert {
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
}
</style>

