/** ProjectMVC model definitions **/
import { CompanyModel } from './CompanyModel';

export interface ProjectModel {
  projectId: string;
  projectCover: string;
  projectTitle: string;
  projectContent: string;
  projectStartDate: string;
  projectEndDate: string;
  primaryRole: string;
  company: CompanyModel
}
