'use strict';

var fireballSize = 22;
var getFireballSpeed = function(left) {
  return left ?  5 : 2;
};
var wizardSpeed = 3;
var wizardWidth = 70; 
var getWizardHeight = function() { 
  return wizardWidth * 1.337;
};

function getWizardX(width) {
  return width / 2 - wizardWidth / 2;
}

function getWizardY(height) {
  return height / 3 - getWizardHeight();
}
