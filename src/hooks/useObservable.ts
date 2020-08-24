import { Observable } from 'rxjs';
import { ref, watchEffect } from 'vue';


export function useObservable<T>(inputFactory: () => Observable<T>, initValue: T) {
  const data = ref(initValue);
  const loading = ref(false);
  const error = ref();
  const subscription = inputFactory().subscribe((value) => {
    data.value = value as any;
  },
  (e) => {
    loading.value = false;
    error.value = e;
  },
  () => {
    loading.value = false;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      subscription.unsubscribe();
    });
  });

  return {data, loading, error};
}
