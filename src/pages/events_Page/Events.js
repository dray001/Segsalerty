import React from 'react';
import './events.scss'

// component imports
import FooterBanner from '../../components/footerBanner/FooterBanner'
import Faq from '../../components/faq/Faq'

// image imports
import eventCardImg from '../../images/eventPage/eventCardImg.png'
import testImg from '../../images/eventPage/testimonierImg.png'

const Events = () => {
  return (
        <div className='eventsWrapper '>

          <section className='talentHunt_Section'>

            <div className='contentWrapper'>
              
              <h4> Upcoming: Segsalerty talent hunt </h4>
              <p> Are you looking to advance in your career, be notable in your stack and be more vast in opportunities. STS is your preferred platform to take your career to the next level.</p>
              <p>  We are searching for people who desire bigger things in their careers, who are willing to take a bigger step to create a vision and work to achieve it </p>

            </div>

            <div className='booking'>

              <div className='bookInfo'>
                <p> Date & Time: Mar 20, 2024 at 03pm WAT </p>
                <a className='primaryButton notMobile' href='#'>Book now (free)</a>
              </div>

              <div className='ctaWrapper mobile'>
                <a className='primaryButton' href="#">Book Now Free</a>
                <a className='secondaryButton' href="#">View program</a>
              </div>

              <div>
                <a className='viewProgram notMobile' href='#'> 
                  View program 
                  <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5803 4.01195L10.2902 1.72653V1.71654C9.89023 1.31735 9.89023 0.688614 10.2902 0.299397C10.6802 -0.0997992 11.3102 -0.0997992 11.7102 0.299397L15.7102 4.29136C15.9461 4.5207 16.0393 4.84492 15.9899 5.15148C15.9516 5.41804 15.8066 5.65147 15.6 5.80702L11.6995 9.6996C11.5095 9.87924 11.2495 9.98902 10.9895 9.98902L10.9995 10C10.7295 10 10.4695 9.89022 10.2895 9.71058C9.88954 9.32137 9.88954 8.68265 10.2795 8.29344V8.28345L12.5596 6.00793H1C0.44 6.00793 0 5.55883 0 5.00994C0 4.45106 0.44 4.01195 1 4.01195H12.5803Z" fill="url(#paint0_linear_1020_1901)"/>
                  <defs>
                  <linearGradient id="paint0_linear_1020_1901" x1="0" y1="5" x2="16.0027" y2="5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00DC82"/>
                  <stop offset="1" stop-color="#36E4DA"/>
                  </linearGradient>
                  </defs>
                  </svg>
                </a>
              </div>
              
            </div>

          </section>

          <section className='event_Section section_with_subSections'>

              <h5 className='sectionLabel'>Past events</h5>

              <div className='eventsWrapper'>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
              </div>

          </section>

          <section className='testimonial_Section'>

            <div className='contentWrapper'>
              <h4> Our Testimonials </h4>
              <p> Don’t take our words for it directly. See what our students have to say about their experience with segsalerty resources and talent support.</p>
            </div>

            <div className='testimonialWrapper'>
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </div>

          </section>

          <section className='gallery_Section section_with_subSections'>

              <h5 className='sectionLabel'>Our Gallery</h5>

              <div className='galleryWrapper should_grid'>

                <div className='office'>
                  <h5>Office</h5>
                  <p>We believe in harnessing the skill and capacity of talented individuals and grooming them to be their better selves through self and technical developmental processes</p>
                </div>

                <div className='gadgets'>
                  <h5>Gadgets</h5>
                  <p>We believe in harnessing the skill and capacity of talented individuals and grooming them to be their better selves through self and technical developmental processes</p>
                </div>

                <div className='students'>
                  <h5>Students</h5>
                  <p>We believe in harnessing the skill and capacity of talented individuals and grooming them to be their better selves through self and technical developmental processes</p>                
                </div>

                <div className='lunch'>
                  <h5>Lunch</h5>
                  <p>We believe in harnessing the skill and capacity of talented individuals and grooming them to be their better selves through self and technical developmental processes</p>
                </div>

                <div className='events'>
                  <h5>Events</h5>
                  <p>We believe in harnessing the skill and capacity of talented individuals and grooming them to be their better selves through self and technical developmental processes</p>
                </div>

              </div>

          </section>

          <Faq />
          <FooterBanner />

        </div>
  );
}

let EventCard = () => {
    return (
      <div className='eventCard'>
        <img src={eventCardImg} alt="img" />

        <div className='eventDetails'>

          <div className='event_cardDate'>
            <span>JAN 19</span>
          </div>

          <div className='event_Info'>
            <h5>Lagos - International conference</h5>
            <p>Federal Secretariat Complex, Phase 1, Maitama P.M.B. 406 Garki Abuja-FCT, Nigeria.</p>
            <a className='viewProgram' href='#'> 
              View event 
              <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5803 4.01195L10.2902 1.72653V1.71654C9.89023 1.31735 9.89023 0.688614 10.2902 0.299397C10.6802 -0.0997992 11.3102 -0.0997992 11.7102 0.299397L15.7102 4.29136C15.9461 4.5207 16.0393 4.84492 15.9899 5.15148C15.9516 5.41804 15.8066 5.65147 15.6 5.80702L11.6995 9.6996C11.5095 9.87924 11.2495 9.98902 10.9895 9.98902L10.9995 10C10.7295 10 10.4695 9.89022 10.2895 9.71058C9.88954 9.32137 9.88954 8.68265 10.2795 8.29344V8.28345L12.5596 6.00793H1C0.44 6.00793 0 5.55883 0 5.00994C0 4.45106 0.44 4.01195 1 4.01195H12.5803Z" fill="url(#paint0_linear_1020_1901)"/>
              <defs>
              <linearGradient id="paint0_linear_1020_1901" x1="0" y1="5" x2="16.0027" y2="5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00DC82"/>
              <stop offset="1" stop-color="#36E4DA"/>
              </linearGradient>
              </defs>
              </svg>
            </a>
          </div>

        </div>
      </div>
    )
}

let TestimonialCard = () => {
  return (
    <div className='testCard'>

      <div className='testifier'>
        <img src={testImg} alt="img" />
        <span>Joshua Freeman</span>
      </div>

      <div className='testifier_message'>
        <p> Segsalerty has invested in the growth of young superstars through mentorship. Our focus is to build a community of young men and women of purpose in the industry </p>
        <p> With our highly vetted mentors and regular skill in-house challenges, our Engineers have stood the test of time in building quality software solutions </p>

        <span> Frontend developer, Ovalfi.com </span>
      </div>
      
    </div>
  )
}

export default Events;
