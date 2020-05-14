import firebaseAdmin from 'firebase-admin';

export abstract class BaseDB  {
  protected db = firebaseAdmin.firestore();
  
}