import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import FIRST_NAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Lead.LastName';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import MOBILE_PHONE_FIELD from '@salesforce/schema/Lead.MobilePhone';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Lead.AnnualRevenue'

export default class UltimoExercicio4 extends LightningElement {

    createLead() {
        const fields = {};
        fields[FIRST_NAME_FIELD.fieldApiName] = this.template.querySelector('[data-field="FirstName"]').value;
        fields[LAST_NAME_FIELD.fieldApiName] = this.template.querySelector('[data-field="LastName"]').value;
        fields[COMPANY_FIELD.fieldApiName] = this.template.querySelector('[data-field="Company"]').value;
        fields[PHONE_FIELD.fieldApiName] = this.template.querySelector('[data-field="Phone"]').value;
        fields[MOBILE_PHONE_FIELD.fieldApiName] = this.template.querySelector('[data-field="MobilePhone"]').value;
        fields[ANNUAL_REVENUE_FIELD.fieldApiName] = this.template.querySelector('[data-field="AnnualRevenue"]').value;

        const recordInput = { apiName: LEAD_OBJECT.objectApiName, fields };

        createRecord(recordInput)
            .then((record) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Sucesso',
                        message: 'Lead criado com sucesso',
                        variant: 'success',
                    })
                );
                this.clearFields();
                this.navigateToLead(record.id);
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Erro',
                        message: 'Erro ao criar o Lead',
                        variant: 'error',
                    })
                );
            });
    }

    navigateToLead(recordId) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                objectApiName: 'Lead',
                actionName: 'view'
            }
        });
    }

    clearFields() {
        this.template.querySelectorAll('lightning-input-field').forEach((field) => {
            field.value = null;
        });
    }
}
