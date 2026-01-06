## Karate API Testing Framework

# ✅ Basic Karate framework setup using TestNG for API testing.

# ✅ Prerequisites
``` Java JDK 11 or 17``` 
``` Maven 3.6+ ```

# ✅ Project Structure

src/test/java/
├── com/example/tests/
│   └── KarateTestRunner.java        # TestNG test runner
└── features/
    └── *.feature                   # Karate feature files

src/test/resources/
└── testng.xml                      # TestNG suite file

pom.xml                             # Maven dependencies

# ✅ TestNG Runner

package com.example.tests;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;

public class KarateTestRunner {

    @Test
    public void runAllKarateTests() {
        Results results = Runner.path("classpath:features")
                .outputCucumberJson(true)
                .parallel(5);

        assertEquals(results.getFailCount(), 0,
                "There are Karate test failures!");
    }
}

# ✅ TestNG Suite XML

<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Karate Test Suite">
    <test name="Karate Tests">
        <classes>
            <class name="com.example.tests.KarateTestRunner"/>
        </classes>
    </test>
</suite>

#✅ Sample Feature File
Feature: Sample API Test

  Background:
  url 'https://jsonplaceholder.typicode.com'

  Scenario: Get list of posts
    Given path 'posts'
    When method GET
    Then status 200
    And match response[0].id == 1

# 🚀 Run Tests
```mvn test```
