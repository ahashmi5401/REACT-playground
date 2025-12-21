import Card from '../../components/Card/card.jsx';
import style from './services.module.css'


// servicesData.js

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "We build responsive and modern websites tailored to your needs.",
    buttonText: "Learn More"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Creating beautiful and user-friendly interfaces for your projects.",
    buttonText: "View Portfolio"
  },
  {
    id: 3,
    title: "SEO Optimization",
    description: "Improve your website's visibility and ranking on search engines.",
    buttonText: "Get Started"
  }
];

const Services = () => {
  return (
    <div>
        <section id="services" className={style.services}>
            <h1>Our Services</h1>
            <div className={style.cardContainer}>
                {services.map(service => (
                    <Card
                        key={service.id}
                        obj = {service}
                    />
                ))}
            </div>
        </section>
    </div>
    )
}

export default Services
