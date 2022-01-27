import { stylesheet, stylesheetExists, detectMobile, findAndReplaceText } from './common.js';

const initElementsRshb = () => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap rshb';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<div class="widget-wrap-inner">
    <p class="widget-wrap-title">Купить и обменять Вашу квартиру</p>
    <div id="realisteWidget" data-widget="https://rshb.realiste.io/object-evaluation"></div></div>`;

  const realisteWidgetBtn = document.createElement('a');
  realisteWidgetBtn.href = '#realisteWidgetWrap';
  realisteWidgetBtn.className = 'btn btn-success';

  realisteWidgetBtn.innerHTML = `Оценить квартиру`;

  let interval;

  const init = () => {
    const referenceNode = document.querySelector('.mortgage-programs');
    const headerLogo = !detectMobile() ? document.querySelector('.moblogo.showonly_desktop') : document.querySelector('.moblogo.showonly_mobile');
    const btnContainer = document.querySelector('.mortgage-main-banner_button');

    if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnContainer) {
      clearInterval(interval);

      findAndReplaceText(new RegExp('РСХБ-|РСХБ|Россельхоз|', "g"), '');

      headerLogo.style.display = 'none';

      referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode.nextSibling);
      btnContainer.append(realisteWidgetBtn);
    }
  }

  interval = setInterval(init, 1000);
}
