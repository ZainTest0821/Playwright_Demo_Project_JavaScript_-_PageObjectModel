exports.Add_to_cart_product = class Add_to_cart_product {

    constructor(page) {


        //Intialize this page as constructor
        this.page = page

        //Expected title for this page

        this.expected_title = 'New Luma Yoga Collection'

        // Expected title for search item
        this.expected_title_search_item = 'Livingston All-Purpose Tight'

        // Scroll to element that we have to add it into cart

        this.scroll_to_element = page.locator("//img[@alt='Livingston All-Purpose Tight']")

        // Quantity field
        this.quantity_field= page.locator("//input[@title='Qty']")

        // Add to Cart button

        this.add_to_cart= page.locator("//span[text()='Add to Cart']")

        // Locator for Profile button

        this.profile= page.locator("(//button[@type='button' and @class='action switch' and @data-action='customer-menu-toggle'])[1]")

        // Click on Signout button

        this.sign_out=page.locator("(//a[@href='https://magento.softwaretestingboard.com/customer/account/logout/' and contains(text(), 'Sign Out')])[1]")
    }

    //Perform Actions

    //Validate the title of the search page

    async validatetitle() {
        // wait for element to load proper
        await this.page.waitForLoadState('load')

       
        const actual_title = await this.page.title()
        if (actual_title !== this.expected_title) {

            throw new Error(`Page title is not as expected. Expected: "${this.expected_title}", Actual: "${this.actual_title}"`)
        }

    }

    // scroll to element in the end

    async scrolltoelement() {

        const elementHandle = await this.scroll_to_element.elementHandle()
        if (elementHandle) {

            await elementHandle.scrollIntoViewIfNeeded()

        } else {

            throw new Error(`Element Not Found: ${this.scroll_to_element}`);
        }
    }


    //Click on item and click

    async clickonitem() {

        await this.scroll_to_element.click()

    }


    // Validate the title of searched item

    async validatetitle_search_result_item() {


         // wait for element to load proper
         await this.page.waitForLoadState('load')
        const actual_title = await this.page.title()
        if (actual_title !== this.expected_title_search_item) {

            throw new Error(`Page title is not as expected. Expected: "${this.expected_title_search_item}", Actual: "${this.actual_title}"`)
        }




    }

    // Select value of size

    async select_value_for_size(value) {
        const sizeLocator = this.page.locator(`div[aria-label="${value}"]`);
        const isVisible = await sizeLocator.isVisible();

        if (isVisible) {
            await sizeLocator.click();
        } else {
            throw new Error(`Size "${value}" is not available or not visible.`);
        }
    }

    // Select Colour of item

    async selectColor(value) {
        const colorLocator = this.page.locator(`div[aria-label="${value}"]`);
        const isVisible = await colorLocator.isVisible();

        if (isVisible) {
            await colorLocator.click();
        } else {
            throw new Error(`Color "${value}" is not available or not visible.`);
        }

    }

    // Enter Quantity 

    async quantity(value){

        await this.quantity_field.fill(value)

    }

    // Click on Add to cart button

    async addtocart(){

        await this.add_to_cart.click()
    }


    // Click on profile button

    async profilebtn(){
        await this.profile.click()
    }

    // Click on Signout button
    async Signout(){
        await this.sign_out.click()
    }




}