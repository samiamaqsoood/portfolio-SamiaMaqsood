// Timeline.jsx
import React, { useEffect } from 'react';
import './Experience.css';

const timelineData = [
  {
    date: '2023',
    title: 'First Event',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    date: '2024',
    title: 'Second Event',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    date: '2025',
    title: 'Third Event',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

export default function Experience() {
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight * 0.8 &&
        rect.bottom >= 0
      );
    };

    const onScroll = () => {
      timelineItems.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('load', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll);
    };
  }, []);
useEffect(() => {
  const timelineContainer = document.querySelector('.timeline-container');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timelineItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('active');
            }, index * 200); // Optional staggered effect
          });
          observer.unobserve(entry.target); // Only trigger once
        }
      });
    },
    {
      threshold: 0.4, // Trigger when 40% of container is visible
    }
  );

  if (timelineContainer) {
    observer.observe(timelineContainer);
  }

  return () => {
    if (timelineContainer) {
      observer.unobserve(timelineContainer);
    }
  };
}, []);

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-line" />
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}