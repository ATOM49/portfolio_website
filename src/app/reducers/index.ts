import { combineReducers } from 'redux';
import { RootState } from './state';
import { projectsReducer } from './projects';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  projects: projectsReducer
});
