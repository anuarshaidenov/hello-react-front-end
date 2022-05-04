import Greeting from './Greeting';
import { useDispatch } from 'react-redux';
import { fetchMessage } from './redux/greeting';

const GreetingsContainer = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Greeting />
      <button onClick={() => dispatch(fetchMessage())}>change</button>
    </>
  );
};

export default GreetingsContainer;
