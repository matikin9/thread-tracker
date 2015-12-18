function compare_cross_stitch_json(dataset1, dataset2) {
	$.getJSON(dataset1, function(data1) {
		$.getJSON(dataset2, function(data2) {
			$('.intro').append('Comparing: ' + data1.name + " to " + data2.name);

			var colors1 = data1.colors.map(function(x) {
				return x.number;
			});
			var colors2 = data2.colors.map(function(x) {
				return x.number;
			});

			var matches = [];

			$.each(data1.colors, function(index, color_obj) {
				console.log("color: " + color_obj.number + " " + color_obj.description);

				if ($.inArray(color_obj.number, colors2) > 0) {
					matches.push(color_obj);
				}
			});

			$.each(matches, function(key, value) {
				$('.log').append('<li>' + value.number + " - " + value.description + '</li>');
			})

			console.log(matches);
		});
	});

}
