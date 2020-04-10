
//=============================
// position and colour header
$('.__layout_header_inner').css('text-align', 'center');
$('body > div.__layout_header_inner > div > h1').html('');
$('h3').css('color', '#fff');
$('.__layout_header_inner').css('border-top', 'unset');
$('.__layout_header_inner').css('border-bottom', 'unset');

//=============================
// make the form 80% width, style and center
$('.__layout_page').css('width', '80%');
$('.__layout_page').css('max-width', '400px');
$('.__layout_page').css('margin', '0 auto');
$('.__layout_page').css('background-color', '#fff');
$('.__layout_page').css('color', '#fff');
$('.__layout_page').css('border-radius', '20px');
$('.__layout_page').css('min-height', '450px');

//=============================
// hide unneccessary menu items
$('#menu-mini-nav').hide()

//=============================
// hide the form by item

// hide name details
$('#CreditCardForm > h3:nth-child(1)').css('display', 'none');
$('#CreditCardForm > div:nth-child(2)').css('display', 'none');

// hide address header, lines 1 and 2, town/city/postcode
$('#CreditCardForm > h3:nth-child(3)').css('display', 'none');
$('#CreditCardForm > div:nth-child(4)').css('display','none');
$('#CreditCardForm > div:nth-child(5)').css('display','none');

// hide contact details
$('#CreditCardForm > h3:nth-child(6)').css('display', 'none');
$('#CreditCardForm > div:nth-child(7)').css('display', 'none');

// payment details
$('#CreditCardForm > h3:nth-child(8)').css('display', 'none');
$('#CreditCardForm > div:nth-child(9)').css('display', 'none');
$('#CreditCardForm > div:nth-child(10)').css('display', 'none');

// gift aid
$('#CreditCardForm > h3:nth-child(11)').css('display', 'none');
$('#CreditCardForm > div:nth-child(12)').css('display', 'none');
$('#CreditCardForm > div:nth-child(14)').css('display', 'none');
$('#CreditCardForm > h3:nth-child(15)').css('display', 'none');
$('#CreditCardForm > div:nth-child(16)').css('display', 'none');
$('#CreditCardForm > div:nth-child(17)').css('display', 'none');

// submit
$('#CreditCardForm > table > tbody > tr > td').css('display', 'none');

// hide form entirely
//$('#CreditCardForm').hide()

//=============================
// page background
$('body').css('background', 'url("https://www.reverserett.org.uk/core/media/Copy-of-inter.jpg")');
$('body').css('top', '0');
$('body').css('left', '0');
$('body').css('bottom', '0');
$('body').css('right', '0');
$('body').css('background-repeat', 'no-repeat');
$('body').css('background-position', 'center');
$('body').css('-ms-background-size', 'cover');
$('body').css('-o-background-size', 'cover');
$('body').css('-moz-background-size', 'cover');
$('body').css('-webkit-background-size', 'cover');
$('body').css('background-size', 'cover');
$('body').css('z-index', '-1');

//=============================
// make the bits of the form

var widget_content = `

<div class="donate-header">
    <h2>Chip in to power our community!</h2>
</div>
<div class="donate-body" style="height: 200px; background-color: #fff;">
    <table class="amounts">
        <tbody>
            <tr>
                <td>
                    <label> class
                </td>
            </tr>
        </tbody>
    </table>
</table>
</div>

`

// header
$('.__layout_page').prepend(widget_content);

// styling
$('.donate-header').css('width', '100%');
$('.donate-header').css('text-align', 'center');
$('.donate-header').css('padding', '20px');
$('.__wrap_standard').hide();



// donation amount and recurrence


// contact details


// address


// card details






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


