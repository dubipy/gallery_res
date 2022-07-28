window.addEventListener("load",() => {
    const grid = new Isotope("section",{ //부모 요소 지정
        itemSelector: "article",
        columWidth: "article",
        transitionDuration: "0.5s"// 호출구문
    })

    const btns = document.querySelectorAll("main ul li");

    btns.forEach((btn, index) => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            const btn_a = e.currentTarget.querySelector("a");
            const a_href = btn_a.getAttribute("href") //속성값, 속성명 가져오기
            console.log(a_href)

            grid.arrange({filter: a_href});
        })
    })
    })

//필터링 기능 적용
