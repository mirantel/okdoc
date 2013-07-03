$(document).ready(function() {

	if ($('#search-list').exists()){
		$('#search-list').columnize({
			//width : 156,
			//buildOnce : true,
			//height : 210
			columns: 3
		});
	};
	if ($('#js-choose-doctor').exists()){
		$('#js-choose-doctor').columnize({
		//	width : 149,
		//	buildOnce : true,
		//	height : 381
			columns: 4
		});
	};

});