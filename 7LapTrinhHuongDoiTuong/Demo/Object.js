let rectangle = function () {
    this.setWidth = function (width) {
        this.widthValue = width;
    };
    this.getWidth = function () {
        return this.widthValue;
    };
    this.setHeight = function (height) {
        this.heightValue = height;
    };
    this.getHeight = function () {
        return this.heightValue;
    };
    this.perimeter = function () {
        return (this.getWidth() + this.getHeight()) * 2;
    };
    this.area = function () {
        return this.getWidth() * this.getHeight();
    };
};