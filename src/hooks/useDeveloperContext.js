import { useDeveloperState, useDeveloperDispatch } from '../context/developer';

const useDeveloperContext = () => ({
  state: useDeveloperState(),
  dispatch: useDeveloperDispatch()
});

export default useDeveloperContext;
