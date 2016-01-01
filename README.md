# thread-tracker

I got into cross stitching at the beginning of 2014.  It appealed to me because it's based on a grid system - there's no eyeballing distances like with embroidery.  You follow a pattern and get a defined picture instead of trying to trace an outline only to find you suck and your lines are wonky.  Because each "cross" is set in a 1x1 square, it's like creating pixel images but in analog!

The designer who's work inspired me to get into cross stitch is Jody Rice of [Satsuma Street](https://www.etsy.com/shop/satsumastreet) and her "Pretty Little City" series.  They use around 25 colors each and I quickly realized with each successive pattern that most of the colors did not overlap, but some did!  I created this project to help myself identify which colors I don't need to re-buy and also to create a digital representation of the colors in my stash.  So when I start any new project, I can quickly figure out what colors I already have and what colors I need to buy.

## Features

This project will allow you to:

* Generate a JSON file representing a pattern or set of thread colors.  Currently, the only requirement is that the JSON file contain an object with an element named "colors" and is an array of strings.

```javascript
{
  name: "<NAME-optional>",
  designer: "<DESIGNER-optional>",
  colors: [
      <NUMBER-string>,
    },
    ...
  ]
}
```

* Compare colors across multiple JSON files to find:
  * What colors you need to buy because you don't have them.
  * What colors you don't need to buy because you already have them.
  * What colors are in multiple patterns that you have so you only need to buy one them.
