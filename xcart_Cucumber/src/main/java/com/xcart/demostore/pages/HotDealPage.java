package com.xcart.demostore.pages;

import com.xcart.demostore.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;

public class HotDealPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    @FindBy(xpath = "//ul/li[2]/span[contains(text(),'Hot deals')]")
    WebElement _hotDealsTab;

    @FindBy(xpath = "//*[@id='header-area']/div[1]/div/div[4]/div/ul/li[2]/ul/li[1]/a/span")
    WebElement _saleLink;

    @FindBy(xpath = "//a[contains(text(),'Lace-Up Boots in Light Brown')]")
    WebElement _laceBootLink;

    @FindBy(xpath = "//h1[contains(text(),'Lace-Up Boots in Light Brown')]")
    WebElement _laceBootMessage;

    //This method will click on sale from hot deals
    public void clickOnHotDeal() {
        Reporter.log("clicking on sale from hot deals " + _hotDealsTab.toString() + "<br>");
        log.info("Clicking on sale from hot deals" + _hotDealsTab.toString());
        mouseHoverToElement(_hotDealsTab);
    }

    //This method clicks on Sale Link
    public void selectSaleLink()  {
        Reporter.log("Clicking on Sale Link " + _saleLink.toString() + "<br>");
        log.info("Clicking on Sale Link " + _saleLink.toString());
        // mouseHoverToElementAndClick();
        clickOnElement(_saleLink);
    }

    //This method clicks on Lace Boot
    public void clickOnLaceBootLink() {
        Reporter.log("Clicking on Lace Boot Link Text " + _laceBootLink.toString() + "<br>");
        log.info("Clicking on Lace Boot Link Text " + _laceBootLink.toString());
        clickOnElement(_laceBootLink);
    }

    // This method returns valued to verify text
    public String actualLaceBootMessage() {
        Reporter.log("Verifying Text Lace Boot Message " + _laceBootLink.toString() + "<br>");
        log.info("Verifying Text Lace Boot Message");
        return getTextFromElement(_laceBootLink);
    }
}
