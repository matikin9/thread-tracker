function find_unique_colors(filenameArr) {
  // filenameArr: ["set1.json", "set2.json", ...]
	// TODO: Check for duplicate colors within a single dataset

  var numFiles = filenameArr.length;
  var uniqueColors = [];

  if (numFiles < 1) {
    return;
  } else if (numFiles == 1) {
    // TODO: Return the colors in the file in the first element of the array.
  } else {
    // compare colors in at least 2 files.

    $.each(filenameArr, function(index, filename) {
      // for each file in the array, compare elements to uniqueColors array
      $.getJSON(filename, function(data) {
				var colorsToCompare = uniqueColors.slice(0);
        uniqueColors = find_unique_compare_two(colorsToCompare, data.colors);
				uniqueColors.sort();
				console.log("* : " + uniqueColors);

				var html = "";
				$.each(uniqueColors, function(key, value) {
					html += '<li>' + value + '</li>';
				});

				$('.log').html(html);
      });
    });
		return;
  }
}

function find_unique_compare_two(colorset1, colorset2) {
  if (colorset1.length === 0) {
    return colorset2;
  } else if (colorset2.length === 0) {
    return colorset1;
  } else {
		// Javascript passes arrays and objects by reference, not value.
		// Using slice here sets uniqueElements to a shallow copy of
		// the values in the colors1 array.
    var uniqueElements = colorset1.slice(0);

    $.each(colorset2, function(index, obj) {
			// if a color within colorset2 does not exist within uniqueElements (which was
			// initialized to colorset1), add it to uniqueElements
			if ($.inArray(obj, uniqueElements) < 0) {
				uniqueElements.push(obj);
			}
    });

		return uniqueElements;
  }
}
