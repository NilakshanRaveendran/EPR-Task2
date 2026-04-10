import React, { useState } from 'react';
import './InvitationPage.css';

const InvitationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    attending: '',
    guests: '1',
    mealTime: '',
    dietaryRestrictions: '',
    songRequest: '',
    fullName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="premium-wrapper">
      <div className="premium-background"></div>
      
      <div className="premium-content-area">
        <div className={`premium-card step-${step}`}>
          {step === 1 && (
            <div className="intro-view fade-in-up">
              <div className="decorative-line"></div>
              <h3 className="pre-title">You are cordially invited</h3>
              <h1 className="main-title">Under The Stars</h1>
              <div className="event-details minimalist">
                <p className="date-time">10 . 24 . 2026 <span className="dot">•</span> 7:00 PM</p>
                <p className="venue-minimal">The Starlight Pavilion</p>
              </div>

              <button className="premium-btn primary" onClick={handleNext}>
                RSVP Now
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="form-view fade-in-up">
              <span className="step-indicator">Step 1 of 3</span>
              <h2 className="section-title">Your Response</h2>
              
              <div className="form-group-premium">
                <label>Will you be joining us?</label>
                <div className="attendance-options">
                  <label className={`attendance-btn ${formData.attending === 'yes' ? 'selected' : ''}`}>
                    <input type="radio" name="attending" value="yes" onChange={handleInputChange} />
                    <span>Joyfully Accept</span>
                  </label>
                  <label className={`attendance-btn ${formData.attending === 'no' ? 'selected' : ''}`}>
                    <input type="radio" name="attending" value="no" onChange={handleInputChange} />
                    <span>Regretfully Decline</span>
                  </label>
                </div>
              </div>

              <div className="form-group-premium">
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Your Full Name *" 
                  className="premium-input text-center"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group-premium">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address *" 
                  className="premium-input text-center"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="card-actions">
                <button className="premium-btn secondary" onClick={handleBack}>Cancel</button>
                <button 
                  className="premium-btn primary" 
                  onClick={handleNext} 
                  disabled={!formData.attending || !formData.fullName || !formData.email}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-view fade-in-up">
              <span className="step-indicator">Step 2 of 3</span>
              <h2 className="section-title">Guest Details</h2>
              
              <div className="form-group-premium">
                <label>Number of Guests (Including Yourself)</label>
                <div className="number-selector">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <button 
                      key={num}
                      type="button"
                      className={`circle-btn ${formData.guests == num ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({...prev, guests: num}))}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group-premium">
                <label>Preferred Seating / Meal Time</label>
                <select name="mealTime" value={formData.mealTime} onChange={handleInputChange} className="premium-select">
                  <option value="" disabled>Select your preference</option>
                  <option value="sunset">6:00 PM — Sunset Dining</option>
                  <option value="starlight">8:00 PM — Starlight Dining</option>
                </select>
              </div>

              <div className="card-actions">
                <button className="premium-btn secondary" onClick={handleBack}>Back</button>
                <button className="premium-btn primary" onClick={handleNext} disabled={!formData.mealTime}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="form-view fade-in-up">
              <span className="step-indicator">Step 3 of 3</span>
              <h2 className="section-title">Final Touches</h2>
              
              <div className="form-group-premium">
                <label>Dietary Restrictions / Food Allergies</label>
                <textarea 
                  name="dietaryRestrictions" 
                  className="premium-input textarea"
                  placeholder="Please specify any allergies or dietary needs..."
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="form-group-premium">
                <label>What song will get you on the dance floor?</label>
                <input 
                  type="text" 
                  name="songRequest" 
                  className="premium-input text-center"
                  placeholder="Song Title & Artist"
                  value={formData.songRequest}
                  onChange={handleInputChange}
                />
              </div>

              <div className="card-actions">
                <button className="premium-btn secondary" onClick={handleBack}>Back</button>
                <button className="premium-btn primary" onClick={() => setStep(5)}>
                  Submit RSVP
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="success-view fade-in-up">
              <div className="decorative-line"></div>
              <h2 className="main-title">Thank you for your RSVP!</h2>
              <div className="decorative-line"></div>
              <p className="success-msg">
                We are so excited you can join us.<br/><br/>
                A confirmation has been sent to <span style={{color: '#dfcd97', fontWeight: 400}}>{formData.email}</span>.
              </p>
              
              <div className="card-actions">
                <button 
                  className="premium-btn secondary" 
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      attending: '',
                      guests: '1',
                      mealTime: '',
                      dietaryRestrictions: '',
                      songRequest: '',
                      fullName: '',
                      email: '',
                    });
                  }}
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvitationPage;
