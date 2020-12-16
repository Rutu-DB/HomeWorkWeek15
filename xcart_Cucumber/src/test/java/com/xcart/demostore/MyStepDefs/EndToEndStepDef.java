package com.xcart.demostore.MyStepDefs;

import com.xcart.demostore.pages.HotDealPage;
import com.xcart.demostore.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class EndToEndStepDef {
    HotDealPage hotDealPage = new HotDealPage();
    SignInPage signInPage = new SignInPage();

    @Given("^I am on xcart Home Page$")
    public void iAmOnXcartHomePage() {
        signInPage.set_verifyMessage();
    }

    @And("^I click on Hot Deal Link$")
    public void iClickOnHotDealLink() {
        hotDealPage.clickOnHotDeal();
    }

    @And("^I click on Sale Link$")
    public void iClickOnSaleLink() {
        hotDealPage.selectSaleLink();
    }

    @And("^I click on Lace Boot Link$")
    public void iClickOnLaceBootLink() {
        hotDealPage.clickOnLaceBootLink();
    }

    @Then("^I successfully navigate to Lace-Up Boot Link$")
    public void iSuccessfullyNavigateToLaceUpBootLink() {
    hotDealPage.actualLaceBootMessage();
    }
}
