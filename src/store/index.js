
import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    about: '',
    leaveType: '',
    recipient: '',
    employeeName: '',
    employeePosition: '',
    employeeDepartment: '',
    startDate: '',
    endDate: '',
    sumday: '',
    paststartDate: '',
    pastendDate: '',
    pastsumday: '',
    phone: '',
    sup: '',
    supdepart: '',
    date:'',
    isAuthenticated: false,
    user: null,
    username: null,
    serie: null,
  },
  mutations: {
    updateSerie(state, newSerie){
      state.serie = newSerie;
    },
    updateDate(state, newDate){
      state.date = newDate;
    },
    updateAbout(state, newAbout) {
      state.about = newAbout;
    },
    updateEmployeeName(state, newName) {
      state.employeeName = newName;
    },
    updateEmployeePosition(state, newPosition) {
      state.employeePosition = newPosition;
    },
    updateEmployeeDepartment(state, newDepartment) {
      state.employeeDepartment = newDepartment;
    },
    updateLeaveType(state, newLeaveType) {
      state.leaveType = newLeaveType;
    },
    updateRecipient(state, newRecipient) {
      state.recipient = newRecipient;
    },
    updateStartDate(state, newStartDate) {
      state.startDate = newStartDate;
    },
    updateEndDate(state, newEndDate) {
      state.endDate = newEndDate;
    },
    updateSumDay(state, newSumDay) {
      state.sumday = newSumDay;
    },
    updatePastStartDate(state, newPastStartDate) {
      state.paststartDate = newPastStartDate;
    },
    updatePastEndDate(state, newPastEndDate) {
      state.pastendDate = newPastEndDate;
    },
    updatePastSumDay(state, newPastSumDay) {
      state.pastsumday = newPastSumDay;
    },
    updatePhone(state, newPhone) {
      state.phone = newPhone;
    },
    updateSup(state, newSup) {
      state.sup = newSup;
    },
    updateSupDepart(state, newSupDepart) {
      state.supdepart = newSupDepart;
    },
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      // Store the authentication state in localStorage
      localStorage.setItem('isAuthenticated', isAuthenticated ? '1' : '0');
    },
    SET_USER(state, user) {
      state.user = user;
      // Store the user in localStorage
      localStorage.setItem('user',user);
    },
    SET_USERNAME(state, username) {
      state.username = username;
      // Store the username in localStorage
      localStorage.setItem('username', username);
    },
  },
  actions: {  
    login({ commit }, user ) {
    // Logic for user login, set isAuthenticated and user if login is successful
    commit('SET_AUTHENTICATED', true);
    commit('SET_USER', user);
  },
  setusername({ commit }, username ) {
    commit('SET_USERNAME', username);
  },
  logout({ commit }) {
    // Logic for user logout, set isAuthenticated and user to null
    commit('SET_AUTHENTICATED', false);
    commit('SET_USER', null);
    commit('SET_USERNAME', null);
  },},
  getters: { 
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    username: (state) => state.username,
  },
    strict: process.env.NODE_ENV !== 'production',
});
