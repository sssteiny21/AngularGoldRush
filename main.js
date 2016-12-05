angular.module("foundGold", []); // Creating a module named 'SamuelLJackson' that has 0 dependencies

// angular.module('NAME') // retrieves an existing module. Notice it is missing the injector array



angular.module("foundGold")
  .controller("gold", goldController);

function goldController () {
  var yCtrl = this;
  console.log("Hello!")
  
  yCtrl.goldspots = [
//     {
//       x : 484,
//       y : 334
//     },
//     {
//       x : 694,
//       y : 183
//     }
  ];

  yCtrl.position = function(clicked) {
//       console.log("Hey, this clicky thing works")
      console.log(clicked.pageX, clicked.pageY);
//     console.log(clicked);
      yCtrl.stickIt(clicked.layerX, clicked.layerY);
  }

  yCtrl.stickIt = function(stuck_x, stuck_y) {
    console.log("Hey, Stick it works!!!")
      yCtrl.goldspots.push({x: stuck_x, y: stuck_y - 50});
  }
  
  yCtrl.removeIt = function(event, index){
    event.stopPropagation();
    console.log("remove it works");
    yCtrl.goldspots.splice(index, 1);
    
  }
  
}