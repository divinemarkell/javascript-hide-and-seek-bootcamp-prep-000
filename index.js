function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById(`#nested.target`);
}
function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
function deepestChild() {
  let parent = document.querySelector('div#grand-node');
  let child = parent.querySelectorAll('div')[3];
  return parent;
}