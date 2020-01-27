const reporter = require("cucumber-html-reporter")
const options = {
	// themes
	// 1) bootstrap 2) hierarchy 3) foundation 4) simple
	theme: "bootstrap",
	jsonFile: "cucumber_report.json",
    output: "cucumber-report.html",
    reportSuiteAsScenarios: true,
    launchReport: true
}
reporter.generate(options);
