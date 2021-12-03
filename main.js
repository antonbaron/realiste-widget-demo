document.addEventListener("DOMContentLoaded", function(event) {
  const wrapPage = document.querySelector('.wrap-page');
  const header = document.querySelector('.header.js-header');
  const headerIcons = document.querySelector('.header__icons');
  const head = document.head || document.getElementsByTagName('head')[0];
  const projectsContent = document.querySelector('.projects-content');
  
  const tradeUpColumns = document.createElement('div');
  tradeUpColumns.className = 'realiste-trade-up-columns';
  tradeUpColumns.innerHTML = `<div class="realiste-trade-up-col">
    <img src="https://olga-front.github.io/mr-group.widget-demo/images//trade-up-before.jpg" alt="Trade up before">
  </div>
  <div class="realiste-trade-up-card">
    <h2>Обмен вашей квартиры на новую</h2>
    <p>Выгодно обменяйте вашу квартиру на новую за 7 дней. Оценка вашей квартиры займет 10 секунд, подбор новой квартиры с минимальной разницей в цене или без доплаты займет 1 минуту.</p>
    <a href="#realisteWidgetWrap" class="btn btn-realiste-secondary">Получить предложение за 10 сек</a>
  </div>
  <div class="realiste-trade-up-col">
    <img src="https://olga-front.github.io/mr-group.widget-demo/images//trade-up-after.jpg" alt="Trade up after">
  </div>`;

  const smoothScroll = () => {
    let anchorlinks = document.querySelectorAll('.scroll-to');

    for (let item of anchorlinks) {
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');

        let target = document.querySelector(hashval);

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        history.pushState(null, null, hashval);

        e.preventDefault();
      })
    }
  }

  const stylesheet = document.createElement('link');
  stylesheet.type = "text/css";
  stylesheet.rel = "stylesheet";
  stylesheet.href = 'https://olga-front.github.io/mr-group.widget-demo/main.css';
  
  const realisteWidgetScript = document.createElement('script');
  realisteWidgetScript.type = 'text/javascript';
  realisteWidgetScript.src = 'https://script.realiste-widget.ru/widget-init.js';
  
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'realiste-widget-wrap';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  realisteWidgetWrap.innerHTML = '<div id="realisteWidget" data-widget="https://mr-group.realiste.io/#/"></div>';

  const tradeInButton = document.createElement('a');
  tradeInButton.className = 'btn btn-trade-in scroll-to';
  tradeInButton.href = '#realisteWidgetWrap';
  tradeInButton.innerHTML = 'Trade In';

  header.insertBefore(tradeInButton, headerIcons);
  wrapPage.append(realisteWidgetWrap);
  head.appendChild(realisteWidgetScript);
  head.appendChild(stylesheet);
  projectsContent.append(tradeUpColumns);

  smoothScroll();

});