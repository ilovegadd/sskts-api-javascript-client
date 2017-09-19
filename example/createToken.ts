/**
 * cognitoユーザープールに対して、クライアント認証でアクセストークンを発行するサンプル
 *
 * @ignore
 */

import * as fs from 'fs-extra';
import * as request from 'request-promise-native';

const clientId = 'cq8em79ileeqlcp6q5kkd446n';
const clientSecret = '1an1h252ekcnoo7e3a6rrho5i87l510auoia900jr3ac12djb749';
const scopes = [
    'https://sskts-api-development.azurewebsites.net/transactions'
];

request.post({
    uri: `https://${clientId}:${clientSecret}@sskts-development.auth.ap-northeast-1.amazoncognito.com/token`,
    form: {
        scope: scopes.join(' '),
        state: '12345',
        grant_type: 'client_credentials'
    },
    json: true,
    simple: false,
    resolveWithFullResponse: true,
    useQuerystring: true
}).then((response) => {
    console.log(response.body);
    fs.writeFileSync(`${__dirname}/accessToken`, response.body.access_token);
});
