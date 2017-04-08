'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSaveBtn = setup.querySelector('.setup-submit');
var userNameField = setup.querySelector('.setup-user-name');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizard = document.querySelector('.wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var userNameField = setup.querySelector('input.setup-user-name');
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
  for (var i = 0; i < listLength; i++) {
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

function openSetup() {
  setup.classList.remove('hidden');
  setup.querySelector('.setup-similar').classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
  setupClose.addEventListener('click', closeSetup);
  setupClose.addEventListener('keydown', onSetupCloseEnterPress);
  setupSaveBtn.addEventListener('click', onSetupSaveBtnClick);
  document.addEventListener('click', onSetupSaveBtnFocusEnterPress);
  wizardCoat.addEventListener('click', generateCoatColor);
  wizardEyes.addEventListener('click', generateEyesColor);
  wizardFireball.addEventListener('click', generateFireballColor);
}

function closeSetup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
  setupClose.removeEventListener('click', closeSetup);
  setupClose.removeEventListener('keydown', onSetupCloseEnterPress);
  setupSaveBtn.removeEventListener('click', onSetupSaveBtnClick);
  document.removeEventListener('click', onSetupSaveBtnFocusEnterPress);
  wizardCoat.removeEventListener('click', generateCoatColor);
  wizardEyes.removeEventListener('click', generateEyesColor);
  wizardFireball.removeEventListener('click', generateFireballColor);
}

function onSetupEscPress(evt) {
  if (evt.keyCode === 27 && document.activeElement != userNameField) {
    closeSetup();
  }
}

function onSetupOpenEnterPress(evt) {
  if (evt.keyCode === 13) {
    openSetup();
  }
}

function onSetupCloseEnterPress(evt) { 
  if (evt.keyCode === 13) {
    closeSetup();
  }
}

function onSetupSaveBtnClick(evt) {
  evt.preventDefault();
  if (userNameField.checkValidity()) {
    closeSetup();
  }
}

function onSetupSaveBtnFocusEnterPress(evt) {
  if (evt.keyCode === 13 && document.activeElement == setupSaveBtn) {
    closeSetup();
  }
}

function generateCoatColor() {
  wizardCoat.style.fill = getRandomMassElement(WIZARD_COAT_COLOR);
}

function generateEyesColor() {
  wizardEyes.style.fill = getRandomMassElement(WIZARD_EYES_COLOR);
}

function generateFireballColor() {
  wizardFireball.style.background = getRandomMassElement(WIZARD_FIREBALL_COLOR);
}

addWizards();
setupOpen.addEventListener('click', openSetup);
setupOpen.addEventListener('keydown', onSetupOpenEnterPress);
