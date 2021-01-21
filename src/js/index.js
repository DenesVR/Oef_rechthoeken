const randomColor = require('randomcolor');

class Rectangle {
    constructor(w, h, x, y) {
        this._w = w;
        this._h = h;
        this._x = x;
        this._y = y;
        this._ref = this.generateInitialHTML();
        this.setStyling();
        this.setupEvents();
    }
    static getDistance(rechthoek1, rechthoek2) {
        return Math.abs(rechthoek1._x - rechthoek2._x);
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
            backgroundColor: randomColor.randomColor()
        };
        Object.assign(this._ref.style, styles);
    }

    setupEvents() {
        this._ref.onclick = () => {
            this.setStyling();
        };
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

    set position(coordinate) {
        const arr = coordinate.replace(" ", "").split(",");
        this._x = arr[0];
        this._y = arr[1];
        this.setStyling();
    }

    getOppervlakte() {
        return this._w * this._h;
    }

}


const rechthoek1 = new Rectangle(100, 100, 20, 50);
const rechthoek2 = new Rectangle(300, 70, 200, 200);
console.log(rechthoek1.getOppervlakte());
console.log(rechthoek2.getOppervlakte());
console.log(Rectangle.getDistance(rechthoek1, rechthoek2));