const { defineConfig } = require("cypress");



module.exports = defineConfig({
  projectId: "fcu6q7",
  "video":false,

  e2e: {
    //baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
 
 
});
