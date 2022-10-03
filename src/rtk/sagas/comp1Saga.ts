import { call, put, takeLatest, fork, delay } from "redux-saga/effects";
import { COMPONENTS_FUNCTIONALITY, Status } from "../../interfaces/utilInterface";
import { fetchStudents } from "../../services/comp1Services";
import { setStatus } from "../features/apiStatusSlice";
import { getStudents, setStudents } from "../features/comp1Slice";

type Response = {
    data: Array<string>;
    message: string;
    status: number;
};


function* onFetchStudentsAsync() {
    yield put(setStatus({ component: COMPONENTS_FUNCTIONALITY.COMP1_STUDENTS, status: { status: Status.LOADING, error: '' } }))
    
    try {
      const response: Response = yield call(fetchStudents);
        yield delay(5000);
        yield put(setStatus({ component: COMPONENTS_FUNCTIONALITY.COMP1_STUDENTS, status: { status: Status.FULLFILLED, error: '' } }))
        yield put(setStudents(response));
        
    } catch (e) {
      if (e) {
        const error: any = e;
        console.log(error);
        yield put(setStatus({ component: COMPONENTS_FUNCTIONALITY.COMP1_STUDENTS, status: { status: Status.ERROR, error: error } }))
      }
    }
  }
  
  function* onFetchStudents() {
    yield takeLatest(getStudents.type, onFetchStudentsAsync);
  }

  export const comp1Sagas = [
    fork(onFetchStudents),
  ];