import { defineComponent } from 'vue';
import { UseObservableTest } from './UseObservableTest';
import { UseEventCallbackTest } from './UseEventCallbackTest';

export const App = defineComponent(() => {
  return () => (
    <div>
      <div>
        <UseObservableTest></UseObservableTest>
      </div>
      <div>
        <UseEventCallbackTest></UseEventCallbackTest>
      </div>
    </div>
  );
});
