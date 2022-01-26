import { stylesheet, stylesheetExists } from './common.js';

const initElementsScor = () => {
  if (stylesheetExists(stylesheet.href)) {
    const formWrap = document.querySelector('.right_oCgtn');

    if (formWrap) formWrap.innerHTML = `<div class="widget-wrap scor" id="realisteWidgetWrap">
      <div id="realisteWidget" data-widget="https://scor.realiste.io/"></div>
    </div>`;
  } else setTimeout(initElementsScor, 100);
}

export default initElementsScor;
