import { PhosphorIcon } from "~components/shared";
import { useTestimonialCarousel } from "~hooks";
import "./styles.scss";

export function TestimonialCarousel() {
    const { testimonial, handleClickPrevSlide, handleClickNextSlide } = useTestimonialCarousel();

    return (
        <section className="testimonial-carousel">
            <button type="button" onClick={() => handleClickPrevSlide()} className="testimonial-carousel__button">
                <PhosphorIcon icon="CaretLeft" className="testimonial-carousel__icon" />
            </button>
            <button type="button" onClick={() => handleClickNextSlide()} className="testimonial-carousel__button">
                <PhosphorIcon icon="CaretRight" className="testimonial-carousel__icon" />
            </button>
            <section className="testimonial-carousel__box">
                <figure className="testimonial-carousel__card">
                    <img src={testimonial.image} alt={testimonial.name} className="testimonial-carousel__img" />
                    <figcaption className="testimonial-carousel__text testimonial-carousel__text--name">
                        {testimonial.name}
                    </figcaption>
                </figure>
                <p className="testimonial-carousel__text">{testimonial.testimonial}</p>
            </section>
        </section>
    );
}
