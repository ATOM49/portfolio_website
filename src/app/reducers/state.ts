import { TodoModel, ProjectModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  projects?: RootState.ProjectState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type ProjectState = { projects: ProjectModel[]; loading: boolean };
}
