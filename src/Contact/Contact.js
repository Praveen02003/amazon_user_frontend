import React from 'react'
import '../Contact/Contact.css'
export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="title">Contact Us</h1>
                <p className="subtitle">We'd love to hear from you! Fill out the form or reach us directly.</p>

                {/* Contact Form */}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Write your message..."></textarea>
                </div>

                <button className="contact-btn">Send Message</button>

                {/* Divider */}
                <div className="divider">OR</div>

                {/* Contact Info */}
                <div className="contact-info">
                    <p><strong>Email:</strong> support@smartcart.com</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Address:</strong>India</p>
                </div>

                {/* Social Links */}
                <div className="social-links">
                    <button className="social-btn">🌐</button>
                    <button className="social-btn">💼</button>
                    <button className="social-btn">📸</button>
                </div>
            </div>
        </div>

    )
}
