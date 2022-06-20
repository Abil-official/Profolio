const { createApp } = Vue
createApp({
  data() {
    return {
        card_title: 'Personal Details',
      fname: 'First Name',
      lname: 'Last Name',
      profession: 'Web Developer',
      experience: '1 year as Jr.devOps',
      knowledge: 'HTML, CSS, Bootstrap, Php, Laravel, MySql, JS, Flutter, VueJS',
      proficiency: 'HTML, CSS, Bootstrap, Laravel, MySql',
      association: 'WolvesTech Nepal, Bhugolpark, Encodes technology',
      work: 'E-commerce Mobile App, E-commerce Web App, Attendance Management System, Profolio Sites, Maintenance on BP'
    }
  }
}).mount('#app')
