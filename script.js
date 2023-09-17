
    const btn=document.querySelector("#throttle")
    const throttleFunction = (func, delay) => {
        let prev = 0
        return(...args) => {
        let now = new Date().getTime();
        if(now - prev > delay) {
            prev = now;
            return func(...args)
        }
      }
    }
    document.querySelector("#center")
    .addEventListener("mousemove", throttleFunction((detail)=>{
        //less repition code
        var div = document.createElement("div")
        div.classList.add('imagediv')
        div.style.left = detail.clientX + 'px'
        div.style.top = detail.clientY + 'px'

        var img = document.createElement("img")
        img.setAttribute("src", "https://images.unsplash.com/photo-1682687220801-eef408f95d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")
        div.appendChild(img)

        document.body.appendChild(div)

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6
        })

        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2,
            duration: .2
        })
        //Div add hokar, 2 second baad hatt ja rha hai
        setTimeout(function() {
            div.remove()
        }, 2000)
    }, 400))