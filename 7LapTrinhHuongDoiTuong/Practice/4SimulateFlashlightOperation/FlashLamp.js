let FlashLamp = function () {
  this.setBattery = function (battery) {
      this.battery = battery;
  };
  this.getBatteryInfo = function () {
      return this.battery.getEnergy()
  };
  this.light = function () {
      if(this.status){
          document.write("Lighting." +"<br/>");
      }else {
          document.write("No lighting."+"<br/>");
      }
  };
  this.turnOn = function () {
      this.status = true;
  };
  this.turnOff = function () {
      this.status = false;
  };
};