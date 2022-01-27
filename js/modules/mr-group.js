import { stylesheet, stylesheetExists } from './common.js';

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
  };
}

export default initElementsMrGroup;
