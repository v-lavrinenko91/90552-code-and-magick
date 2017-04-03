'use strict';

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
function getRandomMassElement(mass) {
  var randNumber = Math.floor(Math.random() * mass.length);
  return mass[randNumber];
}
function generateWizard() {
  var wizardName = getRandomMassElement(WIZARD_NAMES) + ' ' + getRandomMassElement(WIZARD_SURNAMES);
  var wizardCoatColor = getRandomMassElement(WIZARD_COAT_COLOR);
  var wizardEyesColor = getRandomMassElement(WIZARD_EYES_COLOR);
  return {
    name: wizardName,
    coatColor: wizardCoatColor,
    eyesColor: wizardEyesColor
  };
}
function createWizardsList(listLength) {
  var wizards = [];
  for (var i = 0; i < listLength; i++)
    {
      wizards[i] = generateWizard();
    }
  return wizards;
}
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}
function addWizards() {
  var fragment = document.createDocumentFragment();
  var wizardList = createWizardsList(4);
  for (var i = 0; i < wizardList.length; i++) {
    fragment.appendChild(renderWizard(wizardList[i]));
  }
  similarListElement.appendChild(fragment);
}
function showWizardsSetup() {
  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}
addWizards();
showWizardsSetup();
