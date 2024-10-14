import { Logo, TitleList } from "~components/shared";
import { footerItems } from "~utils";
import "./styles.scss";

export function Footer() {
    return (
        <footer className="footer">
            <section className="footer__container">
                <section className="footer__box footer__box--logo">
                    <Logo />
                    <p className="footer__text">
                        Nomad is your gateway to explore and experience the world. We offer a seamless way to discover
                        and book all your travel essentials.
                    </p>
                </section>
                <section className="footer__box footer__box--list">
                    <TitleList
                        title="About"
                        items={footerItems.about.map((data) => (
                            <li key={data} className="footer__item">
                                <a href="/" className="footer__link">
                                    {data}
                                </a>
                            </li>
                        ))}
                    />
                    <TitleList
                        title="Products"
                        items={footerItems.products.map((data) => (
                            <li key={data} className="footer__item">
                                <a href="/" className="footer__link">
                                    {data}
                                </a>
                            </li>
                        ))}
                    />
                    <TitleList
                        title="Other"
                        items={footerItems.other.map((data) => (
                            <li key={data} className="footer__item">
                                <a href="/" className="footer__link">
                                    {data}
                                </a>
                            </li>
                        ))}
                    />
                </section>
            </section>
        </footer>
    );
}
