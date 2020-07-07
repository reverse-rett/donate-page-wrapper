
//=============================
// add wrapper css
$('head').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lluismather/rr-donate-form@master/wrapper.css" type="text/css" />');

//=============================
// position and colour header
$('body > div.__layout_header_inner > div > h1').html('');
$('h3').css('color', '#fff');
$('.__layout_header_inner').css({'border-top': 'unset',
                                 'border-bottom': 'unset',
                                 'text-align': 'center'});

// hide the footer
$('footer').hide()

//=============================
// make the form 80% width, style and center
$('.__layout_page').css({'width': '80%',
                         'max-width': '400px',
                         'margin': '0 auto',
                         'background-color': '#fff',
                         'color': '#fff',
                         'border-radius': '20px'});

//=============================
// hide unneccessary menu items
$('#menu-mini-nav').hide()

//=============================
// hide the form by item

// hide name details
$(`#CreditCardForm > h3:nth-child(1), 
   #CreditCardForm > div:nth-child(2)`).hide();

// hide address header, lines 1 and 2, town/city/postcode
$(`#CreditCardForm > h3:nth-child(3),
   #CreditCardForm > div:nth-child(4),
   #CreditCardForm > div:nth-child(5)`).hide();

// hide contact details
$(`#CreditCardForm > h3:nth-child(6),
   #CreditCardForm > div:nth-child(7)`).hide();

// payment details
$(`#CreditCardForm > h3:nth-child(8),
   #CreditCardForm > div:nth-child(9),
   #CreditCardForm > div:nth-child(10)`).hide();

// gift aid
$(`#CreditCardForm > h3:nth-child(11),
   #CreditCardForm > div:nth-child(12),
   #CreditCardForm > div:nth-child(14),
   #CreditCardForm > h3:nth-child(15),
   #CreditCardForm > div:nth-child(16),
   #CreditCardForm > div:nth-child(17)`).hide()

// submit
$('#CreditCardForm > table > tbody > tr > td').hide();

// hide form entirely
$('#CreditCardForm').hide()

//=============================
// page background
$('body').css({'background': 'url("https://www.reverserett.org.uk/core/media/Copy-of-inter.jpg")',
               'top': '0',
               'left': '0',
               'bottom': '0',
               'right': '0',
               'background-repeat': 'no-repeat',
               'background-position': 'center',
               '-ms-background-size': 'cover',
               '-o-background-size': 'cover',
               '-moz-background-size': 'cover',
               '-webkit-background-size': 'cover',
               'background-size': 'cover',
               'z-index': '-1'});

//=============================
// make the bits of the form
var widget_content = `
    <div class="donate-header">
        <h2>Chip in to power our community!</h2>
    </div>
    <div class="donate-body _wrap_form" style="max-height: 500px; background-color: #fff;">
        <div class="form-wrapper row"></div>
    </div>
    <div class="donate-footer" style="height: 100px;">
        <div><p class="errors" style="color: red; text-align: center; margin-bottom: 0px; display: none;">Here is the error message</p></div>
        <div class="row" style="padding-top: 20px;">
            <div class="row">
                <a class="restart-button" onclick="restart_donation(this);" style="display: none; text-align: center;">Go back to change details</a>
            </div>
            <div class="row">
                <button class="next-button" onclick="next_action(this);">Next</button>
            </div>
        </div>
    </div>
`

var amounts_content = `
    <table class="amounts">
        <tbody>
            <tr>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£5</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£10</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£15</span>
                    </label>
                </td>
            </tr>
            <tr>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£25</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£50</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£100</span>
                    </label>
                </td>
            </tr>
            <tr>
                <td style="width: 30%;">
                    <label class="amount-button" onclick="amount_button_click(this)">
                        <span class="radio">£150</span>
                    </label>
                </td>
                <td style="position: relative;">
                    <!--<input id="q_other" name="amount" value="other" type="radio" data-parsley-multiple="amount" 
                    data-parsley-required="true" data-parsley-errors-container="#amount-error" 
                    data-parsley-required-message="Please select an amount." data-parsley-group="section1">-->
                    <label for="q_other">£</label>
                    <input size="4"  intl_currency_symbol="GBP" class="ph" id="amount_other" name="amount_other" type="tel" 
                    placeholder="Other amount" data-parsley-type="number" data-parsley-group="section1"
                    style="width: 230%; margin-bottom: 0px !important;"
                    onclick="selecting_the_other_amount(this);">
                </td>
            </tr>
        </tbody>
    </table
`

var contact_1_content = `
    <div class="contact-1" style="display:none;">
        <h3 style="margin-bottom: 30px; width: 100%; text-align: center;">Your Contact Details</h3>
        <div class="row">
            <div class="column">
                <input type="text" name="Title1" class="required ph" placeholder="Title" id="Title1" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="FirstName1" class="required ph" placeholder="First Name*" id="FirstName1" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="LastName1" class="required ph" placeholder="Last Name*" id="LastName1" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="EmailAddress1" class="required ph" placeholder="Email Address*" id="EmailAddress1" maxlength="50">
            </div>
        </div>
    </div>
`

var contact_2_content = `
    <div class="contact-2" style="display: none;">
        <h3 style="margin-bottom: 30px; width: 100%; text-align: center;">Your Address</h3>
        <div class="row">
            <div class="column">
                <input type="text" name="Address11" class="ph" placeholder="Address Line 1" id="Address11" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="Address21" class="ph" placeholder="Address Line 2" id="Address21" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="Town1" class="ph" placeholder="Town" id="Town1" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="County1" class="ph" placeholder="County" id="County1" maxlength="50">
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input type="text" name="Postcode1" class="ph" placeholder="Postcode" id="Postcode1" maxlength="10">
            </div>
        </div>
    </div>
`

var payment_content = `
    <div class="payment" style="display: none;">
        <div class="row">
            <div class="column">
                <input type="text" class="required card-number numberOnly ph" data-stripe="number" id="CardNumber1" maxlength="20" placeholder="Card Number">
            </div>
        </div>
        <div class="row">
            <div class="column">
                 <select name="CardType1" class="" id="CardType1" style="color: #322a7e;">
                     <option value="VISA">Visa</option>
                     <option value="MC">MasterCard</option>
                     <option value="AMX">American Express</option>
                     <option value="DSC">Diners Club</option>
                     <option value="DCR">Discover</option>
                     <option value="JCB">JCB</option>
                  </select>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="row">
                    <div class="column">
                        <input type="text" size="2" id="ExpiryMonth1" name="ExpiryMonth1" class="expiry-date numberOnly ph" data-stripe="exp-month" placeholder="MM" maxlength="2" style="width: 20%; margin-right: 5%;">
                        <input type="text" size="2" id="ExpiryYear1" name="ExpiryYear1" class="expiry-date numberOnly ph" data-stripe="exp-year" placeholder="YY" maxlength="2" style="width: 20%; margin-right: 5%;">
                        <input type="text" class="required check-cvc numberOnly ph" name="CVC1" size="4" data-stripe="cvc" id="CVC1" placeholder="CVC" maxlength="4" style="width: 30%;" title="Please enter the security code for the card - usually the last 3 digits on the signature strip">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <input id="GiftAid1" type="checkbox" style="width: 5%;">
                <p style="width: 90%; color: #322a7e; display: inline-flex;">I would like Reverse Rett to claim Gift Aid on my donation.</p>
            </div>
        </div>
    </div>
`

var last_slide_content = `
    <div class="last-slide row" style="display:none; color: #322a7e;">
        <div class="row" style="width: 100%;">
            <p style="margin-bottom: 0px; font-weight: bold;">Name: </p><span class="cf_name" style="text-align: center; font-size: 1.2rem;"></span>
        </div>
        <div class="row" style="padding-top: 20px; width: 100%;">
            <p style="margin-bottom: 0px; font-weight: bold;">Address: </p><span class="cf_addr" style="text-align: center; font-size: 1.2rem;"></span>
        </div>
        <div class="row" style="padding-top: 20px; width: 100%;">
            <p style="margin-bottom: 0px; font-weight: bold;">Payment Details: </p><span class="cf_pay" style="text-align: center; font-size: 1.2rem;"></span>
        </div>
    </div>
`

var post_donation = `
    <h2>There was a problem with your donation</h2>
    <div id="final-errors"></div>
    <div class="row">
        <a class="restart-button-1" onclick="restart_donation(this);" style="text-align: center;">Go back to change details</a>
    </div>
`

//=============================
// make the form work

// header
$('.__layout_page').prepend(widget_content);
$('.donate-body').append(amounts_content);
$('.donate-body').append(contact_1_content);
$('.donate-body').append(contact_2_content);
$('.donate-body').append(payment_content);
$('.donate-body').append(last_slide_content);

// styling header
$('.donate-header').css({'width': '100%',
                         'text-align': 'center',
                         'padding': '20px'});

// styling footer
$('.next-button').css({'margin': '0 auto',
                       'border-radius': '10px'});
$('.donate-footer').css('border-radius', '20px')
$('.__wrap_standard').hide();
$('td').css('border', 'none');

// styling body
$('.form-wrapper').css({'width': '100%',
                        'height': '0px'});
$('.form-wrapper').append($('#CreditCardForm'));
$('#CreditCardForm').css({'width': '75%',
                          'margin': '0 auto'});
$('body input[type="text"]').css('color', '#322a7e');

// buttons and other
$('.amounts, .contact-1, .contact-2, .payment, .last-slide').css({'width': '90%',
                                                                  'margin': '0 auto'});
$('.radio').css('font-weight', 'bolder');
$('.amount-button').css({'background-color': '#322a7e',
                         'color': '#00eeb6',
                         'text-align': 'center',
                         'padding': '8px 2px 2px',
                         'padding-top': '8px',
                         'border-radius': '7px',
                         'width': '100%',
                         'cursor': 'pointer'});
$('td:first-child, td:last-child').css('padding', '12px 15px 12px 15px');
$('table.amounts label[for="q_other"]').css({'position': 'absolute',
                                             'top': '24px',
                                             'color': '#322a7e',
                                             'display': 'block'});
$('html body input[type="tel"]').css({'text-align': 'center',
                                      'color': '#322a7e'});
$('body').css('height', '100vh')

// amount button click
function amount_button_click(param) {
  $('.amount-button').css({'color': '#00eeb6', 'background-color': '#322a7e'}); 
  $(param).css({'color': '#322a7e', 'background-color': '#00eeb6'});
  $('#Amount').val($(param).text().replace(/[^0-9]/g, ''));
}

function selecting_the_other_amount(param) {
  $('.amount-button').css({'color': '#00eeb6', 'background-color': '#322a7e'}); 
}

//slide 1 validation
function slide_1_valid() {
  if ($('#amount_other').val() !== "" ) {
    $('#Amount').val($('#amount_other').val());
    return true
  } else {
    return($('#Amount').val() !== "" ? true : false);
  }
};

//slide 2 validation
function slide_2_valid() {
  if ($('#Title1').val() !== '' & $('#FirstName1').val() !== '' &
      $('#LastName1').val() !== '' & $('#EmailAddress1').val() !== '') {
    $('#Title').val($('#Title1').val());
    $('#FirstName').val($('#FirstName1').val());
    $('#LastName').val($('#LastName1').val());
    $('#Email').val($('#EmailAddress1').val());
    return true;
  } else {
    return false;
  }
};

//slide 3 validation
function slide_3_valid() {
  if ($('#Address11').val() !== '' & $('#Town1').val() !== '' &
      $('#County1').val() !== '' & $('#Postcode1').val() !== '') {
    $('#Address1').val($('#Address11').val());
    $('#Address2').val($('#Address21').val());
    $('#Town').val($('#Town1').val());
    $('#County').val($('#County1').val());
    $('#Postcode').val($('#Postcode1').val());
    return true;
  } else {
    return false;
  }
}

//slide 4 validation
function slide_4_valid() {
    if ($('#CardNumber1').val() !== '' & $('#ExpiryMonth1').val() !== '' &
      $('#ExpiryYear1').val() !== '' & $('#CVC1').val() !== '') {
    $('#CardNumber').val($('#CardNumber1').val());
    $('#ExpiryMonth').val($('#ExpiryMonth1').val());
    $('#ExpiryYear1').val($('#ExpiryYear1').val());
    $('#CVC').val($('#CVC1').val());
    $('#CardType').val($('#CardType1').val());
    $('#GiftAid').val($('#GiftAid1').val());
    return true;
  } else {
    return false;
  }
}

restart_donation = function() {
  $('.contact-1, .contact-2, .payment, .last-slide').hide();
  $('.amounts').show();
  $(".restart-button-1").hide();
}

next_action = function(){
  //slide 1
  if ($('.amounts').is(':visible')) {
    if (slide_1_valid()) {
      $('.amounts').hide();
      $('.contact-1').show();
      $('.errors').hide();
    } else {
      //validation fail
      $('#amount_other').css('border', '0.1rem solid red')
      $('.errors').html('Please select an amount').show();
    }
  // slide 2
  } else if ($('.contact-1').is(':visible')) {
    if (slide_2_valid()) {
      $('.contact-1').hide();
      $('.errors').hide();
      $('.contact-2').show();
    } else {
      //validation fail
      $('#Title1, #FirstName1, #LastName1, #EmailAddress1').css('border', '0.1rem solid red')
      $('.errors').html('Please fill in all required fields').show();
    }
  // slide 3
  } else if (($('.contact-2').is(':visible'))){
    if (slide_3_valid()) {
      $('.contact-2').hide();
      $('.errors').hide();
      $('.payment').show();
    } else {
      $('#Address11, #Town1, #County1, #Postcode1').css('border', '0.1rem solid red')
      $('.errors').html('Please fill in all required fields').show();
    }
  } else if (($('.payment').is(':visible'))){
    if (slide_4_valid()) {
      $('.payment').hide();
      $('.errors').hide();
      $('.last-slide').show();
      $('.donate-header').html('<h2>Confirm your details:</h2>')
      $('.next-button').html('Confirm');
      $('.restart-button').show();
      $('.cf_name').html($('#Title').val() + 
        ' ' + $('#FirstName').val() + 
        ' ' + $('#LastName').val() +
        '<br>' + $('#Email').val());
      $('.cf_addr').html($('#Address1').val() + '<br>' +
         $('#Address2').val() + '<br>' +
         $('#Town').val() + '<br>' +
         $('#County').val() + '<br>' +
         $('#Postcode').val());
      $('.cf_pay').html($('#CardNumber').val().replace(/\d(?=\d{4})/g, "*") + '<br>' +
        $('#ExpiryMonth').val() + '<br>' +
        $('#ExpiryYear1').val() + '<br>' +
        $('#CardType').val() + '<br>' +
        'Gift-Aid: ' + $('#GiftAid').val());
    } else {
      $('#CardNumber1, #CVC1, #ExpiryMonth1, #ExpiryYear1').css('border', '0.1rem solid red')
      $('.errors').html('Please fill in all required fields').show();
    }
  } else if (($('.last-slide').is(':visible'))){
    $('.last-slide').hide();
    $('.donate-footer').hide()
    $('.errors').hide();
    $('.donate-header').html(`<h2>Processing your donation...</h2>
                              <img src="https://www.reverserett.org.uk/core/media/rr_spinner.gif"
                                   style="margin: 0 auto; max-height: 30px; padding-top: 10px;">`);
    $('#ErrorContainer').appendTo('.final-errors');
    $('.donate-header').html(post_donation);
    $('#submitButton').click();
    setTimeout(function() {
        $('.donate-header').html(post_donation);
        $('#ErrorContainer').appendTo('#final-errors');
        $('.donate-footer').show();
        // styling last-button
        $('.last-button').css({'color': '#fff',
                               'padding-left': '0px',
                               'padding-right': '0px',
                               'background-image': 'unset',
                               'border-radius': '8px',
                               'width': '100%'});
    }, 3000);
  }
}

