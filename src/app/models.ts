
export interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
}

export interface Experience {
  organisation: string;
  role: string;
  start: string;
  end: string;
  type?: string;
  highlights: string[];
  stack?: string[];
}
