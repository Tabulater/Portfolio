import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export interface ContactItem {
  label: string;
  link: string;
  iconType: 'email' | 'linkedin' | 'github' | 'location';
}

export const contactInfo: ContactItem[] = [
  {
    label: "Email",
    link: "mailto:aashrithraj.tatipamula@gmail.com",
    iconType: 'email'
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aashrith-raj-tatipamula-2b2b2b2b2/",
    iconType: 'linkedin'
  },
  {
    label: "GitHub",
    link: "https://github.com/Tabulater",
    iconType: 'github'
  },
  {
    label: "Location",
    link: "#",
    iconType: 'location'
  }
]; 