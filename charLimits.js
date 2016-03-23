/*!
 * jQuery charLimits - Set min and max character limits on input
 *
 * The MIT License
 *
 * @author  : Elias Papadamos
 * @version : 0.2
 *
 */

;(function($){
  
  $.fn.charLimits = function(options) {
   
    var settings = $.extend({
      // Default limits
      min: 10,
      max: 100
    }, options);

    function calculate_characters(element) {
      
      if(element.attr('data-min') != undefined) {
        settings.min = element.attr('data-min');
      }

      if(element.attr('data-max') != undefined) {
        settings.max = element.attr('data-max');
      }

      infoTextMin = '<div class="charLimitsInfo">'
      infoTextMin += '<span class="charLimitsMin">' + settings.min + ' < </span>'
      infoTextMin += '&nbsp'
      
      infoTextMax = '&nbsp'
      infoTextMax += '<span class="charLimitsMax"> < ' + settings.max + '</span>'
      infoTextMax += '</div>'

      characters = element.val().length;

      if(characters >= settings.min && characters <= settings.max) {
        klass = 'charLimitsOk';
      } else {
        klass = 'charLimitsFail';
      }

      infoTextCurrent = '<span class="charLimitsMax">'
      infoTextCurrent += '<span class="' + klass + '">' + characters + '</span>'
      infoTextCurrent += '</span>'

      element.after(infoTextMin + infoTextCurrent + infoTextMax);
    }

    return this.each(function() {
      calculate_characters($(this));
      $(this).on('keyup', function(){
        $(this).next('.charLimitsInfo').remove();
        calculate_characters($(this));
      });
    });

  };

}(jQuery));