# jQuery charLimit
charLimits.js is a jQuery plugin that shows min, max
and current length of input or textarea text.

## Usage
First include charLimits.js after jquery.

    <textarea class="test" rows="4" cols="100"></textarea>

    <script type="text/javascript">
      $(document).ready(function(){
        $('.test').charLimits();
      });
    </script>

**Options:**

* min (default: 10)
* max (default: 100)

**In and out of limits CSS classes**

* .charLimitsOk (this could be green)
* .charLimitsFail (this could be red)

## Data Attributes
You can pass min and max limits with data-min and data-max attributes on the element.
Ex.

    <textarea class="test" data-min="1" data-max="30"></textarea>
