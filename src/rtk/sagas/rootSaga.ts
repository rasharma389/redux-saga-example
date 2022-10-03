import { all } from "redux-saga/effects";
import { comp1Sagas } from "./comp1Saga";
import { comp2Sagas } from "./comp2Saga";

export default function* rootSaga() {
    yield all([
        ...comp1Sagas,
        ...comp2Sagas
    ])
}