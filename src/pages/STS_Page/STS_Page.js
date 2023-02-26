import './sts_page.scss'

import sts_heroImg from '../../images/STS_Page/sts_heroImg.png'

import DSL_Discover from '../../images/STS_Page/DSL_Discover.png'
import DSL_Liberate from '../../images/STS_Page/DSL_Liberate.png'
import DSL_Support from '../../images/STS_Page/DSL_Support.png'

import slotForReg_0 from '../../images/STS_Page/slotForReg_0.png'
import slotForReg_1 from '../../images/STS_Page/slotForReg_1.png'
import slotForReg_2 from '../../images/STS_Page/slotForReg_2.png'

import admissionProcess from '../../images/STS_Page/admissionProcess.png'




let iconStep_0 = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" fill="#0C0D10"/>
                    <path d="M28.6667 33.8335H19.3333C18.4051 33.8335 17.5148 33.4647 16.8585 32.8084C16.2021 32.152 15.8333 31.2618 15.8333 30.3335V18.6668C15.8333 18.3574 15.7104 18.0607 15.4916 17.8419C15.2728 17.6231 14.9761 17.5002 14.6667 17.5002C14.3572 17.5002 14.0605 17.6231 13.8417 17.8419C13.6229 18.0607 13.5 18.3574 13.5 18.6668V30.3335C13.5 31.8806 14.1146 33.3643 15.2085 34.4583C16.3025 35.5522 17.7862 36.1668 19.3333 36.1668H28.6667C28.9761 36.1668 29.2728 36.0439 29.4916 35.8251C29.7104 35.6063 29.8333 35.3096 29.8333 35.0002C29.8333 34.6907 29.7104 34.394 29.4916 34.1752C29.2728 33.9564 28.9761 33.8335 28.6667 33.8335ZM34.5 20.9302C34.4878 20.823 34.4644 20.7174 34.43 20.6152V20.5102C34.3739 20.3902 34.2991 20.2799 34.2083 20.1835L27.2083 13.1835C27.1119 13.0927 27.0016 13.0179 26.8817 12.9618C26.8468 12.9569 26.8115 12.9569 26.7767 12.9618C26.6582 12.8939 26.5273 12.8502 26.3917 12.8335H21.6667C20.7384 12.8335 19.8482 13.2022 19.1918 13.8586C18.5354 14.515 18.1667 15.4052 18.1667 16.3335V28.0002C18.1667 28.9284 18.5354 29.8187 19.1918 30.475C19.8482 31.1314 20.7384 31.5002 21.6667 31.5002H31C31.9283 31.5002 32.8185 31.1314 33.4749 30.475C34.1312 29.8187 34.5 28.9284 34.5 28.0002V21.0002C34.5 21.0002 34.5 21.0002 34.5 20.9302ZM27.5 16.8118L30.5217 19.8335H28.6667C28.3572 19.8335 28.0605 19.7106 27.8417 19.4918C27.6229 19.273 27.5 18.9762 27.5 18.6668V16.8118ZM32.1667 28.0002C32.1667 28.3096 32.0438 28.6063 31.825 28.8251C31.6062 29.0439 31.3094 29.1668 31 29.1668H21.6667C21.3572 29.1668 21.0605 29.0439 20.8417 28.8251C20.6229 28.6063 20.5 28.3096 20.5 28.0002V16.3335C20.5 16.0241 20.6229 15.7273 20.8417 15.5085C21.0605 15.2897 21.3572 15.1668 21.6667 15.1668H25.1667V18.6668C25.1698 19.0648 25.2408 19.4594 25.3767 19.8335C25.1667 20.044 25.1836 20 25.0084 20.1752C24.7896 20.394 24.6667 20.6907 24.6667 21.0002C24.6667 21.3096 24.7896 21.6063 25.0084 21.8251C25.2272 22.0439 25.5239 22.1668 25.8333 22.1668H32.1667V28.0002Z" fill="url(#paint0_linear_454_2363)"/>
                    <rect x="0.5" y="0.5" width="47" height="47" stroke="#231F20"/>
                    <defs>
                    <linearGradient id="paint0_linear_454_2363" x1="13.5" y1="24.5002" x2="34.5" y2="24.5002" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00DC82"/>
                    <stop offset="1" stop-color="#36E4DA"/>
                    </linearGradient>
                    </defs>
                  </svg>

let iconStep_1 = <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="1" width="47" height="47" fill="#0C0D10"/>
                      <path d="M34.1617 30.4952L31.3383 27.6718C31.2299 27.5625 31.1008 27.4757 30.9587 27.4165C30.8165 27.3572 30.664 27.3267 30.51 27.3267C30.356 27.3267 30.2035 27.3572 30.0613 27.4165C29.9192 27.4757 29.7901 27.5625 29.6817 27.6718L25.505 31.8485C25.3969 31.9575 25.3113 32.0868 25.2533 32.2289C25.1952 32.3711 25.1658 32.5233 25.1667 32.6768V35.5002C25.1667 35.8096 25.2896 36.1063 25.5084 36.3251C25.7272 36.5439 26.0239 36.6668 26.3333 36.6668H29.1567C29.3102 36.6677 29.4624 36.6383 29.6046 36.5802C29.7467 36.5222 29.876 36.4366 29.985 36.3285L34.1617 32.1518C34.271 32.0434 34.3578 31.9143 34.417 31.7722C34.4763 31.63 34.5068 31.4775 34.5068 31.3235C34.5068 31.1695 34.4763 31.017 34.417 30.8748C34.3578 30.7327 34.271 30.6036 34.1617 30.4952V30.4952ZM28.6667 34.3335H27.5V33.1668L30.51 30.1568L31.6767 31.3235L28.6667 34.3335ZM21.6667 34.3335H17C16.6906 34.3335 16.3938 34.2106 16.175 33.9918C15.9563 33.773 15.8333 33.4762 15.8333 33.1668V16.8335C15.8333 16.5241 15.9563 16.2273 16.175 16.0085C16.3938 15.7897 16.6906 15.6668 17 15.6668H22.8333V19.1668C22.8333 20.0951 23.2021 20.9853 23.8585 21.6417C24.5148 22.2981 25.4051 22.6668 26.3333 22.6668H29.8333V23.8335C29.8333 24.1429 29.9562 24.4397 30.175 24.6585C30.3938 24.8772 30.6906 25.0002 31 25.0002C31.3094 25.0002 31.6062 24.8772 31.825 24.6585C32.0438 24.4397 32.1667 24.1429 32.1667 23.8335V21.5002C32.1667 21.5002 32.1667 21.5002 32.1667 21.4302C32.1545 21.323 32.1311 21.2174 32.0967 21.1152V21.0102C32.0406 20.8902 31.9657 20.7799 31.875 20.6835L24.875 13.6835C24.7786 13.5927 24.6683 13.5179 24.5483 13.4618C24.5135 13.4569 24.4782 13.4569 24.4433 13.4618L24.07 13.3335H17C16.0717 13.3335 15.1815 13.7022 14.5251 14.3586C13.8687 15.015 13.5 15.9052 13.5 16.8335V33.1668C13.5 34.0951 13.8687 34.9853 14.5251 35.6417C15.1815 36.2981 16.0717 36.6668 17 36.6668H21.6667C21.9761 36.6668 22.2728 36.5439 22.4916 36.3251C22.7104 36.1063 22.8333 35.8096 22.8333 35.5002C22.8333 35.1907 22.7104 34.894 22.4916 34.6752C22.2728 34.4564 21.9761 34.3335 21.6667 34.3335ZM25.1667 17.3118L28.1883 20.3335H26.3333C26.0239 20.3335 25.7272 20.2106 25.5084 19.9918C25.2896 19.773 25.1667 19.4762 25.1667 19.1668V17.3118ZM19.3333 27.3335H26.3333C26.6428 27.3335 26.9395 27.2106 27.1583 26.9918C27.3771 26.773 27.5 26.4762 27.5 26.1668C27.5 25.8574 27.3771 25.5607 27.1583 25.3419C26.9395 25.1231 26.6428 25.0002 26.3333 25.0002H19.3333C19.0239 25.0002 18.7272 25.1231 18.5084 25.3419C18.2896 25.5607 18.1667 25.8574 18.1667 26.1668C18.1667 26.4762 18.2896 26.773 18.5084 26.9918C18.7272 27.2106 19.0239 27.3335 19.3333 27.3335ZM19.3333 22.6668H20.5C20.8094 22.6668 21.1062 22.5439 21.325 22.3251C21.5438 22.1063 21.6667 21.8096 21.6667 21.5002C21.6667 21.1907 21.5438 20.894 21.325 20.6752C21.1062 20.4564 20.8094 20.3335 20.5 20.3335H19.3333C19.0239 20.3335 18.7272 20.4564 18.5084 20.6752C18.2896 20.894 18.1667 21.1907 18.1667 21.5002C18.1667 21.8096 18.2896 22.1063 18.5084 22.3251C18.7272 22.5439 19.0239 22.6668 19.3333 22.6668ZM21.6667 29.6668H19.3333C19.0239 29.6668 18.7272 29.7897 18.5084 30.0085C18.2896 30.2273 18.1667 30.5241 18.1667 30.8335C18.1667 31.1429 18.2896 31.4397 18.5084 31.6585C18.7272 31.8772 19.0239 32.0002 19.3333 32.0002H21.6667C21.9761 32.0002 22.2728 31.8772 22.4916 31.6585C22.7104 31.4397 22.8333 31.1429 22.8333 30.8335C22.8333 30.5241 22.7104 30.2273 22.4916 30.0085C22.2728 29.7897 21.9761 29.6668 21.6667 29.6668Z" fill="url(#paint0_linear_454_2374)"/>
                      <path d="M24.9916 38.8332H15.6583C14.73 38.8332 13.8398 38.4644 13.1834 37.808C12.527 37.1517 12.1583 36.2614 12.1583 35.3332V23.6665C12.1583 23.3571 12.0354 23.0603 11.8166 22.8415C11.5978 22.6228 11.301 22.4998 10.9916 22.4998C10.6822 22.4998 10.3855 22.6228 10.1667 22.8415C9.94788 23.0603 9.82496 23.3571 9.82496 23.6665V35.3332C9.82496 36.8803 10.4395 38.364 11.5335 39.458C12.6275 40.5519 14.1112 41.1665 15.6583 41.1665H24.9916C25.301 41.1665 25.5978 41.0436 25.8166 40.8248C26.0354 40.606 26.1583 40.3093 26.1583 39.9998C26.1583 39.6904 26.0354 39.3937 25.8166 39.1749C25.5978 38.9561 25.301 38.8332 24.9916 38.8332Z" fill="url(#paint1_linear_454_2374)"/>
                      <rect x="0.5" y="1" width="47" height="47" stroke="#231F20"/>
                      <defs>
                      <linearGradient id="paint0_linear_454_2374" x1="13.5" y1="25.0002" x2="34.5068" y2="25.0002" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00DC82"/>
                      <stop offset="1" stop-color="#36E4DA"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_454_2374" x1="9.82495" y1="31.8333" x2="26.1583" y2="31.8333" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00DC82"/>
                      <stop offset="1" stop-color="#36E4DA"/>
                      </linearGradient>
                      </defs>
                    </svg>

let iconStep_2 = <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="1" width="47" height="47" fill="#0C0D10"/>
                    <path d="M18.1667 22.6668H20.5C20.8095 22.6668 21.1062 22.5439 21.325 22.3251C21.5438 22.1063 21.6667 21.8096 21.6667 21.5002C21.6667 21.1907 21.5438 20.894 21.325 20.6752C21.1062 20.4564 20.8095 20.3335 20.5 20.3335H18.1667C17.8573 20.3335 17.5605 20.4564 17.3417 20.6752C17.123 20.894 17 21.1907 17 21.5002C17 21.8096 17.123 22.1063 17.3417 22.3251C17.5605 22.5439 17.8573 22.6668 18.1667 22.6668ZM34.5 15.6668H25.1667V14.5002C25.1667 14.1907 25.0438 13.894 24.825 13.6752C24.6062 13.4564 24.3095 13.3335 24 13.3335C23.6906 13.3335 23.3939 13.4564 23.1751 13.6752C22.9563 13.894 22.8334 14.1907 22.8334 14.5002V15.6668H13.5C13.1906 15.6668 12.8939 15.7897 12.6751 16.0085C12.4563 16.2273 12.3334 16.5241 12.3334 16.8335V28.5002C12.3334 29.4284 12.7021 30.3187 13.3585 30.975C14.0149 31.6314 14.9051 32.0002 15.8334 32.0002H21.1884L18.505 34.6718C18.3957 34.7803 18.3089 34.9093 18.2497 35.0515C18.1904 35.1937 18.1599 35.3461 18.1599 35.5002C18.1599 35.6542 18.1904 35.8067 18.2497 35.9488C18.3089 36.091 18.3957 36.22 18.505 36.3285C18.6135 36.4378 18.7425 36.5246 18.8847 36.5839C19.0269 36.6431 19.1794 36.6736 19.3334 36.6736C19.4874 36.6736 19.6399 36.6431 19.782 36.5839C19.9242 36.5246 20.0533 36.4378 20.1617 36.3285L22.8334 33.6452V35.5002C22.8334 35.8096 22.9563 36.1063 23.1751 36.3251C23.3939 36.5439 23.6906 36.6668 24 36.6668C24.3095 36.6668 24.6062 36.5439 24.825 36.3251C25.0438 36.1063 25.1667 35.8096 25.1667 35.5002V33.6452L27.8384 36.3285C27.9468 36.4378 28.0759 36.5246 28.218 36.5839C28.3602 36.6431 28.5127 36.6736 28.6667 36.6736C28.8207 36.6736 28.9732 36.6431 29.1154 36.5839C29.2575 36.5246 29.3866 36.4378 29.495 36.3285C29.6044 36.22 29.6912 36.091 29.7504 35.9488C29.8096 35.8067 29.8401 35.6542 29.8401 35.5002C29.8401 35.3461 29.8096 35.1937 29.7504 35.0515C29.6912 34.9093 29.6044 34.7803 29.495 34.6718L26.8117 32.0002H32.1667C33.095 32.0002 33.9852 31.6314 34.6416 30.975C35.298 30.3187 35.6667 29.4284 35.6667 28.5002V16.8335C35.6667 16.5241 35.5438 16.2273 35.325 16.0085C35.1062 15.7897 34.8095 15.6668 34.5 15.6668ZM33.3334 28.5002C33.3334 28.8096 33.2105 29.1063 32.9917 29.3251C32.7729 29.5439 32.4761 29.6668 32.1667 29.6668H15.8334C15.524 29.6668 15.2272 29.5439 15.0084 29.3251C14.7896 29.1063 14.6667 28.8096 14.6667 28.5002V18.0002H33.3334V28.5002ZM18.1667 27.3335H25.1667C25.4761 27.3335 25.7729 27.2106 25.9917 26.9918C26.2105 26.773 26.3334 26.4762 26.3334 26.1668C26.3334 25.8574 26.2105 25.5607 25.9917 25.3419C25.7729 25.1231 25.4761 25.0002 25.1667 25.0002H18.1667C17.8573 25.0002 17.5605 25.1231 17.3417 25.3419C17.123 25.5607 17 25.8574 17 26.1668C17 26.4762 17.123 26.773 17.3417 26.9918C17.5605 27.2106 17.8573 27.3335 18.1667 27.3335Z" fill="url(#paint0_linear_454_2384)"/>
                    <rect x="0.5" y="1" width="47" height="47" stroke="#231F20"/>
                    <defs>
                    <linearGradient id="paint0_linear_454_2384" x1="12.3334" y1="25.0035" x2="35.6667" y2="25.0035" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00DC82"/>
                    <stop offset="1" stop-color="#36E4DA"/>
                    </linearGradient>
                    </defs>
                  </svg>

let iconStep_3 = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="47" height="47" fill="#0C0D10"/>
                    <g clip-path="url(#clip0_737_5309)">
                    <path d="M29.8333 35.7349H15.8333C14.9051 35.7349 14.0148 35.3661 13.3585 34.7097C12.7021 34.0534 12.3333 33.1631 12.3333 32.2349V22.9015C12.3333 22.5921 12.2104 22.2954 11.9916 22.0766C11.7728 21.8578 11.4761 21.7349 11.1667 21.7349C10.8572 21.7349 10.5605 21.8578 10.3417 22.0766C10.1229 22.2954 10 22.5921 10 22.9015V32.2349C10 33.782 10.6146 35.2657 11.7085 36.3597C12.8025 37.4536 14.2862 38.0682 15.8333 38.0682H29.8333C30.1428 38.0682 30.4395 37.9453 30.6583 37.7265C30.8771 37.5077 31 37.2109 31 36.9015C31 36.5921 30.8771 36.2954 30.6583 36.0766C30.4395 35.8578 30.1428 35.7349 29.8333 35.7349ZM34.5 14.7349H18.1667C17.2384 14.7349 16.3482 15.1036 15.6918 15.76C15.0354 16.4164 14.6667 17.3066 14.6667 18.2349V29.9015C14.6667 30.8298 15.0354 31.72 15.6918 32.3764C16.3482 33.0328 17.2384 33.4015 18.1667 33.4015H34.5C35.4283 33.4015 36.3185 33.0328 36.9749 32.3764C37.6313 31.72 38 30.8298 38 29.9015V18.2349C38 17.3066 37.6313 16.4164 36.9749 15.76C36.3185 15.1036 35.4283 14.7349 34.5 14.7349ZM34.0217 17.0682L27.1617 23.9282C27.0532 24.0375 26.9242 24.1243 26.782 24.1836C26.6398 24.2428 26.4873 24.2733 26.3333 24.2733C26.1793 24.2733 26.0268 24.2428 25.8847 24.1836C25.7425 24.1243 25.6135 24.0375 25.505 23.9282L18.645 17.0682H34.0217ZM35.6667 29.9015C35.6667 30.2109 35.5438 30.5077 35.325 30.7265C35.1062 30.9453 34.8094 31.0682 34.5 31.0682H18.1667C17.8572 31.0682 17.5605 30.9453 17.3417 30.7265C17.1229 30.5077 17 30.2109 17 29.9015V18.6665L23.86 25.5265C24.5163 26.182 25.4058 26.5501 26.3333 26.5501C27.2608 26.5501 28.1504 26.182 28.8067 25.5265L35.6667 18.6665V29.9015Z" fill="url(#paint0_linear_737_5309)"/>
                    </g>
                    <rect x="0.5" y="0.5" width="47" height="47" stroke="#231F20"/>
                    <defs>
                    <linearGradient id="paint0_linear_737_5309" x1="10" y1="26.4015" x2="38" y2="26.4015" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00DC82"/>
                    <stop offset="1" stop-color="#36E4DA"/>
                    </linearGradient>
                    <clipPath id="clip0_737_5309">
                    <rect width="28" height="28" fill="white" transform="translate(10 10.5)"/>
                    </clipPath>
                    </defs>
                  </svg>




const STS_Page = () => {
  return (
        <div className='STS_PageWrapper '>
          <section className='heroSection section_flex'>
              <div className='contentWrapper'>
                <h1>Segsalerty <span>talent support</span> initiative</h1>
                <p>A talent support platform for developing brilliant and well-vetted tech talent with the advent of deploying and situating in a recognized spot in the global tech ecosystem while promoting diversity, inclusion, and team-building culture in the tech industry.</p>
                <div className='ctaWrapper'>
                  <a className='primaryButton' href='#'>Apply now</a>
                </div>
              </div>

              <div className='imageWrapper'>
                <img src={sts_heroImg} alt="img" />
              </div>
          </section>

          <section className='strategySection section_with_subSections'>

            <h5 className='sectionLabel'>What we do</h5>

            <div className='DSL_strategy should_stack'>

              <div className='contentWrapper'>
                <h4> Our DSL strategy </h4>
                <p>We believe in harnessing the skill and capacity of talented individuals and grooming them to be their better selves through self and technical developmental processes</p>
              </div>

              <div className='strategy_cards'>
                <div className='card'>
                  <img src={DSL_Discover} alt="" />
                  <div>
                    <h5>Discover</h5>
                    <p>Our application process helps to discover indigent talents with sound technical ability to succeed however lacking the required support.</p>
                  </div>
                </div>

                <div className='card'>
                  <img src={DSL_Liberate} alt="" />
                  <div>
                    <h5>Liberate</h5>
                    <p>Through our fully-equipped hub, we provide an enabling environment for admitted fellows to hone their skills based on their own professional development plans</p>
                  </div>
                </div>

                <div className='card'>
                  <img src={DSL_Support} alt="" />
                  <div>
                    <h5>Support</h5>
                    <p>Our application process helps to discover indigent talents with sound technical ability to succeed however lacking the required support.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className='offering should_stack'>

              <div className='contentWrapper'>
                <h4> Our offerings </h4>
                <p>A talent support platform for developing brilliant and well-vetted tech talent with the advent of deploying and situating in a recognized spot in the global tech ecosystem while promoting diversity, inclusion, and team-building culture in the tech industry.</p>
              </div>

              <div className='offering_cards'>
                <div className='card'>
                  <span>1</span>
                  <p>Enabling work facility</p>
                </div>

                <div className='card'>
                  <span>2</span>
                  <p>Access to work tools</p>
                </div>

                <div className='card'>
                  <span>3</span>
                  <p>Development Opportunities and Advisory</p>
                </div>

                <div className='card'>
                  <span>4</span>
                  <p>Networking Opportunities</p>
                </div>

                <div className='card'>
                  <span>5</span>
                  <p>Challenges and Collaboration Opportunities</p>
                </div>

                <div className='card'>
                  <span>6</span>
                  <p>Plenty of Coffee, Tea and Lunch on the House</p>
                </div>
              </div>

            </div>

          </section>

          <section className='openSlotSection section_with_subSections'>

            <h5 className='sectionLabel'>Open slots for registration</h5>

            <div className='frontEnd should_Flex'>

              <div className='contentWrapper'>
                <h4> Frontend developers </h4>
                <p>Frontend Engineers are some of the most sought-after Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages.</p>
                <div className='ctaWrapper'>
                  <a className='primaryButton' href='#'>Apply now</a>
                </div>
              </div>

              <div className='imageWrapper'>
                <img src={slotForReg_0} alt="img" />
              </div>

            </div>

            <div className='productDesign should_Flex'>

              <div className='contentWrapper'>
                <h4> Product designers </h4>
                <p>Frontend Engineers are some of the most sought-after Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages.</p>
                <div className='ctaWrapper'>
                  <a className='primaryButton' href='#'>Apply now</a>
                </div>
              </div>

              <div className='imageWrapper'>
                <img src={slotForReg_1} alt="img" />
              </div>

            </div>

            <div className='backEnd should_Flex'>

              <div className='contentWrapper'>
                <h4> Backend engineers </h4>
                <p>Frontend Engineers are some of the most sought-after Software Engineers. This program is designed to provide you with in-depth knowledge on how to create functional websites by implementing web designs through the use of various programming languages.</p>
                <div className='ctaWrapper'>
                  <a className='primaryButton' href='#'>Apply now</a>
                </div>
              </div>

              <div className='imageWrapper'>
                <img src={slotForReg_2} alt="img" />
              </div>

            </div>

          </section>

          <section className='admission_process_Section section_with_subSections'>
          <h5 className='sectionLabel'>How the admission process works</h5>
              <div className='processWrapper should_Flex'>

                <div className='steps'>
                    <div className='step'>
                      <h2> 01 </h2>
                      <div>
                        {iconStep_0}
                        <div>
                          <span>STEP 1</span>
                          <p>Complete the call for application and take the assessment test</p>
                        </div>
                      </div>
                    </div>

                    <div className='step'>
                      <h2> 02 </h2>
                      <div>
                        {iconStep_1}
                        <div>
                          <span>STEP 2</span>
                          <p>Share Personal Development Plan and Portfolio</p>
                        </div>
                      </div>
                    </div>

                    <div className='step'>
                      <h2> 03 </h2>
                      <div>
                        {iconStep_2}
                        <div>
                          <span>STEP 3</span>
                          <p>Physical 1-1 Interviews with the admission team</p>
                        </div>
                      </div>
                    </div>

                    <div className='step'>
                      <h2> 04 </h2>
                      <div>
                        {iconStep_3}
                        <div>
                          <span>STEP 4</span>
                          <p>Candidates who pass will receive their acceptance emails and instructions</p>
                        </div>
                      </div>
                    </div>
                </div>
                
                <div className='imageWrapper'>
                  <img src={admissionProcess} alt="img" />
                </div>

              </div>


          </section>
        </div> 
  );
}

export default STS_Page;
