import constants from './js/constants.js';

import initElementsMrGroup from './js/modules/mr-group.js';
import initElementsRaiffeisen from './js/modules/raiffeisen.js';
import initElementsScor from './js/modules/scor.js';

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
  }
});
