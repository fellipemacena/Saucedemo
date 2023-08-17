import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import OpenAmazon from '../pages/page_actions/acessar_amazon';

Given('que eu desejo acessar o site da Amazon', function () {
    OpenAmazon.acessarAmazon();
    OpenAmazon.Login();
});
    
When('escolho o produto', function () {
    OpenAmazon.Pesquisa();
});

When('coloco no carrinho',function () {
    OpenAmazon.addCarrinho();
});   

Then('excluo o produto do mesmo', function () {
    OpenAmazon.excluiCarrinho();
});