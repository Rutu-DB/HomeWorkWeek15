package uk.co.ebay.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;
import uk.co.ebay.utility.Utility;

public class MacBookPage extends Utility {
    private static final Logger log = LogManager.getLogger(MacBookPage.class.getName());
    //private static final Logger log = LogManager.getLogger(NewPage.class.getName());

    @FindBy(xpath = "//span[contains(text(),'2020')]")
    WebElement _releaseYearCheckBox;

    @FindBy(xpath = "//span[contains(text(),'32 GB')]")
    WebElement _32gbRAMSizeCheckBox;

    @FindBy(xpath = "//span[contains(text(),'2 TB')]")
    WebElement _2TbHddCapacity;

    @FindBy(xpath = "//h2[contains(text(),'Buy it now')]")
    WebElement _buyItNowTab;

    @FindBy(xpath = "//span[@id='gh-ug']")
    WebElement _sortBestMatchDropdown;

    @FindBy(xpath = "//h3[contains(text(),'16-inch Apple MacBook Pro Touch Bar 2.4ghz 8-core i9 32gb 8TB SSD AMD 5600M 8GB')]")
    WebElement _selectMacBook;

    @FindBy(xpath = "//input[@id='qtyTextBox']")
    WebElement _quantityTextBox;

    @FindBy(xpath = "//a[@id='atcRedesignId_btn']")
    WebElement _addToCartBtn;

    @FindBy(xpath = "//span[contains(text(),'Go to basket')]")
    WebElement _goToBasketBtn;

    @FindBy(xpath = "//span//button[@data-test-id='cart-remove-item']")
    WebElement _removeItemLink;

    @FindBy(xpath = "//li//span[contains(text(),'Apple Laptops')]")
    WebElement _appleLaptopMessage;

    @FindBy(xpath = "//span[contains(text(),'You don't have any items in your basket.')]")
    WebElement _emptyBasketMessage;


    public void verifyAppleLaptopMessage() {
        Reporter.log("Verify Apple Laptop Message " + _appleLaptopMessage.toString() + "<br>");
        log.info("Verify Apple Laptop Message " + _appleLaptopMessage.toString());
        String actual = getTextFromElement(_appleLaptopMessage);
        Assert.assertEquals(actual, "Apple Laptops");
    }

    public void selectYear() {
        Reporter.log("click on Check Box " + _releaseYearCheckBox.toString() + "<br>");
        log.info("Clicks pn Check Box " + _releaseYearCheckBox.toString());
        clickOnElement(_releaseYearCheckBox);
    }

    public void clickOnRamSizeCheckBox() {
        Reporter.log("Click on RAM checkbox " + _32gbRAMSizeCheckBox.toString() + "<br>");
        log.info("Click on RAM Checkbox " + _32gbRAMSizeCheckBox.toString());
        clickOnElement(_32gbRAMSizeCheckBox);
    }

    public void clickOnHardDriveCheckBox() {
        Reporter.log("Click on HDD option " + _2TbHddCapacity.toString() + "<br>");
        log.info("Click on HDD option " + _2TbHddCapacity.toString());
        clickOnElement(_2TbHddCapacity);
    }

    public void clickOnBuyItNowTab() {
        Reporter.log("Click on Buy It Now Tab " + _buyItNowTab.toString() + "<br>");
        log.info("Click on Buy It Now Tab " + _buyItNowTab.toString());
        clickOnElement(_buyItNowTab);
    }

    public void sortOption() {
        Reporter.log("Sorts by Highest to Lowest " + _sortBestMatchDropdown.toString() + "<br>");
        log.info("Sorts by highest to Lowest " + _sortBestMatchDropdown.toString());
        clickOnElement(_sortBestMatchDropdown);
        //selectByIndexFromDropDown(_selectMacBook,4);
    }

    public void selectMacBook() {
        Reporter.log("Select MacBook " + _selectMacBook.toString() + "<br>");
        log.info("Select Mac Book " + _selectMacBook.toString());
        clickOnElement(_selectMacBook);
    }

    public void amendQty() {
        Reporter.log("Amend the Qty to 2 " + _quantityTextBox.toString() + "<br>");
        log.info("Amend the qty to 2 " + _quantityTextBox.toString());
        clickOnElement(_quantityTextBox);
        clearText(_quantityTextBox);
        sendTextToElement(_quantityTextBox, "2");
    }

    public void clickOnAddToCartBtn() {
        Reporter.log("Add to Cart Button " + _addToCartBtn.toString() + "<br>");
        log.info("Add to Cart Button " + _addToCartBtn.toString());
        clickOnElement(_addToCartBtn);
    }

    public void clickOnBasketBtn() {
        Reporter.log("Click on Basket Button " + _goToBasketBtn.toString() + "<br>");
        log.info("Click on Basket Button " + _goToBasketBtn.toString());
        clickOnElement(_goToBasketBtn);
    }

    public void clickOnRemoveItem() {
        Reporter.log("Click on Remove Item " + _removeItemLink.toString() + "<br>");
        log.info("Click on Remove Item " + _removeItemLink.toString());
        clickOnElement(_removeItemLink);
    }

    public void emptyBasketMessage(){
        String actual = getTextFromElement(_emptyBasketMessage);
        Assert.assertEquals(actual,"You don't have any items in your basket.");
    }

}


