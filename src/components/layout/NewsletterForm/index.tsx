import { PhosphorIcon } from "~components/shared";
import { useNewsletterForm } from "~hooks";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export function NewsletterForm() {
    const { handleOnSubmit, register, errors } = useNewsletterForm();

    return (
        <form onSubmit={handleOnSubmit} className="newsletter-form">
            <label className="newsletter-form__label">
                <PhosphorIcon icon="EnvelopeSimple" className="newsletter-form__icon" />
            </label>
            <input type="email" placeholder="Your email" className="newsletter-form__input" {...register("email")} />
            <button type="submit" className="newsletter-form__button">
                Subscribe
            </button>
            {renderElementIfTrue(
                !!errors.email?.message,
                <p className="newsletter-form__error-message">{errors.email?.message}</p>
            )}
        </form>
    );
}
