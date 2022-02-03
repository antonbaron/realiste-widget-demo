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
    const referenceNode = title.nextSibling;
    const headerLogo = document.querySelector('a[aria-label="Главная страница"]');

    if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo) {
      clearInterval(interval);

      findAndReplaceText(new RegExp('МТС|МТС-', "g"), '');

      headerLogo.style.display = 'none';

      referenceNode.append(realisteWidgetWrap);
      referenceNode.prepend(realisteWidgetBtn);
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsMtsbank;
