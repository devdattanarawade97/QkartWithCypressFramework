
import { element } from "./Parameters.cy"

export const searchYonex=()=>{
	
	cy.get(element.parentsearchBox).clear().type(element.productYonex);
	cy.wait(3000);

} 

export const searchShoes=()=>{
	
	cy.get(element.parentsearchBox).clear().type(element.productShoes);
	cy.wait(3000);
	
	cy.get(element.Button).get(':first').contains('Size chart').click().scrollIntoView();
	cy.get(element.sizeChartClass).contains('Shoe\'s Size Chart').should('be.visible').type('{Esc}');
    cy.wait(2000);
    cy.get(element.Button).contains('Size chart').last().click().scrollIntoView();
	cy.get(element.sizeChartClass).contains('Shoe\'s Size Chart').should('be.visible').type('{Esc}');
	cy.wait(2000);

}

export const addToCart=()=>{
	
	cy.get(element.Button).contains(element.addtoCartButtonText,).click();
	cy.wait(3000)
}

export const verifyCartContent=()=>{
	
	cy.get(element.checkoutClass).contains(element.productYonex).scrollIntoView();
	cy.wait(3000);
	cy.get(element.checkoutClass).contains(element.productXtend).scrollIntoView();
	cy.wait(3000);
	cy.get(element.Button).contains(element.checkoutButtonText).scrollIntoView().click();
	cy.wait(3000);
}

export const addAddress=()=>{
	
	cy.get(element.addAddressButton).click();
	cy.get(element.textAreaAddress).type("banglore menlo park 4444444444");
	cy.get(element.Button).contains('Add').click();
	cy.get(element.radioButtonAddress).click();
	
	
}

export const selectAddress=()=>{
		cy.get(element.radioButtonAddress).click();
}


export const placeOrder=()=>{
	cy.get(element.Button).contains(element.placeOrderText).click();
	cy.url().should('include',element.successfullOrderText,"order placed successfully");
}

export const placeOrderForInsufficentbalance=()=>{
	cy.get(element.Button).contains(element.placeOrderText).click();
	cy.url().should('include','/checkout','order not placed');
}

export const searchXtend=()=>{
	
	cy.get(element.parentsearchBox).clear().type(element.productXtend);
	cy.wait(3000);

} 

export const changeProductQuantity=()=>{
	
	
	cy.get(element.checkoutClass).contains(element.productYonex).parent().find(element.Button).last().click();
	cy.wait(2000);
	cy.get(element.checkoutClass).contains(element.productXtend).parent().find(element.Button).last().click();
	cy.wait(2000);
	cy.get(element.checkoutClass).contains(element.productYonex).parent().find(element.Button).first().click();

    cy.get(element.parentsearchBox).scrollIntoView();
	
}

export const changeProductQuantityForBalance=()=>{
	
	
	cy.get(element.quantityElement).then(function(text2){
	 var quantity=text2.text();
	 
    while(quantity<10){
	cy.get(element.checkoutClass).contains(element.productStylecon).parent().find(element.Button).last().click();
	quantity++;
	cy.wait(2000);
	}
	    cy.get(element.parentsearchBox).scrollIntoView();
	    cy.wait(2000);

	})
	
	
}

export const searchStylecon=()=>{
	
	cy.get(element.parentsearchBox).clear().type(element.productStylecon);
	cy.wait(3000);
	
}

export const verifyCartContentStylecon=()=>{
	
	cy.get(element.checkoutClass).contains(element.productStylecon).scrollIntoView();
	cy.wait(3000);
	cy.get(element.Button).contains(element.checkoutButtonText).scrollIntoView().click();
	cy.wait(3000);
}


export const verifyInsufficentBalanceMessage=()=>{
	var expectedMsg='You do not have enough balance in your wallet for this purchase'
	cy.get(element.balanceMsg).should('be.visible');
	cy.get(element.balanceMsg).then(function(msgText){
		var actualMsg=msgText.text();
		assert.equal(expectedMsg,actualMsg,'insufficent balance messgae verified successfully');
	})
}