import React from 'react';
import './ctas.scss';
import be_a_clientImg from '../../images/become_A_Client.png'
import join_our_community from '../../images/join_our_community.png'



const Ctas = () => {
    
  return (

    <section className='joinSegsalerty section_with_subSections'>

            <h5 className='sectionLabel'>View our programmes</h5>

            <div className='be_a_client should_Flex'>

              <div className='contentWrapper'>
                <h4> Become a Client </h4>
                <p>Get highly experienced engineers that can help achieve your organization’s goals in due time. What is your company looking to achieve? Save time, we have skill-equipped talents in line with your goals.</p>
                <div className='ctaWrapper'>
                  <a className='primaryButton' href='#'> Become a client </a>
                </div>
              </div>

              <div className='imageWrapper'>
                <img src={be_a_clientImg} alt="" />
              </div>

            </div>

            <div className='join-community should_Flex'>

              <div className='contentWrapper'>
                <h4>Join our community</h4>
                <p>Do you have passion for creating ideas, innovating, solving problems? Do you also have a strong desire to position yourself in the global tech ecosystem, then Segsalerty community is for you.</p>
                <form className='footer_form'>
                    <input type="text" id="search" name="search" placeholder='Enter email address' />
                    <button type="submit"> Join the network </button>
                </form>
              </div>

              <div className='imageWrapper'>
                <img src={join_our_community} alt="" />
              </div>

            </div>

          </section>

  );
};

export default Ctas;