
//=============================
// position and colour header
$('body > div.__layout_header_inner > div > h1').html('');
$('h3').css('color', '#fff');
$('.__layout_header_inner').css({'border-top': 'unset',
                                 'border-bottom': 'unset',
                                 'text-align': 'center'});

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
    <div class="donate-body" style="max-height: 500px; background-color: #fff;">
        <table class="amounts" style="display: none;">
            <tbody>
                <tr>
                    <td>
                        <label></label>
                    </td>
                </tr>
            </tbody>
        </table>
    </table>
    <div class="form-wrapper row"></div>
    </div>
    <div class="donate-footer" style="height: 100px;">
        <div class="row" style="padding-top: 20px;">
            <button class="next-button" onClick="next_action();">Next</button>
        </div>
    </div>

`

// header
$('.__layout_page').prepend(widget_content);

// styling header
$('.donate-header').css({'width': '100%',
                         'text-align': 'center',
                         'padding': '20px'});

// styling body
$('.form-wrapper').css({'width': '100%'})
$('.form-wrapper').append($('#CreditCardForm'));
$('#CreditCardForm').css({'width': '75%',
                          'margin': '0 auto'})

// styling footer
$('.next-button').css({'margin': '0 auto',
                       'border-radius': '10px'});
$('.donate-footer').css('border-radius', '20px')
$('.__wrap_standard').hide();
$('td').css('border', 'none');


//=============================
// first slide
// $(`#CreditCardForm > h3:nth-child(1), 
//    #CreditCardForm > div:nth-child(2)`).show();


// contact details


// address


// card details


next_action = function(e){
    console.log(e)
}



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


