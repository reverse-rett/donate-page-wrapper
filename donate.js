
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
                         'border-radius': '20px',
                         'min-height': '250px'});

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
//$('#CreditCardForm').hide()

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
    <div class="spacer row" style="height: 15px;"></div>
    <div class="donate-body" style="max-height: 500px; background-color: #fff;">
        <div class="form-wrapper row"></div>
    </div>
    <div class="donate-footer" style="height: 100px;">
        <div class="row" style="padding-top: 20px;">
            <button class="next-button" onclick="next_action();">Next</button>
        </div>
    </div>
`

var amounts_content = `
    <table class="amounts">
        <tbody>
            <tr>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£5</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£10</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£15</span>
                    </label>
                </td>
            </tr>
            <tr>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£25</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£50</span>
                    </label>
                </td>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£100</span>
                    </label>
                </td>
            </tr>
            <tr>
                <td style="width: 30%;">
                    <label class="amount-button" 
                           onmouseover="this.style.color='#322a7e'; this.style.backgroundColor='#00eeb6';" 
                           onmouseout="this.style.color='#00eeb6'; this.style.backgroundColor='#322a7e';">
                        <span class="radio">£150</span>
                    </label>
                </td>
                <td style="position: relative;">
                    <!--<input id="q_other" name="amount" value="other" type="radio" data-parsley-multiple="amount" 
                    data-parsley-required="true" data-parsley-errors-container="#amount-error" 
                    data-parsley-required-message="Please select an amount." data-parsley-group="section1">-->
                    <label for="q_other">£</label>
                    <input size="4"  intl_currency_symbol="GBP" id="amount_other" name="amount_other" type="tel" 
                    placeholder="Other amount" data-parsley-type="number" data-parsley-group="section1"
                    style="width: 230%; margin-bottom: 0px !important;">
                </td>
            </tr>
        </tbody>
    </table
`

var contact_1_content = `
    <table class="contact-1" style="display:none;">
        <tbody>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Title">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Forename">
                </td>
            </tr>
                <td>
                    <input class="row" size="4" placeholder="Surname">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Email address">
                </td>
            </tr>
        </tbody>
    </table>
`

var contact_2_content = `
    <table class="contact-2" style="display: none;">
        <tbody>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Address Line 1">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Address Line 2">
                </td>
            </tr>
                <td>
                    <input class="row" size="4" placeholder="Town">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="County">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Postcode">
                </td>
            </tr>
        </tbody>
    </table>
`


var payment_content = `
    <table class="payment" style="display: none;">
        <tbody>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Card number">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Card ype">
                </td>
            </tr>
                <td>
                    <input class="row" size="4" placeholder="Expiry M">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Expiry Y">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="row" size="4" placeholder="Security code">
                </td>
            </tr>
        </tbody>
    </table>
`


var last_slide_content = `
    <div><p>Gift Aid and end</p></div>
`


//=============================
// make the form work

// header
$('.__layout_page').prepend(widget_content);
$('.donate-body').append(amounts_content);
$('.donate-body').append(contact_1_content);
$('.donate-body').append(contact_2_content);

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

// buttons and other
$('.amounts, .contact-1').css({'width': '90%',
                               'margin': '0 auto'});
$('.radio').css('font-weight', 'bolder');
$('.amount-button').css({'background-color': '#322a7e',
                         'color': '#00eeb6',
                         'text-align': 'center',
                         'padding': '8px 2px 2px',
                         'padding-top': '8px',
                         'border-radius': '7px',
                         'width': '100%'});
$('td:first-child, td:last-child').css('padding', '12px 15px 12px 15px');
$('table.amounts label[for="q_other"]').css({'position': 'absolute',
                                             'top': '24px',
                                             'color': '#322a7e',
                                             'display': 'block'});
$('html body input[type="tel"]').css({'text-align': 'center',
                                      'color': '#322a7e'});


next_action = function(){
  if ($('.amounts').is(':visible')) {
    $('.amounts').hide();
    $('.contact-1').show();
  } else if ($('.contact-1').is(':visible')) {
    $('.contact-1').hide();
    $('.contact-2').show();
  } else if (($('.contact-2').is(':visible'))){
    $('.contact-2').hide();
    $('.payment').show();
  } else if (($('.payment').is(':visible'))){
    $('.payment').hide();
    $('.last-slide').show();
  } else {
    $('.last-slide').hide();
    $('.donate-footer').hide();
    $('.donate-header').html('<h2>Thank you for your donation!</h2>')
  }
}


// link everything back to the form and post

// <input type="text" name="Title" class="required" placeholder="Title" id="Title" maxlength="50">
// <input type="text" name="FirstName" class="required" placeholder="First Name*" id="FirstName" maxlength="50">
// <input type="text" name="LastName" class="required" placeholder="Last Name*" id="LastName" maxlength="50">

// <input type="text" name="Address1" class="" placeholder="Address Line 1" id="Address1" maxlength="50">
// <input type="text" name="Address2" class="" placeholder="Address Line 2" id="Address2" maxlength="50">
// <input type="text" name="Town" class="" placeholder="Town" id="Town" maxlength="50">
// <input type="text" name="County" class="" placeholder="County" id="County" maxlength="50">
// <input type="text" name="Postcode" class="" placeholder="Postcode" id="Postcode" maxlength="10">

// <input type="text" name="Phone" class="" placeholder="Phone" id="Phone" maxlength="50">
// <input type="text" name="Email" class="required" placeholder="Email*" id="Email" maxlength="50">

// <input type="text" name="Amount" class="required numberOnly" id="Amount" maxlength="10" title="Please enter the amount you want to give - don't include the pound sign">

// <input type="text" class="required card-number numberOnly" data-stripe="number" id="CardNumber" maxlength="20">
// // <select name="CardType" class="" id="CardType">
// //     <option value="VISA">Visa</option>
// //     <option value="MC">MasterCard</option>
// //     <option value="AMX">American Express</option>
// //     <option value="DSC">Diners Club</option>
// //     <option value="DCR">Discover</option>
// //     <option value="JCB">JCB</option>
// // </select>
// <input type="text" size="2" id="ExpiryMonth" name="ExpiryMonth" class="expiry-date numberOnly" data-stripe="exp-month" placeholder="MM" maxlength="2">
// <input type="text" size="2" id="ExpiryYear" name="ExpiryYear" class="expiry-date numberOnly" data-stripe="exp-year" placeholder="YY" maxlength="2">
// <input type="text" size="2" id="ExpiryYear" name="ExpiryYear" class="expiry-date numberOnly" data-stripe="exp-year" placeholder="YY" maxlength="2">


