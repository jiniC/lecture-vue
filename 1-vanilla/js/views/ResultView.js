import View from './View.js';

const tag = '[ResultView]';

const ResultView =Object.create(View);

ResultView.setup = function(el) {
    this.init(el);
}

// 서버에서 받아온 검색결과로 동적으로 돔을 그려줌
ResultView.render = function(data = []) {
    console.log(tag, 'render()', data);
    this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : '검색 결과가 없습니다';
}

ResultView.getSearchResultHtml = function(data) {
    // debugger
    // data: collection
    // 초기값으로 '<ul>', 마지막에 '</ul>' 문자열 넘겨줌
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item) {
    return `<li>
        <img src="${item.image}">
        <p>${item.name}</p>
    </li>`
}

export default ResultView;