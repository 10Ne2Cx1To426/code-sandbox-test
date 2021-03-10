import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化するまで
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成する
  createIncompleteList(inputText);
};

// 未完了リストからリストを削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを作成
  const li = document.createElement("li");
  li.innerText = text;

  //button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リスtの親要素
    const addTarget = completeButton.parentNode;
    // 中のテキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下の初期化
    addTarget.textContent = null;
    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //戻すボタンの生成
    const back = document.createElement("button");
    back.innerText = "戻す";
    back.addEventListener("click", () => {
      // 押された戻るボタンの親タグを完了リストから削除
      const deleteTarget = back.parentElement;
      document.getElementById("complete-list").remove(deleteTarget);

      //テキストの取得
      const text = back.parentNode.firstChild.innerText;
      console.log(text);
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(back);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押されたボタンの親要素を削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグのこ要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
