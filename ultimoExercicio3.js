import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import OPP_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class UltimoExercicio3 extends LightningElement {
    oppName = '';
    oppAmount = '';
    oppStage = '';
    showMessage = false;
    errorMessage = '';

    handleSave() {
        if (this.validateInputs()) {
            const fields = {};
            fields[NAME_FIELD.fieldApiName] = this.oppName;
            fields[AMOUNT_FIELD.fieldApiName] = this.oppAmount;
            fields[STAGE_FIELD.fieldApiName] = this.oppStage;

            const recordInput = { apiName: OPP_OBJECT.objectApiName, fields };
            createRecord(recordInput)
                .then(() => {
                    this.showSuccessMessage();
                    this.clearInputs();
                })
                .catch(error => {
                    this.showErrorMessage(error);
                });
        }
    }

    validateInputs() {
        if (!this.oppName || !this.oppAmount || !this.oppStage) {
            this.showErrorMessage('Todos os campos são obrigatórios.');
            return false;
        }

        return true;
    }

    clearInputs() {
        this.oppName = '';
        this.oppAmount = '';
        this.oppStage = '';
    }

    showSuccessMessage() {
        // Implemente a exibição da mensagem de sucesso
    }

    showErrorMessage(errorMessage) {
        this.showMessage = true;
        this.errorMessage = errorMessage;
    }
}
