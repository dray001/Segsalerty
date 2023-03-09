// import React from 'react';
import React, { useState } from 'react';
import './reg.scss'

// component imports
import FooterBanner from '../../components/footerBanner/FooterBanner'

let arrow = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z" fill="white"/>
            </svg>

let line = <svg width="131" height="1" viewBox="0 0 131 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="131" y2="0.5" stroke="url(#paint0_linear_759_5296)"/>
              <defs>
              <linearGradient id="paint0_linear_759_5296" x1="0" y1="1.5" x2="131" y2="1.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#00DC82"/>
              <stop offset="1" stop-color="#36E4DA"/>
              </linearGradient>
              </defs>
            </svg>

let dropdown =  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9999 1.17019C10.8126 0.983936 10.5591 0.879395 10.2949 0.879395C10.0308 0.879395 9.77731 0.983936 9.58995 1.17019L5.99995 4.71019L2.45995 1.17019C2.27259 0.983936 2.01913 0.879395 1.75495 0.879395C1.49076 0.879395 1.23731 0.983936 1.04995 1.17019C0.95622 1.26315 0.881826 1.37375 0.831057 1.49561C0.780288 1.61747 0.75415 1.74818 0.75415 1.88019C0.75415 2.0122 0.780288 2.1429 0.831057 2.26476C0.881826 2.38662 0.95622 2.49722 1.04995 2.59019L5.28995 6.83019C5.38291 6.92392 5.49351 6.99831 5.61537 7.04908C5.73723 7.09985 5.86794 7.12599 5.99995 7.12599C6.13196 7.12599 6.26267 7.09985 6.38453 7.04908C6.50638 6.99831 6.61699 6.92392 6.70995 6.83019L10.9999 2.59019C11.0937 2.49722 11.1681 2.38662 11.2188 2.26476C11.2696 2.1429 11.2957 2.0122 11.2957 1.88019C11.2957 1.74818 11.2696 1.61747 11.2188 1.49561C11.1681 1.37375 11.0937 1.26315 10.9999 1.17019Z" fill="white"/>
                </svg>

let folder = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.71 8.79002C10.6149 8.69898 10.5028 8.62762 10.38 8.58002C10.1365 8.48 9.86346 8.48 9.62 8.58002C9.49725 8.62762 9.3851 8.69898 9.29 8.79002L7.29 10.79C7.1017 10.9783 6.99591 11.2337 6.99591 11.5C6.99591 11.7663 7.1017 12.0217 7.29 12.21C7.4783 12.3983 7.7337 12.5041 8 12.5041C8.2663 12.5041 8.5217 12.3983 8.71 12.21L9 11.91V14.5C9 14.7652 9.10536 15.0196 9.29289 15.2071C9.48043 15.3947 9.73478 15.5 10 15.5C10.2652 15.5 10.5196 15.3947 10.7071 15.2071C10.8946 15.0196 11 14.7652 11 14.5V11.91L11.29 12.21C11.383 12.3038 11.4936 12.3781 11.6154 12.4289C11.7373 12.4797 11.868 12.5058 12 12.5058C12.132 12.5058 12.2627 12.4797 12.3846 12.4289C12.5064 12.3781 12.617 12.3038 12.71 12.21C12.8037 12.1171 12.8781 12.0065 12.9289 11.8846C12.9797 11.7627 13.0058 11.632 13.0058 11.5C13.0058 11.368 12.9797 11.2373 12.9289 11.1154C12.8781 10.9936 12.8037 10.883 12.71 10.79L10.71 8.79002ZM17 3.50002H10.72L10.4 2.50002C10.1926 1.91325 9.80775 1.40553 9.2989 1.04718C8.79005 0.688841 8.18236 0.497623 7.56 0.500022H3C2.20435 0.500022 1.44129 0.816093 0.87868 1.3787C0.316071 1.94131 0 2.70437 0 3.50002V16.5C0 17.2957 0.316071 18.0587 0.87868 18.6213C1.44129 19.184 2.20435 19.5 3 19.5H17C17.7956 19.5 18.5587 19.184 19.1213 18.6213C19.6839 18.0587 20 17.2957 20 16.5V6.50002C20 5.70437 19.6839 4.94131 19.1213 4.3787C18.5587 3.81609 17.7956 3.50002 17 3.50002ZM18 16.5C18 16.7652 17.8946 17.0196 17.7071 17.2071C17.5196 17.3947 17.2652 17.5 17 17.5H3C2.73478 17.5 2.48043 17.3947 2.29289 17.2071C2.10536 17.0196 2 16.7652 2 16.5V3.50002C2 3.23481 2.10536 2.98045 2.29289 2.79292C2.48043 2.60538 2.73478 2.50002 3 2.50002H7.56C7.76964 2.49948 7.97416 2.56484 8.14463 2.68686C8.3151 2.80889 8.44291 2.9814 8.51 3.18002L9.05 4.82002C9.11709 5.01864 9.2449 5.19116 9.41537 5.31318C9.58584 5.4352 9.79036 5.50056 10 5.50002H17C17.2652 5.50002 17.5196 5.60538 17.7071 5.79292C17.8946 5.98045 18 6.23481 18 6.50002V16.5Z" fill="white"/>
              </svg>






const Reg = () => {

  const [state, setState] = useState(false);

  const flip =()=> {
    setState(!state);
  }

  return (
        <div className='regWrapper '>

          <section className='contactUs_Section'>
              
              <div className='contentWrapper'>
                <h4>Register to join STSS</h4>
                <p> Don’t take our words for it directly. See what our students have to say abnout their experience with segsalerty resources and talent support. </p>

                <div className='regType'> <span onClick={flip} className={state ? '' : 'active'} >1. Persona </span> {line} <span onClick={flip} className={state ? 'active' : ''}>2. Career </span> </div>

                <form className='inputForm' action="">

                  <div className={state ? 'inputGrp persona' : 'inputGrp active persona'} >

                    <h3>Name testing</h3>
                    <div>
                      <input type="text" name='search' placeholder='Enter your full name' />
                    </div>

                    <h3>GENDER</h3>
                    <div className='selectInput'>
                      <select id="gender" name="gender" placeholder='Sex'>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      {dropdown}
                    </div>

                    <h3>Email address</h3>
                    <div>
                      <input type="text" name='search' placeholder='name@email.com' />
                    </div>

                    <h3>PHONE NUMBER</h3>
                    <div>
                      <input type="text" name='search' placeholder='Enter your reachable contact' />
                    </div>

                    <h3>Date of birth</h3>
                    <div className='selectInput'>
                      <select id="gender" name="gender" placeholder='DD/MM/YY'>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      {dropdown}
                    </div>

                    <h3>Family size</h3>
                    <div>
                      <input type="text" name='search' placeholder='Plus parent/guardian' />
                    </div>

                    <h3>LGA (Lagos only)</h3>
                    <div className='selectInput'>
                      <select id="gender" name="gender" placeholder='Select LGA'>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                      {dropdown}
                    </div>

                    <button type='submit'>Submit {arrow}</button>
                  </div>

                  <div className={state ? 'inputGrp active client' : 'inputGrp client'}>

                    <h3>Highest level of education completed</h3>
                    <div className='selectInput'>
                      <select id="gender" name="gender" placeholder='Select degree'>
                        <option value="female">Select degree</option>
                        <option value="male">Etc.</option>
                      </select>
                      {dropdown}
                    </div>

                    <h3>Which development stacks are you most proficient in?</h3>
                    <div className='selectInput'>
                      <select id="gender" name="gender" placeholder='Select stack'>
                        <option value="female">Select stack</option>
                        <option value="male">Etc.</option>
                      </select>
                      {dropdown}
                    </div>

                    <h3>How long have you been actively using this skill?</h3>
                    <div>
                      <input type="text" name='search' placeholder='E.g.: 1 year' />
                    </div>

                    <h3>When did you get your first tech gig/job? </h3>
                    <div className='selectInput'>
                      <select id="gender" name="gender" placeholder='Select LGA'>
                        <option value="female">Select LGA</option>
                        <option value="male">Etc.</option>
                      </select>
                      {dropdown}
                    </div>

                    <h3>How much have you made in tech so far?</h3>
                    <div className='selectInput stack'>
                        <div>
                            <select id="gender" name="gender" placeholder='$'>
                              <option value="female">$</option>
                              <option value="male">Etc.</option>
                            </select>
                            {dropdown}
                        </div>
                        <span>Indicate dollar amount</span>
                    </div>

                    <h3>Upload CV</h3>
                    <div className='selectInput stack'>
                        <label>
                            <input type="file" id="file-upload" name="file-upload" placeholder='Drag and drop or browse here' />
                            <span>Drag and drop or <em>browse here</em> </span>
                            {folder}
                        </label>
                        
                        <span>2 pages max</span>
                    </div>

                    <h3>Upload Motivation Letter</h3>
                    <div className='selectInput stack'>
                        <div>
                            <select id="gender" name="gender" placeholder='Type here'>
                              <option value="female">Type here</option>
                              <option value="male">Etc.</option>
                            </select>
                            {dropdown}
                        </div>
                        <span>250 words max</span>
                    </div>

                    <button type='submit'>Submit {arrow}</button>
                  </div>

                </form>

              </div>

          </section>

          <FooterBanner/>

        </div>
  );
}


export default Reg;
