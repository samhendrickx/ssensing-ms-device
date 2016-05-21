/*
ACCELERATION WAVEFORM

Characterisitc UUID: 4e92f4ab-c01b-4b5a-b328-699856a7c2ee

This characteristic represents the acceleration energy magnitude registered by the tracker. The magnitude is calculated as Euclidean norm of the XYZ acceleration components, that is sqrt(X2 + Y2 + Z2).

http://angelsensor.com/protocols/seraphim-sense/activity-monitoring-service/
*/


function accelerationWaveform(characteristic) {

  characteristic.on('read', function(data, isNotification) {
    if (data.length >= 3) {
      var wave = data[0] + (data[1] << 8) + (data[2] << 16);

      var csvData = new Date().getTime() + ',' + wave + '\n';
      require('fs').appendFile('data/raw/accelerometer.csv', csvData);
    }
  });

  characteristic.notify(true, function(error) {
    console.log('Acceleration Waveform notification on');
  });

}


module.exports = accelerationWaveform;