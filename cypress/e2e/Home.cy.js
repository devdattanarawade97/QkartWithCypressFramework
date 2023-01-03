import { element } from "./Parameters.cy";

 export const gettingHomePage=()=>{
	
	
	cy.visit(element.url);
	
	cy.url().should('include','/register','opened homepage')
	
}

export const performLogout=()=>{
	
	
	cy.get(element.Button).contains('Logout').click();
	cy.url().should('include','app/','successfully logged out');
}
