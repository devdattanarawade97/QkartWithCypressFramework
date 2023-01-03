
import { element } from "./Parameters.cy"
import { registeredUserName } from "./Register.cy";


export const getLoginPage=()=>{
	
	cy.visit(element.loginUrl);
	cy.url().should('include','/login',"user logged in successfully");
}


export const login=()=>{
	
	cy.get(element.usernameElement).type(registeredUserName);
	cy.get(element.passwordElement).type(element.password);
	cy.get(element.Button).contains('Login to QKart').click();
	cy.wait(3000);
    
	
       
	
}