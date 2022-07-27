// Create the Dog class here

class Cat{
    constructor(data){
        Object.assign(this, data)
    }

    likeCat = () => this.hasBeenLiked = true
    swipedCat = () => this.hasBeenSwiped = true
}

export default Cat