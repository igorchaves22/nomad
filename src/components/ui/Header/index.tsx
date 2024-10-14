import { MenuButton, Navbar } from "~components/layout";
import { CtaLink, Logo } from "~components/shared";
import { useHeader } from "~hooks";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export function Header() {
    const { renderMenuButton, renderContent, menuButtonIcon, handleClickToggleVisibility } = useHeader();

    return (
        <header className="header">
            <section className="header__container">
                <Logo />
                <MenuButton
                    isVisible={renderMenuButton}
                    icon={menuButtonIcon}
                    onClick={() => handleClickToggleVisibility()}
                />
                {renderElementIfTrue(
                    renderContent,
                    <>
                        <Navbar onClick={() => handleClickToggleVisibility()} />
                        <section className="header__box">
                            <CtaLink text="Login" />
                            <CtaLink text="Register" alternative />
                        </section>
                    </>
                )}
            </section>
        </header>
    );
}
