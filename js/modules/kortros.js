import { stylesheet,    stylesheetExists, findAndReplaceText, findElementByTagAndText } from './common.js';

const tradeUpColumns = document.createElement('div');
tradeUpColumns.className = 'trade-up-columns kortros';
tradeUpColumns.innerHTML = `<div class="trade-up-col">
  <img src="https://olga-front.github.io/mr-group.widget-demo/images/trade-up-before.jpg" alt="Trade up before">
</div>
<div class="trade-up-card b-info__descr-inner">
  <h2 class="block-title">Обмен вашей квартиры на&nbsp;новую</h2>
  <p class="lead">Выгодно обменяйте вашу квартиру на новую за 7 дней. Оценка вашей квартиры займет 10 секунд, подбор новой квартиры с минимальной разницей в цене или без доплаты займет 1 минуту.</p>
  <a href="#realisteWidgetWrap" class="lined-btn">
    <div class="lined-btn__inner">
      <span>Обмен вашей квартиры</span>
      <div class="lined-btn__line"></div>
    </div>
  </a>
</div>
<div class="trade-up-col">
  <img src="https://olga-front.github.io/mr-group.widget-demo/images/trade-up-after.jpg" alt="Trade up after">
</div>`;

const initElementsKortros = () => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap kortros';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<h2 class="block-title widget-wrap-title kortros">Купить и обменять Вашу квартиру</h2>
    <div id="realisteWidget" data-widget="https://kortros.realiste.io/trade-up"></div>`;

  let interval;

  const init = () => {
    const tradeUpColumnsPrependSection = document.querySelector('.page.main-page .infrastructure');
    const wrapPage = document.querySelector('.page main-page');

    document.querySelector('body').classList.add('realiste-winget-outer');

    console.log('init');

    if (stylesheetExists(stylesheet.href) && tradeUpColumnsPrependSection && wrapPage) {
      console.log('clear interval');
      clearInterval(interval);

      wrapPage.insertBefore(tradeUpColumns, tradeUpColumnsPrependSection);
      wrapPage.append(realisteWidgetWrap);
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsKortros;
