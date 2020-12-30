import { Project } from 'app/models';

export interface RootState {
  projects?: RootState.ProjectState;
  router?: any;
}

export namespace RootState {
  export type ProjectState = { projects: Project[]; loading: boolean; activeProject?: Project };
}
