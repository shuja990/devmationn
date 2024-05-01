import React from 'react';
import Image from 'next/image';
import { useForm } from '@formspree/react';
import toast, { LoaderIcon, Toaster } from 'react-hot-toast';

const ContactForm = ({ title, desc }) => {
  const [state, handleSubmit] = useForm("meqynklp");

  const successToast = () => {
    toast.success('Your request has been submitted. We will contact you soon!', {
      duration: 4000,
      style: {
        // border: '1px solid #4CAF50',
        padding: '16px',
        // color: '#4CAF50',
        // backgroundColor: 'white'
      },
      iconTheme: {
        primary: '#4CAF50',
        secondary: '#FFFAEE',
      },
      icon: '✅'
    });
  };

  if (state.succeeded) {
    successToast()
  }

  return (
    <div>
      <section
        className="contact-us-form pt-60 pb-120"
        style={{
          background: "url('/shape/contact-us-bg.svg')no-repeat center bottom",
        }}
      >
        <div className="container">
          <div className="row justify-content-lg-between align-items-center"
          >
            <div className="col-lg-6 col-md-8">
              <div className="section-heading">
                <h2
                >{title ? title : "Talk to Our Sales & Marketing Department Team"}</h2>
                <p>
                  {desc ? desc : "Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via standardized infrastructures."}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="mb-1">
                      First name <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <label htmlFor="lastName" className="mb-1">
                      Last name
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="mb-1">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Phone"
                        aria-label="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="mb-1">
                      Email<span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourMessage" className="mb-1">
                      Message <span className="text-danger">*</span>
                    </label>
                    <div className="input-group mb-3">
                      <textarea
                        className="form-control"
                        id="yourMessage"
                        name="yourMessage"
                        required
                        draggable={false}
                        placeholder="How can we help you?"
                        style={{ height: '120px' }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="g-recaptcha" data-sitekey="6LchJc0pAAAAAHj9zyud5dSfPiw3ZM5ODqPdibWK"></div>
                <button type="submit" className="btn btn-primary mt-4">
                  {state.submitting ? <LoaderIcon /> : "Get in Touch"}
                </button>
              </form>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="contact-us-img">
                <Image
                  width={526}
                  height={406}
                  src="/contact-us-img-2.svg"
                  alt="contact us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default ContactForm;
