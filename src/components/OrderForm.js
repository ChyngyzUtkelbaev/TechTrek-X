import React, { useState } from 'react';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', quantity: 1 });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      alert('Pre-order submitted!');
      // Submit form
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="fade-in">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" />
      </label>
      <button type="submit">Pre-Order</button>
    </form>
  );
};

export default OrderForm;
