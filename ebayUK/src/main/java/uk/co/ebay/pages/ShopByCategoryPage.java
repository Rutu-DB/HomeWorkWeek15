package uk.co.ebay.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;
import uk.co.ebay.utility.Utility;

public class ShopByCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(ShopByCategoryPage.class.getName());

    @FindBy(xpath = "//div[@class='gh-menu']//a[@title='My eBay']")
    WebElement _eBayTabMessage;

    @FindBy(xpath = "//button[@id='gh-shop-a']")
    WebElement _shopByCategoryBtn;

    @FindBy(xpath = "//a[contains(text(),'Computers & tablets')]")
    WebElement _computerAndTabletsLink;

    @FindBy(xpath = "//li//span[contains(text(),'Computers, Tablets & Network Hardware')]")
    WebElement _computerAndTabletsMessage;

    @FindBy(xpath = "//div[contains(text(),'Apple Laptops')]")
    WebElement _appleLaptopLink;


    public void eBayMessageTabMessage() {
        Reporter.log("Verify Message " + _eBayTabMessage.toString() + "<br>");
        log.info("Verify Message " + _eBayTabMessage.toString());
        String actual = getTextFromElement(_eBayTabMessage);
        Assert.assertEquals(actual, "My eBay");
    }

    public void clickOnShopByCategoryLink() {
        Reporter.log("Click on Shop By Category Link " + _shopByCategoryBtn.toString() + "<br>");
        log.info("Click on Shop By Category Link " + _shopByCategoryBtn.toString());
        clickOnElement(_shopByCategoryBtn);
    }

    public void clickOnComputerAndTabletLink() {
        Reporter.log("Click Computer And Tablet Link " + _computerAndTabletsLink.toString() + "<br>");
        log.info("Click on Computer And Tablet  Link " + _computerAndTabletsLink.toString());
        clickOnElement(_computerAndTabletsLink);
    }

    public void verifyComputerAndTabletMessage() {
        Reporter.log("Verify Computer and Tablet Message " + _computerAndTabletsMessage.toString() + "<br>");
        log.info("Verify Computer And Tablet Message " + _computerAndTabletsMessage.toString());
        String actual = getTextFromElement(_computerAndTabletsMessage);
        Assert.assertEquals(actual, "Computers, Tablets & Network Hardware");
    }

    public void clickOnAppleLaptopLink() {
        Reporter.log("Click On Apple Laptop Link " + _appleLaptopLink.toString() + "<br>");
        log.info("Click on Apple Laptop Linlk " + _appleLaptopLink.toString());
        clickOnElement(_appleLaptopLink);
    }
}
