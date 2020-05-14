import * as functions from 'firebase-functions';
import firebaseAdmin from 'firebase-admin';
import firebase from 'firebase';
import { AddressInfo } from 'net';
import app from './presentation/index';

exports.app = functions.https.onRequest(app);

const firebaseConfig = {
  apiKey: functions.config().someservice.apikey,
  authDomain: functions.config().someservice.authdomain,
  databaseURL: functions.config().someservice.databaseurl,
  projectId: functions.config().someservice.projectid,
  storageBucket: functions.config().someservice.storagebucket,
  messagingSenderId: functions.config().someservice.messagingsenderid,
  appId: functions.config().someservice.appid
};

firebaseAdmin.initializeApp(functions.config().firebase);
firebase.initializeApp(firebaseConfig);

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server is running in http://localhost:${address.port}`);
  } else {
    console.error('Failure upon starting server.');
  }
});
