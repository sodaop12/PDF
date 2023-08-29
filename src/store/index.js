
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
  },
  mutations: {
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
  },
  actions: {},
  getters: {},
});
