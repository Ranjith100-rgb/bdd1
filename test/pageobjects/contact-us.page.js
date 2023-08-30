import BasePage from "./BasePage.js";
import RandomData from "../datagenerator.js"

class ContactUsPage extends BasePage
{
    open ()
    {
        return super.open("Contact-Us/contactus.html")
    }

    get firstNameTextfield()
    {
        return $('//input[@name="first_name"]');
    }

    get lastNameTextfield()
    {
        return $('//input[@name="last_name"]')
    }

    get emailaddressTextfield()
    {
        return $('//input[@name="email"]')
    }

    get commentsTextArea()
    {
        return $('//textarea[@name="message"]')
    }

    async submitButton(firstname,lastname)
    {
        await this.firstNameTextfield.setValue(firstname);
        await this.lastNameTextfield.setValue(lastname);
        await this.emailaddressTextfield.setValue("Autoemail_"+RandomData.randomDataGenerator+"@gmail.com");
        await this.commentsTextArea.setValue("Random data"+RandomData.randomDataGenerator);
        browser.pause(3000);
    }
}

export default new ContactUsPage();