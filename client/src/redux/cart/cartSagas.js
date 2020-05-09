import { all, call, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/userTypes';
import { clearCart } from './cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}