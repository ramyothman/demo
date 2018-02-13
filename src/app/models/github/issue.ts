import { User } from './user';
import { Label } from './label';
import { MileStone } from './milestone';
export class Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee: User;
  assignees: User[];
  milestone: MileStone;
  comments: number;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  author_association: string;
  body: string;
}
