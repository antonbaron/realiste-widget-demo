(() => {
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
})();
