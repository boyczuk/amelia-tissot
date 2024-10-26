import React from 'react';
import './Services.css';

interface Service {
    name: string;
    description: string;
    duration: string;
    price: string;
}

const services: Service[] = [
    {
        name: "One-on-One Personal Training",
        description: "Customized training sessions tailored to your personal goals and fitness level.",
        duration: "60 minutes",
        price: "$60 per session",
    },
    {
        name: "Group Fitness Training",
        description: "Join a small group for a motivating workout experience with others.",
        duration: "60 minutes",
        price: "$40 per person",
    },
    {
        name: "Strength and Conditioning",
        description: "Focused on building strength and endurance through weight training and conditioning.",
        duration: "75 minutes",
        price: "$70 per session",
    },
    {
        name: "Online Training Program",
        description: "Personalized workouts and check-ins available online to support your progress at home.",
        duration: "Flexible",
        price: "$150 per month",
    },
    {
        name: "Nutrition Counseling",
        description: "One-on-one sessions to develop a customized nutrition plan to support your fitness goals.",
        duration: "45 minutes",
        price: "$50 per session",
    },
];

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <h1>Our Services</h1>
            <div className="services-list">
                {services.map((service, index) => (
                    <div className="service-item" key={index}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p><strong>Duration:</strong> {service.duration}</p>
                        <p><strong>Price:</strong> {service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
