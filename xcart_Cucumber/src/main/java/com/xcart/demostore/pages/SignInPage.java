package com.xcart.demostore.pages;

import com.xcart.demostore.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    @FindBy(xpath = "//div[@class='header_bar-sign_in']//span[contains(text(),'Sign in / sign up')]")
    WebElement _signInBtn;

    @FindBy(xpath = "//input[@id='login-email']")
    WebElement _emailField;

    @FindBy(xpath = "//input[@id='login-password']")
    WebElement _passwordField;

    @FindBy(xpath = "//tbody//button[@class='btn  regular-button  submit']")
    WebElement _submitBtn;

    @FindBy(xpath = "//h1[contains(text(),'Welcome to X-Cart Demo Store!')]")
    WebElement _verifyMessage;

    //This method clicks on Sign In button on HomePage
    public void clickOnLoginBtn() {
        Reporter.log("Clicks on Sign in Button " + _signInBtn.toString() + "<br>");
        log.info("Clicks on sign in button " + _signInBtn.toString());
        clickOnElement(_signInBtn);
    }

    //This method sends text to Email Field
    public void sendTextToEmailField(String eMail) {
        Reporter.log("send text to email Field " + _emailField.toString() + "<br>");
        log.info("sends text to email Field " + _emailField.toString());
        clickOnElement(_emailField);
        sendTextToElement(_emailField, eMail);
    }

    // This method sends text to Password Field
    public void sendTextToPasswordField(String pwd) {
        Reporter.log("send text to Passoword Field " + _passwordField.toString() + "<br>");
        log.info("send text to password Field " + _passwordField.toString());
        clickOnElement(_passwordField);
        sendTextToElement(_passwordField, pwd);
    }

    public void clickOnSubmitBtn() {
        Reporter.log("click on Submit button " + _submitBtn.toString() + "<br>");
        log.info("Send text Submit Button " + _submitBtn.toString());
        clickOnElement(_submitBtn);
    }

    public void set_verifyMessage(){
        String actual = getTextFromElement(_verifyMessage);
        Assert.assertEquals(actual,"Welcome to X-Cart Demo Store!");
    }

}
