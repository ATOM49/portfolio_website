import { ProjectModel } from 'app/models';

export interface RootState {
  projects?: RootState.ProjectState;
  router?: any;
}

export namespace RootState {
  export type ProjectState = { projects: ProjectModel[]; loading: boolean; activeProject?: ProjectModel };
}
