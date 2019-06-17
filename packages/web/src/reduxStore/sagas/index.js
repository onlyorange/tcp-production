import { all } from 'redux-saga/effects';
import ProductListingPageSaga from '@tcp/core/src/components/features/browse/ProductListingPage/container/ProductListingPage.saga';
import BootstrapSaga from './bootstrap';
import HomePageSaga from '../../components/features/content/HomePage/container/HomePage.saga';

export default function* rootSaga() {
  yield all([BootstrapSaga(), HomePageSaga(), ProductListingPageSaga()]);
}
