import React, { useEffect } from "react";
import "./faq.css";

const FAQ = () => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq");

    const toggleFaq = (event) => {
      event.currentTarget.classList.toggle("active");
    };

    faqItems.forEach((faq) => faq.addEventListener("click", toggleFaq));

    return () =>
      faqItems.forEach((faq) => faq.removeEventListener("click", toggleFaq));
  }, []);

  const faqData = [
    {
      title: "What is your refund policy?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How can I contact customer support?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Can I change or cancel my order after placing it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Can I change or cancel my order after placing it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const FaqItem = ({ title, content }) => (
    <div className="faq">
      <h3 className="faq-title">{title}</h3>
      <p className="faq-text">{content}</p>
      <button className="faq-toggle">
        <i className="fas fa-chevron-down"></i>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );

  return (
    <div className="FS__FAQ section__padding">
      <div className="background-gradient">
        <div className="background-gradient_blue"></div>
        <div className="background-gradient_blue2"></div>
      </div>
      <h1 className="FAQ-header heading">Frequently Asked Questions</h1>
      <div className="faqs-container">
        {faqData.map((faq, index) => (
          <FaqItem key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
