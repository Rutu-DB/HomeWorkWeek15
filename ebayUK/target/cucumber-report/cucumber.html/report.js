$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/endToEnd.feature");
formatter.feature({
  "line": 2,
  "name": "Shop By Category Page",
  "description": "As a user I want to navigate Shop By Category Page Successfully",
  "id": "shop-by-category-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 8611515700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify User can navigate Shop By Category Page Successfully",
  "description": "",
  "id": "shop-by-category-page;verify-user-can-navigate-shop-by-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on eBay Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Shop By Category Link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on Computer And Tablet Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Computer Tablet And Network Hardware Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on Apple Laptop Link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Apple Laptop Page",
  "keyword": "Then "
});
formatter.match({
  "location": "ShopByCategoryStepDefs.iAmOnEBayHomePage()"
});
formatter.result({
  "duration": 212697300,
  "status": "passed"
});
formatter.match({
  "location": "ShopByCategoryStepDefs.iClickOnShopByCategoryLink()"
});
formatter.result({
  "duration": 111649900,
  "status": "passed"
});
formatter.match({
  "location": "ShopByCategoryStepDefs.iClickOnComputerAndTabletLink()"
});
formatter.result({
  "duration": 1017992000,
  "status": "passed"
});
formatter.match({
  "location": "ShopByCategoryStepDefs.iNavigateToComputerTabletAndNetworkHardwarePage()"
});
formatter.result({
  "duration": 88250300,
  "status": "passed"
});
formatter.match({
  "location": "ShopByCategoryStepDefs.iClickOnAppleLaptopLink()"
});
formatter.result({
  "duration": 1375878900,
  "status": "passed"
});
formatter.match({
  "location": "ShopByCategoryStepDefs.iNavigateToAppleLaptopPage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.after({
  "duration": 720990900,
  "status": "passed"
});
formatter.before({
  "duration": 7392051100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User can navigate to Mac Book Page Successfully",
  "description": "",
  "id": "shop-by-category-page;verify-user-can-navigate-to-mac-book-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on Apple Laptop Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select Release Year",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Click On RAM check Box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click On Hard Drive Check Box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Buy It Now Tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Sort Highest to Lowest by Price option",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I amend Qty to2",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Go To Cart Button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on Remove Link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I successfully empty the basket",
  "keyword": "Then "
});
formatter.match({
  "location": "MacBookPageStepDefs.iAmOnAppleLaptopPage()"
});
formatter.result({
  "duration": 2788324700,
  "status": "passed"
});
formatter.match({
  "location": "MacBookPageStepDefs.iSelectReleaseYear()"
});
formatter.result({
  "duration": 1445097200,
  "status": "passed"
});
formatter.match({
  "location": "MacBookPageStepDefs.iClickOnRAMCheckBox()"
});
formatter.result({
  "duration": 1332798300,
  "status": "passed"
});
formatter.match({
  "location": "MacBookPageStepDefs.iClickOnHardDriveCheckBox()"
});
formatter.result({
  "duration": 1403176400,
  "status": "passed"
});
formatter.match({
  "location": "MacBookPageStepDefs.iClickOnBuyItNowTab()"
});
formatter.result({
  "duration": 1279695000,
  "status": "passed"
});
formatter.match({
  "location": "MacBookPageStepDefs.iSortHighestToLowestByPriceOption()"
});
formatter.result({
  "duration": 1389568000,
  "status": "passed"
});
formatter.match({
  "location": "MacBookPageStepDefs.iSelectMacBook()"
});
formatter.result({
  "duration": 29687612900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//h3[contains(text(),\u002716-inch Apple MacBook Pro Touch Bar 2.4ghz 8-core i9 32gb 8TB SSD AMD 5600M 8GB\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat uk.co.ebay.utility.Utility.clickOnElement(Utility.java:40)\r\n\tat uk.co.ebay.pages.MacBookPage.selectMacBook(MacBookPage.java:93)\r\n\tat uk.co.ebay.stepDefs.MacBookPageStepDefs.iSelectMacBook(MacBookPageStepDefs.java:49)\r\n\tat ✽.And I select MacBook(src/test/java/resources/featurefile/endToEnd.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "MacBookPageStepDefs.iAmendQtyTo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MacBookPageStepDefs.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MacBookPageStepDefs.iClickOnGoToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MacBookPageStepDefs.iClickOnRemoveLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MacBookPageStepDefs.iSuccessfullyEmptyTheBasket()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10509500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56785}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8f591353118b510f6e55f311ad259a02\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat uk.co.ebay.utility.Utility.getScreenshot(Utility.java:264)\r\n\tat uk.co.ebay.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
});