// #btn_smallを押すと#containerに.small_textがつく
document.querySelector('#btn_small').
addEventListener('click',()=>{
    document.querySelector('#contents').
    classList.add('small_text');
});

// #btn_largeを押すと#containerから.small_textがはずれる
document.querySelector('#btn_large').
addEventListener('click',()=>{
    document.querySelector('#contents').
    classList.remove('small_text');
});


// ----- 10/24のテーマ：定数（const）と変数（let）-----

// 定数（const）について
// const message="テキストを定数に入れました";
// window.alert(message);

// 定数とは 箱に「messeage」という名前をつけました。という宣言みたいなかんじ
// 定数の箱には中身をいれることができる。「テキストメッセージが入ります」とか。
// この「中にいれる」のを「左辺に代入」という。
// プログラムの世界では 答えは左側。右から左に式を書いているイメージ。
// 式なども入れられる。いちいち長い情報を書かなくても、左辺に代入することで箱に入れて呼び出せばいいようにする。これを定数という。
// 定数は、一度書き込んだらあとから変更をすることができない。

// 変数（let）について
// let message="テキストを変数に入れました";
// window.alert(message);
// message="中身を書き換えました!";
// window.alert(message);

// 変数も箱に名前をつけて中身をいれるところまでは同じだが、
// そのあと中身を上書きすることができる。

// 定数のほうが新しくできた。
// 上書きできるかできないかはけっこう重要で、上書きしたほうが便利なんじゃないかと思うかもしれないが、意図していないときに上書きしてしまってエラーが起こることもあるので、上書き予定のないものはconstで最初に宣言してしまうのが今どきの書き方。


// constを使って最初のを短くしてみる
// 定数の宣言
// const small_btn=document.querySelector('#btn_small');
// const large_btn=document.querySelector('#btn_large');
// const content=document.querySelector('#contents');

// 小さいボタンが押されたとき
// small_btn.addEventListener('click',()=>{
//     content.classList.add('small_text');
// });

// 大きいボタンが押されたとき
// large_btn.addEventListener('click',()=>{
//     content.classList.remove('small_text');
// });

// letを使うともっとインタラクティブなことができるようになるが それはまた来週

// 10.31 定数の話の続き
// 変数を使うと、ユーザーが入力した数値にテキストサイズを変更するようなことが可能になる

// 定数の宣言
const small_btn=document.querySelector('#btn_small');
const large_btn=document.querySelector('#btn_large');
const content=document.querySelector('#contents');
const custom_btn=document.querySelector('#btn_custom');
const custom_size=document.querySelector('#font_size');
const color_picker=document.querySelector('#picker');

// 小さいボタンが押されたとき
small_btn.addEventListener('click',()=>{
    content.classList.add('small_text');
    content.classList.remove('big_text');
});

// 大きいボタンが押されたとき
large_btn.addEventListener('click',()=>{
    content.classList.add('big_text');
    content.classList.remove('small_text');
});

// ONボタンが押されたとき
custom_btn.addEventListener('click',()=>{
    // window.alert("ONボタンが押された！"); //これはテスト用
    let txt_size=custom_size.value; //.valueは入力されている中身のこと テキストボックスの値を変数に代入している
    document.querySelector('#contents h1').style.fontSize=txt_size+'px';
});

// カラーピッカーが選ばれた
color_picker.addEventListener('input',()=>{
    let color=color_picker.value;
    console.log('カラーピッカーに入力');
    // window.alert(txt_size+'px ' + color);
    document.querySelector('body').style.backgroundColor=color;
});