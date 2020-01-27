const { Given, When, Then, Before, After } = require("cucumber");
var {setDefaultTimeout} = require('cucumber');

setDefaultTimeout(60 * 1000);

Before(async function() {
  return this.launchBrowser();
});

After(async function() {
  return this.closeBrowser();
});
Given("user open login page",async function() {
return await this.visit();
});


When('user fill login form', async function () {
    return await this.fillLoginForm();
});

When('user click submit button',async function () {
    return await this.submitLogin();
});
Then('user expect to see application content',async function () {
return await this.verifyLoginSuccess();    
});