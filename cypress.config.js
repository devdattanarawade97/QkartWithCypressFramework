const { defineConfig } = require("cypress");

module.exports = defineConfig({
	
  "reporter": "mochawesome",
  "reporterOptions" :{
	  "reportDir" :"cypress/reports/mochawesome_report",
	  "overrite" :""
  },
	  	  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
