import { defineComponent} from 'vue';
import { map } from 'rxjs/operators';
import { useEventCallback } from '../vue-next-rx';

export const UseEventCallbackTest = defineComponent(() => {
  const {callback, state} = useEventCallback<MouseEvent>((event$) => event$.pipe(map((value) => {
    return {
      x: value.clientX,
      y: value.clientY,
    };
  })), {x: 0, y: 0});
  return () => (
    <div>
      <button onClick={callback}>click me</button>
      <div>subject count is {`${JSON.stringify(state.value)}`}</div>
    </div>
  );
});
