package uk.co.ebay.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;
import uk.co.ebay.utility.Utility;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());
    @FindBy(xpath = "//div[@class='gh-menu']//a[@title='My eBay']")
    WebElement _eBayTabMessage;

    @FindBy(xpath = "//span[@id='gh-ug']//a[contains(text(),'Sign in')]")
    WebElement _signInLink;

    @FindBy(xpath = "//a[@id='switch-account-anchor']")
    WebElement _notULink;

    @FindBy(xpath = "//a[@id='create-account-link']")
    WebElement _createAnAccountLink;

    @FindBy(xpath = "//input[@id='firstname']")
    WebElement _firstNameField;

    @FindBy(xpath = "//input[@id='lastname']")
    WebElement _surnameField;

    @FindBy(xpath = "//input[@id='email']")
    WebElement _emailField;

    @FindBy(xpath = "//input[@id='PASSWORD']")
    WebElement _passwordField;

    @FindBy(xpath = "//span[@class='checkbox gspr chk-off']")
    WebElement _showCheckBox;

    @FindBy(xpath = "//button[@id='ppaFormSbtBtn']")
    WebElement _registerBtn;

    public void eBayMessageTabMessage(){
        Reporter.log("Verify Message " + _eBayTabMessage.toString() + "<br>");
        log.info("Verify Message " + _eBayTabMessage.toString());
        String actual = getTextFromElement(_eBayTabMessage);
        Assert.assertEquals(actual, "My eBay");
    }

    public void clickOnSignInLink() {
        Reporter.log("Clicks on Sign In Link " + _signInLink.toString() + "<br>");
        log.info("Clicks on Sign In Link " + _signInLink.toString());
        clickOnElement(_signInLink);
    }

    public void clickOnNotULink() {
        Reporter.log("Clicks on Not U Link " + _notULink.toString() + "<br>");
        log.info("Clicks on Not U Link " + _notULink.toString());
        clickOnElement(_notULink);
    }

    public void clickOnCreateAnAccountLink() {
        Reporter.log("Clicks on Create An Account Link " + _createAnAccountLink.toString() + "<br>");
        log.info("Clicks on Create An Account Link " + _createAnAccountLink.toString());
        clickOnElement(_createAnAccountLink);
    }

    public void clickOnFirstNameField(String fname) {
        Reporter.log("Clicks on First Name Field " + _firstNameField.toString() + "<br>");
        log.info("Clicks on First Name Field " + _firstNameField.toString());
        clickOnElement(_firstNameField);
        sendTextToElement(_firstNameField, fname);
    }

    public void clickOnSurnameField(String lname) {
        Reporter.log("Clicks on Surname Field " + _surnameField.toString() + "<br>");
        log.info("Clicks on Surname Fiekd " + _surnameField.toString());
        clickOnElement(_surnameField);
        sendTextToElement(_surnameField, lname);
    }

    public void clickOnEmailField(String eMail) {
        Reporter.log("Clicks on Email Field " + _emailField.toString() + "<br>");
        log.info("Clicks on Email Field " + _emailField.toString());
        clickOnElement(_emailField);
        sendTextToElement(_emailField, eMail);
    }

    public void clickOnPasswordField(String pwd) {
        Reporter.log("Clicks on Password Field " + _passwordField.toString() + "<br>");
        log.info("Clicks on Password Field " + _passwordField.toString());
        clickOnElement(_passwordField);
        sendTextToElement(_passwordField, pwd);
    }

    public void showCheckBox() {
        Reporter.log("Clicks on Show Check Box " + _showCheckBox.toString() + "<br>");
        log.info("Clicks on Check Box " + _showCheckBox.toString());
        clickOnElement(_showCheckBox);
    }

    public void clickOnRegisterBtn() {
        Reporter.log("Click On Register Button " + _registerBtn.toString() + "<br>");
        log.info("Click on Register Button " + _registerBtn.toString());
        clickOnElement(_registerBtn);
    }
}
