import { stylesheet, stylesheetExists, findAndReplaceText } from './modules/common.js';

const partnerTemplate = (args) => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = `widget-wrap ${args.className}`;
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title ${args.className}">${args.widget.title}</h2><div id="realisteWidget" data-widget=${args.widget.url}></div>`;

  let realisteWidgetBtnOuter = args.btn.container || null;

  const realisteWidgetBtnInner = document.createElement('a');
  realisteWidgetBtnInner.href = '#realisteWidgetWrap';
  realisteWidgetBtnInner.className = args.btn.className;

  realisteWidgetBtnInner.innerHTML = args.btn.title;

  if (realisteWidgetBtnOuter) {
    realisteWidgetBtnOuter = document.createElement(args.btn.container);
    realisteWidgetBtnOuter.className = args.btn.containerClassName;
    realisteWidgetBtnOuter.append(realisteWidgetBtnInner);
  }

  const realisteWidgetBtn = realisteWidgetBtnOuter || realisteWidgetBtnInner; 

  let interval;

  const init = () => {
    let referenceNodeWidget;
    let referenceNodeBtn;

    if (args.btn.parentNode) {
      referenceNodeBtn = document.querySelector(args.btn.parentNode);
    } else {
      referenceNodeBtn = document.querySelector(args.btn.referenceNode);
    }

    if (args.widget.parentNode) {
      referenceNodeWidget = document.querySelector(args.widget.parentNode);
    } else {
      referenceNodeWidget = document.querySelector(args.widget.referenceNode);
    }

    document.querySelector('body').classList.add(args.className);

    console.log(`init ${args.className}`);

    if (stylesheetExists(stylesheet.href) && referenceNodeWidget && referenceNodeBtn) {
      console.log('clear interval');
      clearInterval(interval);

      findAndReplaceText(new RegExp(args.textReplace, "g"), '');

      if (args.btn.parentNode) {
        referenceNodeBtn.append(realisteWidgetBtn);
      } else {
        referenceNodeBtn.parentNode.insertBefore(realisteWidgetBtn, referenceNodeBtn);
      }

      if (args.widget.parentNode) {
        referenceNodeWidget.append(realisteWidgetWrap);
      } else {
        referenceNodeWidget.parentNode.insertBefore(realisteWidgetWrap, referenceNodeWidget);
      }
    }
  }

  interval = setInterval(init, 1000);
}

export default partnerTemplate;
