import { stylesheet, stylesheetExists, detectMobile } from './common.js';

const initElementsAlfabank = () => {
  document.body.innerHTML = document.body.innerHTML.replace(/Альфа-|АЛЬФА-/g, "");

  if (stylesheetExists(stylesheet.href)) {
    const referenceNode = !detectMobile() ? document.querySelector('#benefit.a2op2t.s2op2t') : document.querySelector('#alfa > div > .c3iFBg[data-widget-name=Layout]');
    const headerLogo = !detectMobile() ? document.querySelector('.j1Cda9') : document.querySelector('.d3iFBg.d1S2QV.b1S2QV.i1S2QV');

    const realisteWidgetWrap = document.createElement('div');
    realisteWidgetWrap.className = 'widget-wrap alfabank';
    realisteWidgetWrap.id = 'realisteWidgetWrap';
    
    realisteWidgetWrap.innerHTML = `<div class="b-block-text container">
      <p class="widget-wrap-title">Купить и обменять Вашу квартиру</p>
      <div id="realisteWidget" data-widget="https://alfabank.realiste.io/trade-up"></div>
    </div>`;

    headerLogo.style.display = 'none';

    if (referenceNode) referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode.nextSibling);
  } else setTimeout(initElementsRaiffeisen, 100);
}

export default initElementsAlfabank;
