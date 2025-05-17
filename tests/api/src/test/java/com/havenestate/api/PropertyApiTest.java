package com.havenestate.api;

import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class PropertyApiTest extends BaseApiTest {
    private String authToken;

    @BeforeEach
    public void setupAuth() {
        // Login and get token before each test
        String loginPayload = """
            {
                "email": "test@example.com",
                "password": "validPassword123"
            }
            """;

        Response response = given()
            .spec(requestSpec)
            .body(loginPayload)
            .when()
            .post("/api/auth/login")
            .then()
            .extract()
            .response();

        authToken = response.path("token");
    }

    @Test
    public void testAddPropertySuccessfully() {
        String propertyPayload = """
            {
                "title": "Luxury Villa",
                "description": "Beautiful 4-bedroom villa with pool",
                "price": 750000,
                "location": "123 Luxury Lane",
                "bedrooms": 4,
                "bathrooms": 3,
                "area": 2500,
                "type": "Villa"
            }
            """;

        given()
            .spec(requestSpec)
            .header("Authorization", "Bearer " + authToken)
            .body(propertyPayload)
            .when()
            .post("/api/properties")
            .then()
            .statusCode(201)
            .body("propertyId", notNullValue())
            .body("message", equalTo("Property added successfully"));
    }

    @Test
    public void testAddPropertyWithoutAuth() {
        String propertyPayload = """
            {
                "title": "Luxury Villa",
                "description": "Beautiful 4-bedroom villa with pool",
                "price": 750000
            }
            """;

        given()
            .spec(requestSpec)
            .body(propertyPayload)
            .when()
            .post("/api/properties")
            .then()
            .statusCode(401)
            .body("message", equalTo("Unauthorized"));
    }

    @Test
    public void testAddPropertyWithInvalidData() {
        String propertyPayload = """
            {
                "title": "",
                "price": -1000
            }
            """;

        given()
            .spec(requestSpec)
            .header("Authorization", "Bearer " + authToken)
            .body(propertyPayload)
            .when()
            .post("/api/properties")
            .then()
            .statusCode(400)
            .body("message", containsString("validation failed"));
    }
} 