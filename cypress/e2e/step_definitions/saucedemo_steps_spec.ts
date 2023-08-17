import {Given, Then} from '@badeball/cypress-cucumber-preprocessor'
import { OpenSauce } from '../pages/page_actions/saucedemo'

Given ('que acesso o site Saucedemo.com como usuário standard', function(){

    OpenSauce.accessSauce();
    OpenSauce.loginSauce();

});

Then('verifico as funcionalidades do mesmo', function(){

    OpenSauce.addProductCart();
    OpenSauce.validProductCart();
    OpenSauce.removeProductCart();
    OpenSauce.addProductCart();
    OpenSauce.finishCart();
    OpenSauce.checkoutOverview();
    
});