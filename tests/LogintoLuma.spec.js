import {test, expect} from '@playwright/test';

import {LoginPage} from './Pages/LoginPageofLuma'

test('This is Login Test', async ({page}) => {

    //Intialize the Login Page

    const Login = new LoginPage(page)


    //Go to Login Page
   await Login.gotologinpage()

   await Login.validatetitle()

   //Enter UserName and password

   await Login.login('zainsqa123@gmail.com','testuser@123')

   // Click on Login btn

   await Login.clickonloginbtn()

   //After that, we want to show the message that the test has been passed

   console.log('Login test are completed successfully.')


})