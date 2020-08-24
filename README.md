# Vue-Next-Rx
RxJS v6 intergration for Vue-next, base on [Vue-Rx](https://github.com/vuejs/vue-rx) & [Rxjs-hook](https://github.com/LeetCode-OpenSource/rxjs-hooks).

## Installation

```
yarn add rxjs vue-next-rx
```


## Usage

### useObservable

```typescript
import { defineComponent } from 'vue';
import { useObservable } from 'vue-next-rx';
import { Subject } from 'rxjs';

const App = defineComponent(() => {
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
```

### useEventCallback
```typescript
import { defineComponent } from 'vue';
import { useEventCallback } from 'vue-next-rx';
import { Subject } from 'rxjs';

export const App = defineComponent(() => {
  const {callback, state} = useEventCallback<MouseEvent>((event$) => event$.pipe(
    map((value) => {
      return {
        x: value.clientX,
        y: value.clientY,
      };
    })
  ), {x: 0, y: 0});

  return () => (
    <div>
      <button onClick={callback}>click me</button>
      <div>subject count is {`${JSON.stringify(state.value)}`}</div>
    </div>
  );
});
```