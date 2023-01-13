const countersEl = document.querySelectorAll(".incre")

countersEl.forEach(counter => {
    counter.innerText = "0"

    const increUpdate = () =>{
        const target = +counter.getAttribute("data-target")
        const dataValue = +counter.innerText
        const increment = target / 400
       
        if(dataValue < target){
            counter.innerText = `${Math.ceil(dataValue + increment)}`
            setTimeout(increUpdate, 5)
        }
        else{
            counter.innerText = target
        }
        
    }
    increUpdate()
});