import { stylesheet, stylesheetExists, findAndReplaceText, findElementByTagAndText } from './common.js';

const initElementsMtsbank = () => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap mtsbank';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title mtsbank">Купить и обменять Вашу квартиру</h2>
    <div id="realisteWidget" data-widget="https://mtsbank.realiste.io/trade-up"></div>`;

  const realisteWidgetBtn = document.createElement('a');
  realisteWidgetBtn.href = '#realisteWidgetWrap';
  realisteWidgetBtn.className = 'realiste-widget-btn mtsbank';

  realisteWidgetBtn.innerHTML = `Обмен вашей квартиры`;

  let interval;

  const init = () => {
    const title = findElementByTagAndText("//h1[text()='ИПОТЕЧНЫЕ ПРОГРАММЫ']");
    const referenceNodeWidget = title.parentNode;
    const referenceNodeBtn = title.nextSibling;
    document.querySelector('body').classList.add('mtsbank');

    if (stylesheetExists(stylesheet.href) && referenceNodeWidget && referenceNodeBtn) {
      clearInterval(interval);

      findAndReplaceText(new RegExp('МТС|МТС-', "g"), '');

      referenceNodeWidget.append(realisteWidgetWrap);
      referenceNodeWidget.insertBefore(realisteWidgetBtn, referenceNodeBtn);
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsMtsbank;
