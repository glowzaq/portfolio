import React, { useState } from 'react'

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setResult('')
        const formData = new FormData(event.target);
        formData.append("access_key", "3165e003-218d-4290-bc5c-c95ee25da43a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("Thank you! Your message has been sent successfully. ✨");
                event.target.reset();
            } else {
                setResult(data.message || "Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("Network error, Please check your connection and try again")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id='contact'>
            <div className='container py-5 text-center'>
                <h2 className="contact-title">Let's Build a Secure Digital Future</h2>
                <p className="contact-subtitle">Whether you’re architecting a new application or hardening an existing system, I’m ready to help you build with confidence.</p>

                <div className='row align-items-center justify-content-evenly mt-5 text-start'>
                    <div className="col-md-5 mb-5 mb-md-0">
                        <h3 className='display-6 fw-bold mb-4' style={{ color: '#0f172a' }}>Get in touch</h3>
                        <p className='mb-4 text-muted' style={{ fontSize: '1.1rem' }}>
                            Available for specialized full-stack development, security audits, or technical consultations.
                        </p>

                        {/* Social Links Grid */}
                        <div className="contact-info-list">
                            <div className="d-flex align-items-center gap-3 mb-4">
                                <a href="mailto:inioluwaakintokun@gmail.com" className="contact-social-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                                <div>
                                    <p className="contact-label">Email</p>
                                    <p className="contact-value">inioluwaakintokun@gmail.com</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-3 mb-4">
                                <a href="https://www.linkedin.com/in/inioluwa-akintokun" target="_blank" className="contact-social-icon">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <div>
                                    <p className="contact-label">LinkedIn</p>
                                    <p className="contact-value">inioluwa-akintokun</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center gap-3 mb-4">
                                <a href="https://github.com/glowzaq" target="_blank" className="contact-social-icon">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <div>
                                    <p className="contact-label">GitHub</p>
                                    <p className="contact-value">glowzaq</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5">
                        <div className="contact-form-card">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Name</label>
                                    <input type="text" name='name' className="form-control custom-input" required placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" name='email' className="form-control custom-input" required placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Message</label>
                                    <textarea name='message' required className="form-control custom-input" rows="4" placeholder="How can I help?"></textarea>
                                </div>
                                <button id='send' type="submit" disabled={isLoading} className="w-100">
                                    {isLoading ? "Sending..." : "Send Message ✨"}
                                </button>

                                {result && (
                                    <p className="mt-3 text-center fw-semibold" style={{ color: result.includes("Thank you") ? '#10b981' : '#ef4444' }}>
                                        {result}
                                    </p>
                                )}
                                <input type="hidden" name="redirect" value="https://my-portfolio-mocha-nine-84.vercel.app/thank-you" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}