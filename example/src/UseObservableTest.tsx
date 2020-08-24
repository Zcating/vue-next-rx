import { defineComponent } from 'vue';
import { BehaviorSubject } from 'rxjs';
import { useObservable } from '../vue-next-rx';

export const UseObservableTest = defineComponent(() => {
  const subject = new BehaviorSubject<number>(0);
  const { data } = useObservable(() => subject, 0);

  const clicked = (event: MouseEvent) => {
    subject.next(subject.value + 1);
  };

  return () => (
    <div>
      <button onClick={clicked}>click me</button>
      <div>subject count is {`${data.value}`}</div>
    </div>
  );
});
