import { useState } from 'react';
import Layout from '../components/Layout';

const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s'-]+$/,
    messages: {
      required: 'Please enter your name.',
      minLength: 'Name must be at least 2 characters.',
      maxLength: 'Name must be less than 100 characters.',
      pattern: "Name can only contain letters, spaces, hyphens, and apostrophes.",
    },
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    messages: {
      required: 'Please enter your email address.',
      pattern: 'Please enter a valid email address.',
    },
  },
  subject: {
    required: true,
    minLength: 3,
    maxLength: 200,
    messages: {
      required: 'Please enter a subject.',
      minLength: 'Subject must be at least 3 characters.',
      maxLength: 'Subject must be less than 200 characters.',
    },
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 2000,
    messages: {
      required: 'Please enter your message.',
      minLength: 'Message must be at least 10 characters.',
      maxLength: 'Message must be less than 2000 characters.',
    },
  },
};

function validateField(fieldName, value) {
  const rules = validationRules[fieldName];
  if (!rules) return null;

  const trimmedValue = value.trim();

  if (rules.required && !trimmedValue) {
    return rules.messages.required;
  }

  if (trimmedValue && rules.minLength && trimmedValue.length < rules.minLength) {
    return rules.messages.minLength;
  }

  if (trimmedValue && rules.maxLength && trimmedValue.length > rules.maxLength) {
    return rules.messages.maxLength;
  }

  if (trimmedValue && rules.pattern && !rules.pattern.test(trimmedValue)) {
    return rules.messages.pattern;
  }

  return null;
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e) => {
    let isValid = true;
    const newErrors = {};

    Object.keys(validationRules).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!isValid) {
      e.preventDefault();
    }
    // If valid, allow form to submit to Formspree
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
  };

  return (
    <Layout>
      <header>
        <h1>Contact Me</h1>
      </header>

      <section>
        <h2>Contact Information</h2>
        <p>
          Feel free to reach out to me through any of the following channels:
        </p>

        <address className="contact-details">
          <article className="contact-item">
            <h3>Email</h3>
            <p>
              <strong>Primary:</strong>{' '}
              <a href="mailto:hajin1819@gmail.com">hajin1819@gmail.com</a><br />
              <strong>University:</strong>{' '}
              <a href="mailto:hap009@ucsd.edu">hap009@ucsd.edu</a>
            </p>
          </article>

          <article className="contact-item">
            <h3>Location</h3>
            <p>
              <i>San Diego, California, United States</i>
            </p>
          </article>

          <article className="contact-item">
            <h3>Professional Links</h3>
            <ul>
              <li>
                <a href="https://github.com/hajin-park" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hajinpark" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a href="https://hajinpark.com" target="_blank" rel="noopener noreferrer">Personal Website</a>
              </li>
            </ul>
          </article>
        </address>
      </section>

      <section>
        <h2>Send Me a Message</h2>
        <p>Use the form below to send me a direct message:</p>

        <form
          action="https://formspree.io/f/hajin1819@gmail.com"
          method="POST"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend>Contact Form</legend>

            <p className="form-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.name && errors.name ? 'field-error' : ''}
                aria-invalid={touched.name && errors.name ? 'true' : undefined}
              />
              {touched.name && errors.name && (
                <span className="error-message" role="alert">{errors.name}</span>
              )}
            </p>

            <p className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleChange({ target: { name: 'email', value: e.target.value } })}
                onBlur={(e) => handleBlur({ target: { name: 'email', value: e.target.value } })}
                className={touched.email && errors.email ? 'field-error' : ''}
                aria-invalid={touched.email && errors.email ? 'true' : undefined}
              />
              {touched.email && errors.email && (
                <span className="error-message" role="alert">{errors.email}</span>
              )}
            </p>

            <p className="form-field">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="_subject"
                required
                placeholder="Message subject"
                value={formData.subject}
                onChange={(e) => handleChange({ target: { name: 'subject', value: e.target.value } })}
                onBlur={(e) => handleBlur({ target: { name: 'subject', value: e.target.value } })}
                className={touched.subject && errors.subject ? 'field-error' : ''}
                aria-invalid={touched.subject && errors.subject ? 'true' : undefined}
              />
              {touched.subject && errors.subject && (
                <span className="error-message" role="alert">{errors.subject}</span>
              )}
            </p>

            <p className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.message && errors.message ? 'field-error' : ''}
                aria-invalid={touched.message && errors.message ? 'true' : undefined}
              ></textarea>
              {touched.message && errors.message && (
                <span className="error-message" role="alert">{errors.message}</span>
              )}
            </p>

            <p className="form-actions">
              <button type="submit">Send Message</button>
              <button type="reset" onClick={handleReset}>Clear Form</button>
            </p>
          </fieldset>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;

