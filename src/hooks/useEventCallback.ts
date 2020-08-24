import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { watchEffect, shallowRef } from 'vue';

type EventCallback<EventValue, State> = (
  source$: Observable<EventValue>,
  state$: Observable<State | null>,
) => Observable<State>;


export function useEventCallback<EventValue, State = any>(
  callback: EventCallback<EventValue, State>,
  initState?: State,
) {
  const state = shallowRef();
  const event$ = new Subject<EventValue>();
  const state$ = new BehaviorSubject<State | null>(initState ?? null);

  const resultCallback = (event?: EventValue) => {
    event$.next(event);
  };


  watchEffect((onInvalidate) => {
    if (initState) {
      state.value = initState;
    }
    const subscription = callback(event$, state$).subscribe({
      next: (value) => {
        state.value = value;
      },
      // error: () => {

      // },
      // complete: () => {

      // }
    });

    onInvalidate(() => {
      subscription.unsubscribe();
    });
  });

  return {
    callback: resultCallback,
    state,
  };
}
