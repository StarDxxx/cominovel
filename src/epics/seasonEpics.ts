import { Action, AnyAction } from "redux";
import { Epic, ofType } from "redux-observable";
import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";
import { fetchSeasons, fetchSeasonsFullFilled } from "../actions";

export const getCominovelSeasonsViaAjax:
  Epic<Action<any>, Action<any>, void> = (action$) => action$.pipe(
    ofType(fetchSeasons),
    mergeMap(
      (action: AnyAction) => from(
        ajax.getJSON(`http://loveofboys.io/wp-json/cominovel/v1/comic/${action.payload}`),
      ).pipe(
        map((response: any) => fetchSeasonsFullFilled(response)),
      ),
    ),
  );