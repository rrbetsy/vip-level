$(document).ready(function() {
  //为选中元素设置样式、高亮
//   var disTop = $("p").offset().top;
  var headerHeight = $(".header").height();
//   var headerHeight =0;
  //   var uperHeight = $(".header").height();
  var $items = $(".item");

  $(".item-idx").each(function(index, item) {
    $(item).on("click", function() {
      $(".check").removeClass("check");
      $(item).addClass("check");
      $(document).scrollTop($items.eq(index).offset().top - 40 - headerHeight);
      var disLeft = $(item).offset().left; //获取选中元素到屏幕左边的距离
      var conWidth = $(item).width(); //获取选中元素自身宽度
      //设置选中元素下划线（高亮）的移动距离
      $(".sub-line").css({
        width: conWidth + "px",
        transform: " translate3d(" + disLeft + "px,0,0)"
      });
    });
  });
//   $(document).scrollTop(disTop);
  $(document).scroll(function() {});

  $(document).scroll(function() {
    var scrollHeight = $(this).height(); //获取文档内容高度
    var windowHeight = $(window).height(); //获取窗口可视区域高度
    var scrollTop = $(this).scrollTop(); //获取屏幕的滚动距离
    //固定顶部导航栏
    if (scrollTop >= 50) {
      $(".header").addClass("header-nav");
    } else {
      $(".header").removeClass("header-nav");
    }
    //右侧出现小菜单
    if (scrollTop > 150) {
      $(".middle").addClass("show");
    } else {
      $(".middle").removeClass("show");
    }
    if (windowHeight + scrollTop == scrollHeight) {
      return "已经到底部了！";
    }
    console.log(scrollHeight, windowHeight, scrollTop);
  });
  //鼠标放到导航栏元素上出现导航栏菜单
  $(".show-menu").mouseenter(function() {
    $(".menu").addClass("show");
  });
  $(".show-menu").mouseleave(function() {
    $(".menu").removeClass("show");
  });
  //回到顶部
  $(".back-top").click(function() {
    $(document).scrollTop(0);
  });
  //出现弹窗
  $(".sign-in").click(function() {
    $(".popup").removeClass("hidden");
    $(".sign-bgimg").addClass("show");
    $(".popup").css({ transform: "translate3d(0px,-230px,0px)" });
  });
  //关闭弹窗
  $(".switch").click(function() {
    $(".sign-bgimg").removeClass("show");
    $(".popup").addClass("hidden");
    $(".popup").css({ transform: "translate3d(0px,-800px,0px)" });
  });
  $(".btn").click(function() {
    $(".sign-bgimg").removeClass("show");
    $(".popup").addClass("hidden");
    $(".popup").css({ transform: "translate3d(0px,-800px,0px)" });
  });
});
