package uk.co.ebay.stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import uk.co.ebay.pages.RegisterPage;

public class RegisterStepDef {
    RegisterPage registerPage = new RegisterPage();

    @Given("^I am on ebay Home Page$")
    public void iAmOnEbayHomePage() {
    registerPage.eBayMessageTabMessage();
    }

    @And("^I click on Sign In Link$")
    public void iClickOnSignInLink() {
        registerPage.clickOnSignInLink();
    }

    @And("^I click on Not U Link$")
    public void iClickOnNotULink() {
    registerPage.clickOnNotULink();
    }
}
