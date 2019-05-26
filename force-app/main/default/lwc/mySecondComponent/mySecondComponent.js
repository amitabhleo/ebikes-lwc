import { LightningElement,api} from 'lwc';

export default class MySecondComponent extends LightningElement {
    //firstName = 'World';
    @api name;
}