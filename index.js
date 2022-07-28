// Remember to import the data and Dog class!
import cats from "./data.js"
import Cat from "./Cat.js"

let catArray = [0, 1, 2]
let isWaiting = false

function render() {
    document.getElementById("main").innerHTML = `<section class="">
                        <div class="profile d-flex flex-column">
                            ${cat.hasBeenLiked ? `<img class="badge" src="./images/badge-like.png" alt="Like mark for the picture">` : ``}
                            ${(cat.hasBeenSwiped && !cat.hasBeenLiked) ? `<img class="badge" src="./images/badge-nope.png" alt="Nope mark for the picture">` : ``}   
                            <p><strong>${cat.name}, ${cat.age}</strong><br/>
                            ${cat.bio}</p>
                            <div class="profile-picture" style="background-image: url('${cat.avatar}')" aria-label="cat's picture"/>
                        </div>
                      </section>`
}

function close() {
    if (!isWaiting) {
        if (!cat.hasBeenSwiped) {
            isWaiting = true
            cat.swipedCat()
            render()
            setTimeout(() => nextCat(), 1500)
        }
    }
}

function like() {
    if (!isWaiting) {
        isWaiting = true
        cat.swipedCat()
        cat.likeCat()
        render()
        setTimeout(() => nextCat(), 1500)
    }
}

function nextCat() {
    if (catArray.length > 0) {
        cat = new Cat(cats[catArray.shift()])
        render()
        isWaiting = false
    } else {
        alert("No more cats, Please refresh the page.")
    }
}

let cat = new Cat(cats[catArray.shift()])

render()

document.getElementById("btn-close").addEventListener("click", close)
document.getElementById("btn-like").addEventListener("click", like)
