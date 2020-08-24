import { Observable } from 'rxjs';
declare type EventCallback<EventValue, State> = (source$: Observable<EventValue>, state$: Observable<State | null>) => Observable<State>;
export declare function useEventCallback<EventValue, State = any>(callback: EventCallback<EventValue, State>, initState?: State): {
    callback: (event?: EventValue | undefined) => void;
    state: import("vue").Ref<any>;
};
export {};
