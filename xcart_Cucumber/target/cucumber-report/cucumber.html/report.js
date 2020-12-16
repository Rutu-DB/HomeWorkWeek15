$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/EndToEnd.feature");
formatter.feature({
  "line": 2,
  "name": "End to End",
  "description": "As a user I want to check full functionality of xcart website",
  "id": "end-to-end",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 9761785700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user can navigate Hot Deal Page successfully",
  "description": "",
  "id": "end-to-end;verify-user-can-navigate-hot-deal-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on xcart Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Hot Deal Link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Sale Link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Lace Boot Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I successfully navigate to Lace-Up Boot Link",
  "keyword": "Then "
});
formatter.match({
  "location": "EndToEndStepDef.iAmOnXcartHomePage()"
});
formatter.result({
  "duration": 206967400,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDef.iClickOnHotDealLink()"
});
formatter.result({
  "duration": 190314400,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDef.iClickOnSaleLink()"
});
formatter.result({
  "duration": 1773827000,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDef.iClickOnLaceBootLink()"
});
formatter.result({
  "duration": 144119100,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndStepDef.iSuccessfullyNavigateToLaceUpBootLink()"
});
formatter.result({
  "duration": 58475600,
  "status": "passed"
});
formatter.after({
  "duration": 679499500,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user I want to Login successfully",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Sanity,"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 7848496800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user should be able to Login successfully",
  "description": "",
  "id": "login;verify-user-should-be-able-to-login-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on xcart Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter email Id",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter registered password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I can Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInStepDef.iAmOnXcartSignInPage()"
});
formatter.result({
  "duration": 295449800,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDef.iEnterEmailId()"
});
formatter.result({
  "duration": 787463300,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDef.iEnterRegisteredPassword()"
});
formatter.result({
  "duration": 160966600,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDef.iClickOnLoginButton()"
});
formatter.result({
  "duration": 99092000,
  "status": "passed"
});
formatter.match({
  "location": "SignInStepDef.iCanLoginSuccessfully()"
});
formatter.result({
  "duration": 36998100,
  "status": "passed"
});
formatter.after({
  "duration": 662389900,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register",
  "description": "As a User I want to register into xcart Website",
  "id": "register",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke,"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 7941121800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user should be able to register successfully",
  "description": "",
  "id": "register;verify-user-should-be-able-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on Sign Up Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on new Account Link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid email",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Create Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "registerStepDef.iAmOnSignUpPage()"
});
formatter.result({
  "duration": 274241200,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDef.iClickOnNewAccountLink()"
});
formatter.result({
  "duration": 903475400,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDef.iEnterValidEmail()"
});
formatter.result({
  "duration": 1537779700,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDef.iEnterPassword()"
});
formatter.result({
  "duration": 185331900,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDef.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 194404500,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDef.iClickOnCreateButton()"
});
formatter.result({
  "duration": 113507500,
  "status": "passed"
});
formatter.match({
  "location": "registerStepDef.iRegisterSuccessfully()"
});
formatter.result({
  "duration": 16452337000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56455}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b85dd4dd25a467ea5a7a9602401482ec\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027mm-0\u0027]/div[@id\u003d\u0027page-wrapper\u0027]/div[@id\u003d\u0027page\u0027]/div[3]/div[1]/div[1]/ul[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.xcart.demostore.utility.Utility.getTextFromElement(Utility.java:58)\r\n\tat com.xcart.demostore.pages.RegisterPage.verifyMessage(RegisterPage.java:88)\r\n\tat com.xcart.demostore.MyStepDefs.registerStepDef.iRegisterSuccessfully(registerStepDef.java:50)\r\n\tat ✽.Then I register successfully(src/test/java/resources/featurefile/Register.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2660900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56455}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b85dd4dd25a467ea5a7a9602401482ec\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.xcart.demostore.utility.Utility.getScreenshot(Utility.java:259)\r\n\tat com.xcart.demostore.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
});