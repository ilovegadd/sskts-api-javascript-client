var sskts = require('../lib/index');

const API_ENDPOINT = 'https://sskts-api-development-preview.azurewebsites.net';

var auth = new sskts.auth.Implicit({});
var event = sskts.service.event({
    endpoint: API_ENDPOINT,
    auth: auth
});

event.searchIndividualScreeningEvent({
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});