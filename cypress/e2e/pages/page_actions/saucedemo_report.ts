import SauceLoginElements from '../page_elements/sauce_login.elements.js'
import SauceHomeElements from '../page_elements/sauce_home.elements.js'
import SauceCartElements from '../page_elements/sauce_cart.elements.js'
import SauceFinishBuyElements from '../page_elements/sauce_finishbuy.elements.js'

export class OpenSauceReport{

    static accessSauceReport(): void{
        cy.fixture('example.json').then((json) =>{
            cy.visit(json.url_saucedemo)
        });
    }

    static loginSauceReport(){

        cy.get(SauceLoginElements.CMP_USER).click()
        cy.get(SauceLoginElements.CMP_USER).type(SauceLoginElements.PROBLEM_USER)
        cy.get(SauceLoginElements.CMP_SENHA).click()
        cy.get(SauceLoginElements.CMP_SENHA).type(SauceLoginElements.PASSWORD)
        cy.get(SauceLoginElements.BTN_LOGIN).click()
        
    }

    static addProductCartReport() {

        cy.get(SauceHomeElements.ITEM_1).click()
        cy.get(SauceHomeElements.ITEM_2).click()
        cy.get(SauceHomeElements.ITEM_3).click()
        cy.get(SauceHomeElements.ITEM_4).click()
        cy.get(SauceHomeElements.ITEM_5).click()
        cy.get(SauceHomeElements.ITEM_6).click()
        
        //Valida se depois de clicar os produtos estão com o status Remove
        cy.get(SauceHomeElements.BTN_REMOVE_1).contains('').log('PASSOU')
        cy.get(SauceHomeElements.BTN_REMOVE_2).contains('Remove').log('PASSOU')
        cy.get(SauceHomeElements.ITEM_3).contains('Add to cart').log('FALHA')
        cy.get(SauceHomeElements.ITEM_4).contains('Add to cart').log('FALHA')
        cy.get(SauceHomeElements.BTN_REMOVE_5).contains('Remove').log('PASSOU')
        cy.get(SauceHomeElements.ITEM_6).contains('Add to cart').log('FALHA')

        cy.get(SauceHomeElements.CART_HOME).click()

    }

    static validProductCartReport(){

        //Valida se os produtos foram colocados no carrinho
        cy.get(SauceCartElements.PRODUCT_REPORT_1).contains('Sauce Labs Backpack')
        cy.get(SauceCartElements.PRODUCT_REPORT_2).contains('Sauce Labs Bike Light')
        cy.get(SauceCartElements.PRODUCT_REPORT_3).contains('Sauce Labs Onesie')
        cy.get(SauceCartElements.BTN_CHECKOUT).click()
    }

    static finishCartReport() {

        //Preenche dados para finalizar compra
        cy.get(SauceFinishBuyElements.CMP_FIRSTNAME).click()
        cy.get(SauceFinishBuyElements.CMP_FIRSTNAME).type(SauceFinishBuyElements.FIRSTNAME)
        cy.get(SauceFinishBuyElements.CMP_LASTNAME).click()
        cy.get(SauceFinishBuyElements.CMP_LASTNAME).type(SauceFinishBuyElements.LASTNAME)
        cy.get(SauceFinishBuyElements.CMP_ZIPCODE).click()
        cy.get(SauceFinishBuyElements.CMP_ZIPCODE).type(SauceFinishBuyElements.ZIPCODE)

        cy.get(SauceFinishBuyElements.BTN_CONTINUE).click()

        
        cy.get(SauceFinishBuyElements.MSG_ERRO).contains('Last Name is required').log('FALHA')

    }


}

export default OpenSauceReport;