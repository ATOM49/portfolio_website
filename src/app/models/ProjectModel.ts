/** TodoMVC model definitions **/

export interface ProjectModel {
  id: string;
  image: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  primaryFunction: string;
  associatedCompany: string;
}

export namespace ProjectModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
