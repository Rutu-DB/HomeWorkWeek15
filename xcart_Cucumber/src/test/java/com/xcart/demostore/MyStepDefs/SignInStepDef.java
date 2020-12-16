package com.xcart.demostore.MyStepDefs;

import com.xcart.demostore.pages.SignInPage;
import com.xcart.demostore.propertyreader.PropertyReader;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignInStepDef {
    SignInPage signInPage = new SignInPage();
    String eMail = PropertyReader.getInstance().getProperty("email");
    String pwd = PropertyReader.getInstance().getProperty("password");

    @Given("^I am on xcart Sign In page$")
    public void iAmOnXcartSignInPage() {
        signInPage.clickOnLoginBtn();
    }
    @And("^I enter email Id$")
    public void iEnterEmailId() {
        signInPage.sendTextToEmailField(eMail);
    }

    @And("^I enter registered password$")
    public void iEnterRegisteredPassword() {
    signInPage.sendTextToPasswordField(pwd);
    }


    @When("^I click on Login Button$")
    public void iClickOnLoginButton() {
        signInPage.clickOnSubmitBtn();
    }


    @Then("^I can Login Successfully$")
    public void iCanLoginSuccessfully() {
    signInPage.set_verifyMessage();
    }



}
