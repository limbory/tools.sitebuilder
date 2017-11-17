/**
 * 项目入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:50:39
 * @version 1.0.0
 */
'use strict';


window.jQuery = require('jquery');
window.$ = jQuery;
require('../../common/javascript/assets/jquery.dotdotdot.min');

$(function () {


  /*navbar功能*/
  (function () {
    var $asideNav = $('.aside-nav');
    $('.nav-switch').click(function () {
      $asideNav.addClass('slideLeft');
      $(window).bind('touchmove', function (e) {
        e.preventDefault();
      });
      setTimeout(function () { $asideNav.addClass('in'); }, 10);
    });
    $asideNav.click(function (e) {
      var that = $(e.target);
      that.is('.slideLeft') && (
        that.removeClass('in'),
        $(window).unbind('touchmove'),
        setTimeout(function () { $asideNav.removeClass('slideLeft'); }, 300)
      );
    });
  })();


  /*搜索页面展示*/
  (function () {
    var pageLocation = window.location.pathname;
    var index = { node: 'node.js' };
    if (!/(search|tags)/.test(pageLocation)) return false;

    var searchResultArea = $('#maincontent>.padcontent');
    var searchResultAreaInner = $('<section class="content page-tag-list"><h2 style="text-transform: uppercase;">共有<span></span>个相关内容</h2><ul></ul></section>')
    var hash = decodeURI(window.location.search.slice(1))
           .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
           .replace(/(^\s*)|(\s*$)/g, '');

    if (/search/.test(pageLocation)) {
      var hundleString = function (str) {
        return str.replace(new RegExp('(' + hash.replace(/\ /g, ")|(") + ')', 'gi'), '<strong>$&<\/strong>');
      };
      var judgeString = function (str) {
        var judge;
        $.each(hash.split(' '), function (i, d){
          if ( (new RegExp('('+ d +')', 'gi')).test(str) ) {
            judge = true;
          } else {
            judge = false;
            return false;
          }
        });
        return judge;
      };
      $.each(postMsg, function (i, d) {
        if (judgeString(i)) {
          var $inner = $('<li><span>'+ d.date +'</span><a href="'+ d.url +'" title="'+ i +'" >'+ hundleString(i) +'</a></li>');
          d.link && $inner.find('a').attr({'href': d.link, 'target': '_blank'}).append(' <img class="link-ico" src="'+window.BASE_URL+'/img/link-sm.png">');
          searchResultAreaInner.find('ul').append($inner);
        }
      });
      $('#beforecontent').prepend('<h1 class="pagetitle">- 搜索结果: -</h1>')
    } else {
      var indexOf = function(arr, hash) {
        var temp = true;
        $.each(arr, function (i, d) {
          return d == hash ? temp = false : true;
        });
        return !temp;
      };
      $.each(postMsg, function (i, d) {
        if ( indexOf(d.tags, hash) ) {
          var $inner = $('<li><span>'+ d.date +'</span><a href="'+ d.url +'" title="'+ i +'" >'+ i +'</a></li>');
          d.link && $inner.find('a').attr({'href': d.link, 'target': '_blank'}).append(' <img class="link-ico" src="'+window.BASE_URL+'/img/link-sm.png">');
          searchResultAreaInner.find('ul').append($inner);
        }
      });
      $('#beforecontent').prepend('<h1 class="pagetitle">- 标签: '+ (index[hash] ? index[hash] : hash) +' -</h1>')
    }
    searchResultAreaInner.find('ul').children().length > 0 ? 
    searchResultAreaInner.find('h2 span').text(searchResultAreaInner.find('li').length) :
    searchResultAreaInner.html('<div class="no-result-there"><p>未找到相关内容，试试其他的(ง •̀_•́)ง</p></div>');
    searchResultArea.append(searchResultAreaInner);
  })();


  /*更新评论数*/
  (function () {
    var $comment = $('.js-comment-count');
    var getCountData = function(threads, i) {
      $.ajax({
        url: 'https://api.duoshuo.com/threads/counts.jsonp',
        type: 'GET',
        dataType: 'jsonp',
        data: {short_name: 'limbory', threads: threads},
        cache: false,
        timeout: 60000
      })
      .done(function(data) {
        $comment.eq(i).find('a').text(data.response[threads].comments);
      })
    };
    if ($comment.length >= 1 && $('body').is('.at-index-page') ) {
      $comment.each(function (i, d) {
        getCountData($(this).attr('data-thread-key'), i);
      });
    } else if ($comment.length == 1 && !$('body').is('.at-index-page')) {
      getCountData(postSiteID, 0);
    };
  })();


  /* dotdotdot插件 */
  (function () {
    var $initObj = '.header-wrapper .posttitle .pt_2' + ','
           + '.rp-widget li h3 .pt_2';
    $($initObj).dotdotdot({
      watch: 'window',
      wrap: 'letter'
    });
  })();


  /*图片加载*/
  (function () {
    var $img = $('img[data-img]');
    $img.each(function(){
      var $stand = $(this);
      var $real = $('<img src="">').load(function() {
        $(this).show().prev().remove();
      }).css('display', 'none');
      $stand.after($real).next().attr('src', $stand.attr('data-img'));
    });
  })();

  $('.tag-container a').click(function (e) {
    e.preventDefault();
    var key = $(this).attr('href').split('?');
    window.location = key[0] + '?' + encodeURI(key[1]);
  });
});