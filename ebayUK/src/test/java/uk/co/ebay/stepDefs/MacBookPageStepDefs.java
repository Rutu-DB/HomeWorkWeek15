package uk.co.ebay.stepDefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ebay.pages.MacBookPage;
import uk.co.ebay.pages.ShopByCategoryPage;

public class MacBookPageStepDefs {
    MacBookPage macBookPage=new MacBookPage();
    ShopByCategoryPage shopByCategoryPage = new ShopByCategoryPage();

    @Given("^I am on Apple Laptop Page$")
    public void iAmOnAppleLaptopPage() {
        shopByCategoryPage.clickOnShopByCategoryLink();
        shopByCategoryPage.clickOnComputerAndTabletLink();
        shopByCategoryPage.clickOnAppleLaptopLink();
        macBookPage.verifyAppleLaptopMessage();
    }

    @And("^I select Release Year$")
    public void iSelectReleaseYear() {
        macBookPage.selectYear();
    }

    @And("^I Click On RAM check Box$")
    public void iClickOnRAMCheckBox() {
        macBookPage.clickOnRamSizeCheckBox();
    }

    @And("^I click On Hard Drive Check Box$")
    public void iClickOnHardDriveCheckBox() {
        macBookPage.clickOnHardDriveCheckBox();
    }

    @And("^I click on Buy It Now Tab$")
    public void iClickOnBuyItNowTab() {
        macBookPage.clickOnBuyItNowTab();
    }

    @And("^I Sort Highest to Lowest by Price option$")
    public void iSortHighestToLowestByPriceOption() {
    macBookPage.sortOption();
    }

    @And("^I select MacBook$")
    public void iSelectMacBook() {
        macBookPage.selectMacBook();
    }

    @And("^I amend Qty to(\\d+)$")
    public void iAmendQtyTo() {
    macBookPage.amendQty();
    }

    @And("^I click on Add to Cart Button$")
    public void iClickOnAddToCartButton() {
    macBookPage.clickOnAddToCartBtn();
    }

    @Then("^I click on Go To Cart Button$")
    public void iClickOnGoToCartButton() {
        macBookPage.clickOnBasketBtn();
    }

    @When("^I click on Remove Link$")
    public void iClickOnRemoveLink() {
        macBookPage.clickOnRemoveItem();
    }

    @Then("^I successfully empty the basket$")
    public void iSuccessfullyEmptyTheBasket() {
    macBookPage.emptyBasketMessage();
    }
}
