
import AmazonHomeElements from '../page_elements/amazon_home.elements.js'
import AmazonSearchElements from '../page_elements/amazon_search.elements.js'
import AmazonLoginElements from '../page_elements/amazon_login.elements.js'
import AmazonCarrinhoElements from '../page_elements/amazon_carrinho.elements.js'

export class OpenAmazon {

    static acessarAmazon() {
        cy.fixture('example.json').then((json) => {
        cy.visit(json.url_amz)
        });
    }   

    static Login() {
    cy.get(AmazonHomeElements.CNT_LIST).click()
    cy.get(AmazonLoginElements.CMP_EMAIL).type(AmazonLoginElements.EMAIL)
    cy.get(AmazonLoginElements.BTN_EMAIL).click()
    cy.get(AmazonLoginElements.CMP_SENHA).type(AmazonLoginElements.SENHA)
    cy.get(AmazonLoginElements.BTN_SENHA).click()
    }

    static Pesquisa() {
    cy.get(AmazonHomeElements.CMP_BUSCA).type(AmazonSearchElements.PRODUCT)
    cy.get(AmazonHomeElements.BTN_BUSCA).click()
    cy.get(AmazonSearchElements.PRDCT_SELEC).click()
    }

    static addCarrinho() {
    cy.get(AmazonCarrinhoElements.ADD_CAR).click()
    cy.get(AmazonCarrinhoElements.GO_CAR).click()
    }

    static excluiCarrinho() {
    cy.get(AmazonCarrinhoElements.EXCL_CAR).click()
    cy.get(AmazonCarrinhoElements.CONFIRM_EXCL).should('contain', 'foi removido de Carrinho de compras.')
    }

}
export default OpenAmazon;