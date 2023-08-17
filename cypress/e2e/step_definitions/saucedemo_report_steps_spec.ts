import {Given, Then} from '@badeball/cypress-cucumber-preprocessor'
import { OpenSauceReport } from '../pages/page_actions/saucedemo_report'

Given ('que acesso o site Saucedemo.com com o problem_user', function(){

    OpenSauceReport.accessSauceReport();
    OpenSauceReport.loginSauceReport();

});

Then('automatizo o fluxo de compra e verifico se há falhas e bugs a serem reportados', function(){

    OpenSauceReport.addProductCartReport();
    OpenSauceReport.validProductCartReport();
    OpenSauceReport.finishCartReport();
    
});