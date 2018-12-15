package selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
	private WebDriver driver;
	 
    @Before
    public void before() {
        driver = new FirefoxDriver();
        driver.navigate().to("http://localhost:8080");
    }
 
    @After
    public void after() {
        driver.quit();
    }
 
    @Given("^user navigates to task manager app")
    public void user_navigates_to_task_manager_app() {
    	System.out.println("user_navigates_to_task_manager_app");
//        WebElement searchField = driver.findElement(By.id("searchInput"));
//        searchField.sendKeys(searchTerm);
    }
 
    @When("^do point list of tasks$")
    public void do_point_list_of_tasks() {
//        WebElement searchButton = driver.findElement(By.id("searchButton"));
//        searchButton.click();
        System.out.println("do_point_list_of_tasks");
    }
 
    @Then("^it should load with list of tasks$")
    public void it_should_load_with_list_of_tasks() {
    	System.out.println("it_should_load_with_list_of_tasks");
//        WebElement results = driver
//            .findElement(By.cssSelector("div#mw-content-text.mw-content-ltr p"));
//        assertFalse(results.getText().contains(searchResult + " may refer to:"));
//        assertTrue(results.getText().startsWith(searchResult));
    }

}
