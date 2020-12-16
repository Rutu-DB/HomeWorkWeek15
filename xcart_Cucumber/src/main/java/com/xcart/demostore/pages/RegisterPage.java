package com.xcart.demostore.pages;

import com.xcart.demostore.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public final String eMail= randomEmail();

    @FindBy(xpath = "//div[@class='header_bar-sign_in']//span[contains(text(),'Sign in / sign up')]")
    WebElement _signInBtn;

    @FindBy(xpath = "//a[contains(@class,'popup-button default-popup-button create-account-link')]")
    WebElement _createNewAccountLink;

    @FindBy(xpath = "//input[@id='login']")
    WebElement _emailIdField;

    @FindBy(xpath = "//input[@id='password']")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@id='password-conf']")
    WebElement _confirmPasswordField;

    @FindBy (xpath = "//div[@class='button submit']//button")
            WebElement _createBtn;


    @FindBy(xpath = "//body/div[@id='mm-0']/div[@id='page-wrapper']/div[@id='page']/div[3]/div[1]/div[1]/ul[1]")
    WebElement _verifyMessage;

    //This method clicks on Sign In button on HomePage
    public void clickOnLoginBtn() {

        Reporter.log("Clicking on Sign In Button " + _signInBtn.toString() + "<br>");
        clickOnElement(_signInBtn);
    }

    //This method clicks on Create New Account Link
    public void clickOnCreateNewAccountLink() {
        Reporter.log("Click on Create New Account Link " + _createNewAccountLink.toString() + "<br>");
        log.info("Click on Create New Account Link " + _createNewAccountLink.toString());
        clickOnElement(_createNewAccountLink);
    }

    //This method sends Key to EmailField
    public void sendTextToEmailIdField(String eMail) {
        Reporter.log("Send Email Id to Field " + _emailIdField.toString() + "<br>");
        log.info("Send Email Id to Field " + _emailIdField.toString());
        clickOnElement(_emailIdField);
        sendTextToElement(_emailIdField, eMail);
    }

    //This method sends Key to Password
    public void sendTextToPasswordField(String regPwd) {
        Reporter.log("send Password to Password Field " + _passwordField.toString() + "<br>");
        log.info("send password to password Field " + _passwordField.toString());
        clickOnElement(_passwordField);
        sendTextToElement(_passwordField, regPwd);
    }

    //This method sends key to Confirm Password
    public void sendTextToConfirmPasswordField(String confPwd) {
        Reporter.log("send confirm my password to field " + _confirmPasswordField.toString() + "<br>");
        log.info("send confirm my password to field " + _confirmPasswordField.toString());
        clickOnElement(_confirmPasswordField);
        sendTextToElement(_confirmPasswordField, confPwd);
    }

    //This method clicks on Create Button
    public void clickOnCreateButton() {
        Reporter.log(" clicks on Create Button " + _confirmPasswordField.toString() + "<br>");
        log.info("clicks on Create Button " + _confirmPasswordField.toString());
        clickOnElement(_createBtn);
    }

    //This method verifies user is on My account Page
    public void verifyMessage(){
        Reporter.log("Verify popup message" + _verifyMessage.toString() + "<br>");
        log.info("Verify Pop UP message " + _verifyMessage.toString());
        String actual = getTextFromElement(_verifyMessage);
        Assert.assertEquals(actual,"The data has been saved successfully");
    }
}
