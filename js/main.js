window.addEventListener("load",() => {
    new Isotope("section",{ //부모 요소 지정
        itemSelector: "article",
        columWidth: "article",
        transitionDuration: "0.5s"// 호출구문
    })
    })