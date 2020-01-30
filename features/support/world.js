const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

class CustomWorld {
	async launchBrowser() {
        this.browser = await puppeteer.launch({ headless: false,
            slowMo: 0,
            args:[
                '--start-maximized'
            ]
             })
        this.page = await this.browser.newPage()
        await this.page.setViewport({
            height: 768,
            width: 1366
        })
	}
	async closeBrowser() {
		await this.browser.close()
	}
	async visit() {
		await this.page.goto('http://zero.webappsecurity.com/login.html')
	}
	async fillLoginForm() {
		await this.page.waitForSelector('#login_form')
		await this.page.type('#user_login', 'username')
		await this.page.type('#user_password', 'password')
	}
	async submitLogin() {
		await this.page.click('.btn-primary')
	}
	async verifyLoginSuccess() {
		await this.page.waitForSelector('#account_summary_tab')
	}
}

setWorldConstructor(CustomWorld)
