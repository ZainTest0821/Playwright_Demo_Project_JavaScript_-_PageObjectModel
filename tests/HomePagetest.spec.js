import{test, expect, devices} from '@playwright/test'
import {HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPageofLuma'


//Using built in devices for Cross Platfrom testing
// const device = devices['iPhone 12']

// test.use({
//     ...device,
//   });

test('This is HomePage Test', async ({page}) =>{

//Intialize the constructor first for both Login and HomePage

const Login = new LoginPage(page)
const Home = new HomePage(page)


//Use go to URL page from Login Class

await Login.gotologinpage()

// Enter User name and password from login method direct

await Login.login('zainsqa123@gmail.com','testuser@123')


// Click on Signin button

await Login.clickonloginbtn()


//Validadte the HomePage Title
await Home.validatetitle()

// Now we have to scroll to element from HomePage

await Home.scrolltoelement();

// Click on button
await Home.clickonshopnow();
})
