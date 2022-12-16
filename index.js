const buttons = document.querySelectorAll(".button");

buttons.forEach(item => {
    item.addEventListener("mouseenter", () => {
        buttons.forEach(btn => {
            btn.classList.add('hover');
        })
    })

    item.addEventListener("mouseleave", () => {
        buttons.forEach(btn => {
            btn.classList.remove('hover');
        })
    })
})




const buttons2 = document.querySelectorAll(".button2");

buttons2.forEach(item => {
    item.addEventListener("mouseenter", () => {
        buttons2.forEach(btn => {
            btn.classList.add('hover');
        })
    })

    item.addEventListener("mouseleave", () => {
        buttons2.forEach(btn => {
            btn.classList.remove('hover');
        })
    })
})





const buttons3 = document.querySelectorAll(".button3");

buttons3.forEach(item => {
    item.addEventListener("mouseenter", () => {
        buttons3.forEach(btn => {
            btn.classList.add('hover');
        })
    })

    item.addEventListener("mouseleave", () => {
        buttons3.forEach(btn => {
            btn.classList.remove('hover');
        })
    })
})
