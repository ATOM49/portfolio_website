import { RootState } from './state';
import { Reducer } from 'redux';
import { FluxStandardAction } from 'redux-promise-middleware';
import { ProjectActions } from 'app/actions/projects';

const initialState: RootState.ProjectState = { projects: [], loading: true };

export const projectsReducer: Reducer<RootState.ProjectState | undefined, FluxStandardAction> = (
  state: RootState.ProjectState = initialState,
  action: FluxStandardAction
) => {
  switch (action.type) {
    case ProjectActions.Type.FETCH_PROJECTS + '_FULFILLED':
      return {
        ...state,
        loading: false,
        projects: action.payload.data
      };
    case ProjectActions.Type.FETCH_PROJECTS + '_REJECTED':
      return {
        ...state
      };
    case ProjectActions.Type.FETCH_PROJECT_DETAILS + '_FULFILLED':
      return {
        ...state,
        loading: false,
        activeProject: action.payload.data
      };
    case ProjectActions.Type.FETCH_PROJECT_DETAILS + '_REJECTED':
      return {
        ...state
      };
    default:
      return state;
  }
};
