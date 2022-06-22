$(document).ready(function(){
    $('#myForm').validate({
        rules : {
            name : {
                required: true,
                minlength: 3,
                latters_only: true
            },
            age : {
                required: true,
                min : 18,
                max : 25
            },
            email : {
                required : true,
                minlength : 10,
                email_val : true
            },
            phone : {
                required : true,
                minlength : 10,
                maxlength : 10,
                phone_val : true
            },
            gender : {
                required : true
            },
            config : {
                required  : true
            },
            pickupTime1 : {
                required  : true
            },
            pickupTime2 : {
                required  : true
            },
            pickupTime3 : {
                required  : true
            },
            pickupTime4 : {
                required  : true
            },
            pickupTime5 : {
                required  : true
            },
            pickupTime6 : {
                required  : true
            },
            pickupTime7 : {
                required  : true
            },
        },
        errorPlacement: function (error, element) {
            if (element.attr("name") == "gender") {
                error.insertAfter('#here');
            }
            else if (element.attr("name") == "config"){
                error.insertAfter('.small_txt')
            }
            else {
                error.insertAfter(element)
            }
        } 
    });
    $.validator.addMethod('latters_only', function (value) {
        return /^[a-zA-Z ]*$/.test(value);
    }, 'The field can only contains letters and space');
    $.validator.addMethod('email_val', function (value) {
        return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
    }, 'You need to have tntra domain address');
    $.validator.addMethod('phone_val', function (value) {
        return /^[7-9][0-9]{9}$/.test(value);
    }, 'Please Enter a valid phone number of 10 digits only');

    
});


// to enable all the days checkbox
$(document).on('click','.some input[type=checkbox]',function(event){
    
    if($(this).is(':checked')){
        $('.days input[type=checkbox]').attr('disabled',false);
    }
    else{
        $('.days input[type=checkbox]').prop('checked',false);
        $('.days input[type=checkbox]').attr('disabled',true);
        $('.time select').val('').change();
        $('.time select').attr('disabled',true);
        $(this).parent().parent().parent().siblings('.Week').children().children('.time').children('.error').closest('label').hide();
        
    }
    
});

// to enable pickup time on selecting that day
$(document).on('click','.days input[type=checkbox]',function(event){
    if($(this).is(':checked')){
        // console.log($(this).parent().parent().siblings().children());
        $(this).parent().parent().siblings('.time').children().attr('disabled',false)
    }
    else{
        // $(this).siblings('.time').closest('select').attr('disabled',true);
        $(this).parent().parent().siblings('.time').children().val('').change();
        $(this).parent().parent().siblings('.time').children().attr('disabled',true);
        $(this).parent().parent().siblings('.time').children('.error').closest('label').hide();

    }
});

$('#myForm').submit(function(event){
    event.preventDefault();
    localStorage.clear()
    // console.log($(this).children('.Week').children().children('.time').children().is(':disabled'));

    // first we need to confirm if any of the days checkboxes has been checked or not
    if($('.days input[type=checkbox]').is(':checked')){
        var flag = true;    // if it is checked then only we want to proceed
    }
    else{
        var flag = false;   // othrwise we do not want to procedd
    }
    for(let i=1;i<8;i++){
        if($('#pickupTime'+i).parent().parent().children('.days').children().children().is(':checked') && $('#pickupTime'+i).val() === ''){
            // if the days checkbox is checked and the value of pickupTime is null then  flag will be set at false
            flag = false;
        }
    }

    
    if($('#name').valid() &&
       $('#age').valid() &&
       $('#email').valid() &&
       $('#phone').valid() &&
       $("input[name='gender']:checked").val() !== undefined &&
       $("#config").valid() &&
       flag
       )
    {
        localStorage.setItem('name',$('#name').val());
        localStorage.setItem('age',$('#age').val());
        localStorage.setItem('email',$('#email').val());
        localStorage.setItem('phone',$('#phone').val());
        localStorage.setItem('gender',$("input[name='gender']:checked").val());
        if($('.days input[type=checkbox]').is(':checked')){
            var times = ['','','','','','','']
            for(let i=1;i<8;i++){
                if(!$('#pickupTime'+i).is(':disabled')){
                    times[i-1] = $('#pickupTime'+i).val();
    
                }
            }
            localStorage.setItem('times',JSON.stringify(times));
        }
        location.href = ('../HTML/table_page.html');
    }
});



