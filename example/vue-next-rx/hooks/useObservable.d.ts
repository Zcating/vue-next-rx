import { Observable } from 'rxjs';
export declare function useObservable<T>(inputFactory: () => Observable<T>, initValue: T): {
    data: import("vue").Ref<import("vue").UnwrapRef<T>>;
    loading: import("vue").Ref<boolean>;
    error: import("vue").Ref<any>;
};
