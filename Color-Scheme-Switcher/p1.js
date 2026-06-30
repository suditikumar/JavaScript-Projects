const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = "grey"
                break;

            case "yellow":
                body.style.backgroundColor = "yellow"
                break;

            case "white":
                body.style.backgroundColor = "white"
                break;

            case "blue":
                body.style.backgroundColor = "blue"
                break;
            
            default:
                break;
        }
    })
})