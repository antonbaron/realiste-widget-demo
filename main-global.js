import constants from './js/constants.js';

import initElementsMrGroup from './js/modules/mr-group.js';
import initElementsRaiffeisen from './js/modules/raiffeisen.js';
import initElementsScor from './js/modules/scor.js';
// import initElementsAlfabank from './js/modules/alfabank.js'
import initElementsRshb from './js/modules/rshb.js';

import { stylesheet, stylesheetExists, detectMobile, findAndReplaceText } from './js/modules/common.js';

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
    // initElementsAlfabank();
    let interval;

    const initElementsAlfabank = () => {
      const realisteWidgetWrap = document.createElement('div');
      realisteWidgetWrap.className = 'widget-wrap alfabank';
      realisteWidgetWrap.id = 'realisteWidgetWrap';
      
      realisteWidgetWrap.innerHTML = `<div class="b-block-text container">
        <p class="widget-wrap-title">Купить и обменять Вашу квартиру</p>
        <div id="realisteWidget" data-widget="https://alfabank.realiste.io/trade-up"></div>
      </div>`;
    
      const realisteWidgetBtn = document.createElement('a');
      realisteWidgetBtn.href = '#realisteWidgetWrap';
      realisteWidgetBtn.className = 'realiste-widget-btn alfabank';
    
      realisteWidgetBtn.innerHTML = `Обмен вашей квартиры`;
    
      const referenceNode = !detectMobile() ? document.querySelector('#benefit.a2op2t.s2op2t') : document.querySelector('#alfa > div > .c3iFBg[data-widget-name=Layout]');
      const headerLogo = !detectMobile() ? document.querySelector('.j1Cda9') : document.querySelector('.d3iFBg.d1S2QV.b1S2QV.i1S2QV');
      const btnReferenceNode = !detectMobile() ? document.querySelector('.a1rN1L.h1rN1L.b1rN1L.i1rN1L.c3FBX4.d3FBX4[data-test-id=tabs-list-tabTitle-0]') : document.querySelector('.a1rN1L.h1rN1L.b1rN1L.i1rN1L.c1NPQw.d1NPQw[data-test-id=tabs-list-tabTitle-0]');
  
      if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnReferenceNode) {
        clearInterval(interval);
  
        findAndReplaceText(new RegExp('Альфа-|АЛЬФА-', "g"), '');
  
        headerLogo.style.display = 'none';
  
        referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode.nextSibling);
        btnReferenceNode.parentNode.insertBefore(realisteWidgetBtn, btnReferenceNode.nextSibling);
      }
    }
    
    interval = setInterval(initElementsAlfabank, 1000);

  } else if (pageIsLoaded('RSHB')) {
    console.log('RSHB');
    initElementsRshb();
  }
});
