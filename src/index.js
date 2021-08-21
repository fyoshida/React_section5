import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addTodo2IncompleteList(inputText);
  // // li生成
  // const li = document.createElement("li");

  // // div生成
  // const div = document.createElement("div");
  // div.className = "list-row";

  // // p生成
  // const p = document.createElement("p");
  // p.innerText = inputText;

  // // button(完了)タグ生成
  // const completeButton = document.createElement("button");
  // completeButton.innerText = "完了";
  // completeButton.addEventListener("click", () => {
  //   //完了リストに追加する要素
  //   const addli = completeButton.parentNode.parentNode;
  //   const addDiv = completeButton.parentNode;

  //   // TODO内の内容テキストを取得
  //   const text = addDiv.firstElementChild.innerText;

  //   // div以下を初期化
  //   addDiv.textContent = null;

  //   // pタグ
  //   const addp = document.createElement("p");
  //   addp.innerText = text;

  //   // 戻すボタン
  //   const addReturnButton = document.createElement("button");
  //   addReturnButton.innerText = "戻す";
  //   addReturnButton.addEventListener("click", () => {
  //     const moveLi = addReturnButton.parentNode.parentNode;
  //     const moveDiv = addReturnButton.parentNode;

  //     deleteFromCompleteList(moveLi);

  //     // TODO内の内容テキストを取得
  //     const text = moveDiv.firstElementChild.innerText;

  //     // div以下を初期化
  //     moveDiv.textContent = null;

  //     // pタグ
  //     const moveP = document.createElement("p");
  //     moveP.innerText = text;

  //     // 完了ボタン
  //     const addCompleteButton =document.createElement("button");
  //     addCompleteButton.innerText="完了"
  //     addCompleteButton.addEventListener("cloick",() => {

  //     })
  //     // addIncompleteList(target);
  //   });

  //   // ターゲットに追加
  //   addDiv.appendChild(addp);
  //   addDiv.appendChild(addReturnButton);

  //   addCompleteList(addli);
  // });

  // // button(削除)タグ生成
  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";
  // deleteButton.addEventListener("click", () => {
  //   // 押された削除ボタンの親タグを未完了から削除
  //   deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  // });

  // // liタグ要素の子要素に各要素を設定
  // li.appendChild(div);
  // div.appendChild(p);
  // div.appendChild(completeButton);
  // div.appendChild(deleteButton);

  // // 未完了リストに追加（ulタグの下にliタグを追加）
  // addIncompleteList(li);
};

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

// 完了リストに追加する関数
const addTodo2CompleteList = (text) => {};

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

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addli = completeButton.parentNode.parentNode;
    const addDiv = completeButton.parentNode;

    // TODO内の内容テキストを取得
    const text = addDiv.firstElementChild.innerText;

    // div以下を初期化
    addDiv.textContent = null;

    // pタグ
    const addp = document.createElement("p");
    addp.innerText = text;

    // 戻すボタン
    const addReturnButton = document.createElement("button");
    addReturnButton.innerText = "戻す";
    addReturnButton.addEventListener("click", () => {
      const moveLi = addReturnButton.parentNode.parentNode;
      const moveDiv = addReturnButton.parentNode;

      deleteFromCompleteList(moveLi);

      // TODO内の内容テキストを取得
      const text = moveDiv.firstElementChild.innerText;
      addTodo2IncompleteList(text);
      // // div以下を初期化
      // moveDiv.textContent = null;

      // // pタグ
      // const moveP = document.createElement("p");
      // moveP.innerText = text;

      // // 完了ボタン
      // const addCompleteButton =document.createElement("button");
      // addCompleteButton.innerText="完了"
      // addCompleteButton.addEventListener("cloick",() => {

      // })
      // addIncompleteList(target);
    });

    // ターゲットに追加
    addDiv.appendChild(addp);
    addDiv.appendChild(addReturnButton);

    addCompleteList(addli);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liタグ要素の子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加（ulタグの下にliタグを追加）
  addIncompleteList(li);
};

// 完了リストに追加する関数

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
