import { LightningElement, track } from 'lwc';

export default class UltimoExercicio extends LightningElement {
    @track inputValue = '';
    @track errorMessage = '';

    handleNumberClick(event) {
        this.inputValue += event.target.value;
    }

    handleOperatorClick(event) {
        if (this.inputValue === '') {
            this.errorMessage = 'Por favor, insira um número antes de selecionar um operador.';
        } else {
            this.inputValue += event.target.value;
            this.errorMessage = '';
        }
    }

    handleClearClick() {
        this.inputValue = '';
        this.errorMessage = '';
    }

    handleEqualsClick() {
        try {
            this.inputValue = eval(this.inputValue).toString();
            this.errorMessage = '';
        } catch (error) {
            if (error instanceof SyntaxError) {
                this.errorMessage = 'Operação inválida.';
            } else if (error instanceof TypeError) {
                this.errorMessage = 'Por favor, insira um número antes de selecionar um operador.';
            } else {
                this.errorMessage = 'Um erro ocorreu.';
            }
        }
    }
}
