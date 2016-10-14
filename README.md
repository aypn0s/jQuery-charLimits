# jQuery charLimit
charLimits.js is a jQuery plugin that shows min, max
and current length of input or textarea text.

![charLimit example](https://dl.dropboxusercontent.com/u/4888041/gifs/charLimits.gif)

## Usage
First include charLimits.js after jquery.
```html
  <textarea class="test" rows="4" cols="100"></textarea>

  <script type="text/javascript">
    $(document).ready(function(){
      $('.test').charLimits();
    });
  </script>
```
**Options:**

* min (default: 10)
* max (default: 100)
* alternativeText (default: null)

**In and out of limits CSS classes**

* .charLimitsOk (this could be green)
* .charLimitsFail (this could be red)

#### Alternative Text
Instead of text inside input/textarea field it's possible to use an alternative
text and apply limits to that text.
```javascript
  var altText = $('.test').val().doSomeChangesToText();
  var limits  = $('.test').charLimits({alternativeText: ''});

  // Set different text
  altText = altText.doSomeOtherChangesToText();
  limits.setAlternativeText(altText);
```

## Data Attributes
You can pass min and max limits with data-min and data-max attributes on the element.
Ex.

```html
  <textarea class="test" data-min="1" data-max="30"></textarea>
```
