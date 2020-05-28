import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { projectsReducer } from './projects';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer,
  projects: projectsReducer
});
