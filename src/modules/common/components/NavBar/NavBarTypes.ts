export interface SocialLinkProps {
    name: string;
    link: string;
    icon: string;
}

export interface NavLinksProps {
    title: string;
    link: string;
}

export type NavbarLogo = string;

export interface NavBarProps {
    Logo: NavbarLogo;
    NavbarLinks: NavLinksProps[];
    SocialLinks: SocialLinkProps[];
}

