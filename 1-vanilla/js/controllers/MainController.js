import FormView from '../views/FormView.js'
const tag = '[MainController]';

export default {
    init() {
        console.log(tag, 'init()');
        FormView
        .setup(document.querySelector('form')) // return this 
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());
    },

    onSubmit(input) {
        console.log(tag, 'onSubmit()', input);
    },

    resetForm() {
        console.log(tag, 'resetForm()');
    },
}