package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;
	
	public LoginPage(WebDriver driver){
		this.driver = driver;
	}
	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]") WebElement USERNAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]") WebElement PASSWORD_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@name='login'] ") WebElement SIGN_ELEMENT;
	@FindBy(how= How.XPATH,using = "//*[@id=\"page-wrapper\"]/div[2]/div/h2") WebElement DASHBOARD_ELEMENT;
	
	@FindBy(how= How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")WebElement BANK_CASH_ELEMENT;
	@FindBy(how = How.XPATH,using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")WebElement ADD_NEW_ACCOUNT_ELEMENET;
	@FindBy(how = How.XPATH,using = "//*[@id=\"account\"]")WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH,using = "//*[@id=\"description\"]")WebElement DESCRIPTION_ELEMENT;
	@FindBy(how= How.XPATH,using = "//*[@id=\"balance\"]")WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how= How.XPATH,using= "//*[@id=\"account_number\"]")WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how= How.XPATH,using ="//*[@id=\"contact_person\"]")WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how=How.XPATH,using= "//*[@id=\"contact_phone\"]")WebElement PHONE_ELEMENT;
	@FindBy(how= How.XPATH,using= "//*[@id=\"ib_url\"]")WebElement INTERNAL_BANKING_URL_ELEMENT;
	@FindBy(how = How.XPATH,using= "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")WebElement SUBMIT_ELEMENT;
	
	
	public void enterUserName(String user) {
		USERNAME_ELEMENT.sendKeys(user);
		try {
			Thread.sleep(30000);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void enterPassword(String password) {
		PASSWORD_ELEMENT.sendKeys(password);
		try {
			Thread.sleep(3000);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void clickableSignButton() {
		SIGN_ELEMENT.click();
		try {
			Thread.sleep(3000);
			
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	public String getPageTitle() {
		return driver.getTitle();
	}
	public void clickableBankCash() {
		BANK_CASH_ELEMENT.click();
		try {
			Thread.sleep(3000);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void  clickableaddNewAccount() {
		ADD_NEW_ACCOUNT_ELEMENET.click();
	}
	public void eneterAccountTitle(String account) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(account);
	}
	public void enterDescription(String descrip) {
		DESCRIPTION_ELEMENT.sendKeys(descrip);
	}
	public void enterBalance(String balance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(balance);
	}
	public void enterAcountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(accountNumber);
	}
	public void entercontactPerson(String contactNumber) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactNumber);
	}
	public void enterPhone(String phone) {
		 PHONE_ELEMENT.sendKeys(phone);
	}
	public void enterBankingUrl(String bankingUrl) {
		INTERNAL_BANKING_URL_ELEMENT.sendKeys(bankingUrl);
	}
	public void clickableSubmit() {
		SUBMIT_ELEMENT.click();
	}
}
