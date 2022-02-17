(() => {
  // js/constants.js
  var constants_default = {
    PARTNERS: {
      MR_GROUP: [
        "https://mr-group.widget-demo.realiste.io",
        "https://www--mr-group--ru.widget-demo.realiste.io"
      ],
      RAIFFEISEN: [
        "https://raiffeisen.widget-demo.realiste.io",
        "https://www--raiffeisen--ru.widget-demo.realiste.io"
      ],
      SCOR: [
        "https://scor.widget-demo.realiste.io",
        "https://scor--ru.widget-demo.realiste.io"
      ],
      ALFABANK: [
        "https://alfabank--ru.widget-demo.realiste.io"
      ],
      RSHB: [
        "https://www--rshb--ru.widget-demo.realiste.io"
      ],
      DOMRFBANK: [
        "https://domrfbank--ru.widget-demo.realiste.io"
      ],
      MTSBANK: [
        "https://www--mtsbank--ru.widget-demo.realiste.io"
      ],
      KORTROS: [
        "https://head-liner--ru.widget-demo.realiste.io"
      ],
      ETALON: [
        "https://etalongroup--ru.widget-demo.realiste.io"
      ],
      GK_OSNOVA: [
        "https://gk-osnova--ru.widget-demo.realiste.io"
      ]
    }
  };

  // js/config/gk-osnova.js
  var gk_osnova_default = {
    btn: {
      title: "\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B",
      container: document.createElement("div"),
      containerClassName: "menu-element__wrapper menu-top__elem",
      referenceNode: document.querySelector(".menu-top__nav .menu-element__wrapper.menu-top__elem:nth-child(2)"),
      className: "realiste-widget-btn gk-osnova menu-element"
    },
    widget: {
      title: "\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443",
      url: "https://gk-osnova.realiste.io/trade-up",
      parentNode: document.querySelector(".dev-page")
    },
    className: "gk-osnova",
    textReplace: "\u0413\u041A \xAB\u041E\u0421\u041D\u041E\u0412\u0410\xBB"
  };

  // js/modules/common.js
  var head = document.head || document.getElementsByTagName("head")[0];
  var stylesheet = document.createElement("link");
  stylesheet.type = "text/css";
  stylesheet.rel = "stylesheet";
  stylesheet.href = "https://olga-front.github.io/mr-group.widget-demo/main.css";
  var realisteWidgetScript = document.createElement("script");
  realisteWidgetScript.type = "text/javascript";
  realisteWidgetScript.src = "https://script.realiste-widget.ru/widget-init.js";
  head.appendChild(realisteWidgetScript);
  head.appendChild(stylesheet);
  var stylesheetExists = (url) => {
    return document.querySelectorAll(`link[href="${url}"]`).length > 0;
  };
  var detectMobile = () => {
    let checkRes = false;
    ((a) => {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)) || window.innerWidth < 767)
        checkRes = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return checkRes;
  };
  var nativeSelector = () => {
    let elements = document.querySelectorAll("body, body *");
    let results = [];
    let child;
    for (var i = 0; i < elements.length; i++) {
      child = elements[i].childNodes[0];
      if (elements[i].hasChildNodes() && child.nodeType == 3) {
        results.push(child);
      }
    }
    return results;
  };
  var findAndReplaceText = (from, to) => {
    let textnodes = nativeSelector();
    let _nv;
    for (let i = 0, len = textnodes.length; i < len; i++) {
      _nv = textnodes[i].nodeValue;
      textnodes[i].nodeValue = _nv.replace(from, to);
    }
  };
  var findElementByTagAndText = (xpath) => {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  };

  // js/modules/mr-group.js
  var tradeUpColumns = document.createElement("div");
  tradeUpColumns.className = "trade-up-columns";
  tradeUpColumns.innerHTML = `<div class="trade-up-col">
  <img src="https://olga-front.github.io/mr-group.widget-demo/images//trade-up-before.jpg" alt="Trade up before">
</div>
<div class="trade-up-card">
  <h2>\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u043D\u0430&nbsp;\u043D\u043E\u0432\u0443\u044E</h2>
  <p class="lead">\u0412\u044B\u0433\u043E\u0434\u043D\u043E \u043E\u0431\u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0437\u0430 7 \u0434\u043D\u0435\u0439. \u041E\u0446\u0435\u043D\u043A\u0430 \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0437\u0430\u0439\u043C\u0435\u0442 10 \u0441\u0435\u043A\u0443\u043D\u0434, \u043F\u043E\u0434\u0431\u043E\u0440 \u043D\u043E\u0432\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u043D\u0438\u0446\u0435\u0439 \u0432 \u0446\u0435\u043D\u0435 \u0438\u043B\u0438 \u0431\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430\u0439\u043C\u0435\u0442 1 \u043C\u0438\u043D\u0443\u0442\u0443.</p>
  <a href="#realisteWidgetWrap" class="btn btn-secondary scroll-to">\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0437\u0430 10 \u0441\u0435\u043A</a>
</div>
<div class="trade-up-col">
  <img src="https://olga-front.github.io/mr-group.widget-demo/images//trade-up-after.jpg" alt="Trade up after">
</div>`;
  var initElementsMrGroup = () => {
    const wrapPage = document.querySelector(".wrap-page");
    const contentWrapPage = document.querySelector(".content.wrap-page");
    const contentText = document.querySelector(".content .text");
    const header = document.querySelector(".header.js-header");
    const headerIcons = document.querySelector(".header__icons");
    const projectsContent = document.querySelector(".projects-content");
    const projectItemDates = document.querySelectorAll(".project-item__date");
    const projectItemWrap = document.querySelectorAll(".project-item");
    const menuProjectsTitle = document.querySelector(".menu-project-title");
    const oneProjectRoomTypes = document.querySelector(".one-project__rooms-types");
    const advantagesWrapper = document.querySelector(".advantagesWrapper");
    const catalogItemInfoTitle = document.querySelector(".catalog-item-info__title");
    const similarItems = document.querySelector(".similar-items-wrap");
    let tradeInButtonProjectItemDate;
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = '<div id="realisteWidget" data-widget="https://mr-group.realiste.io/"></div>';
    const tradeInButton = document.createElement("a");
    tradeInButton.className = "btn-custom btn-trade-in scroll-to";
    tradeInButton.href = "#realisteWidgetWrap";
    tradeInButton.innerHTML = "Trade In";
    wrapPage.append(realisteWidgetWrap);
    projectItemDates.forEach((el) => {
      console.log(el);
      tradeInButtonProjectItemDate = tradeInButton.cloneNode(true);
      el.append(tradeInButtonProjectItemDate);
    });
    projectItemWrap.forEach((el) => {
      el.removeAttribute("onclick");
    });
    if (stylesheetExists(stylesheet.href)) {
      tradeInButtonCatalogItemInfoTitle = tradeInButton.cloneNode(true);
      if (projectsContent)
        projectsContent.append(tradeUpColumns);
      if (menuProjectsTitle)
        menuProjectsTitle.innerHTML = '<a href="https://mr-group.realiste.io/#/object-evaluation?locale=ru" target="_blank">Trade In</a>';
      if (oneProjectRoomTypes)
        oneProjectRoomTypes.append(tradeUpColumns);
      if (catalogItemInfoTitle)
        catalogItemInfoTitle.prepend(tradeInButtonCatalogItemInfoTitle);
      if (contentText && similarItems)
        contentText.insertBefore(tradeUpColumns, similarItems);
      if (advantagesWrapper)
        contentWrapPage.insertBefore(tradeUpColumns, advantagesWrapper);
      header.insertBefore(tradeInButton, headerIcons);
    }
    ;
  };
  var mr_group_default = initElementsMrGroup;

  // js/modules/raiffeisen.js
  var initElementsRaiffeisen = () => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap raiffeisen";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<div class="b-block-text container">
    <h2 class="e-title e-title--h2">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</h2>
    <div id="realisteWidget" data-widget="https://raiffeisen.realiste.io/trade-up"></div>
  </div>`;
    let interval;
    const init = () => {
      const referenceNode = document.querySelector("#calc.b-page-heading.container");
      const headerLogo = document.querySelector(".header__logo");
      const btnIntroBtn = document.querySelector(".b-intro__block-buttons .btn-text");
      if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnIntroBtn) {
        clearInterval(interval);
        findAndReplaceText(new RegExp("\u0420\u0430\u0439\u0444\u0444\u0430\u0439\u0437\u0435\u043D", "g"), "");
        headerLogo.style.display = "none";
        btnIntroBtn.href = "#realisteWidgetWrap";
        btnIntroBtn.innerHTML = "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E Trade In";
        referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var raiffeisen_default = initElementsRaiffeisen;

  // js/modules/scor.js
  var initElementsScor = () => {
    let interval;
    const init = () => {
      const formWrap = document.querySelector(".right_oCgtn");
      if (stylesheetExists(stylesheet.href) && formWrap) {
        clearInterval(interval);
        formWrap.innerHTML = `<div class="widget-wrap scor" id="realisteWidgetWrap">
        <div id="realisteWidget" data-widget="https://scor.realiste.io/"></div>
      </div>`;
      }
    };
    interval = setInterval(init, 1e3);
  };
  var scor_default = initElementsScor;

  // js/modules/alfabank.js
  var initElementsAlfabank = () => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap alfabank";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<div class="b-block-text container">
    <p class="widget-wrap-title">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</p>
    <div id="realisteWidget" data-widget="https://alfabank.realiste.io/trade-up"></div>
  </div>`;
    const realisteWidgetBtn = document.createElement("a");
    realisteWidgetBtn.href = "#realisteWidgetWrap";
    realisteWidgetBtn.className = "realiste-widget-btn alfabank";
    realisteWidgetBtn.innerHTML = `\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B`;
    let interval;
    const init = () => {
      const referenceNode = !detectMobile() ? document.querySelector("#benefit.a2op2t.s2op2t") : document.querySelector("#alfa > div > .c3iFBg[data-widget-name=Layout]");
      const headerLogo = !detectMobile() ? document.querySelector(".j1Cda9") : document.querySelector(".d3iFBg.d1S2QV.b1S2QV.i1S2QV");
      const btnReferenceNode = !detectMobile() ? document.querySelector(".a1rN1L.h1rN1L.b1rN1L.i1rN1L.c3FBX4.d3FBX4[data-test-id=tabs-list-tabTitle-0]") : document.querySelector(".a1rN1L.h1rN1L.b1rN1L.i1rN1L.c1NPQw.d1NPQw[data-test-id=tabs-list-tabTitle-0]");
      if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnReferenceNode) {
        clearInterval(interval);
        findAndReplaceText(new RegExp("\u0410\u043B\u044C\u0444\u0430-|\u0410\u041B\u042C\u0424\u0410-", "g"), "");
        headerLogo.style.display = "none";
        referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode.nextSibling);
        btnReferenceNode.parentNode.insertBefore(realisteWidgetBtn, btnReferenceNode.nextSibling);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var alfabank_default = initElementsAlfabank;

  // js/modules/rshb.js
  var initElementsRshb = () => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap rshb";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<div class="widget-wrap-inner">
    <p class="widget-wrap-title">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</p>
    <div id="realisteWidget" data-widget="https://rshb.realiste.io/object-evaluation"></div></div>`;
    const realisteWidgetBtn = document.createElement("a");
    realisteWidgetBtn.href = "#realisteWidgetWrap";
    realisteWidgetBtn.className = "btn btn-success";
    realisteWidgetBtn.innerHTML = `\u041E\u0446\u0435\u043D\u0438\u0442\u044C \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443`;
    let interval;
    const init = () => {
      const referenceNode = document.querySelector(".mortgage-programs");
      const headerLogo = !detectMobile() ? document.querySelector(".moblogo.showonly_desktop") : document.querySelector(".moblogo.showonly_mobile");
      const btnContainer = document.querySelector(".mortgage-main-banner_button");
      if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnContainer) {
        clearInterval(interval);
        findAndReplaceText(new RegExp("\u0420\u0421\u0425\u0411-|\u0420\u0421\u0425\u0411|\u0420\u043E\u0441\u0441\u0435\u043B\u044C\u0445\u043E\u0437|", "g"), "");
        headerLogo.style.display = "none";
        referenceNode.parentNode.insertBefore(realisteWidgetWrap, referenceNode.nextSibling);
        btnContainer.append(realisteWidgetBtn);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var rshb_default = initElementsRshb;

  // js/modules/domrfbank.js
  var initElementsDomrfbank = () => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap domrfbank";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<h5 class="widget-wrap-title mortgage-list__cardtitle mortgage-list__cardtitle_wd100 mortgage-list__cardtitle_big">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</h5>
    <div id="realisteWidget" data-widget="https://domrfbank.realiste.io/trade-up"></div>`;
    const realisteWidgetBtn = document.createElement("a");
    realisteWidgetBtn.href = "#realisteWidgetWrap";
    realisteWidgetBtn.className = "realiste-widget-btn domrfbank tags__item button";
    realisteWidgetBtn.innerHTML = `\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B`;
    let interval;
    const init = () => {
      const referenceNode = document.querySelector(".mortgage-list__body");
      const headerLogo = document.querySelector(".header__logo");
      const btnReferenceNode = document.querySelector(".tags__item.button:first-child");
      if (stylesheetExists(stylesheet.href) && referenceNode && headerLogo && btnReferenceNode) {
        clearInterval(interval);
        findAndReplaceText(new RegExp("\u0414\u041E\u041C.\u0420\u0424", "g"), "");
        headerLogo.style.display = "none";
        referenceNode.append(realisteWidgetWrap);
        btnReferenceNode.parentNode.insertBefore(realisteWidgetBtn, btnReferenceNode.nextSibling);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var domrfbank_default = initElementsDomrfbank;

  // js/modules/mtsbank.js
  var initElementsMtsbank = () => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap mtsbank";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title mtsbank">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</h2>
    <div id="realisteWidget" data-widget="https://mtsbank.realiste.io/trade-up"></div>`;
    const realisteWidgetBtn = document.createElement("a");
    realisteWidgetBtn.href = "#realisteWidgetWrap";
    realisteWidgetBtn.className = "realiste-widget-btn mtsbank";
    realisteWidgetBtn.innerHTML = `\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B`;
    let interval;
    const init = () => {
      const title = findElementByTagAndText("//h1[text()='\u0418\u041F\u041E\u0422\u0415\u0427\u041D\u042B\u0415 \u041F\u0420\u041E\u0413\u0420\u0410\u041C\u041C\u042B']");
      const referenceNodeWidget = title.parentNode;
      const referenceNodeBtn = title.nextSibling;
      document.querySelector("body").classList.add("mtsbank");
      console.log("init");
      if (stylesheetExists(stylesheet.href) && referenceNodeWidget && referenceNodeBtn) {
        console.log("clear interval");
        clearInterval(interval);
        findAndReplaceText(new RegExp("\u041C\u0422\u0421|\u041C\u0422\u0421-", "g"), "");
        referenceNodeWidget.append(realisteWidgetWrap);
        referenceNodeWidget.insertBefore(realisteWidgetBtn, referenceNodeBtn);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var mtsbank_default = initElementsMtsbank;

  // js/modules/kortros.js
  var initElementsKortros = () => {
    const tradeUpColumns2 = document.createElement("div");
    tradeUpColumns2.className = "trade-up-columns kortros";
    tradeUpColumns2.innerHTML = `<div class="trade-up-col">
    <img src="https://olga-front.github.io/mr-group.widget-demo/images/trade-up-before.jpg" alt="Trade up before">
  </div>
  <div class="trade-up-card b-info__descr-inner">
    <h2 class="block-title">\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u043D\u0430&nbsp;\u043D\u043E\u0432\u0443\u044E</h2>
    <p class="lead">\u0412\u044B\u0433\u043E\u0434\u043D\u043E \u043E\u0431\u043C\u0435\u043D\u044F\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 \u043D\u0430 \u043D\u043E\u0432\u0443\u044E \u0437\u0430 7 \u0434\u043D\u0435\u0439. \u041E\u0446\u0435\u043D\u043A\u0430 \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0437\u0430\u0439\u043C\u0435\u0442 10 \u0441\u0435\u043A\u0443\u043D\u0434, \u043F\u043E\u0434\u0431\u043E\u0440 \u043D\u043E\u0432\u043E\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u043D\u0438\u0446\u0435\u0439 \u0432 \u0446\u0435\u043D\u0435 \u0438\u043B\u0438 \u0431\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430\u0439\u043C\u0435\u0442 1 \u043C\u0438\u043D\u0443\u0442\u0443.</p>
    <a href="#realisteWidgetWrap" class="lined-btn">
      <div class="lined-btn__inner">
        <span>\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</span>
        <div class="lined-btn__line"></div>
      </div>
    </a>
  </div>
  <div class="trade-up-col">
    <img src="https://olga-front.github.io/mr-group.widget-demo/images/trade-up-after.jpg" alt="Trade up after">
  </div>`;
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap kortros";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<h2 class="block-title widget-wrap-title kortros">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</h2>
    <div id="realisteWidget" data-widget="https://kortros.realiste.io/trade-up"></div>`;
    let interval;
    const init = () => {
      const tradeUpColumnsPrependSection = document.querySelector(".page.main-page .infrastructure");
      const wrapPage = document.querySelector(".page.main-page");
      document.querySelector("body").classList.add("realiste-widget-outer");
      if (stylesheetExists(stylesheet.href) && tradeUpColumnsPrependSection && wrapPage) {
        clearInterval(interval);
        wrapPage.insertBefore(tradeUpColumns2, tradeUpColumnsPrependSection);
        wrapPage.append(realisteWidgetWrap);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var kortros_default = initElementsKortros;

  // js/modules/etalon.js
  var initElementsEtalon = () => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = "widget-wrap etalon-group";
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title etalon-group">\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0412\u0430\u0448\u0443 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443</h2>
    <div id="realisteWidget" data-widget="https://tradein.etalongroup.ru/onboarding"></div>`;
    const realisteWidgetBtn = document.createElement("li");
    realisteWidgetBtn.innerHTML = `<a href="#realisteWidgetWrap" class="realiste-widget-btn etalon">\u041E\u0431\u043C\u0435\u043D \u0432\u0430\u0448\u0435\u0439 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B</a>`;
    let interval;
    const init = () => {
      const referenceNodeWidget = document.querySelector(".l-main");
      const referenceNodeBtn = document.querySelector(".city_select li:nth-child(2)");
      document.querySelector("body").classList.add("etalon");
      console.log("init");
      if (stylesheetExists(stylesheet.href) && referenceNodeWidget && referenceNodeBtn) {
        console.log("clear interval");
        clearInterval(interval);
        findAndReplaceText(new RegExp('"\u042D\u0442\u0430\u043B\u043E\u043D"', "g"), "");
        referenceNodeWidget.append(realisteWidgetWrap);
        referenceNodeBtn.parentNode.insertBefore(realisteWidgetBtn, referenceNodeBtn);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var etalon_default = initElementsEtalon;

  // js/partner-template.js
  var partnerTemplate = (args) => {
    const realisteWidgetWrap = document.createElement("div");
    realisteWidgetWrap.className = `widget-wrap ${args.className}`;
    realisteWidgetWrap.id = "realisteWidgetWrap";
    realisteWidgetWrap.innerHTML = `<h2 class="widget-wrap-title ${args.className}">${args.widget.title}</h2><div id="realisteWidget" data-widget=${args.widget.url}></div>`;
    const realisteWidgetBtnOuter = args.btn.container || null;
    const realisteWidgetBtnInner = document.createElement("a");
    realisteWidgetBtnInner.href = "#realisteWidgetWrap";
    realisteWidgetBtnInner.className = args.btn.className;
    realisteWidgetBtnInner.innerHTML = args.btn.title;
    if (realisteWidgetBtnOuter) {
      realisteWidgetBtnOuter.className = args.btn.containerClassName;
      realisteWidgetBtnOuter.append(realisteWidgetBtnInner);
    }
    const realisteWidgetBtn = realisteWidgetBtnOuter || realisteWidgetBtnInner;
    let interval;
    const init = () => {
      const referenceNodeParentNode = args.widget.parentNode;
      const referenceNodeBtn = args.btn.referenceNode;
      document.querySelector("body").classList.add(args.className);
      console.log(`init ${args.className}`);
      if (stylesheetExists(stylesheet.href) && referenceNodeParentNode && referenceNodeBtn) {
        console.log("clear interval");
        clearInterval(interval);
        findAndReplaceText(new RegExp(args.textReplace, "g"), "");
        referenceNodeParentNode.append(realisteWidgetWrap);
        referenceNodeBtn.parentNode.insertBefore(realisteWidgetBtn, referenceNodeBtn);
      }
    };
    interval = setInterval(init, 1e3);
  };
  var partner_template_default = partnerTemplate;

  // main-global.js
  var pageIsLoaded = (partnerName) => constants_default.PARTNERS[partnerName].some((el) => window.location.origin == el);
  window.onload = function() {
    if (pageIsLoaded("MR_GROUP")) {
      console.log("MR_GROUP");
      mr_group_default();
    } else if (pageIsLoaded("RAIFFEISEN")) {
      console.log("RAIFFEISEN");
      raiffeisen_default();
    } else if (pageIsLoaded("SCOR")) {
      console.log("SCOR");
      scor_default();
    } else if (pageIsLoaded("ALFABANK")) {
      console.log("ALFABANK");
      alfabank_default();
    } else if (pageIsLoaded("RSHB")) {
      console.log("RSHB");
      rshb_default();
    } else if (pageIsLoaded("DOMRFBANK")) {
      console.log("DOMRFBANK");
      domrfbank_default();
    } else if (pageIsLoaded("MTSBANK")) {
      console.log("MTSBANK");
      mtsbank_default();
    } else if (pageIsLoaded("ETALON")) {
      console.log("ETALON");
      etalon_default();
    } else if (pageIsLoaded("GK_OSNOVA")) {
      console.log("GK_OSNOVA");
      partner_template_default(gk_osnova_default);
    }
  };
  if (pageIsLoaded("KORTROS")) {
    console.log("KORTROS");
    kortros_default();
  }
})();
