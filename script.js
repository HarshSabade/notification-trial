const butt=document.querySelector("button")
butt.addEventListener("click",e=>{
    Notification.requestPermission().then(perm=>{
        if (perm==="granted") {
            new Notification("Next lecture : DS",{
                body:"Classroom 6502"
            })
        }
    })
})