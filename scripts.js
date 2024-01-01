// scripts.js
// scripts.js

function makeCall(phoneNumber) {
    window.location.href = "tel:" + phoneNumber;
}

function sendEmail(email) {
    window.location.href = 'mailto:' + email;
}
// scripts.js
const twilio = require('twilio');

const accountSid = 'ACa319516651a24531c1d6f7cf64da6df5';
const authToken = 'b7f78a3641640be0b425238616e0dd12';
const twilioPhoneNumber = '+16616224056';

const client = twilio(accountSid, authToken);

// Function to send an emergency message to all employees
function sendEmergencyMessage() {
    const phoneNumbers = [
        '0660149427',
        '0668168895'
    ];

    phoneNumbers.forEach(number => {
        client.messages.create({
            body: 'This is an emergency message. Please attend to the emergency.',
            from: twilioPhoneNumber,
            to: `+${number}`
        })
        .then(message => console.log(`Emergency message sent to ${number}: ${message.sid}`))
        .catch(error => console.error(`Error sending message to ${number}: ${error.message}`));
    });

    alert('Emergency message sent to all employees!');
}

// يجب تعويض 'YOUR_TWILIO_ACCOUNT_SID' و 'YOUR_TWILIO_AUTH_TOKEN' و 'YOUR_TWILIO_PHONE_NUMBER' بقيم Twilio الخاصة بك
