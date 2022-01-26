const head = document.head || document.getElementsByTagName('head')[0];
  
export const stylesheet = document.createElement('link');
stylesheet.type = "text/css";
stylesheet.rel = "stylesheet";
stylesheet.href = 'https://olga-front.github.io/mr-group.widget-demo/main.css';

const realisteWidgetScript = document.createElement('script');
realisteWidgetScript.type = 'text/javascript';
realisteWidgetScript.src = 'https://script.realiste-widget.ru/widget-init.js';

head.appendChild(realisteWidgetScript);
head.appendChild(stylesheet);

export const stylesheetExists = (url) => {
  return document.querySelectorAll(`link[href="${url}"]`).length > 0;
}
