function display_colors_needed(filenameArr) {
  var numFiles = filenameArr.length;
  var colorsNeeded = [];

  if (numFiles <= 1) {
    return;
  } else {
    var stash = filenameArr[0];
    var patterns = filenameArr.slice(1);

    $.getJSON(stash, function(stashData) {
      $.each(patterns, function(index, filename) {
        $.getJSON(filename, function(patternData) {

          var colorsNeededInFile = get_colors_needed(stashData.colors, patternData.colors);

          $.each(colorsNeededInFile, function(index, value) {
            if ($.inArray(value, colorsNeeded) < 0) {
              colorsNeeded.push(value);
            }
          });

          var html = "";
          $.each(colorsNeeded, function(key, value) {
            html += '<li>' + value + '</li>';
          });

          $('ul#neededColors').html(html);
        });
      });
      return;
    });
  }
}

function get_colors_needed(colorsOwned, colorsInPattern) {
  // Takes in arrays of strings
  if (colorsOwned.length === 0) {
    return colorsInPattern;
  } else if (colorsInPattern.length === 0) {
    return [];
  } else {
    var colorsNeeded = [];

    $.each(colorsInPattern, function(index, obj) {
      // if a color within colorset2 does not exist within uniqueElements (which was
      // initialized to colorset1), add it to uniqueElements
      if ($.inArray(obj, colorsOwned) < 0) {
        colorsNeeded.push(obj);
      }
    });

    return colorsNeeded;
  }
}

function display_unique_colors(filenameArr) {
  // filenameArr: ["set1.json", "set2.json", ...]
  // TODO: Check for duplicate colors within a single dataset
  // TODO: Pull out display code to utilize callback functions

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
        uniqueColors = get_unique_colors(colorsToCompare, data.colors);
        uniqueColors.sort();

        var html = "";
        $.each(uniqueColors, function(key, value) {
          html += '<li>' + value + '</li>';
        });

        $('ul#uniqueColors').html(html);
      });
    });
    return;
  }
}

function get_unique_colors(colorset1, colorset2) {
  // Takes in arrays of strings.
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
