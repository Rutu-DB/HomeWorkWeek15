package com.studentapp.extractingResponseData;

import com.studentapp.testbase.TestBaseClass;
import io.restassured.RestAssured;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.given;

public class SearchJsonPathExample extends TestBaseClass {

    private static final String API_KEY = "75e3u4sgb2khg673cbv2gjup";

    @BeforeClass
    public static void init(){
        RestAssured.baseURI = "http://api.walmartlabs.com";
        RestAssured.basePath="/v1";
    }

    // 1) Extract numItems
    @Test
    public void test001() {
        int numItem = given()
                .queryParam("query", "Samsung")
                .queryParam("format", "json")
                .queryParam("apiKey", API_KEY)
                .when()
                .get("/search")
                .then()
                .extract().path("numItems");

        //response.then().log().all().statusCode(200);
        //response.prettyPrint();

        System.out.println("------------------StartingTest---------------------------");
        System.out.println("The total number of items are: "  + numItem);
        System.out.println("------------------End of Test---------------------------");

    }

    // 2) Extract query
    @Test
    public void test002() {
        // homework
        String queryName = given()
                .queryParam("query", "Samsung")
                .queryParam("format", "json")
                .queryParam("apiKey", API_KEY)
                .when()
                .get("/search")
                .then()
                .extract().path("query");

        System.out.println("------------------StartingTest---------------------------");
        System.out.println("The search query is: " + queryName);
        System.out.println("------------------End of Test---------------------------");

    }

    // 3) Extract first productName by providing list index value
    @Test
    public void test003() {
        String productName = given()
                .queryParam("query", "Samsung")
                .queryParam("format", "json")
                .queryParam("apiKey", API_KEY)
                .when()
                .get("/search")
                .then()
                .extract().path("items[0].name");
        System.out.println("------------------StartingTest---------------------------");
        System.out.println("The product name is: "+ productName );
        System.out.println("------------------End of Test---------------------------");
    }


    // 4) Get the first list from imageEntities for the first product
    @Test
    public void test004() {
    // go to json path type item[0].imageEntities
        //Home work
      /*  String items = given()
                .queryParam("query", "Samsung")
                .queryParam("format", "json")
                .queryParam("apiKey", API_KEY)
                .when()
                .get("/search")
                .then()
                .extract().path("items[0]");*/

        String imageEntities = given()
                .queryParam("query", "Samsung")
                .queryParam("format", "json")
                .queryParam("apiKey", API_KEY)
                .when()
                .get("/search")
                .then()
                .extract().path("items[0].imageEntities[0]");

        System.out.println("------------------StartingTest---------------------------");
        System.out.println("The gift options under the first product are: " + imageEntities);
        System.out.println("------------------End of Test---------------------------");

    }



}
