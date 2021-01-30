import { put, call } from "redux-saga/effects";
import BannerActions from "../Redux/banner";

export function* getBanners(api, action) {
  yield put(BannerActions.bannersPending());
  const response = yield call(api.getBanners, action.shoppingLocationId);

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
    // // do data conversion here if needed
    // console.log(response.data);
    for (let i = 0; i < response.data.length; i++) {
      response.data[i].image = response.data[i].url;
    }
    yield put(BannerActions.bannersSuccess(response.data));
  } else {
    yield put(BannerActions.bannersFailure());
    console.log("The error occured");
    // yield put(GithubActions.userFailure())
  }
}
