let Circle = function (radius, color) {
    this.radius = radius;
    this.color = color;
    this.getRadius = function () {
        return this.radius;
    };
    this.getArea = function () {
        return this.radius*this.radius*Math.PI;
    }
};