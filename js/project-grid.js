var containerEl = document.querySelector('#project-grid');
var mixer = mixitup(containerEl, {
	callbacks: {
		// onMixStart: function(state) {
		// 	alignProjectGrid();
		// }
	}
});

// function alignProjectGrid() {

// 	let i = 0;
	
// 	$('.project-card').each(function() {

// 		if($(this).css('display') == 'none') {
// 			return; // continue
// 		}

// 		if(i % 3 == 0) {
// 			$(this).css('margin-left', '0');
// 			$(this).css('margin-right', '1%');
// 			i += 1;
// 		} else if(i % 3 == 1) {
// 			$(this).css('margin-right', '1%');
// 			$(this).css('margin-left', '1%');
// 			i += 1;
// 		} else {
// 			$(this).css('margin-right', '0');
// 			$(this).css('margin-left', '1%');
// 			i += 1;
// 		}
// 	});
// }
