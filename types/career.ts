interface Career {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  projects: Project[];
}

interface Project {
  title: string;
  description: string;
}