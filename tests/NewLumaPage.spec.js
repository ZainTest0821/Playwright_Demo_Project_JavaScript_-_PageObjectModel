import{test, expect} from '@playwright/test'
import {HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPageofLuma'
import { NewLumaPageCollection } from './Pages/NewLumaPageCollectionPage'


test('This is testing of New Luma Page', async ({page}) => {

    //Intialize the constructor first for all

const Login = new LoginPage(page)
const Home = new HomePage(page)
const Newsearchpage = new NewLumaPageCollection(page)

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


// Validate the title of NewLumaPage

await Newsearchpage.validatetitle()

// Scroll to element

await Newsearchpage.scrolltoelement()


// click on scrolled element

await Newsearchpage.clickondropdownelement()

// Select value from dropdown by value

await Newsearchpage.select_option('36')

})
