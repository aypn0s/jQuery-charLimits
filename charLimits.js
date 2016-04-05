/*!
 * jQuery charLimits - Set min and max character limits on input
 *
 * The MIT License
 *
 * @author  : Elias Papadamos
 * @version : 0.5
 *
 */

;(function($){
  
  $.fn.charLimits = function(options) {
   
    var settings = $.extend({}, options);

    function calculate_characters(element) {

      if(settings.min) {
        min = settings.min;
      } else if(element.attr('data-min') != undefined) {
        min = element.attr('data-min');
      } else {
        min = 10;
      }

      if(settings.max) {
        max = settings.max;
      } else if(element.attr('data-max') != undefined) {
        max = element.attr('data-max');
      } else {
        max = 100;
      }

      infoTextMin = '<div class="charLimitsInfo">'
      infoTextMin += '<span class="charLimitsMin">' + min + ' < </span>'
      infoTextMin += '&nbsp'
      
      infoTextMax = '&nbsp'
      infoTextMax += '<span class="charLimitsMax"> < ' + max + '</span>'
      infoTextMax += '</div>'

      characters = element.val().length;

      if(characters >= min && characters <= max) {
        klass = 'charLimitsOk';
      } else {
        klass = 'charLimitsFail';
      }

      infoTextCurrent = '<span class="charLimitsMax">'
      infoTextCurrent += '<span class="' + klass + '">' + characters + '</span>'
      infoTextCurrent += '</span>'

      element.after(infoTextMin + infoTextCurrent + infoTextMax);
    }

    function reset(element) {
      element.next('.charLimitsInfo').remove();
    }

    return this.each(function() {
      reset($(this));
      calculate_characters($(this));
      $(this).on('keyup', function(){
        $(this).next('.charLimitsInfo').remove();
        calculate_characters($(this));
      });
    });

  };

}(jQuery));