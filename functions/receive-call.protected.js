exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say('Hi, this is Arnooold H V A C company.');
  twiml.say('We’re currently closed, but your call will be recorded and be sentt to the technician.')
  twiml.say('If the call cuts off or you hang up, we still receive what you say.');
  twiml.say('After the beep, please briefly describe the issue you’re having.');
  twiml.say('You can just speak normally.')
    twiml.pause({
    length: 1
    });
  twiml.say('After the beep, describe the problem.')
  twiml.pause({
    length: 1
    });
  twiml.record({
    timeout: 6,
    transcribe: true,
    maxLength: 60,
    action: '/ask-triage',
    method: 'POST'
    });
  callback(null, twiml);
}
