import React, { useState } from 'react';
import './Events.css';

// Import data from modular file
import { events, categories, appConfig, heroConfig } from './eventsData';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(event => event.category === activeFilter);

  const scrollToEvents = () => {
    document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          {heroConfig.title} <span className="hero-highlight">{heroConfig.highlight}</span>
        </h1>
        <p className="hero-subtitle">
          {heroConfig.subtitle}
        </p>
        <div className="scroll-indicator" onClick={scrollToEvents}>
          <p>{heroConfig.scrollText}</p>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events-section" className="events-section">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image-wrapper">
                <img src={event.image} alt={event.title} className="event-image" />
              </div>
              <div className="event-content">
                <div className="event-category-badge">{event.category.toUpperCase()}</div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                {event.link && (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="learn-more-link">
                    Learn More →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-section">
        <h2 className="app-title">{appConfig.title}</h2>
        <p className="app-subtitle">{appConfig.subtitle}</p>
        <div className="app-buttons">
          <a href={appConfig.playStoreUrl} className="app-button-link">
            <button className="app-button">
              <img src={appConfig.playstoreLogo} alt="Google Playstore Logo" /> Play Store
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;