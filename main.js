document.addEventListener("DOMContentLoaded", function(event) {
  const wrapPage = document.querySelector('.wrap-page');
  const header = document.querySelector('.header.js-header');
  const headerIcons = document.querySelector('.header__icons');
  const head = document.head || document.getElementsByTagName('head')[0];

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

  smoothScroll();

});