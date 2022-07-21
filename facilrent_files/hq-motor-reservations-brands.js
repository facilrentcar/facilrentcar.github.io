(function($) {
    "use strict";

    $(document).ready(function(){
        var dateTimeFormat = 'Y-m-d H:i';
        $('#caag-pick-up-date').datetimepicker({
            format: dateTimeFormat,
			closeOnDateSelect: false
        });
        $('#caag-return-date').datetimepicker({
            format: dateTimeFormat,
			closeOnDateSelect: false
        });
    });
    /*
     *  Moment Auto Date
     */
    $('#caag-pick-up-date').change(function(){
        var newDate = moment($('#caag-pick-up-date').val(),'YYYY-MM-DD HH:mm');
        $('#caag-return-date').val(newDate.add(7, 'days').format('YYYY-MM-DD HH:mm'));
    });
    $('.xdsoft_current').css('background-color','#1184bf !important');
    $('#hq-pick-brand').on('change', function(){
        hq_rentals_brands.forEach(function (brand){
           if( brand.id == $('#hq-pick-brand').val() ){
               var locationOptions = '<option>'+ brand.locations_placeholder +'</option>';
               brand.locations.forEach(function(location){
                   locationOptions += '<option value="'+ location.id +'">'+ location.name + '</option>'
               });
               $('#hq-pick-up-location option').remove();
               $('#hq-return-location option').remove();
               $("#hq-pick-up-location").append(locationOptions);
               $("#hq-return-location").append(locationOptions);
			   console.log(brand);
               $("#caag-book-form").attr("action",brand.link);
           }
        });
    });

})(jQuery);
