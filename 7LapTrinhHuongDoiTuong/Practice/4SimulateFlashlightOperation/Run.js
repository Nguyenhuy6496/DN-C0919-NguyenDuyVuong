let battery = new Battery();
battery.setEnergy(10);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

flashLamp.turnOn();
document.write("Turn on" + "<br/>");

flashLamp.light();

for (let i = 0; i < 10; i++) {
    battery.decreaseEnergy();
}
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

flashLamp.turnOff();
document.write("Turn off" + "<br/>");

flashLamp.light();