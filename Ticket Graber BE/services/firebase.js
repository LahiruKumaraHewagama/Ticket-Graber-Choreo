import admin from 'firebase-admin';
import serviceAccount from '../config/serviceAccountKey.json'assert {type: 'json'};

const init = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

const firebase = {
  init: init,
  admin: admin
};

export default firebase;