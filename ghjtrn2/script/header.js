$(document).ready(
	function () {
		$('.dropdown-toggle').click(
			function () {
				if ($('.list').height() == 319.5) {
					$('.list').css('display', 'block');
					$('.list').css('height', '320px');
					$('.caret').css('border-bottom', '4px dashed');
					$('.caret').css('border-top', 'none');
				} else if ($('.list').height() == 320) {
					$('.list').css('display', 'none');
					$('.list').css('height', '319.5px');
					$('.caret').css('border-bottom', 'none');
					$('.caret').css('border-top', '4px dashed');
				}
			}
		);
		$(window).click(
			function () {
				if ($('.list').height() == 320) {
					$('.list').css('display', 'none');
					$('.list').css('height', '319.5px');
					$('.caret').css('border-bottom', 'none');
					$('.caret').css('border-top', '4px dashed');
				}
			}
		);
	}
);