import GMapsElements from '../page_elements/g_maps.elements.js'


export class OpenGoogle {
    static acessarGoogle() {
        cy.fixture('example.json').then((json) => {
        cy.visit(json.url_google_maps)
        });
    }
    static fazerPesquisa() {
    cy.get(GMapsElements.MAPS_CMP_PESQUISA).type('NATAL, RN{ENTER}')
    cy.get(GMapsElements.BTN_ROTAS).click()
    cy.get(GMapsElements.BTN_INVERTER_ROTAS).click()
    cy.get(GMapsElements.CMP_ROTAS_DESTINO).type('AV PAULISTA, SÃO PAULO, SP{ENTER}')

    }

}
export default OpenGoogle;