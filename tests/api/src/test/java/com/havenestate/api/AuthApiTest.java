package com.havenestate.api;

import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class AuthApiTest extends BaseApiTest {

    @Test
    public void testSuccessfulLogin() {
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
            .statusCode(200)
            .body("token", notNullValue())
            .body("message", equalTo("Login successful"))
            .extract()
            .response();

        // Store token for other tests if needed
        String token = response.path("token");
    }

    @Test
    public void testFailedLoginWithInvalidCredentials() {
        String loginPayload = """
            {
                "email": "test@example.com",
                "password": "wrongPassword"
            }
            """;

        given()
            .spec(requestSpec)
            .body(loginPayload)
            .when()
            .post("/api/auth/login")
            .then()
            .statusCode(401)
            .body("message", equalTo("Invalid credentials"));
    }

    @Test
    public void testLoginWithMissingFields() {
        String loginPayload = """
            {
                "email": "test@example.com"
            }
            """;

        given()
            .spec(requestSpec)
            .body(loginPayload)
            .when()
            .post("/api/auth/login")
            .then()
            .statusCode(400)
            .body("message", containsString("password"));
    }
} 