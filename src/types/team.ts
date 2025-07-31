export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: any;
  department: string;
  linkedIn?: string;
  order?: number;
}

export interface TeamData {
  members: TeamMember[];
}
