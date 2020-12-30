/** ProjectMVC model definitions **/
import { Skill, Company } from '.';

export interface Project {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  startDate: Date;
  endDate: Date;
  primaryRole: string;
  company: Company;
  skills: Skill[];
  pointOfInterest: number;
  backgroundColor: string;
}
