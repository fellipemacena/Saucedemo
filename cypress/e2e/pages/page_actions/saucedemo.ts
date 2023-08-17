import SauceLoginElements from '../page_elements/sauce_login.elements.js'
import SauceHomeElements from '../page_elements/sauce_home.elements.js'
import SauceCartElements from '../page_elements/sauce_cart.elements.js'
import SauceFinishBuyElements from '../page_elements/sauce_finishbuy.elements.js'
import SauceCheckoutElements from '../page_elements/sauce_checkout.elements.js'

export class OpenSauce{

    static accessSauce(): void{
        cy.fixture('example.json').then((json) =>{
            cy.visit(json.url_saucedemo)
        });
    }

    static loginSauce(){

        cy.get(SauceLoginElements.CMP_USER).click()
        cy.get(SauceLoginElements.CMP_USER).type(SauceLoginElements.STANDARD_USER)
        cy.get(SauceLoginElements.CMP_SENHA).click()
        cy.get(SauceLoginElements.CMP_SENHA).type(SauceLoginElements.PASSWORD)
        cy.get(SauceLoginElements.BTN_LOGIN).click()
        
    }

    static addProductCart() {

        cy.get(SauceHomeElements.ITEM_1).click()
        cy.get(SauceHomeElements.ITEM_2).click()
        cy.get(SauceHomeElements.ITEM_3).click()
        cy.get(SauceHomeElements.ITEM_4).click()
        cy.get(SauceHomeElements.ITEM_5).click()
        cy.get(SauceHomeElements.ITEM_6).click()

        cy.get(SauceHomeElements.CART_HOME).click()

    }

    static validProductCart(){

        cy.get(SauceCartElements.PRODUCT_1).contains('Sauce Labs Backpack')
        cy.get(SauceCartElements.PRODUCT_2).contains('Sauce Labs Bike Light')
        cy.get(SauceCartElements.PRODUCT_3).contains('Sauce Labs Bolt T-Shirt')
        cy.get(SauceCartElements.PRODUCT_4).contains('Sauce Labs Fleece Jacket')
        cy.get(SauceCartElements.PRODUCT_5).contains('Sauce Labs Onesie')
        cy.get(SauceCartElements.PRODUCT_6).contains('Test.allTheThings() T-Shirt (Red)')

    }

    static removeProductCart() {
        
        cy.get(SauceCartElements.BTN_REMOVE_PRODUCT_1).click()
        cy.get(SauceCartElements.BTN_REMOVE_PRODUCT_2).click()
        cy.get(SauceCartElements.BTN_REMOVE_PRODUCT_3).click()
        cy.get(SauceCartElements.BTN_REMOVE_PRODUCT_4).click()
        cy.get(SauceCartElements.BTN_REMOVE_PRODUCT_5).click()
        cy.get(SauceCartElements.BTN_REMOVE_PRODUCT_6).click()

        cy.get(SauceCartElements.BTN_CONT_SHOPPING).click()

    }

    static finishCart() {

        //Criar chamada da função validProductCart
        cy.get(SauceCartElements.PRODUCT_1).contains('Sauce Labs Backpack')
        cy.get(SauceCartElements.PRODUCT_2).contains('Sauce Labs Bike Light')
        cy.get(SauceCartElements.PRODUCT_3).contains('Sauce Labs Bolt T-Shirt')
        cy.get(SauceCartElements.PRODUCT_4).contains('Sauce Labs Fleece Jacket')
        cy.get(SauceCartElements.PRODUCT_5).contains('Sauce Labs Onesie')
        cy.get(SauceCartElements.PRODUCT_6).contains('Test.allTheThings() T-Shirt (Red)')
        

        cy.get(SauceCartElements.BTN_CHECKOUT).click()

        cy.get(SauceFinishBuyElements.CMP_FIRSTNAME).click()
        cy.get(SauceFinishBuyElements.CMP_FIRSTNAME).type(SauceFinishBuyElements.FIRSTNAME)
        cy.get(SauceFinishBuyElements.CMP_LASTNAME).click()
        cy.get(SauceFinishBuyElements.CMP_LASTNAME).type(SauceFinishBuyElements.LASTNAME)
        cy.get(SauceFinishBuyElements.CMP_ZIPCODE).click()
        cy.get(SauceFinishBuyElements.CMP_ZIPCODE).type(SauceFinishBuyElements.ZIPCODE)

        cy.get(SauceFinishBuyElements.BTN_CONTINUE).click()

    }

    static checkoutOverview() {

        cy.get(SauceCheckoutElements.CHECK_TITLE).contains('Checkout: Overview')
        //Criar chamada da função validProductCart
        cy.get(SauceCartElements.PRODUCT_2).contains('Sauce Labs Bike Light')
        cy.get(SauceCartElements.PRODUCT_3).contains('Sauce Labs Bolt T-Shirt')
        cy.get(SauceCartElements.PRODUCT_4).contains('Sauce Labs Fleece Jacket')
        cy.get(SauceCartElements.PRODUCT_5).contains('Sauce Labs Onesie')
        cy.get(SauceCartElements.PRODUCT_6).contains('Test.allTheThings() T-Shirt (Red)')

        cy.get(SauceCheckoutElements)
    }

}

export default OpenSauce;