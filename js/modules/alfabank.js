import { stylesheet, stylesheetExists, detectMobile, findAndReplaceText } from './common.js';

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
  realisteWidgetBtn.className = 'realiste-widget-btn';

  realisteWidgetBtn.innerHTML = `Обмен вашей квартиры`;

  let interval;

  const init = () => {
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

  interval = setInterval(init, 1000);
}

export default initElementsAlfabank;
