export interface EducationalDetail {
    id: string;
    degree: string;
    institution: string;
    year: string;
  }

  export interface ExperienceDetail {
    id: string;
    jobTitle: string;
    company: string;
    years: string;
    description: string;
  }

  export interface Language {
    language: string;
    rating: number;
  }

  export interface NavbarProps {
    onTemplateChange: (template: string) => void;
    selectedTemplate: string;
    resumeRef1: React.RefObject<HTMLDivElement>;
    resumeRef2: React.RefObject<HTMLDivElement>;
  }

  export interface PersonalDetailsForm {
    name: string;
    email: string;
    globalEmail: string;
    location: string;
    mobile: string;
    jobTitle: string;
    image?: string | null;
  }

  export interface ProfileForm {
    profile: string;
  }

  export interface Project {
    id: string;
    title: string;
    company: string;
    description: string;
  }

  export interface SkillCategoryForm {
    communicationSkills: string[];
    nonTechnicalSkills: string[];
  }

  export interface SkillsForm {
    skills: string;
  }

  export interface ExtraDetails {
    skills: string[];
    languages: Language[];
    profile: string;
  }

  export interface Resume2Props {
    personalDetails?: PersonalDetailsForm;
    educationalDetails?: EducationalDetail[];
    extraDetails?: ExtraDetails;
    experienceDetails?: ExperienceDetail[];
    projectsDetails?: Project[];
    skillCategory?: SkillCategoryForm;
  }

  export interface Resume1Props {
    personalDetails: PersonalDetailsForm;
    educationalDetails: EducationalDetail[];
    experienceDetails: ExperienceDetail[];
    projectsDetails: Project[];
    extraDetails: ExtraDetails;
  }

  export interface ResumeBuilderProps {
    selectedTemplate: string;
    resumeRef1: React.RefObject<HTMLDivElement>;
    resumeRef2: React.RefObject<HTMLDivElement>;
  }

  export interface ResumeState {
    personalDetails: PersonalDetailsForm;
    educationalDetails: EducationalDetail[];
    experienceDetails: ExperienceDetail[];
    projectsDetails: Project[];
    extraDetails: ExtraDetails;
    skillCategory: SkillCategoryForm;
  }