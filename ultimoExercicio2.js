import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import OPORTUNIDADE_OBJECT from '@salesforce/schema/Opportunity';

const FIELDS = [
    'Opportunity.Id',
    'Opportunity.Name',
    'Opportunity.Amount',
    'Opportunity.StageName',
    'Opportunity.CreatedDate'
];

export default class UltimoExercicio2 extends LightningElement {
    oportunidades = [];

    @wire(getObjectInfo, { objectApiName: OPORTUNIDADE_OBJECT })
    opportunityObjectInfo;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredOpportunities({ error, data }) {
        if (data) {
            let oportunidadesNegociacaoRevisao = data.fields.StageName.value === 'Negotiation/Review';
            if (oportunidadesNegociacaoRevisao) {
                this.oportunidades.push({
                    id: data.fields.Id.value,
                    name: data.fields.Name.value,
                    amount: data.fields.Amount.value,
                    stage: data.fields.StageName.value,
                    createdDate: data.fields.CreatedDate.value
                });
            }
        } else if (error) {
            console.error(error);
        }
    }

    get recordId() {
        return this.opportunityObjectInfo.data.defaultRecordTypeId;
    }
}
