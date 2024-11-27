//js書き方のメモとか

//スクロールに応じて画像のサイズと位置を可変する
window.addEventListener("scroll", (event) => {
    //①idがshikakuの要素を取得
    let elem = document.getElementById('shikaku');
    //今どこにいる？
    console.log(scrollY);
   //②もしスクロール値が1を超えたら
    if (scrollY > 1) {
        //1こえた？
        console.log("1こえました");
        //③#shikakuに.shikaku-animeを付与します
        document.getElementById("shikaku").classList.add("shikaku-anime");
    }
});
