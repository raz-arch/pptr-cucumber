const { Given, When, Then, Before, After } = require("cucumber");

Before(async function() {
  return this.launchBrowser();
});

After(async function() {
  return this.closeBrowser();
});
Given("user open login page",async function() {
return await this.visit();
});


When('user fill login form', function () {
    return await this.fillLoginForm();
});

When('user click submit button', function () {
    return await this.submitLogin();
});
Then('user expect to see application content', function () {
return await this.verifyLoginSuccess();    
});