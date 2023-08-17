import { Given, Then} from '@badeball/cypress-cucumber-preprocessor';
import OpenGoogle from '../pages/page_actions/acessar_google';

Given('que acesso o Google Maps', function () {
    OpenGoogle.acessarGoogle();
});


Then('insiro os dados de Natal e São paulo', function () {
    OpenGoogle.fazerPesquisa();
});