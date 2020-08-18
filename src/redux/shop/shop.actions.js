import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
   return dispatch => {
    const collectionRef = firestore.collection('collections');

    dispatch (fetchCollectionsStart())
    // firestore fetch
// fetch('https://firestore.googleapis.com/v1/projects/crwn-clothing-3e0ec/databases/(default)/documents/collections')
// .then(response => response.json())

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

     
   }
  };
  