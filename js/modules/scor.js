import { stylesheet, stylesheetExists } from './common.js';

const initElementsScor = () => {
  let interval;

  const init = () => {
    const formWrap = document.querySelector('.right_oCgtn');

    if (stylesheetExists(stylesheet.href) && formWrap) {
      clearInterval(interval);

      formWrap.innerHTML = `<div class="widget-wrap scor" id="realisteWidgetWrap">
        <div id="realisteWidget" data-widget="https://scor.realiste.io/"></div>
      </div>`;
    }
  }

  interval = setInterval(init, 1000);
}

export default initElementsScor;
