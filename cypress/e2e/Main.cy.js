
import { gettingHomePage, performLogout} from "./Home.cy";
import { getLoginPage, login } from "./Login.cy";
import { element } from "./Parameters.cy";
import { registerUser, registerUserNegativeCase } from "./Register.cy";
import { addAddress, addAddressForInsufficent, addToCart, changeProductQuantity, changeProductQuantityForBalance, placeOrder, placeOrderForInsufficentbalance, search, searchShoes, searchStylecon, searchXtend, searchYonex, selectAddress, verifyCartContent, verifyCartContentStylecon, verifyInsufficentBalanceMessage } from "./Search.cy";


describe('Testcase01',() => {
	
	it('verify register user and Login functionality',() => {
		gettingHomePage();
		cy.log("opened homepage successfully");
		
		registerUser();
		cy.log("registered user successfully");
		
	   	login();
		cy.log("user logged in successfully");
		
		performLogout();
		cy.log("user logged out successfully");
	})
	
	
	})
		
	
	describe('Testcase02',()=>{
		
		it('verify same user cannot register',() => {
			
		gettingHomePage();
		cy.log("opened homepage successfully");
		
		registerUserNegativeCase();
		cy.log("registered user successfully");
		
	
	})
	})
	
	
	describe('Testcase03',() => {
	
	it('Verify the functionality of search text box',() => {
		
		getLoginPage();
		
	   	login();
		cy.log("user logged in successfully");
		
		searchYonex();
		
		performLogout();
		cy.log("user logged out successfully");
	})
	
	
	})
	
	
	describe('Testcase04',() => {
	
	it('Verify the existence of size chart for certain items and validate contents of size chart',() => {
		
		getLoginPage();
		
	   	login();
		cy.log("user logged in successfully");
			
		searchShoes();
		cy.log('size chart verified successfully')
		
		performLogout();
		cy.log("user logged out successfully");
	})
	
	
	})
	
	
	describe('Testcase05',() => {
	
	it('Verify that a new user can add multiple products in to the cart and Checkout',() => {
		
		getLoginPage();
		
	   	login();
		cy.log("user logged in successfully");
		
		searchYonex();
		
		addToCart();
		
		searchXtend();
		
		addToCart();
		cy.log('product added to cart successfully')
		
		verifyCartContent();
		cy.log('product verified successfully');
		
		addAddress();
		cy.log("added adress successfully");
		
		placeOrder();
		cy.log('placed order successfully');
	 
	  	performLogout();
		cy.log("user logged out successfully");
	})
	
	
	})
	
	describe('Testcase06',() => {
	
	it('Verify that the contents of the cart can be edited',() => {
		
		getLoginPage();
		
	   	login();
		cy.log("user logged in successfully");
		
		searchYonex();
		
		addToCart();
		
		searchXtend();
		
		addToCart();
		cy.log('product added to cart successfully')
		
		changeProductQuantity();
		
		verifyCartContent();
		cy.log('product verified successfully');
		
		selectAddress();
		cy.log("adress selected successfully");
		
		placeOrder();
		cy.log('placed order successfully');
	 
	  	performLogout();
		cy.log("user logged out successfully");
	})
	
	
	})

describe('Testcase07',() => {
	
	it('Verify that insufficient balance error is thrown when the wallet balance is not enough',() => {
		
	//	gettingHomePage();
		
	//	registerUser();
	//	cy.log("registered user successfully");
		
		getLoginPage();
		
	   	login();
		cy.log("user logged in successfully");
		
		searchStylecon();
		
		addToCart();
		cy.log('product added to cart successfully')
		
		changeProductQuantityForBalance();
		cy.log("changed product quantity successfully")
		
		verifyCartContentStylecon();
		cy.log('product verified successfully');
		
		selectAddress();
		
		placeOrderForInsufficentbalance()
	 
	    verifyInsufficentBalanceMessage();
	    
	  	performLogout();
		cy.log("user logged out successfully");
	})
	
	
	})
