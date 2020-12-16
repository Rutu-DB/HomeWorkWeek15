package com.xcart.demostore.MyStepDefs;

import com.xcart.demostore.pages.RegisterPage;
import com.xcart.demostore.propertyreader.PropertyReader;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class registerStepDef {
    RegisterPage registerPage = new RegisterPage();
    String eMail = PropertyReader.getInstance().getProperty("email");
    String pwd = PropertyReader.getInstance().getProperty("password");


    @Given("^I am on Sign Up Page$")
    public void iAmOnSignUpPage() {
    registerPage.clickOnLoginBtn();
    }


    @And("^I click on new Account Link$")
    public void iClickOnNewAccountLink() {
        registerPage.clickOnCreateNewAccountLink();
    }

    @And("^I enter valid email$")
    public void iEnterValidEmail() {
        registerPage.sendTextToEmailIdField(eMail);
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        registerPage.sendTextToPasswordField(pwd);
    }

    @And("^I enter confirm password$")
    public void iEnterConfirmPassword() {
        registerPage.sendTextToConfirmPasswordField(pwd);
    }


    @When("^I click on Create Button$")
    public void iClickOnCreateButton() {
        registerPage.clickOnCreateButton();
    }

    @Then("^I register successfully$")
    public void iRegisterSuccessfully() {
        registerPage.verifyMessage();
    }


}
