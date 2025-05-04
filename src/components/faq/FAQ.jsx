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
      title: "What is Mira?",
      content:
        "Mira is a smart conversational AI assistant that adapts its user interface and interaction style based on your selected mode—Child, Adult, or Senior—offering a personalized and accessible experience for all age groups.",
    },
    {
      title: "How does Mira adapt to different age groups?",
      content:
        "Mira customizes the layout, font size, colors, and even interaction elements (like mic buttons or text boxes) based on the selected user mode. This ensures that children get a fun, simplified UI, adults get a standard interface, and seniors benefit from larger fonts and clearer visuals.",
    },
    {
      title: "Can I change the user mode after selecting one?",
      content:
        "Yes! You can easily switch between modes using the dropdown menu in the navigation bar. The interface updates instantly to reflect the selected mode.",
    },
    {
      title: "Is Mira available as a mobile app?",
      content:
        "Yes, Mira is available as a web application. You can access it via your browser on desktop or mobile, and it’s optimized for responsive use. You can also download the app from your device browser.",
    },
    {
      title: "What can I talk to Mira about?",
      content:
        "Mira is designed to assist with general queries, daily tasks, fun interactions, and more. Its capabilities vary slightly depending on the user mode to provide age-appropriate responses and interactions.",
    },
    {
      title: "Do I need to pay for using Mira?",
      content:
        "Mira is free to use for all users. We believe in providing accessible technology and healthcare to everyone, regardless of age or background.",
    }
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
