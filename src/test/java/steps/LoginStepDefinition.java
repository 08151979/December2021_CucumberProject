package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	
	LoginPage login;
	public void beforeRun() {
		
	}
	
	@Given("^User is on Techfios login page$")
	public void User_is_on_the_Techfios_login_page() {
		initDriver();
		driver.get("https://techfios.com/billing/?ng=login/");
		
	}
	@When("^User enters username as \"([^\"]*)\"$")
	 public void user_enter_Username(String username) {
		 login = PageFactory.initElements(driver, LoginPage.class);
		login.enterUserName(username);
		
	}
	@When ("^User enters password as \"([^\"]*)\"$")
     public void user_enter_password_as(String password) {
		login = PageFactory.initElements(driver, LoginPage.class);
		 login.enterPassword(password);
     }
	@When("^User clicks signin button$")
     public void user_clicks_signin_button() {
		login = PageFactory.initElements(driver, LoginPage.class);
		login.clickableSignButton();
	}
	@Then("^User should land on the dashboard page$")
	public void user_should_land_on_the_dashboard_page() {
		Assert.assertEquals("Dashboard- iBilling", login.getPageTitle());
	//	takeScreenshot(driver);
	}
	@When("^User click bank and cash button$")
	public void user_click_bank_and_cash_button(){
	   login.clickableBankCash();
	}

	@When("^User click new account button$")
	public void user_click_new_account_button(){
	   login.clickableaddNewAccount();
	}
	
	
	
	@When("^User should  navigate to \"([^\"]*)\"$")
	public void user_should_navigate_to_and_title_contains(String url) {
	 //  Assert.assertEquals("Accounts- iBilling", login.getPageTitle());
	 //  takeScreenshot(driver);
		 login.eneterAccountTitle(url);
	}
	@When("^User enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String accountTitle )  {
	   login.eneterAccountTitle(accountTitle + randNum());
	}

	@When("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) {
	    login.enterDescription(description);
	}

	@When("^User enters initial balance as\"([^\"]*)\"$")
	public void user_enters_initial_balance_as(String initialBalance) {
	  login.enterBalance(initialBalance);
	}

	@When("^User enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String accountNumber)  {
	   login.enterAcountNumber(accountNumber + randNum());
	}
	@When("^User enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String contactPerson) {
	   login.entercontactPerson(contactPerson);
	}

	@When("^User enters Phone as \"([^\"]*)\"$")
	public void user_enters_Phone_as(String phone){
	  login.enterPhone(phone);
	}

	@When("^User enters internetBankingUrlr as \"([^\"]*)\"$")
	public void user_enters_internetBankingUrlr_as(String bankingUrl){
	  login.enterBankingUrl(bankingUrl);
	}

	@Then("^User click submit button$")
	public void user_click_submit_button()  {
	   login.clickableSubmit();
	}
}
