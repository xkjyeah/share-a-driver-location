import { initializeApp } from 'firebase/app';
import {getDatabase, ref, query, set, orderByChild, limitToFirst, startAfter, onValue} from 'firebase/database';
import { pathParams } from './pathParams';
import { getUser } from './user';

const firebaseConfig = {
  apiKey: "AIzaSyCVPkgR8wpTD-PtV14m6AbUHR8iWv0WqSc",
  authDomain: "simple-location-sharing.firebaseapp.com",
  projectId: "simple-location-sharing",
  storageBucket: "simple-location-sharing.appspot.com",
  messagingSenderId: "747204085237",
  appId: "1:747204085237:web:0f4adacb13c07818174cbc",
  databaseURL: "https://simple-location-sharing-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

export type LatLng = {
  lat: number,
  lng: number,
}

const database = getDatabase()

export function submitLocation(latlng: LatLng, timestamp: number) {
  const sharingKey = pathParams().sharingKey
  const userKey = getUser()

  set(ref(database, `sessions/${sharingKey}/${userKey}`), {
    coordinates: latlng,
    timestamp,
  })
}

export function watchLocations(sharingKey: string, timeout: number, callback: (s: any) => void) {
  onValue(
    query(
      ref(database, `sessions/${sharingKey}`),
      orderByChild('timestamp'),
      startAfter(Date.now() - timeout),
      limitToFirst(10)
    ),
    (v) => {
      callback(v.val());
    }
  );
}