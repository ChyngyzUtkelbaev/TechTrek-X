import React from 'react';
import './ProductPage.css';

const ProductPage = () => (
  <div className="product-page fade-in">
    <h2>TechTrek X Smartphone</h2>
    <div className="product-details">
      <div className="details">
        <ul>
          <li><strong>Display:</strong> 6.7-inch Super AMOLED, 3200 x 1440 pixels</li>
          <li><strong>Processor:</strong> Octa-core 3.2 GHz</li>
          <li><strong>RAM:</strong> 12GB</li>
          <li><strong>Storage:</strong> 256GB/512GB</li>
          <li><strong>Camera:</strong> Triple rear cameras (108MP + 12MP + 5MP), 32MP front camera</li>
          <li><strong>Battery:</strong> 5000mAh with fast charging support</li>
          <li><strong>OS:</strong> Android 13</li>
          <li><strong>Connectivity:</strong> 5G, Wi-Fi 6, Bluetooth 5.2, NFC</li>
          <li><strong>Other Features:</strong> In-display fingerprint sensor, IP68 water and dust resistance</li>
        </ul>
      </div>
      <div className="image">
        {/* Проверьте, что этот путь правильный */}
        <img src={`${process.env.PUBLIC_URL}/images/techtrek-x.jpg`} alt="TechTrek X" />
      </div>
    </div>
    <div className="video-container">
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/5nYxXTFAovM" 
        title="TechTrek X Introduction" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
    <p>
      The TechTrek X is the latest innovation in smartphone technology. 
      Combining sleek design with powerful performance, the TechTrek X is 
      built to make your life easier and more fun.
    </p>
  </div>
);

export default ProductPage;
