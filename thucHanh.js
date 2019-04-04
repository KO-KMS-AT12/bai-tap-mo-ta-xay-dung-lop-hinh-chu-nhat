let Rectangle = function (w, h) {
    this.w = w;
    this.h = h;

    this.getW = function () {
        return this.w;
    };
    this.getH = function () {
        return this.h;
    };

    this.getS = function () {
        return this.w * this.h
    };
    this.getC = function () {
        return (this.w + this.h) * 2;
    }
};


main();


function main() {
    let w = parseFloat(prompt("Nhap chieu rong cua hinh chu nhat"));
    let h = parseFloat(prompt("Nhap chieu cao cua hinh chu nhat"));
    let rectangcle = new Rectangle(w, h);
    area(rectangcle.getW(), rectangcle.getH(), rectangcle.getS(), rectangcle.getC());

}


function area(w, h, s, c) {

    let resutlS = document.getElementById("dienTich");
    let resutlC = document.getElementById("chuVi");

    resutlS.innerHTML = "Dien tich hinh chu nhat (" + w +
        "," + h + ") la : " + s;
    resutlC.innerHTML = "Chu vi hinh chu nhat (" + w +
        "," + h + ") la : " + c;

    drawRectangle(w, h);


}

function drawRectangle(w, h) {
    var draw = document.getElementById("draw");
    var context = draw.getContext('2d');
    context.strokeStyle = "black";
    context.strokeRect(10, 10, w, h);
    context.stroke();
}