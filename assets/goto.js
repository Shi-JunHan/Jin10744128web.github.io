       function goTo自我介紹() { $("#自我介紹")[0].scrollIntoView(); }
       function goTo社團活動() { $("#社團活動")[0].scrollIntoView(); }
       function goTo工作經驗() { $("#工作經驗")[0].scrollIntoView(); }
       function goTo興趣() { $("#興趣")[0].scrollIntoView(); }
       function goTo目標() { $("#目標")[0].scrollIntoView(); }
       function goTo大學四年的自我期許() { $("#大學四年的自我期許")[0].scrollIntoView(); }
       function goTo生活紀錄() { $("#生活紀錄")[0].scrollIntoView(); }
  
       $(function () {
       var $win = $(window);
       var $backToTop = $('.js-back-to-top');
        // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
       $win.scroll(function () {
       if ($win.scrollTop() > 100) {
       $backToTop.show();
       } 
       else {
       $backToTop.hide();
       }
       });
        // 當用戶點擊按鈕時，通過動畫效果返回頭部
       $backToTop.click(function () {
       $('html, body').animate({scrollTop: 0}, 200);
       });
       });
