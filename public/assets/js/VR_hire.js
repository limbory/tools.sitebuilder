$(function() {
	var body = $('body'), win = $(window)
	  , section = $('.section'), elem = $('.elem')
	  , locMsg = ["width", "top", "left", "bottom", "right", "height", "font-size", "border-width", "margin-left", "line-height",
				  "padding-top", "padding-right", "padding-bottom", "padding-left"]
	  , scaleWidth, scaleHeight, designHeight, ratio, fn = {};

/* 处理页面脚本元素
==================================================*/
	fn.noop = function() {};
	fn.execute = function (i, d) {
		var self = $(d);
		$.each( self.attr('class').match(/\_js\-[a-zA-Z]+/gi) || [], function (k, v) {
			(fn[v.slice(4)] || function() {
				console.log('未找到对应'+ v +'事件，请检查"_js-"处的命名是否正确，或者fn中是否包含对应函数');
			}).call(self);
		});
	};
	
	/* 页面比例调整 */
	fn.onResize = function() {
		var operation = function() {
			var adjust;

			scaleHeight = win.height();
			scaleWidth = win.width();
			adjust = parseFloat(scaleHeight / scaleWidth) > ratio ? (ratio * scaleWidth) : scaleHeight;
			adjust = parseFloat(adjust / designHeight);

			elem.each(function() {
				var self = $(this), style = {};
				$.each(eval(self.attr('data-msg')), function (i, d) {
					d && ( style[locMsg[i]] = Math.round(d * adjust) + 'px' );
				});
				self.css(style);
			});
		}, handle;

		designHeight = parseInt(this.attr('data-height'));
		ratio = eval(this.attr('data-ratio'));

		win.resize(function() {
			clearTimeout(handle);
			handle = setTimeout(function() {
				operation();
				($.fn.fullpage.reBuild || fn.noop) ();
			}, 300);
		}); operation();
	};
	/* 图片缓存机制 */
	fn.imgCache = function() {
		var that = this
		  , num = that.find('.num')
		  , img = $('.img-cache'),

		updateProcessbar = function(float) {
			num.text(parseInt(float * 100) + '%');
			if (float == 1) {
				that.css('opacity', 0);
				fn.initPage();
				setTimeout(function() {
					that.hide();
				}, 1000);
			}
		};

		that.find('.center').show();
		img.on('load', function() {
			$(this).addClass('cached');
			updateProcessbar(parseFloat(img.filter('.cached').length / img.length));
		}).each(function() {
			var self = $(this);
			self.attr('src', self.attr('data-src'));
		});
	};
	/* 滚动插件初始化 */
	fn.initPage = function() {
		var meta = $('.sec-1 [class*="elem-"]'),

		delay = function(t) {
			return {'animation-delay': t + 'ms'};
		},
		dur = function(t) {
			return {'animation-duration': t + 'ms'};
		};

		/* 页面切换动画 */
		meta.filter(':eq(1)').css(dur(700));
		meta.filter(':eq(3), :eq(4)').css(delay(700)).css(dur(800));
		meta.filter(':eq(2)').css(delay(1000)).css(dur(500));
		meta.filter(':eq(5)').css(delay(1500)).css(dur(800));
		meta.filter(':eq(7), :eq(6), :eq(8)').css(delay(1500)).css(dur(1000));

		meta = $('.sec-2 [class*="elem-"], .sec-2 [class*="block-"]');
		meta.filter(':eq(1)').css(dur(700));
		meta.filter(':eq(2), :eq(3)').css(delay(700)).css(dur(800));
		meta.filter(':eq(6)').css(delay(1500)).css(dur(800));
		meta.filter(':eq(4), :eq(5), :gt(6):lt(6)').css(delay(1700)).css(dur(1000));
		meta.filter(':eq(8)').css(delay(1800));
		meta.filter(':eq(9)').css(delay(1900));
		meta.filter(':eq(10)').css(delay(2000));
		meta.filter(':eq(11)').css(delay(2100));
		meta.filter(':eq(12)').css(delay(2200));

		meta = $('.sec-3 [class*="elem-"]');
		meta.filter(':eq(1), :eq(2), :eq(8)').css(dur(1000));
		meta.filter(':eq(10), :eq(11), :eq(12)').css(delay(1000)).css(dur(1000));
		meta.filter(':gt(12):lt(4)').css(delay(2000)).css(dur(1000));
		meta.filter(':eq(14)').css(delay(2300));
		meta.filter(':eq(15)').css(delay(2600));
		meta.filter(':eq(16)').css(delay(2900));
		meta.filter(':eq(3)').css(delay(1000)).css(dur(1000));
		meta.filter(':eq(7)').css(delay(2000)).css(dur(1000));
		meta.filter(':eq(5), :eq(6), :eq(9)').css(delay(3000)).css(dur(2500));
		meta.filter(':eq(6)').css(delay(5000));
		meta.filter(':eq(9)').css(delay(7000));

		meta = $('.sec-4 [class*="elem-"]');
		meta.filter(':eq(1)').css(dur(700));
		meta.filter(':eq(2), :eq(3)').css(delay(700)).css(dur(800));
		meta.filter(':eq(6)').css(delay(1500)).css(dur(800));
		meta.filter(':eq(4), :eq(5)').css(delay(1700)).css(dur(1000));
		meta.filter(':eq(7), :eq(8)').css(delay(1500)).css(dur(800));
		meta.filter(':eq(9), :eq(10), :eq(11)').css(delay(2000)).css(dur(800));
		meta.filter(':eq(10)').css(delay(2300)).css(dur(800));
		meta.filter(':eq(11)').css(delay(2600)).css(dur(800));

		meta = $('.sec-5 [class*="elem-"]');
		meta.filter(':eq(0), :gt(0):lt(5)').css(dur(1000));
		meta.filter(':eq(2)').css(delay(500));
		meta.filter(':eq(3)').css(delay(800));
		meta.filter(':eq(4), :eq(5)').css(delay(1100));
		meta.filter(':gt(5):lt(10)').css(dur(1000));
		meta.filter(':eq(6)').css(delay(2100));
		meta.filter(':eq(7)').css(delay(2100 + 300 * 1));
		meta.filter(':eq(8)').css(delay(2100 + 300 * 2));
		meta.filter(':eq(9)').css(delay(2100 + 300 * 3));
		meta.filter(':eq(10)').css(delay(2100 + 300 * 4));
		meta.filter(':eq(11)').css(delay(2100 + 300 * 5));
		meta.filter(':eq(12)').css(delay(2100 + 300 * 6));
		meta.filter(':eq(13)').css(delay(2100 + 300 * 7));
		meta.filter(':eq(14)').css(delay(2100 + 300 * 8));
		meta.filter(':eq(15)').css(delay(2100 + 300 * 9));

		meta = $('.sec-6 [class*="elem-"]');
		meta.filter(':eq(1), :eq(2), :eq(3)').css(dur(1000));
		meta.filter(':eq(4), :eq(5), :eq(7)').css(delay(1000)).css(dur(1000));
		meta.filter(':eq(5)').css(delay(1300));
		meta.filter(':eq(7)').css(delay(1600));
		meta.filter(':eq(6)').css(delay(2000)).css(dur(1000));

		meta = $('.sec-7 [class*="elem-"]');
		meta.filter(':eq(1), :eq(2), :eq(3)').css(dur(1000));
		meta.filter(':gt(3):lt(4)').css(delay(1000)).css(dur(1000));
		meta.filter(':eq(5)').css(delay(1300));
		meta.filter(':eq(6)').css(delay(1600));
		meta.filter(':eq(7)').css(delay(1900));

		meta = $('.sec-8 [class*="elem-"]');
		meta.filter(':eq(1), :eq(2), :eq(3)').css(dur(1000));
		meta.filter(':eq(4)').css(delay(1000)).css(dur(1000));
		meta.filter(':eq(7)').css(delay(0)).css(dur(1000));
		meta.filter(':eq(5)').css(delay(1700)).css(dur(1000));
		meta.filter(':eq(6)').css(delay(1700)).css(dur(1000));


		/* 滚屏插件初始化 */
		$('.main-content').fullpage({
			resize: false,
			afterRender: function() {
				setTimeout(function() {
					section.filter('.active').addClass('_fp-active');
				}, 700);
			},
			afterLoad: function(noUse, current) {
				section.removeClass('_fp-active').eq(current - 1).addClass('_fp-active');
			}
		});
		$('.next-up').click(function() {
			section.index(section.filter('._fp-active')) + 1 == section.length ? $.fn.fullpage.moveTo(1) : $.fn.fullpage.moveSectionDown();
		});


		/* 流星雨 */
		var star = $('.bg-star img.elem'),
		random = function() {
			return parseInt(Math.random() * 16);
		};
		setInterval(function() {
			star.removeClass('run');
			star.eq(random()).addClass('run');
			star.eq(random()).addClass('run');
			star.eq(random()).addClass('run');
			star.eq(random()).addClass('run');
			star.eq(random()).addClass('run');
		},1000);

		/* 背景音乐兼容性调整 */
		// document.getElementById('bgm').play();
		// var firstTouch = true;
		// $('body').on("touchstart", function(e) {
		//     if (firstTouch) {
		//         firstTouch = false;
		//         document.getElementById('bgm').play();
		//     } else {
		//         return;
		//     }
		// });
	};

	$('.js').each(fn.execute);
});