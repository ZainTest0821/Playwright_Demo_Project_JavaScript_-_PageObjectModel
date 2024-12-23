//Declare to return it into NewLumaPageCollection
const{NewLumaPageCollection} = require ('./NewLumaPageCollectionPage')

exports.HomePage = class HomePage{
    constructor(page) {

        //Initalizing this page as constructor
        this.page = page

        // Expected title for validation the title

        this.expected_title = 'Home Page'


        //Element locator for scroll

        this.element_to_Scroll= page.locator("//span[text()='Shop New Yoga']")

    }


        //Perform Actions

        //Validate the title of HomePage

        async validatetitle(){

             // Wait for the page to fully load before getting the title
        await this.page.waitForLoadState('domcontentloaded',{timeout: 100000});

            const actual_title = await this.page.title()
            if( actual_title !== this.expected_title){

                throw new Error (`Page title is not as expected. Expected: "${this.expected_title}", Actual: "${this.actual_title}"`)
            }


        }

        async scrolltoelement(){

            const elementHandle= await this.element_to_Scroll.elementHandle()
            if (elementHandle){

                await elementHandle.scrollIntoViewIfNeeded()
            
                }else{

                    throw new Error(`Element Not Found: ${this.element_to_Scroll}`);
                }
            }

            async clickonshopnow(){

                await this.element_to_Scroll.click()


                // Use Page Chaining technique to return 

                return new NewLumaPageCollection(this.page)

            }
        }


