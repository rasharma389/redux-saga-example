import { call, put, takeLatest, fork, delay } from "redux-saga/effects";
import { COMPONENTS_FUNCTIONALITY, Status } from "../../interfaces/utilInterface";
import { fetchTeachers } from "../../services/comp2Service";
import { setStatus } from "../features/apiStatusSlice";
import { getTeachers, setTeachers } from "../features/comp2Slice";

type Response = {
    data: Array<string>;
    message: string;
    status: number;
  };


function* onFetchTeachersAsync() {
    yield put(setStatus({ component: COMPONENTS_FUNCTIONALITY.COMP2_TEACHERS, status: { status: Status.LOADING, error: '' } }))
    try {
      const response: Response = yield call(fetchTeachers);
        yield delay(3000);
        yield put(setStatus({ component: COMPONENTS_FUNCTIONALITY.COMP2_TEACHERS, status: { status: Status.FULLFILLED, error: '' } }))
        yield put(setTeachers(response));
    } catch (e) {
      if (e) {
        const error: any = e;
        console.log(error);
        yield put(setStatus({ component: COMPONENTS_FUNCTIONALITY.COMP2_TEACHERS, status: { status: Status.ERROR, error: error } }))
      }
    }
  }
  
  function* onFetchTeachers() {
    yield takeLatest(getTeachers.type, onFetchTeachersAsync);
  }

  export const comp2Sagas = [
    fork(onFetchTeachers),
  ];