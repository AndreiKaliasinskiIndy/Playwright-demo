module.exports = {
    verbose: true,
    preset: "jest-playwright-preset",
    testMatch: ["**/?(*.)+(spec|test).+(js)"],
    maxWorkers: 1,
    testEnvironmentOptions:{
    "jest-playwright":{
        browsers: ["chromium"/*, "firefox", "webkit"*/],
        exitOnPageError: false, 
        //skipInitialization: true,
        launchOptions: {
          headless: false,
          slowMo: 1000
        }
     }
    },
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "report.html"
        }]
      ]
};