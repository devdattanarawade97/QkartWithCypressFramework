import { element } from "./Parameters.cy";

export	var registeredUserName=element.username+Date.now().toString();

export const registerUser=()=>{
	

	cy.get(element.usernameElement).type(registeredUserName);
	cy.get(element.passwordElement).type(element.password);
	cy.get(element.confirmPassWebelement).type(element.password);
	cy.get(element.Button).contains('Register Now').click();
	
	cy.url().should('include','/login','user registered successfully')
	
	
}
export const registerUserNegativeCase=()=>{
	

	cy.get(element.usernameElement).type(registeredUserName);
	cy.get(element.passwordElement).type(element.password);
	cy.get(element.confirmPassWebelement).type(element.password);
	cy.get(element.Button).contains('Register Now').click();
	
	cy.url().should('include','/register',"verified same user cannot register")
	
	
}