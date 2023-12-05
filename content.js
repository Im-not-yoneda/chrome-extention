window.onload = function getElement() {
  // body内の要素全て取得
  const elements = [...document.body.getElementsByTagName("*")];
  // 一つずつ表示
  elements.forEach((element) => console.log(element.innerText));
};
