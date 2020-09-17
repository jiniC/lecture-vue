import SearchModel from "./models/SearchModel.js";
import KeywordModel from "./models/KeywordModel.js";
import HistoryModel from "./models/HistoryModel.js";

import FormComponent from "./components/FormComponent.js";

new Vue({
  // vue 인스턴스가 html의 어느 돔에 붙어 마운팅될지
  el: "#app",
  data: {
    // 입력데이터 받아서 저장
    query: "",
    submitted: false,
    tabs: ["추천 검색어", "최근 검색어"],
    selectedTab: "",
    keywords: [],
    history: [],
    searchResult: [],
  },
  components: {
    "search-form": FormComponent,
  },
  // Vue Instance 생성될 때 호출되는 lifecycle
  created() {
    this.selectedTab = this.tabs[0];
    this.fetchKeyword();
    this.fetchHistory();
  },
  methods: {
    onSubmit(query) {
      this.query = query;
      this.search();
    },
    onReset(e) {
      this.resetForm();
    },
    onClickTab(tab) {
      this.selectedTab = tab;
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search();
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword);
      this.fetchHistory();
    },
    fetchKeyword() {
      KeywordModel.list().then((data) => {
        this.keywords = data;
      });
    },
    fetchHistory() {
      HistoryModel.list().then((data) => {
        this.history = data;
      });
    },
    search() {
      SearchModel.list().then((data) => {
        this.submitted = true;
        this.searchResult = data;
      });
      HistoryModel.add(this.query);
      this.fetchHistory();
    },
    resetForm(e) {
      // this = Vuew Instance
      this.query = "";
      this.submitted = false;
      this.searchResult = [];
    },
  },
});
