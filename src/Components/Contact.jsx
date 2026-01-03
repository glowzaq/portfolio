import React, { useState } from 'react'

export default function contactForm () {
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setResult('')
        const formData = new FormData(event.target);
        formData.append("access_key", "3165e003-218d-4290-bc5c-c95ee25da43a");

        let data;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            data = await response.json();
            // setResult(data.success ? "Success!" : "Error");
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
        <div id='contact' style={{ backgroundColor: '#f8e2ee' }}>
            <div className='container py-5 text-center'>
                <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#dd557f' }}>Let's Create Something Amazing</h2>
                <p style={{ fontSize: '20px', fontWeight: '400', color: '#4B5563' }}>Ready to bring your ideas to life? Let's chat!</p>
                <div className='row align-items-center justify-content-evenly mt-5 text-start'>
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h3 className='mb-4' style={{ fontSize: '48px', fontWeight: '700' }}>Get in touch</h3>
                        <p className='mb-4' style={{ maxWidth: '400px', fontSize: '18px', fontWeight: '400', color: '#4B5563', textAlign: 'start' }}>Whether you need a secure web application, want to discuss cybersecurity best practices, or just want to say hello, I'd love to hear from you!</p>
                        {/* EMAIL */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="mailto:inioluwaakintokun@gmail.com" className="email-icon" aria-label="Email Inioluwa">
                                <i className="fa-solid fa-envelope fa-lg"></i>
                            </a>

                            <div className="email-text">
                                <p className="mb-0 fw-semibold">Email</p>
                                <p className="mb-0 text-muted">inioluwaakintokun@gmail.com</p>
                            </div>
                        </div>
                        {/* LINKEDIN */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="https://www.linkedin.com/in/inioluwa-akintokun" target="_blank" className="linkedin-icon" aria-label="LinkedIn Profile">
                                <i className="fa-brands fa-linkedin fa-lg"></i>
                            </a>

                            <div className="linkedin-text">
                                <p className="mb-0 fw-semibold">LinkedIn</p>
                                <p className="mb-0 text-muted">linkedin.com/in/inioluwa-akintokun</p>
                            </div>
                        </div>
                        {/* GITHUB */}
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <a href="https://github.com/glowzaq" target="_blank" className="github-icon" aria-label="GitHub Profile">
                                <i className="fa-brands fa-github fa-lg"></i>
                            </a>
                            <div className="github-text">
                                <p className="mb-0 fw-semibold">GitHub</p>
                                <p className="mb-0 text-muted">github.com/glowzaq</p>
                            </div>
                        </div>
                        {/* TWITTER */}
                        <div className="d-flex align-items-center gap-3">
                            <a href="https://x.com/INI_TOKUN" target="_blank" className="twitter-icon" aria-label="Twitter Profile">
                                <i className="fa-brands fa-x-twitter fa-lg"></i>
                            </a>
                            <div className="twitter-text">
                                <p className="mb-0 fw-semibold">Twitter</p>
                                <p className="mb-0 text-muted">@INI_TOKUN</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 mb-4 mb-md-0" style={{ border: '1px solid #e0e0e0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', borderRadius: '20px', padding: '30px', maxWidth: '400px' }}>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" name='name' className="form-control" id="exampleFormControlInput1" required placeholder="Fullname" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" name='email' className="form-control" id="exampleFormControlInput1" required placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea name='message' required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button id='send' className="btn btn-primary" type="submit" disabled={isLoading}>
                                    {isLoading ? "Sending..." : "Send message ✨"}
                                </button>
                            </div>
                            <p className="mt-3 fw-semibold"
                                style={{
                                    color: result.includes("Thank you") ? '#28a745' : '#dc3545'
                                }}>
                                {result}
                            </p>
                            <input type="hidden" name="redirect" value="https://my-portfolio-mocha-nine-84.vercel.app/thank-you" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}