/** ProjectMVC model definitions **/
import { CompanyModel } from './CompanyModel';

export interface ProjectModel {
  _id: string;
  image: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  primaryFunction: string;
  associatedCompany: CompanyModel;
}
