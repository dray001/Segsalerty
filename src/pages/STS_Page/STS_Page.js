import './sts_page.scss'

import FooterBanner from '../../components/footerBanner/FooterBanner'
import Faq from '../../components/faq/Faq'

import sts_heroImg from '../../images/STS_Page/sts_heroImg.png'

import DSL_Discover from '../../images/STS_Page/DSL_Discover.png'
import DSL_Liberate from '../../images/STS_Page/DSL_Liberate.png'
import DSL_Support from '../../images/STS_Page/DSL_Support.png'

import slotForReg_0 from '../../images/STS_Page/slotForReg_0.png'
import slotForReg_1 from '../../images/STS_Page/slotForReg_1.png'
import slotForReg_2 from '../../images/STS_Page/slotForReg_2.png'

import admissionProcess from '../../images/STS_Page/admissionProcess.png'




let iconStep_0 = <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6667 21.8335H6.33333C5.40508 21.8335 4.51484 21.4647 3.85846 20.8084C3.20208 20.152 2.83333 19.2618 2.83333 18.3335V6.66683C2.83333 6.35741 2.71042 6.06066 2.49162 5.84187C2.27283 5.62308 1.97609 5.50016 1.66667 5.50016C1.35725 5.50016 1.0605 5.62308 0.841709 5.84187C0.622916 6.06066 0.5 6.35741 0.5 6.66683V18.3335C0.5 19.8806 1.11458 21.3643 2.20854 22.4583C3.30251 23.5522 4.78624 24.1668 6.33333 24.1668H15.6667C15.9761 24.1668 16.2728 24.0439 16.4916 23.8251C16.7104 23.6063 16.8333 23.3096 16.8333 23.0002C16.8333 22.6907 16.7104 22.394 16.4916 22.1752C16.2728 21.9564 15.9761 21.8335 15.6667 21.8335ZM21.5 8.93016C21.4878 8.82299 21.4644 8.7174 21.43 8.61516V8.51016C21.3739 8.39021 21.2991 8.27994 21.2083 8.1835L14.2083 1.1835C14.1119 1.09275 14.0016 1.01792 13.8817 0.961829C13.8468 0.956883 13.8115 0.956883 13.7767 0.961829C13.6582 0.893861 13.5273 0.850231 13.3917 0.833496H8.66667C7.73841 0.833496 6.84817 1.20225 6.19179 1.85862C5.53542 2.515 5.16667 3.40524 5.16667 4.3335V16.0002C5.16667 16.9284 5.53542 17.8187 6.19179 18.475C6.84817 19.1314 7.73841 19.5002 8.66667 19.5002H18C18.9283 19.5002 19.8185 19.1314 20.4749 18.475C21.1313 17.8187 21.5 16.9284 21.5 16.0002V9.00016C21.5 9.00016 21.5 9.00016 21.5 8.93016ZM14.5 4.81183L17.5217 7.8335H15.6667C15.3572 7.8335 15.0605 7.71058 14.8417 7.49179C14.6229 7.27299 14.5 6.97625 14.5 6.66683V4.81183ZM19.1667 16.0002C19.1667 16.3096 19.0438 16.6063 18.825 16.8251C18.6062 17.0439 18.3094 17.1668 18 17.1668H8.66667C8.35725 17.1668 8.0605 17.0439 7.84171 16.8251C7.62292 16.6063 7.5 16.3096 7.5 16.0002V4.3335C7.5 4.02408 7.62292 3.72733 7.84171 3.50854C8.0605 3.28975 8.35725 3.16683 8.66667 3.16683H12.1667V6.66683C12.1698 7.06483 12.2408 7.45938 12.3767 7.8335C12.1667 8.04397 12.1836 8 12.0084 8.1752C11.7896 8.394 11.6667 8.69074 11.6667 9.00016C11.6667 9.30958 11.7896 9.60633 12.0084 9.82512C12.2272 10.0439 12.5239 10.1668 12.8333 10.1668H19.1667V16.0002Z" fill="url(#paint0_linear_458_1925)"/>
                  <defs>
                  <linearGradient id="paint0_linear_458_1925" x1="0.5" y1="12.5002" x2="21.5" y2="12.5002" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00DC82"/>
                  <stop offset="1" stop-color="#36E4DA"/>
                  </linearGradient>
                  </defs>
                  </svg>


let iconStep_1 = <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.1617 17.4952L22.3383 14.6718C22.2299 14.5625 22.1008 14.4757 21.9587 14.4165C21.8165 14.3572 21.664 14.3267 21.51 14.3267C21.356 14.3267 21.2035 14.3572 21.0613 14.4165C20.9192 14.4757 20.7901 14.5625 20.6817 14.6718L16.505 18.8485C16.3969 18.9575 16.3113 19.0868 16.2533 19.2289C16.1952 19.3711 16.1658 19.5233 16.1667 19.6768V22.5002C16.1667 22.8096 16.2896 23.1063 16.5084 23.3251C16.7272 23.5439 17.0239 23.6668 17.3333 23.6668H20.1567C20.3102 23.6677 20.4624 23.6383 20.6046 23.5802C20.7467 23.5222 20.876 23.4366 20.985 23.3285L25.1617 19.1518C25.271 19.0434 25.3578 18.9143 25.417 18.7722C25.4763 18.63 25.5068 18.4775 25.5068 18.3235C25.5068 18.1695 25.4763 18.017 25.417 17.8748C25.3578 17.7327 25.271 17.6036 25.1617 17.4952ZM19.6667 21.3335H18.5V20.1668L21.51 17.1568L22.6767 18.3235L19.6667 21.3335ZM12.6667 21.3335H7.99999C7.69057 21.3335 7.39383 21.2106 7.17503 20.9918C6.95624 20.773 6.83332 20.4762 6.83332 20.1668V3.8335C6.83332 3.52408 6.95624 3.22733 7.17503 3.00854C7.39383 2.78975 7.69057 2.66683 7.99999 2.66683H13.8333V6.16683C13.8333 7.09509 14.2021 7.98533 14.8585 8.6417C15.5148 9.29808 16.4051 9.66683 17.3333 9.66683H20.8333V10.8335C20.8333 11.1429 20.9562 11.4397 21.175 11.6585C21.3938 11.8772 21.6906 12.0002 22 12.0002C22.3094 12.0002 22.6062 11.8772 22.825 11.6585C23.0437 11.4397 23.1667 11.1429 23.1667 10.8335V8.50016C23.1667 8.50016 23.1667 8.50016 23.1667 8.43016C23.1545 8.32299 23.131 8.2174 23.0967 8.11516V8.01016C23.0406 7.89021 22.9657 7.77994 22.875 7.6835L15.875 0.683496C15.7785 0.592748 15.6683 0.517924 15.5483 0.461829C15.5135 0.456883 15.4782 0.456883 15.4433 0.461829L15.07 0.333496H7.99999C7.07173 0.333496 6.18149 0.702245 5.52512 1.35862C4.86874 2.015 4.49999 2.90524 4.49999 3.8335V20.1668C4.49999 21.0951 4.86874 21.9853 5.52512 22.6417C6.18149 23.2981 7.07173 23.6668 7.99999 23.6668H12.6667C12.9761 23.6668 13.2728 23.5439 13.4916 23.3251C13.7104 23.1063 13.8333 22.8096 13.8333 22.5002C13.8333 22.1907 13.7104 21.894 13.4916 21.6752C13.2728 21.4564 12.9761 21.3335 12.6667 21.3335ZM16.1667 4.31183L19.1883 7.3335H17.3333C17.0239 7.3335 16.7272 7.21058 16.5084 6.99179C16.2896 6.77299 16.1667 6.47625 16.1667 6.16683V4.31183ZM10.3333 14.3335H17.3333C17.6427 14.3335 17.9395 14.2106 18.1583 13.9918C18.3771 13.773 18.5 13.4762 18.5 13.1668C18.5 12.8574 18.3771 12.5607 18.1583 12.3419C17.9395 12.1231 17.6427 12.0002 17.3333 12.0002H10.3333C10.0239 12.0002 9.72716 12.1231 9.50837 12.3419C9.28957 12.5607 9.16666 12.8574 9.16666 13.1668C9.16666 13.4762 9.28957 13.773 9.50837 13.9918C9.72716 14.2106 10.0239 14.3335 10.3333 14.3335ZM10.3333 9.66683H11.5C11.8094 9.66683 12.1062 9.54391 12.3249 9.32512C12.5437 9.10633 12.6667 8.80958 12.6667 8.50016C12.6667 8.19074 12.5437 7.894 12.3249 7.6752C12.1062 7.45641 11.8094 7.3335 11.5 7.3335H10.3333C10.0239 7.3335 9.72716 7.45641 9.50837 7.6752C9.28957 7.894 9.16666 8.19074 9.16666 8.50016C9.16666 8.80958 9.28957 9.10633 9.50837 9.32512C9.72716 9.54391 10.0239 9.66683 10.3333 9.66683ZM12.6667 16.6668H10.3333C10.0239 16.6668 9.72716 16.7897 9.50837 17.0085C9.28957 17.2273 9.16666 17.5241 9.16666 17.8335C9.16666 18.1429 9.28957 18.4397 9.50837 18.6585C9.72716 18.8772 10.0239 19.0002 10.3333 19.0002H12.6667C12.9761 19.0002 13.2728 18.8772 13.4916 18.6585C13.7104 18.4397 13.8333 18.1429 13.8333 17.8335C13.8333 17.5241 13.7104 17.2273 13.4916 17.0085C13.2728 16.7897 12.9761 16.6668 12.6667 16.6668Z" fill="url(#paint0_linear_888_5780)"/>
                  <path d="M15.9916 25.8333H6.65828C5.73003 25.8333 4.83979 25.4646 4.18341 24.8082C3.52703 24.1518 3.15828 23.2616 3.15828 22.3333V10.6667C3.15828 10.3572 3.03537 10.0605 2.81658 9.84171C2.59778 9.62292 2.30104 9.5 1.99162 9.5C1.6822 9.5 1.38545 9.62292 1.16666 9.84171C0.947867 10.0605 0.824951 10.3572 0.824951 10.6667V22.3333C0.824951 23.8804 1.43953 25.3642 2.53349 26.4581C3.62746 27.5521 5.11119 28.1667 6.65828 28.1667H15.9916C16.301 28.1667 16.5978 28.0438 16.8166 27.825C17.0354 27.6062 17.1583 27.3094 17.1583 27C17.1583 26.6906 17.0354 26.3938 16.8166 26.175C16.5978 25.9562 16.301 25.8333 15.9916 25.8333Z" fill="url(#paint1_linear_888_5780)"/>
                  <defs>
                  <linearGradient id="paint0_linear_888_5780" x1="0.824951" y1="14.2501" x2="25.5068" y2="14.2501" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00DC82"/>
                  <stop offset="1" stop-color="#36E4DA"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_888_5780" x1="0.824951" y1="14.2501" x2="25.5068" y2="14.2501" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00DC82"/>
                  <stop offset="1" stop-color="#36E4DA"/>
                  </linearGradient>
                  </defs>
                  </svg>


let iconStep_2 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.16671 9.66683H8.50004C8.80946 9.66683 9.10621 9.54391 9.325 9.32512C9.54379 9.10633 9.66671 8.80958 9.66671 8.50016C9.66671 8.19074 9.54379 7.894 9.325 7.6752C9.10621 7.45641 8.80946 7.3335 8.50004 7.3335H6.16671C5.85729 7.3335 5.56054 7.45641 5.34175 7.6752C5.12296 7.894 5.00004 8.19074 5.00004 8.50016C5.00004 8.80958 5.12296 9.10633 5.34175 9.32512C5.56054 9.54391 5.85729 9.66683 6.16671 9.66683ZM22.5 2.66683H13.1667V1.50016C13.1667 1.19074 13.0438 0.893997 12.825 0.675205C12.6062 0.456412 12.3095 0.333496 12 0.333496C11.6906 0.333496 11.3939 0.456412 11.1751 0.675205C10.9563 0.893997 10.8334 1.19074 10.8334 1.50016V2.66683H1.50004C1.19062 2.66683 0.893875 2.78975 0.675083 3.00854C0.45629 3.22733 0.333374 3.52408 0.333374 3.8335V15.5002C0.333374 16.4284 0.702123 17.3187 1.3585 17.975C2.01488 18.6314 2.90512 19.0002 3.83337 19.0002H9.18837L6.50504 21.6718C6.39569 21.7803 6.3089 21.9093 6.24967 22.0515C6.19044 22.1937 6.15994 22.3461 6.15994 22.5002C6.15994 22.6542 6.19044 22.8067 6.24967 22.9488C6.3089 23.091 6.39569 23.22 6.50504 23.3285C6.6135 23.4378 6.74253 23.5246 6.8847 23.5839C7.02687 23.6431 7.17936 23.6736 7.33337 23.6736C7.48739 23.6736 7.63988 23.6431 7.78205 23.5839C7.92422 23.5246 8.05325 23.4378 8.16171 23.3285L10.8334 20.6452V22.5002C10.8334 22.8096 10.9563 23.1063 11.1751 23.3251C11.3939 23.5439 11.6906 23.6668 12 23.6668C12.3095 23.6668 12.6062 23.5439 12.825 23.3251C13.0438 23.1063 13.1667 22.8096 13.1667 22.5002V20.6452L15.8384 23.3285C15.9468 23.4378 16.0759 23.5246 16.218 23.5839C16.3602 23.6431 16.5127 23.6736 16.6667 23.6736C16.8207 23.6736 16.9732 23.6431 17.1154 23.5839C17.2575 23.5246 17.3866 23.4378 17.495 23.3285C17.6044 23.22 17.6912 23.091 17.7504 22.9488C17.8096 22.8067 17.8401 22.6542 17.8401 22.5002C17.8401 22.3461 17.8096 22.1937 17.7504 22.0515C17.6912 21.9093 17.6044 21.7803 17.495 21.6718L14.8117 19.0002H20.1667C21.095 19.0002 21.9852 18.6314 22.6416 17.975C23.298 17.3187 23.6667 16.4284 23.6667 15.5002V3.8335C23.6667 3.52408 23.5438 3.22733 23.325 3.00854C23.1062 2.78975 22.8095 2.66683 22.5 2.66683V2.66683ZM21.3334 15.5002C21.3334 15.8096 21.2105 16.1063 20.9917 16.3251C20.7729 16.5439 20.4761 16.6668 20.1667 16.6668H3.83337C3.52395 16.6668 3.22721 16.5439 3.00842 16.3251C2.78962 16.1063 2.66671 15.8096 2.66671 15.5002V5.00016H21.3334V15.5002ZM6.16671 14.3335H13.1667C13.4761 14.3335 13.7729 14.2106 13.9917 13.9918C14.2105 13.773 14.3334 13.4762 14.3334 13.1668C14.3334 12.8574 14.2105 12.5607 13.9917 12.3419C13.7729 12.1231 13.4761 12.0002 13.1667 12.0002H6.16671C5.85729 12.0002 5.56054 12.1231 5.34175 12.3419C5.12296 12.5607 5.00004 12.8574 5.00004 13.1668C5.00004 13.4762 5.12296 13.773 5.34175 13.9918C5.56054 14.2106 5.85729 14.3335 6.16671 14.3335Z" fill="url(#paint0_linear_888_2)"/>
                    <defs>
                    <linearGradient id="paint0_linear_888_2" x1="0.333374" y1="12.0035" x2="23.6667" y2="12.0035" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00DC82"/>
                    <stop offset="1" stop-color="#36E4DA"/>
                    </linearGradient>
                    </defs>
                    </svg>


let iconStep_3 = <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.8333 21.7349H5.83333C4.90508 21.7349 4.01484 21.3661 3.35846 20.7097C2.70208 20.0534 2.33333 19.1631 2.33333 18.2349V8.90153C2.33333 8.59211 2.21042 8.29536 1.99162 8.07657C1.77283 7.85778 1.47609 7.73486 1.16667 7.73486C0.857247 7.73486 0.560501 7.85778 0.341709 8.07657C0.122916 8.29536 0 8.59211 0 8.90153L0 18.2349C0 19.782 0.614582 21.2657 1.70854 22.3597C2.80251 23.4536 4.28624 24.0682 5.83333 24.0682H19.8333C20.1428 24.0682 20.4395 23.9453 20.6583 23.7265C20.8771 23.5077 21 23.2109 21 22.9015C21 22.5921 20.8771 22.2954 20.6583 22.0766C20.4395 21.8578 20.1428 21.7349 19.8333 21.7349ZM24.5 0.734863H8.16667C7.23841 0.734863 6.34817 1.10361 5.69179 1.75999C5.03542 2.41637 4.66667 3.30661 4.66667 4.23486V15.9015C4.66667 16.8298 5.03542 17.72 5.69179 18.3764C6.34817 19.0328 7.23841 19.4015 8.16667 19.4015H24.5C25.4283 19.4015 26.3185 19.0328 26.9749 18.3764C27.6313 17.72 28 16.8298 28 15.9015V4.23486C28 3.30661 27.6313 2.41637 26.9749 1.75999C26.3185 1.10361 25.4283 0.734863 24.5 0.734863V0.734863ZM24.0217 3.0682L17.1617 9.9282C17.0532 10.0375 16.9242 10.1243 16.782 10.1836C16.6398 10.2428 16.4873 10.2733 16.3333 10.2733C16.1793 10.2733 16.0268 10.2428 15.8847 10.1836C15.7425 10.1243 15.6135 10.0375 15.505 9.9282L8.645 3.0682H24.0217ZM25.6667 15.9015C25.6667 16.2109 25.5438 16.5077 25.325 16.7265C25.1062 16.9453 24.8094 17.0682 24.5 17.0682H8.16667C7.85725 17.0682 7.5605 16.9453 7.34171 16.7265C7.12292 16.5077 7 16.2109 7 15.9015V4.66653L13.86 11.5265C14.5163 12.182 15.4058 12.5501 16.3333 12.5501C17.2608 12.5501 18.1504 12.182 18.8067 11.5265L25.6667 4.66653V15.9015Z" fill="url(#paint0_linear_888_5782)"/>
                  <defs>
                  <linearGradient id="paint0_linear_888_5782" x1="0" y1="12.4015" x2="28" y2="12.4015" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00DC82"/>
                  <stop offset="1" stop-color="#36E4DA"/>
                  </linearGradient>
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
                        <div className='iconHolder'>{iconStep_0}</div>
                        <div>
                          <span>STEP 1</span>
                          <p>Complete the call for application and take the assessment test</p>
                        </div>
                      </div>
                    </div>

                    <div className='step'>
                      <h2> 02 </h2>
                      <div>
                        <div className='iconHolder'>{iconStep_1}</div>
                        <div>
                          <span>STEP 2</span>
                          <p>Share Personal Development Plan and Portfolio</p>
                        </div>
                      </div>
                    </div>

                    <div className='step'>
                      <h2> 03 </h2>
                      <div>
                        <div className='iconHolder'>{iconStep_2}</div>
                        <div>
                          <span>STEP 3</span>
                          <p>Physical 1-1 Interviews with the admission team</p>
                        </div>
                      </div>
                    </div>

                    <div className='step'>
                      <h2> 04 </h2>
                      <div>
                      <div className='iconHolder'>{iconStep_3}</div>
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

          <Faq />
          <FooterBanner />

        </div> 
  );
}

export default STS_Page;
