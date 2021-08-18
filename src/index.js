import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // liタグ要素の子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);

  // 未完了リストに追加（ulタグの下にliタグを追加）
  document.getElementById("incomplete-list").appendChild(li);

  // button
  // console.log(li);
  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
