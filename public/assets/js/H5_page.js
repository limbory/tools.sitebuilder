$(function() {
	
	var body = $('body'), win = $(window)
	  , section = $('.section'), elem = $('.elem')
	  , locMsg = ["width", "top", "left", "bottom", "right", "height", "line-height", "font-size", "border-width", "margin-left",
				  "padding-top", "padding-right", "padding-bottom", "padding-left"]
	  , scaleWidth, scaleHeight, designHeight, ratio, fn = {};

/* 处理页面脚本元素
==================================================*/
	fn.execute = function (i, d) {
		var self = $(d);
		$.each( self.attr('class').match(/\_js\-[a-zA-Z]+/gi) || [], function (k, v) {
			(fn[v.slice(4)] || function() {
				console.log('未找到对应'+ v +'事件，请检查"_js-"处的命名是否正确，或者fn中是否包含对应函数');
			}).call(self);
		});
	};
	fn.noop = function() {};
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
		  , rotate = that.find('.c-1')
		  , cover = that.find('.c-2')
		  , num = that.find('.num')
		  , img = $('.img-cache'),

		updateProcessbar = function(float) {
			var angle = parseInt(float * 360) + 'deg'
			  , _Nu = parseInt(float * 100) + '%';

			float < 0.5 ? that.removeClass('moreHalf') : that.addClass('moreHalf');
			rotate.css('transform', 'rotate('+ angle +')');
			num.text(_Nu);
			float == 1 && (that.css('opacity', 0), fn.initPage(), setTimeout(function() {
				that.hide();
			}, 1000));
		};

		that.find('.timer').show();

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
		var delay = function(t) {
			return {'animation-delay': t + 'ms'};
		},
		dur = function(t) {
			return {'animation-duration': t + 'ms'};
		};

		$('.sec-1 .elem-7').css(dur(1000));
		$('.sec-1 .elem-3, .sec-1 .elem-5').css(delay(500)).css(dur(3000));
		$('.sec-1 .elem-4').css(delay(2000)).css(dur(1000));
		$('.sec-1 .elem-2, .sec-1 .elem-6').css(delay(2000)).css(dur(5000));
		$('.sec-1 .elem-6').css(dur(1500));
		$('.sec-1 .elem-1').css(delay(5000)).css(dur(5000));

		$('.sec-2 .elem-2, .sec-2 .elem-4, .sec-2 .elem-5, .sec-2 .elem-7').css(dur(1000));
		$('.sec-2 .elem-9').css(dur(2000));
		$('.sec-2 .elem-1, .sec-2 .elem-3, .sec-2 .elem-6, .sec-2 .elem-8').css(delay(1000)).css(dur(5000));
		$('.sec-2 .elem-6, .sec-2 .elem-8').css(dur(3000));

		$('.sec-3 .elem-8').css(dur(1000));
		$('.sec-3 .elem-11').css(delay(1000)).css(dur(1000));
		$('.sec-3 .elem-9, .sec-3 .elem-10').css(delay(2000)).css(dur(1000));
		$('.sec-3 .elem-1, .sec-3 .elem-2, .sec-3 .elem-3').css(delay(2500)).css(dur(1000));
		$('.sec-3 .elem-4, .sec-3 .elem-5').css(delay(3500)).css(dur(1500));
		$('.sec-3 .elem-7').css(delay(3500)).css(dur(5000));
		$('.sec-3 .elem-6, .sec-3 .elem-12, .sec-3 .elem-13').css(delay(5000)).css(dur(1500));
		$('.sec-3 .elem-13').css(delay(5300));
		$('.sec-3 .elem-14').css(delay(6500)).css(dur(1500));

		$('.sec-4 .elem-6').css(dur(1000));
		$('.sec-4 .elem-8').css(dur(2000));
		$('.sec-4 .elem-1, .sec-4 .elem-2, .sec-4 .elem-3, .sec-4 .elem-4, .sec-4 .elem-5, .sec-4 .elem-7').css(delay(1000)).css(dur(5000));
		$('.sec-4 .elem-5, .sec-4 .elem-7').css(dur(3000));

		$('.sec-5 .elem-4').css(dur(1000));
		$('.sec-5 .elem-7').css(delay(1000)).css(dur(1000));
		$('.sec-5 .elem-5, .sec-5 .elem-6').css(delay(2000)).css(dur(1000));
		$('.sec-5 .elem-12, .sec-5 .elem-14').css(delay(2500)).css(dur(3000));
		$('.sec-5 .elem-11, .sec-5 .elem-13').css(delay(3500)).css(dur(3000));
		$('.sec-5 .elem-1, .sec-5 .elem-2, .sec-5 .elem-3').css(delay(4000)).css(dur(3000));
		$('.sec-5 .elem-8, .sec-5 .elem-9, .sec-5 .elem-10').css(delay(5500)).css(dur(3000));	
		$('.sec-5 .elem-9').css(delay(6000));
		$('.sec-5 .elem-10').css(delay(6500));
		$('.sec-5 .elem-15, .sec-5 .elem-16, .sec-5 .elem-17').css(delay(6500)).css(dur(1500));
		$('.sec-5 .elem-16').css(delay(7500));
		$('.sec-5 .elem-17').css(delay(8000));

		$('.sec-6 .elem-7').css(dur(1000));
		$('.sec-6 .elem-9').css(dur(2000));
		$('.sec-6 .elem-2, .sec-6 .elem-3, .sec-6 .elem-4, .sec-6 .elem-5, .sec-6 .elem-6, .sec-6 .elem-8').css(delay(1000)).css(dur(5000));
		$('.sec-6 .elem-8').css(dur(3000));
		$('.sec-6 .elem-1').css(delay(6000)).css(dur(3000));

		$('.main-content').fullpage({
			resize: false,
			afterRender: function() {
				setTimeout(function() {
					section.filter('.active').addClass('_fp-active');
				}, 700);
			},
			// onLeave: function(from, to, operation) {
				
			// },
			afterLoad: function(noUse, current) {
				section.removeClass('_fp-active').eq(current - 1).addClass('_fp-active')
			}
		});
	};

	$('.js').each(fn.execute);
});