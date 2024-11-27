// ボタン2を押すとアラートが出る
document.querySelector('#btn_2').
addEventListener('click',()=>{
    window.alert('ボタン2が押されました');
});

// ①ボタン3を押すと背景色が変わる
// document.querySelector('#btn_3').
// addEventListener('click',()=>{
//     document.querySelector('#container').
//     style.backgroundColor='#999999';
// });

// ②ボタン3を押すとクラスが付与され、背景色が変わる（トグル式）
// document.querySelector('#btn_3').
// addEventListener('click',()=>{
//     document.querySelector('#container').
//     classList.toggle('change');
// });

// ③ボタン3にホバーするとクラスが付与され、背景色が変わる（トグル式）し、アラートが出る
document.querySelector('#btn_3').
addEventListener('mouseover',()=>{
    document.querySelector('#container').
    classList.toggle('change');
    // window.alert('ボタン3が押されました');
});
