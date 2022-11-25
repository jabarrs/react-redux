import Counter from './Materi/Counter';
import { Provider } from 'react-redux';
import store from '../App/store';

const Redux = () => {
  return (
    <>
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    </>
  );
};

export default Redux;
