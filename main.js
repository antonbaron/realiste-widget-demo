document.addEventListener("DOMContentLoaded", function(event) {
  const head = document.head || document.getElementsByTagName('head')[0];
  
  const tradeUpColumns = document.createElement('div');
  tradeUpColumns.className = 'trade-up-columns';
  tradeUpColumns.innerHTML = `<div class="trade-up-col">
    <img src="https://olga-front.github.io/mr-group.widget-demo/images//trade-up-before.jpg" alt="Trade up before">
  </div>
  <div class="trade-up-card">
    <h2>Обмен вашей квартиры на&nbsp;новую</h2>
    <p class="lead">Выгодно обменяйте вашу квартиру на новую за 7 дней. Оценка вашей квартиры займет 10 секунд, подбор новой квартиры с минимальной разницей в цене или без доплаты займет 1 минуту.</p>
    <a href="#realisteWidgetWrap" class="btn btn-secondary scroll-to">Получить предложение за 10 сек</a>
  </div>
  <div class="trade-up-col">
    <img src="https://olga-front.github.io/mr-group.widget-demo/images//trade-up-after.jpg" alt="Trade up after">
  </div>`;

  const stylesheet = document.createElement('link');
  stylesheet.type = "text/css";
  stylesheet.rel = "stylesheet";
  stylesheet.href = 'https://olga-front.github.io/mr-group.widget-demo/main.css';
  
  const realisteWidgetScript = document.createElement('script');
  realisteWidgetScript.type = 'text/javascript';
  realisteWidgetScript.src = 'https://script.realiste-widget.ru/widget-init.js';

  head.appendChild(realisteWidgetScript);
  head.appendChild(stylesheet);

  const stylesheetExists = (url) => {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;
  }

  const initElementsMrGroup = () => {
    const wrapPage = document.querySelector('.wrap-page');
    const contentWrapPage = document.querySelector('.content.wrap-page');
    const contentText = document.querySelector('.content .text');
    const header = document.querySelector('.header.js-header');
    const headerIcons = document.querySelector('.header__icons');
    const projectsContent = document.querySelector('.projects-content');
    const projectItemDates = document.querySelectorAll('.project-item__date');
    const projectItemWrap = document.querySelectorAll('.project-item');
    const menuProjectsTitle = document.querySelector('.menu-project-title');
    const oneProjectRoomTypes = document.querySelector('.one-project__rooms-types');
    const advantagesWrapper = document.querySelector('.advantagesWrapper');
    const catalogItemInfoTitle = document.querySelector('.catalog-item-info__title');
    const similarItems = document.querySelector('.similar-items-wrap');
    let tradeInButtonProjectItemDate;

    const realisteWidgetWrap = document.createElement('div');
    realisteWidgetWrap.className = 'widget-wrap';
    realisteWidgetWrap.id = 'realisteWidgetWrap';
    realisteWidgetWrap.innerHTML = '<div id="realisteWidget" data-widget="https://mr-group.realiste.io/"></div>';

    const tradeInButton = document.createElement('a');
    tradeInButton.className = 'btn-custom btn-trade-in scroll-to';
    tradeInButton.href = '#realisteWidgetWrap';
    tradeInButton.innerHTML = 'Trade In';

    wrapPage.append(realisteWidgetWrap);
  
    projectItemDates.forEach(el => {
      console.log(el);
      tradeInButtonProjectItemDate = tradeInButton.cloneNode(true);
      el.append(tradeInButtonProjectItemDate);
    });
  
    projectItemWrap.forEach(el => {
      el.removeAttribute('onclick');
    });

    if (stylesheetExists(stylesheet.href)) {
      tradeInButtonCatalogItemInfoTitle = tradeInButton.cloneNode(true);
      if (projectsContent) projectsContent.append(tradeUpColumns);
      if (menuProjectsTitle) menuProjectsTitle.innerHTML = '<a href="https://mr-group.realiste.io/#/object-evaluation?locale=ru" target="_blank">Trade In</a>';
      if (oneProjectRoomTypes) oneProjectRoomTypes.append(tradeUpColumns);
      if (catalogItemInfoTitle) catalogItemInfoTitle.prepend(tradeInButtonCatalogItemInfoTitle);
      if (contentText && similarItems) contentText.insertBefore(tradeUpColumns, similarItems);
      if (advantagesWrapper) contentWrapPage.insertBefore(tradeUpColumns, advantagesWrapper);
      header.insertBefore(tradeInButton, headerIcons);
    } else setTimeout(initElementsMrGroup, 100);
  }

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

  const initElementsScor = () => {
    if (stylesheetExists(stylesheet.href)) {
      const formWrap = document.querySelector('.right_oCgtn');

      if (formWrap) formWrap.innerHTML = `<div class="widget-wrap scor" id="realisteWidgetWrap">
        <div id="realisteWidget" data-widget="https://scor.realiste.io/"></div>
      </div>`;
    } else setTimeout(initElementsScor, 100);
  }

  if (window.location.origin == 'https://mr-group.widget-demo.realiste.io') {
    initElementsMrGroup();
  } else if (window.location.origin == 'https://raiffeisen.widget-demo.realiste.io') {
    initElementsRaiffeisen();
  } else if (window.location.origin == 'https://scor.widget-demo.realiste.io') {
    initElementsScor();
  }
});
