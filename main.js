document.addEventListener("DOMContentLoaded", function(event) {
  const wrapPage = document.querySelector('.wrap-page');
  const header = document.querySelector('.header.js-header');
  const headerIcons = document.querySelector('.header__icons');
  const headerMenuMobile = document.querySelector('.header-menu-mobile');
  const headerMenuMobileSocial = document.querySelector('.header-menu-mobile__social');
  const head = document.head || document.getElementsByTagName('head')[0];
  const projectsContent = document.querySelector('.projects-content');
  const projectItemDates = document.querySelectorAll('.project-item__date');
  const projectItemWrap = document.querySelectorAll('.project-item');
  let tradeInButtonProjectItemDate;
  
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
  
  const realisteWidgetWrap = document.createElement('div');
  realisteWidgetWrap.className = 'widget-wrap';
  realisteWidgetWrap.id = 'realisteWidgetWrap';
  realisteWidgetWrap.innerHTML = '<div id="realisteWidget" data-widget="https://mr-group.realiste.io/#/"></div>';

  const tradeInButton = document.createElement('a');
  tradeInButton.className = 'btn-custom btn-trade-in scroll-to';
  tradeInButton.href = '#realisteWidgetWrap';
  tradeInButton.innerHTML = 'Trade In';

  wrapPage.append(realisteWidgetWrap);
  head.appendChild(realisteWidgetScript);
  head.appendChild(stylesheet);

  const stylesheetExists = (url) => {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;
  }

  const scriptExists = (url) => {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
  }
  
  projectItemDates.forEach(el => {
    console.log(el);
    tradeInButtonProjectItemDate = tradeInButton.cloneNode(true);
    el.append(tradeInButtonProjectItemDate);
  });

  projectItemWrap.forEach(el => {
    el.removeAttribute('onclick');
  });

  const easeInCubic = (t) => { return t*t*t } 
  const scrollElems = document.getElementsByClassName('scroll-to');
  
  //console.log(scrollElems);
  const scrollToElem = (start, stamp, duration, scrollEndElemTop, startScrollOffset) => {
    //debugger;
    const runtime = stamp - start;
    let progress = runtime / duration;
    const ease = easeInCubic(progress);
    
    progress = Math.min(progress, 1);
    console.log(startScrollOffset,startScrollOffset + (scrollEndElemTop * ease));
    
    const newScrollOffset = startScrollOffset + (scrollEndElemTop * ease);
    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));

    if(runtime < duration){
      requestAnimationFrame((timestamp) => {
        const stamp = new Date().getTime();
        scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
      })
    }
  }

  initElements = () => {
    if (stylesheetExists(stylesheet.href)) {
      console.log('exist stylesheet');
      projectsContent.append(tradeUpColumns);
      header.insertBefore(tradeInButton, headerIcons);

      for (let i=0; i<scrollElems.length; i++) {
        const elem = scrollElems[i];
        
        elem.addEventListener('click', (e) => {
          e.preventDefault();
          const scrollElemId = e.target.href.split('#')[1];
          const scrollEndElem = document.getElementById(scrollElemId);
          
          const anim = requestAnimationFrame(() => {
            const stamp = new Date().getTime();
            const duration = 1200;
            const start = stamp;
                
            const startScrollOffset = window.pageYOffset;
      
            const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top;
                  
            scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
            // scrollToElem(scrollEndElemTop);
          })
        })
      }
    } else setTimeout(initElements, 100);
  }

  initElements();
});