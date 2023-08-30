import contactUsPage from "../pageobjects/contact-us.page.js";

describe('accessing contact us page', () => {

    beforeEach(async() => {
        await browser.maximizeWindow();
        await contactUsPage.open("Contact-Us/contactus.html");
    });
    it('using pom design pattern',async () => {
        await contactUsPage.submitButton("Ranjith","B");
        
    });
    
});