import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";
import Logo from "./Logo.tsx";
import config from "../../../../../public/store-config.json";
import SocialLink from "./SocialLink.tsx";
import SearchComponent from "../../../search/Components/SearchComponent/SearchComponent.tsx";
const NavBar = () => {
  const { logo, navLinks, socialLinks } = config;

  return (
    <>
      <header>
        <div className={styles["header-container"]}>
          <Logo logo={logo} />
          <SearchComponent />
          <ul className={styles["header-social"]}>
            {socialLinks.map((socialLink, index) => (
              <SocialLink
                key={index}
                name={socialLink.name}
                link={socialLink.link}
                icon={socialLink.icon}
              />
            ))}
          </ul>
        </div>
        <nav id="navbar" className={styles["nav"]}>
          {navLinks.map((navLink, index) => (
            <NavLinks 
              key={index} 
              title={navLink.name} 
              link={navLink.link} />
          ))}
        </nav>
      </header>
    </>
  );
};

export default NavBar;


//-Xmx4096m -Xms256m -Dminecraft.applet.TargetDirectory="C:\Users\USER\curseforge\minecraft\Instances\All of Fabric 7 - AOF7" -Dfml.ignorePatchDiscrepancies=true -Dfml.ignoreInvalidMinecraftCertificates=true -Duser.language=en -Duser.country=US -DlibraryDirectory="C:\Users\USER\curseforge\minecraft\Install\libraries"
//-Xmx2G -XX:+UnlockExperimentalVMOptions -XX:+UseG1GC -XX:G1NewSizePercent=20 -XX:G1ReservePercent=20 -XX:MaxGCPauseMillis=50 -XX:G1HeapRegionSize=32M