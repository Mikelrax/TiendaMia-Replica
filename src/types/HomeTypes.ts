export interface NavLink {
    name: string;
    link: string;
}

export interface SocialLink {
    name: string;
    link: string;
    icon: string;
}

export interface NavProps {
    navLogo: string;
    navLinks: NavLink[];
    socialLinks: SocialLink[];
}