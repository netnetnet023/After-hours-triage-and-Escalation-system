exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say('Thanks')
  twiml.pause({
    length: 1
    });
  twiml.say('One quick question')
  twiml.pause({
    length: 1
    });
  twiml.say('If there is no heating or cooling right now, press 1. Otherwise, press 0.')
  const gather = twiml.gather({
    input: 'dtmf',
    timeout: 3,
    numDigits: 1,
    action: '/handle-triage',
    method: 'POST'
    });
  gather.say('press 1 if there`s no heating or cooling. Else, press 0.');
  callback(null, twiml);
}