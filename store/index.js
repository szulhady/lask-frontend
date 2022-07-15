import {SummaryCard, status} from '~/src/utils/class'
export const state = ()=>({
  summaryCard:[
    new SummaryCard('mdi-account', 'USERNAME', '2022123456', 'firstIcon'),
    // new SummaryCard('mdi-percent-outline', 'OVERALL', '90%', 'firstIcon'),
    new SummaryCard('mdi-clipboard-text-multiple-outline', 'SESSIONS', 10, 'secondIcon'),
    new SummaryCard('mdi-needle', 'ATTEMPTS', 200, 'fourthIcon'),
    new SummaryCard('mdi-bullseye', 'ACCURACY', '70%', 'thirdIcon')
  ],
  openDialogTraining:false,
  countAccurate:0,
  countAcceptable:0,
  countUnacceptable:0,
  reset:false,
  forceArray:[],
  timeArray:[],
  headers: [
    {
      text: "Date",
      align: "start",
      sortable: false,
      value: "date",
    },
    { text: "Attempts", value: "attempts" },
    { text: "Success", value: "success" },
    { text: "Acceptable", value: "acceptable" },
    { text: "Fail", value: "fail" },
    { text: "Success Rate", value: "rate" },
  ],
  status: [
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
    new status('10 Jan 2022', 60,20,20,20,'20%'),
  ],
})

export const mutations = {
  setOpenDialogTraining(state, payload){
    state.openDialogTraining=payload
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
    // return {username:"ali"}
  },

}