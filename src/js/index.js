var randomColor = require("random-color");

class Rectangle {
    constructor(w, h, x, y) {
        this._w = w;
        this._h = h;
        this._x = x;
        this._y = y;
        this._ref = this.generateInitialHTML();
        this.setStyling();
        this.background();
    }

    generateInitialHTML() {
        document.body.insertAdjacentHTML(
            "afterbegin",
            `
                <div class="rectangle"></div>
            `
        );
        return document.querySelector("div:first-child");
    }

    setStyling() {
        const styles = {
            left: this._x + "px",
            top: this._y + "px",
            width: this._w + "px",
            height: this._h + "px",
            backgroundColor: randomColor()
        };
        Object.assign(this._ref.style, styles);
    }

    background() {
        return this._ref.style.backgroundColor = randomColor();
    }

    get width() {
        return this._w + "px";
    }
    set width(waarde) {
        this._w = waarde;
        this.setStyling();
    }
    get height() {
        return this._h + "px";
    }
    set height(waarde) {
        this._h = waarde;
        this.setStyling();
    }
    // get left() {
    //     return this._x + "px";
    // }
    // set left(waarde) {
    //     this._x = waarde;
    //     this.setStyling();
    // }
    // get top() {
    //     return this._y + "px";
    // }
    // set top(waarde) {
    //     this._y = waarde;
    //     this.setStyling();
    // }

    set position(coordinate) {
        const arr = coordinate.replace(" ", "").split(",");
        this._x = arr[0];
        this._y = arr[1];
        this.setStyling();
    }
}


const rec1 = new Rectangle(100, 100, 20, 50);
const vierkant2 = new Rectangle(100, 100, 200, 200);