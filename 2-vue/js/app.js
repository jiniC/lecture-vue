import SearchModel from './models/SearchModel.js'
new Vue({
    // vue 인스턴스가 html의 어느 돔에 붙어 마운팅될지
    el: '#app',
    data: {
        //  입력데이터 받아서 저장
        query: '',
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            this.search();
        },
        onReset(e) {
            this.resetForm();
        },
        onKeyup() {
            if(!this.query.length) this.onReset();
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true;
                this.searchResult = data;
            })
        },
        resetForm(e) {
            // this = Vuew Instance
            this.query = '';
            this.submitted = false;
            this.searchResult = [];
        },
    }
})