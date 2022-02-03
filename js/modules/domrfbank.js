import { stylesheet, stylesheetExists, findAndReplaceText } from './common.js';

const initElementsDomrfbank = () => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap domrfbank';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<h5 class="widget-wrap-title mortgage-list__cardtitle mortgage-list__cardtitle_wd100 mortgage-list__cardtitle_big">Купить и обменять Вашу квартиру</h5>
    <div id="realisteWidget" data-widget="https://domrfbank.realiste.io/trade-up"></div>`;

  const realisteWidgetBtn = document.createElement('a');
  realisteWidgetBtn.href = '#realisteWidgetWrap';
  realisteWidgetBtn.className = 'realiste-widget-btn domrfbank tags__item button';

  realisteWidgetBtn.innerHTML = `Обмен вашей квартиры`;

  let interval;

  const init = () => {
    const referenceNode = document.querySelector('.mortgage-list__body');
    const headerLogo = document.querySelector('.header__logo');
    const btnReferenceNode = document.querySelector('.tags__item.button:first-child');

    if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnReferenceNode) {
      clearInterval(interval);

      findAndReplaceText(new RegExp('ДОМ.РФ', "g"), '');

      headerLogo.style.display = 'none';

      referenceNode.append(realisteWidgetWrap);
      btnReferenceNode.parentNode.insertBefore(realisteWidgetBtn, btnReferenceNode.nextSibling);
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsDomrfbank;
