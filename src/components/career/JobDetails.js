import React from 'react';
import Image from 'next/image';

import JobOverview from './JobOverview';

const JobDetails = ({ desc, skills, responsibilities, requirements }) => {
  return (
    <section className="job-details ptb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-8 pe-5">
            <div className="job-details-wrap">
              <h2>Job Details</h2>
              <p>
                {desc}
              </p>
              <div className="job-details-info mt-5">
                <h3 className="h5">Job Responsibilities</h3>
                <ul className="content-list list-unstyled">
                  {
                    responsibilities.map((responsbility, id) => (
                      <li key={id}>
                        {responsbility}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="job-details-info mt-5">
                <h3 className="h5">Job Requirements</h3>
                <ul className="content-list list-unstyled">
                  {
                    requirements.map((requirement, id) => (
                      <li key={id}>
                        {requirement}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="job-details-info mt-5">
                <h3 className="h5">Skill & Experience</h3>
                <ul className="content-list list-unstyled">
                  {
                    skills.map((skill, id) => (
                      <li key={id}>
                        {skill}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <Image
                width={820}
                height={454}
                src="/apply-now-1.jpg"
                className="img-fluid mt-5 rounded-custom"
                alt="apply"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <JobOverview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
