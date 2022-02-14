import { stylesheet, stylesheetExists, findAndReplaceText, findElementByTagAndText } from './common.js';

const initElementsEtalon = () => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap etalon-group';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title etalon-group">Купить и обменять Вашу квартиру</h2>
    <div id="realisteWidget" data-widget="https://tradein.etalongroup.ru/onboarding"></div>`;

  const realisteWidgetBtn = document.createElement('li');
  realisteWidgetBtn.innerHTML = `<a href="#realisteWidgetWrap" class="realiste-widget-btn etalon">Обмен вашей квартиры</a>`

  let interval;

  const init = () => {
    const referenceNodeWidget = document.querySelector('.l-main');
    const referenceNodeBtn = document.querySelector('.city_select li:nth-child(2)');
    document.querySelector('body').classList.add('etalon');

    console.log('init');

    if (stylesheetExists(stylesheet.href) && referenceNodeWidget && referenceNodeBtn) {
      console.log('clear interval');
      clearInterval(interval);

      findAndReplaceText(new RegExp('"Эталон"', "g"), '');

      referenceNodeWidget.append(realisteWidgetWrap);
      referenceNodeBtn.parentNode.insertBefore(realisteWidgetBtn, referenceNodeBtn);
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsEtalon;
