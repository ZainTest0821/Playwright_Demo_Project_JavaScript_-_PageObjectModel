import { test, expect } from '@playwright/test'
import { HomePage } from './Pages/HomePage'
import { LoginPage } from './Pages/LoginPageofLuma'
import { NewLumaPageCollection } from './Pages/NewLumaPageCollectionPage'
import { Add_to_cart_product } from './Pages/Add_to_cart_product'


// Here We can use multiple 'test' block, but I have done it in one test
test('Add to cart product process test', async ({ page }) => {


    //Intialize the constructor first for all

    const Login = new LoginPage(page)
    const Home = new HomePage(page)
    const Newsearchpage = new NewLumaPageCollection(page)
    const Addtocart = new Add_to_cart_product(page)

    //Use go to URL page from Login Class

    await Login.gotologinpage()

    // Enter User name and password from login method direct

    await Login.login('zainsqa123@gmail.com', 'testuser@123')


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




    // Validate the title of New search page and use promisall method to make sure the item is ready 
    await Promise.all([

        Addtocart.validatetitle(),

    ]);

    //Scroll to element that we have to add in cart

    await Addtocart.scrolltoelement()

    // Click on scrolled element

    await Addtocart.clickonitem()

    // Validate the title of Search item 

    await Addtocart.validatetitle_search_result_item()

    // Select value for item size from '32, 33, 34, 36'
    await Addtocart.select_value_for_size("36")

    // Select Colour for item from 'Black, Blue, Red'
    await Addtocart.selectColor("Red")


    // Select Quantity
    await Addtocart.quantity("3")

    // Click on Add to Cart
    await Addtocart.addtocart()

    // Click on profile btn
    await Addtocart.profilebtn()

    // Click on Signout button

    await Addtocart.Signout()
})