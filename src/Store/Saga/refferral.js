import { put, call } from "redux-saga/effects";
import RefferralActions from "../Redux/refferral";

export function* getRefferralData(api, action) {
  yield put(RefferralActions.refferralPending());
  const response = yield call(api.getRefferralData, action.parameters);

  if (response.ok) {
    // console.log("data found ", response.data);
    yield put(RefferralActions.refferralSuccess(response.data.data));
  } else {
    yield put(RefferralActions.refferralFailure());
  }
}