const test = document.querySelector(".test");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  test.classList.toggle("test2");
  //   if (test.classList.contains("test2")) {
  //     //　containsメソッドで、test2クラスが既に付与されているか判定
  //     test.classList.remove("test2"); //　test2クラスがついている場合、test２クラスを削除する
  //   } else {
  //     test.classList.add("test2"); //　test2クラスがついていない場合、test２クラスを追加する
  //   }
});

const userName = "AAA";
const target = document.getElementById("start-button");

function sample() {
  //thisは「クリックされた要素」の情報をもつ
  console.log(this);
}

function sayHello(a) {
  //thisはわたされた第2引数の情報をもつ
  console.log(a);

  //Hello, Kenと表示される
  //console.log('Hello, ' + this.name);
}

target.addEventListener("click", sample());
//<button id='start-button'></button>が表示される

target.addEventListener("click", { name: userName, handleEvent: sayHello });
