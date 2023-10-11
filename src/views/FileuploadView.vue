<template>
  <div class="upload-container">
    <div class="upload-form" v-if="currentUpload === 'file'">
      <form @submit.prevent="addFile">
        <label for="fileInput" class="file-label">Upload a CSV File:</label>
        <input
          id="fileInput"
          type="file"
          ref="fileInput"
          accept=".csv"
          @change="handleFileChange"
          class="file-input"
        />
        <div class="multiselect-container">
          <label class="multiselect-label">Select Roles:</label>
          <Multiselect
            v-model="selected"
            mode="tags"
            :close-on-select="false"
            :options="options"
            class="multiselect"
          />
        </div>
        <button type="submit" class="upload-button">Upload CSV File</button>
      </form>
      <button @click="toggleUpload('username')" class="switch-button">Switch to Username Upload</button>
    </div>

    <div class="upload-form" v-if="currentUpload === 'username'">
      <form @submit.prevent="addFile">
        <label for="fileInput" class="file-label">Upload a CSV File:</label>
        <input
          id="fileInput"
          type="file"
          ref="fileInput"
          accept=".csv"
          @change="handleFileChange"
          class="file-input"
        />
        <div class="multiselect-container">
          <label class="multiselect-label">Select Usernames:</label>
          <Multiselect
            v-model="selectedUsername"
            mode="tags"
            :close-on-select="false"
            :options="userDataOptions"
            class="multiselect"
          />
        </div>
        <button type="submit" class="upload-button">Upload CSV File</button>
      </form>
      <button @click="toggleUpload('file')" class="switch-button">Switch to Role Upload</button>
    </div>

    <div v-if="uploadSuccess" class="success-alert">
      File uploaded successfully!
    </div>
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'
import axios from 'axios';
import store from '@/store/index.js'
export default {
  components: {
      Multiselect,
    },
  data() {
    return {
      currentUpload: "file",
      userData: {},
      fileList: [],
      userDataOptions: [],
      newFileName: "",
      selectedFile: null,
        selected: null,
        uploadSuccess: false,
        selectedUsername: null,
      options: [
        'admin',
        'user',
      ]
    };
  },
  methods: {
    toggleUpload(uploadType) {
      this.currentUpload = uploadType;
    },
    addFile() {
        if (this.selectedFile) {
        // Create a FormData object to send the file to the backend
        const formData = new FormData();
        formData.append("file", this.selectedFile);
        formData.append("roles", JSON.stringify(this.selected));
        formData.append("username", JSON.stringify(this.selectedUsername));
        formData.append("owner" , JSON.stringify(store.state.username))
        axios
          .post("http://127.0.0.1:5000/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            // Handle the response as needed (e.g., display a success message)
            console.log(response.data.message);
            this.uploadSuccess = true;
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
        }
    },
     handleFileChange(event) {
      // Get the selected file from the input field
      this.selectedFile = event.target.files[0];
    },
     fetchFilePermissions() {
      axios
        .get('/file-permissions') // Adjust the API endpoint to fetch file permissions
        .then((response) => {
          this.filePermissions = response.data;
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    },
    fetchUserPermissions() {
       // Fetch the JSON data from your Flask API
    axios.get('http://127.0.0.1:5000/get-username')
      .then((response) => {
        this.userData = response.data;
        this.userDataOptions = Object.keys(this.userData);
      })
      .catch((error) => {
        console.error(error);
      });
    },
  },
  mounted() {
        this.fetchUserPermissions(); 
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>
<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.upload-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
}

.file-label {
  font-size: 18px;
  margin-bottom: 10px;
}

.file-input {
  margin-bottom: 10px;
}

.multiselect-container {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  position: relative;
  right: 11px;
}

.multiselect-label {
  font-size: 16px;
}

.multiselect {
  width: 100%;
  margin-top: 10px;
}

.upload-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  position: relative;
  left: 120px;
}

.switch-button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.success-alert {
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
