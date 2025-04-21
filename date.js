let setalarm = () => {
    let usertime = document.querySelector("#user").value
    let show = document.querySelector("#show")
    let audiosound = document.querySelector("#audioo")

    setInterval(() => {

    
        let time = new Date()
        let alarm = `${time.getHours()}:${time.getMinutes()}`
        if (alarm == usertime) {
            show.innerHTML = "alarm is ringing"
            audiosound.play()
        }
        else {
            show.innerHTML = "alarm is set"
        }
    

    }, 1000)
}