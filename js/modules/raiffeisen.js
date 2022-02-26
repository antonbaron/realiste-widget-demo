import { stylesheet, stylesheetExists, findAndReplaceText } from './common.js';

const initElementsRaiffeisen = () => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap raiffeisen';
  realisteWidgetWrap.id = 'realisteWidgetWrap';

  realisteWidgetWrap.innerHTML = `<div class="b-block-text container">
    <h2 class="e-title e-title--h2">Купить и обменять Вашу квартиру</h2>
    <div id="realisteWidget" data-widget="https://raiffeisen.realiste.ai/trade-up"></div>
  </div>`;

  let interval;

  const init = () => {
    const referenceNode = document.querySelector('#calc.b-page-heading.container');
    const headerLogo = document.querySelector('.header__logo');
    const btnIntroBtn = document.querySelector('.b-intro__block-buttons .btn-text');

    if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnIntroBtn) {
      clearInterval(interval);
  
      findAndReplaceText(new RegExp('Райффайзен', "g"), '');
      
      headerLogo.style.display = 'none';
  
      btnIntroBtn.href = '#realisteWidgetWrap';
      btnIntroBtn.innerHTML = 'Рассчитать условия по Trade In';

      referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode);
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsRaiffeisen;
