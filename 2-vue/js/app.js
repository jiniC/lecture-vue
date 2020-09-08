import SearchModel from './models/SearchModel.js'
new Vue({
    // vue 인스턴스가 html의 어느 돔에 붙어 마운팅될지
    el: '#app',
    data: {
        //  입력데이터 받아서 저장
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '',
        searchResult: []
    },
    // Vue Instance 생성될 때 호출되는 lifecycle
    created() {
        this.selectedTab = this.tabs[0];
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
        onClickTab(tab) {
            this.selectedTab = tab;
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