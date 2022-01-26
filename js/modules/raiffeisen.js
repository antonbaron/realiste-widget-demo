import { stylesheet, stylesheetExists } from './common.js';

const initElementsRaiffeisen = () => {
  document.body.innerHTML = document.body.innerHTML.replace(/Райффайзен/g, "");

  if (stylesheetExists(stylesheet.href)) {
    const calcContainer = document.querySelector('#calc.b-page-heading.container');
    const bodyContainer = document.querySelector('.body-container');
    const btnIntroBtn = document.querySelector('.b-intro__block-buttons .btn-text');
    const headerLogo = document.querySelector('.header__logo');

    const realisteWidgetWrap = document.createElement('div');
    realisteWidgetWrap.className = 'widget-wrap raiffeisen';
    realisteWidgetWrap.id = 'realisteWidgetWrap';
    
    realisteWidgetWrap.innerHTML = `<div class="b-block-text container">
      <h2 class="e-title e-title--h2">Купить и обменять Вашу квартиру</h2>
      <div id="realisteWidget" data-widget="https://raiffeisen.realiste.io/trade-up"></div>
    </div>`;

    btnIntroBtn.href = '#realisteWidgetWrap';
    btnIntroBtn.innerHTML = 'Рассчитать условия по Trade In';
    headerLogo.style.display = 'none';

    if (calcContainer) bodyContainer.insertBefore(realisteWidgetWrap, calcContainer);
  } else setTimeout(initElementsRaiffeisen, 100);
}

export default initElementsRaiffeisen;
