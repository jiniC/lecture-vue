new Vue({
    // vue 인스턴스가 html의 어느 돔에 붙어 마운팅될지
    el: '#app',
    data: {
        //  입력데이터 받아서 저장
        query: ''
    },
    methods: {
        onSubmit(e) {
        },
        onReset() {
            // this = Vuew Instance
            this.query = '';
            //
        },
        onKeyup() {
            if(!this.query.length) this.onReset();
        }
    }
})