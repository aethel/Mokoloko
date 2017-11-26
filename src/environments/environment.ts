// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDkFUk8by5wUvrVoQxg6VxW9WdOs3zSczo',
    authDomain: 'nearme-huzzah.firebaseapp.com',
    databaseURL: 'https://nearme-huzzah.firebaseio.com',
    projectId: 'nearme-huzzah',
    storageBucket: 'nearme-huzzah.appspot.com',
    messagingSenderId: '749461070323'
  }
};
