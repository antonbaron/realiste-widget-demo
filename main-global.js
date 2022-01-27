import constants from './js/constants.js';

import initElementsMrGroup from './js/modules/mr-group.js';
import initElementsRaiffeisen from './js/modules/raiffeisen.js';
import initElementsScor from './js/modules/scor.js';
import initElementsAlfabank from './js/modules/alfabank.js'
import initElementsRshb from './js/modules/rshb.js';

const pageIsLoaded = (partnerName) => constants.PARTNERS[partnerName].some(el => window.location.origin == el);

document.addEventListener("DOMContentLoaded", function() {
  
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
  }
});
