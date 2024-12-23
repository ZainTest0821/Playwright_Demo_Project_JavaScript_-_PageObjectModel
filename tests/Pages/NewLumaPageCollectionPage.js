exports.NewLumaPageCollection=class NewLumaPageCollection{

    constructor(page){


        //Intialize this page as constructor
        this.page=page

        //Expected title for this page

        this.expected_title = 'New Luma Yoga Collection'

        // Scroll to end for selecting value from dropdown

        this.scroll_to_end = page.locator("(//select[@id='limiter' and @data-role='limiter'])[2]")

    }


    //Perform Actions

     //Validate the title of NewLumaPageCollection

     async validatetitle(){
        
             // Wait for the page to fully load before getting the title
             await this.page.waitForLoadState('domcontentloaded',{timeout: 100000});

        const actual_title = await this.page.title()
        if( actual_title !== this.expected_title){

            throw new Error (`Page title is not as expected. Expected: "${this.expected_title}", Actual: "${this.actual_title}"`)
        }

    }

        // scroll to element in the end

        async scrolltoelement(){

            const elementHandle= await this.scroll_to_end.elementHandle()
            if (elementHandle){

                await elementHandle.scrollIntoViewIfNeeded()
            
                }else{

                    throw new Error(`Element Not Found: ${this.scroll_to_end}`);
                }
            }
        

            //Click on List Element

            async clickondropdownelement(){

                await this.scroll_to_end.click()

            }

            // Select value from dropdown

            async select_option(value){

                await this.scroll_to_end.selectOption(value)


            }

}
