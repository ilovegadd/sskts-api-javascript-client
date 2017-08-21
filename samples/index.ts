import * as sasaki from '../lib/index';

let auth: sasaki.ImplicitGrantClient;

const options = {
    domain: '',
    clientId: '',
    responseType: 'token',
    redirectUri: '',
    logoutUri: '',
    scope: '',
    state: '',
    nonce: null,
    tokenIssuer: '',
};
auth = sasaki.createAuthInstance(options);
auth.signIn().then();

let events: sasaki.EventService;

events = sasaki.service.event({
    auth: auth,
    endpoint: ''
});
events.searchIndividualScreeningEvent(<any>{}).then();
