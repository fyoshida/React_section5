import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addTodo2IncompleteList(inputText);
};

// 未完了リストに追加する関数
const addTodo2IncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = text;

  // liタグ要素の子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(createCompleteButton());
  div.appendChild(createDeleteButton());

  // 未完了リストに追加（ulタグの下にliタグを追加）
  addIncompleteList(li);
};

// 未完了リストに追加する関数
const addTodo2CompleteList = (text) => {
  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = text;

  // liタグ要素の子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(createReturnButton());

  // 完了リストに追加（ulタグの下にliタグを追加）
  addCompleteList(li);
};

//================
// ボタン作成
//================
// 戻すボタンを生成する関数
const createReturnButton = () => {
  const button = document.createElement("button");

  button.innerText = "戻す";
  button.addEventListener("click", () => {
    const text = button.parentNode.firstElementChild.innerText;
    deleteFromCompleteList(button.parentNode.parentNode);
    addTodo2IncompleteList(text);
  });

  return button;
};

// 完了ボタンを生成する関数
const createCompleteButton = () => {
  const button = document.createElement("button");

  button.innerText = "完了";
  button.addEventListener("click", () => {
    const text = button.parentNode.firstElementChild.innerText;
    deleteFromIncompleteList(button.parentNode.parentNode);
    addTodo2CompleteList(text);
  });

  return button;
};

// 削除ボタンを生成する関数
const createDeleteButton = () => {
  const button = document.createElement("button");
  button.innerText = "削除";
  button.addEventListener("click", () => {
    deleteFromIncompleteList(button.parentNode.parentNode);
  });
  return button;
};

//=========================
// リストへの要素の追加・削除
//=========================
//　未完了リストから指定の要素を削除
const deleteFromIncompleteList = (removeTarget) => {
  document.getElementById("incomplete-list").removeChild(removeTarget);
};

//　完了リストから指定の要素を削除
const deleteFromCompleteList = (removeTarget) => {
  document.getElementById("complete-list").removeChild(removeTarget);
};

//　未完了リストに指定の要素を追加
const addIncompleteList = (addTarget) => {
  document.getElementById("incomplete-list").appendChild(addTarget);
};

//　完了リストに指定の要素を追加
const addCompleteList = (addTarget) => {
  document.getElementById("complete-list").appendChild(addTarget);
};

//=========================
//
//=========================
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
