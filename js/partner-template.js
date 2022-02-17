import { stylesheet, stylesheetExists, findAndReplaceText } from './common.js';

const partnerTemplate = (args) => {
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = `widget-wrap ${args.className}`;
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  
  realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title ${args.className}">${args.widget.title}</h2><div id="realisteWidget" data-widget=${args.widget.url}></div>`;

  const realisteWidgetBtnOuter = args.btn.container || null;

  const realisteWidgetBtnInner = document.createElement('a');
  realisteWidgetBtnInner.href = '#realisteWidgetWrap';
  realisteWidgetBtnInner.className = args.btn.className;

  realisteWidgetBtnInner.innerHTML = args.btn.title;

  if (realisteWidgetBtnOuter) {
    realisteWidgetBtnOuter.append(realisteWidgetBtnInner);
  }

  const realisteWidgetBtn = realisteWidgetBtnOuter || realisteWidgetBtnInner; 

  let interval;

  const init = () => {
    const referenceNodeParentNode = args.widget.parentNode;
    const referenceNodeBtn = args.btn.referenceNode;

    document.querySelector('body').classList.add(args.className);

    console.log(`init ${args.className}`);

    if (stylesheetExists(stylesheet.href) && referenceNodeParentNode && referenceNodeBtn) {
      console.log('clear interval');
      clearInterval(interval);

      findAndReplaceText(new RegExp(args.textReplace, "g"), '');

      referenceNodeParentNode.append(realisteWidgetWrap);
      referenceNodeBtn.parentNode.insertBefore(realisteWidgetBtn, referenceNodeBtn);
    }
  }

  interval = setInterval(init, 1000);
}

export default partnerTemplate;
