<template>
  <div class="file-system">
    <ul>
      <li v-for="(file, fileName) in filteredFileList" :key="fileName">
        <div class="file-item">
          <div class="file-info">
            <span class="file-name">{{ fileName }}</span>
            <div class="button-group">
              <button @click="fetchCSV(fileName)" class="btn">Fetch CSV</button>
              <button @click="saveEditedCSV(fileName)" class="btn save-btn">Save Changes</button>
              <button @click="toggleTable(fileName)" class="btn close-btn">Close CSV</button>
              <button v-if="isOwner(fileName)" @click="deleteFile(fileName)" class="btn delete-btn">Delete File</button>
            </div>
          </div>
          <div class="file-contents" v-if="fileName == filenameF">
            <div class="table-container">
              <table class="table">
                <tbody>
                  <tr v-for="(row, rowIndex) in csvData" :key="rowIndex">
                    <td v-for="(value, columnIndex) in row" :key="columnIndex">
                      <input v-model="csvData[rowIndex][columnIndex]" @input="updateCSV" class="cell-input" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Papa from 'papaparse'; 
import store from '@/store/index.js'

export default {
  data() {
    return {
      filePermissions: {},
      csvData: null,
      filename: "",
      filenameF: "",
      showTable: false,
    };
  },
  computed: {
    filteredFileList() {
     const filteredFiles = {};
for (const [fileName, permissions] of Object.entries(this.filePermissions)) {
  if (permissions.user.includes(store.state.user) || permissions.username.includes(store.state.username)) {
    filteredFiles[fileName] = permissions;
  }
}
return filteredFiles;
    },
  },
  methods: {
    // Fetch file permissions on component mount
    fetchFilePermissions() {
      axios
        .get('http://127.0.0.1:5000/file-permissions') // Adjust the API endpoint to fetch file permissions
        .then((response) => {
          this.filePermissions = response.data;
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    },
     fetchCSV(filename) {
      // Send the filename as a parameter in the GET request
      axios.get(`http://127.0.0.1:5000/get-csv?filename=${filename}`)
        .then((response) => {
           Papa.parse(response.data.csvData, {
            dynamicTyping: true,
            complete: (results) => {
              this.csvData = results.data;
              this.filenameF = filename;
            },
          });
          console.log(this.csvData)
        })
        .catch((error) => {
          console.error(error);
        });
    },
    saveEditedCSV(fileName) {
      // Send the edited data to the backend
      const editedData = Papa.unparse(this.csvData, { header: true }); // Convert edited data back to CSV string
      axios
        .post(`http://127.0.0.1:5000/save-edited-csv?filename=${fileName}`, { editedData })
        .then((response) => {
          console.log(response.data.message);
          window.alert(response.data.message);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteFile(fileName) {
      // Send a request to delete the file
      axios
        .delete(`http://127.0.0.1:5000/delete-file?filename=${fileName}`)
        .then((response) => {
          console.log(response.data.message);
          window.alert(response.data.message);
          // Remove the file from the local data when deleted
          delete this.filePermissions[fileName];
        })
        .catch((error) => {
          console.error(error);
        });
    },
      toggleTable() {
        // Clear CSV data and reset filenameF if hiding the table
        this.csvData = null;
        this.filenameF = "";
    },
     isOwner(fileName) {
      return store.state.username == this.filePermissions[fileName].owner ;
    },
  },

   mounted() {
    this.fetchFilePermissions(); // Fetch file permissions when the component is mounted
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.file-system {
  font-family: Arial, sans-serif;
}

.file-item {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
}

.file-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
   position: relative;
  top: 5px;
  margin-bottom: 10px;
}

.file-name {
  font-size: 18px;
  font-weight: bold;
  align-items: center;
}

.button-group {
  display: flex;
  position: relative;
}

.btn {
  padding: 6px 12px;
  margin-right: 10px;
  background-color: #42b983;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn.save-btn {
  background-color: #007bff;
}

.btn:hover {
  background-color: #34a864;
}

.table-container {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  align-content: center;
}

.cell-input {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.file-contents {
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
}

/* Style for the "Close Table" button */
.close-btn {
  background-color: #ff0000; /* Red background color */
  color: #fff; /* White font color */
}

/* Hover effect for the "Close Table" button */
.close-btn:hover {
  background-color: #cc0000; /* Darker red on hover */
}

/* Add more custom styling as needed */
</style>