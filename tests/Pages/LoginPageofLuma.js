//Declare Dashboard from dashboard page to add the return the login page to dashboard page
const {HomePage}= require ('./HomePage')

exports.LoginPage = class LoginPage {

    constructor(page) {

        //Intializing this page as constructor

        this.page = page

        //Expected title for title validation

        this.expected_title = 'Customer Login'


        //Locator of Username text boxes
        this.username_textbox = page.locator("//input[@name='login[username]']")

        //Locator for Password text boxes
        this.password_textbox = page.locator("//input[@name='login[password]']")

        //Locator for Login Button
        this.Login_btn = page.getByRole('button', { name: 'Sign In' })




    }

    //Now we have to add Actions here 


    // Navigate to url
    async gotologinpage() {

        await this.page.goto('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');

    }



    //First validate the title of page
    async validatetitle() {
        const actualtitle = await this.page.title()
        if (actualtitle !== this.expected_title) {
            throw new Error(`Page title is not as epxected,Check the title and try again. Expected: "${this.expected_title}", Actual: "${actualtitle}"`)
        }

    }


    //For this, we are creating only a single method of 'login' where we perform all the actions

    async login(username, password) {

        await this.username_textbox.fill(username)

        //Password
        await this.password_textbox.fill(password)


    }

    async clickonloginbtn() {

        // Login btn click

        await this.Login_btn.click()


        // Return dashboard page 
        return new HomePage(this.page)

    }

}
