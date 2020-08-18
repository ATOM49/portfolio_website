import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { AsyncAction } from 'redux-promise-middleware';
import instance from 'app/api';
export namespace ProjectActions {
  export enum Type {
    FETCH_PROJECTS = 'FETCH_PROJECTS',
    FETCH_PROJECT_DETAILS = 'FETCH_PROJECT_DETAILS'
  }

  export const fetchProjects = (): AsyncAction => ({
    type: Type.FETCH_PROJECTS,
    payload: instance.get('/projects')
  });

  export const fetchProjectDetails = (id: String): AsyncAction => ({
    type: Type.FETCH_PROJECT_DETAILS,
    payload: instance.get(`/projects/${id}`)
  });
}

export type ProjectActions = Omit<typeof ProjectActions, 'Type'>;

export const useProjectActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = ProjectActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as ProjectActions;
};
