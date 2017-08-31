require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('//offline-news-api.herokuapp.com/stories')
    .then(async function (response) {
        console.log('status:', response.status);
        // console.log('text:', await response.text());
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }

        return response.json();
    })
    .then(function (stories) {
        console.log(stories);
    });
