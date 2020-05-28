import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { AsyncAction } from 'redux-promise-middleware';
import instance from 'app/api';
export namespace ProjectActions {
  export enum Type {
    FETCH_PROJECTS = 'FETCH_PROJECTS'
  }

  export const fetchProjects = (): AsyncAction => ({
    type: Type.FETCH_PROJECTS,
    payload: instance.get('/projects')
  });
}

export type ProjectActions = Omit<typeof ProjectActions, 'Type'>;

export const useProjectActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = ProjectActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ProjectActions;
};
