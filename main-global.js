import constants from './js/constants.js';

import gk_osnova_config from './js/config/gk-osnova.js';
import very_botsad_config from './js/config/very-botsad.js';
import uno_moscow_config from './js/config/uno-moscow.js';

import initElementsMrGroup from './js/modules/mr-group.js';
import initElementsRaiffeisen from './js/modules/raiffeisen.js';
import initElementsScor from './js/modules/scor.js';
import initElementsAlfabank from './js/modules/alfabank.js';
import initElementsRshb from './js/modules/rshb.js';
import initElementsDomrfbank from './js/modules/domrfbank.js';
import initElementsMtsbank from './js/modules/mtsbank.js';
import initElementsKortros from './js/modules/kortros.js';
import initElementsEtalon from './js/modules/etalon.js';

import partnerTemplate from './js/partner-template.js';

const pageIsLoaded = (partnerName) => constants.PARTNERS[partnerName].some(el => window.location.origin == el);

window.onload = function() {
  if (pageIsLoaded('MR_GROUP')) {
    console.log('MR_GROUP');
    initElementsMrGroup();
  } else if (pageIsLoaded('RAIFFEISEN')) {
    console.log('RAIFFEISEN');
    initElementsRaiffeisen();
  } else if (pageIsLoaded('SCOR')) {
    console.log('SCOR');
    initElementsScor();
  } else if (pageIsLoaded('ALFABANK')) {
    console.log('ALFABANK');
    initElementsAlfabank();
  } else if (pageIsLoaded('RSHB')) {
    console.log('RSHB');
    initElementsRshb();
  } else if (pageIsLoaded('DOMRFBANK')) {
    console.log('DOMRFBANK');
    initElementsDomrfbank();
  } else if (pageIsLoaded('MTSBANK')) {
    console.log('MTSBANK');
    initElementsMtsbank();
  } else if (pageIsLoaded('ETALON')) {
    console.log('ETALON');
    initElementsEtalon();
  } else if (pageIsLoaded('GK_OSNOVA')) {
    console.log('GK_OSNOVA');
    partnerTemplate(gk_osnova_config);
  } else if (pageIsLoaded('VERY_BOTSAD')) {
    console.log('VERY_BOTSAD');
    partnerTemplate(very_botsad_config);
  } else if (pageIsLoaded('UNO_MOSCOW')) {
    console.log('UNO_MOSCOW');
    partnerTemplate(uno_moscow_config);
  }
}

if (pageIsLoaded('KORTROS')) {
  console.log('KORTROS');
  initElementsKortros();
}
