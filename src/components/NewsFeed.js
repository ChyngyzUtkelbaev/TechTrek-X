import React from 'react';
import './NewsFeed.css';

const NewsFeed = () => (
  <div className="news-feed fade-in">
    <h2>Latest News</h2>
    <ul>
      <li>
        <strong>March 15, 2024:</strong> 
        <p>We're excited to announce the official release date for the TechTrek X. Mark your calendars for April 10, 2024, when the TechTrek X will be available for purchase.</p>
      </li>
      <li>
        <strong>March 1, 2024:</strong> 
        <p>Pre-orders for the TechTrek X are now open! Be among the first to own the latest in smartphone technology. Secure your TechTrek X today.</p>
      </li>
      <li>
        <strong>February 20, 2024:</strong> 
        <p>We are proud to reveal the TechTrek X at our annual TechTrek Innovation Event. The event showcased the phone's groundbreaking features and received rave reviews from attendees.</p>
      </li>
      <li>
        <strong>February 10, 2024:</strong> 
        <p>Get a sneak peek at the TechTrek X! Check out our latest video to see the phone in action and learn more about its advanced capabilities.</p>
      </li>
    </ul>
  </div>
);

export default NewsFeed;
