import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export interface ContactItem {
  label: string;
  link: string;
  iconType: 'email' | 'linkedin' | 'github' | 'location' | 'appropedia';
}

export const contactInfo: ContactItem[] = [
  {
    label: "Email",
    link: "mailto:tatipamula.aashrithraj@gmail.com",
    iconType: 'email'
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/aashrith-raj-tatipamula/",
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
  },
  {
    label: "Appropedia",
    link: "https://www.appropedia.org/User:Tabulator",
    iconType: 'appropedia'
  }
]; 