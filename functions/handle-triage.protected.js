exports.handler = async function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  const client = context.getTwilioClient();

  const callerNumber = event.From;
  const digit = event.Digits; // "1" or "0"
  const isEmergency = digit === '1';

  // Issue text from transcription (may be undefined initially)
  const issue = event.TranscriptionText || 'Issue description not yet available';

  const summary = `
    After-hours call received
    Caller: ${callerNumber}
    Issue: ${issue}
    Emergency: ${isEmergency ? 'YES' : 'NO'}
    `;

  try {
    // Always send SMS summary
    await client.messages.create({
      body: summary,
      from: context.TWILIO_NUMBER,
      to: context.OWNER_PHONE
    });

    // If emergency, ALSO call owner
    if (isEmergency) {
      await client.calls.create({
        to: context.OWNER_PHONE,
        from: context.TWILIO_NUMBER,
        twiml: `<Response>
                  <Say>Emergency after-hours call received. Please check the SMS for details.</Say>
                </Response>`
      });
    }

    console.log('Owner notified');
  } catch (err) {
    console.error('Notification failed:', err);
  }

  // Respond to the caller
  if (isEmergency) {
    twiml.say('Thanks. This has been marked as urgent and someone will contact you shortly.');
  } else {
    twiml.say('Thanks. Your request has been received and will be handled during business hours.');
  }

  twiml.hangup();
  callback(null, twiml);
};
