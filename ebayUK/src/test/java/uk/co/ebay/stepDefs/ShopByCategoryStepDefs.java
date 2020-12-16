package uk.co.ebay.stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ebay.pages.ShopByCategoryPage;

public class ShopByCategoryStepDefs {
    ShopByCategoryPage shopByCategoryPage = new ShopByCategoryPage();

    @Given("^I am on eBay Home Page$")
    public void iAmOnEBayHomePage() {
        shopByCategoryPage.eBayMessageTabMessage();
    }

    @And("^I click on Shop By Category Link$")
    public void iClickOnShopByCategoryLink() {
        shopByCategoryPage.clickOnShopByCategoryLink();
    }

    @When("^I click on Computer And Tablet Link$")
    public void iClickOnComputerAndTabletLink() {
    shopByCategoryPage.clickOnComputerAndTabletLink();
    }

    @Then("^I navigate to Computer Tablet And Network Hardware Page$")
    public void iNavigateToComputerTabletAndNetworkHardwarePage() {
        shopByCategoryPage.verifyComputerAndTabletMessage();
    }

    @When("^I click on Apple Laptop Link$")
    public void iClickOnAppleLaptopLink() {
    shopByCategoryPage.clickOnAppleLaptopLink();
    }

    @Then("^I navigate to Apple Laptop Page$")
    public void iNavigateToAppleLaptopPage() {

    }
}
