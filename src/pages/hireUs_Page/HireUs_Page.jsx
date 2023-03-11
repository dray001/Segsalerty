import React from "react";
import "./hireUs_Page.scss";

// component imports
import FooterBanner from "../../components/footerBanner/FooterBanner";
import Faq from "../../components/faq/Faq";

// image imports
import crossImg from "../../images/hireUsPage/cross.png";
import frontEndImg from "../../images/hireUsPage/frontEnd_skills.png";
import backEndImg from "../../images/hireUsPage/backEnd_skills.png";
import designImg from "../../images/hireUsPage/design_skills.png";
import QAImg from "../../images/hireUsPage/QA_skills.png";
import dataImg from "../../images/hireUsPage/data_skills.png";
import managementImg from "../../images/hireUsPage/management_skills.png";
import devOpsImg from "../../images/hireUsPage/devOps_skills.png";
import appDevImg from "../../images/hireUsPage/AppDev_skills.png";
import uxImg from "../../images/hireUsPage/UX_skills.png";

let iconStep_0 = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.8815 8.50001C23.1122 8.50001 23.3378 8.43159 23.5297 8.30339C23.7215 8.1752 23.8711 7.99299 23.9594 7.77981C24.0477 7.56663 24.0708 7.33205 24.0258 7.10574C23.9807 6.87943 23.8696 6.67155 23.7065 6.50838C23.5433 6.34522 23.3354 6.23411 23.1091 6.18909C22.8828 6.14408 22.6482 6.16718 22.435 6.25548C22.2219 6.34379 22.0396 6.49332 21.9115 6.68518C21.7833 6.87703 21.7148 7.1026 21.7148 7.33334C21.7148 7.64276 21.8378 7.93951 22.0565 8.1583C22.2753 8.37709 22.5721 8.50001 22.8815 8.50001ZM19.3815 8.50001C19.6122 8.50001 19.8378 8.43159 20.0297 8.30339C20.2215 8.1752 20.3711 7.99299 20.4594 7.77981C20.5477 7.56663 20.5708 7.33205 20.5258 7.10574C20.4807 6.87943 20.3696 6.67155 20.2065 6.50838C20.0433 6.34522 19.8354 6.23411 19.6091 6.18909C19.3828 6.14408 19.1482 6.16718 18.935 6.25548C18.7219 6.34379 18.5396 6.49332 18.4115 6.68518C18.2833 6.87703 18.2148 7.1026 18.2148 7.33334C18.2148 7.64276 18.3378 7.93951 18.5565 8.1583C18.7753 8.37709 19.0721 8.50001 19.3815 8.50001ZM15.8815 8.50001C16.1122 8.50001 16.3378 8.43159 16.5297 8.30339C16.7215 8.1752 16.8711 7.99299 16.9594 7.77981C17.0477 7.56663 17.0708 7.33205 17.0258 7.10574C16.9807 6.87943 16.8696 6.67155 16.7065 6.50838C16.5433 6.34522 16.3354 6.23411 16.1091 6.18909C15.8828 6.14408 15.6482 6.16718 15.435 6.25548C15.2219 6.34379 15.0396 6.49332 14.9115 6.68518C14.7833 6.87703 14.7148 7.1026 14.7148 7.33334C14.7148 7.48655 14.745 7.63826 14.8036 7.77981C14.8623 7.92135 14.9482 8.04997 15.0565 8.1583C15.1649 8.26664 15.2935 8.35257 15.435 8.4112C15.5766 8.46983 15.7283 8.50001 15.8815 8.50001V8.50001ZM21.0615 13.1667C20.8048 13.1667 20.5365 13.085 20.2798 13.0267C19.7601 12.9121 19.2493 12.7601 18.7515 12.5717C18.2103 12.3748 17.6153 12.385 17.0812 12.6004C16.5471 12.8158 16.1114 13.2211 15.8582 13.7383L15.6015 14.2633C14.4634 13.6285 13.4157 12.8437 12.4865 11.93C11.5773 11.0013 10.7929 9.95804 10.1532 8.82668L10.6665 8.50001C11.1838 8.24675 11.5891 7.81113 11.8045 7.27698C12.0198 6.74284 12.0301 6.14791 11.8332 5.60668C11.6479 5.10783 11.4959 4.59727 11.3782 4.07834C11.3198 3.81001 11.2732 3.55334 11.2382 3.28501C11.0965 2.46323 10.6661 1.71904 10.0244 1.18645C9.38272 0.653868 8.57198 0.367886 7.73817 0.380009H4.23817C3.74496 0.379363 3.25718 0.482965 2.80681 0.684023C2.35644 0.885082 1.95364 1.17906 1.62484 1.54668C1.29081 1.92292 1.04182 2.36676 0.894849 2.84794C0.747877 3.32912 0.706374 3.83634 0.773169 4.33501C1.38767 9.21989 3.61094 13.7612 7.0923 17.2425C10.5737 20.7239 15.115 22.9472 19.9998 23.5617C20.1513 23.5732 20.3034 23.5732 20.4548 23.5617C21.3831 23.5617 22.2733 23.1929 22.9297 22.5366C23.5861 21.8802 23.9548 20.9899 23.9548 20.0617V16.5617C23.9427 15.7476 23.6472 14.9632 23.1191 14.3435C22.591 13.7239 21.8634 13.3077 21.0615 13.1667V13.1667ZM21.6332 20.1667C21.6351 20.3358 21.6002 20.5033 21.531 20.6576C21.4617 20.8119 21.3597 20.9493 21.2321 21.0603C21.1045 21.1712 20.9543 21.2531 20.7919 21.3003C20.6294 21.3474 20.4587 21.3587 20.2915 21.3333C15.9353 20.7649 11.8881 18.7761 8.7765 15.675C5.66733 12.5423 3.68195 8.46902 3.12984 4.09001C3.10449 3.9189 3.11751 3.74429 3.16796 3.57884C3.2184 3.41338 3.30501 3.26121 3.4215 3.13334C3.52953 3.01036 3.66222 2.91148 3.81096 2.84314C3.9597 2.7748 4.12116 2.73853 4.28484 2.73668H7.78484C8.05614 2.73064 8.32106 2.81937 8.534 2.98759C8.74694 3.15581 8.89458 3.39301 8.9515 3.65834C8.99817 3.97723 9.0565 4.29223 9.1265 4.60334C9.26128 5.21834 9.44064 5.82272 9.66317 6.41168L8.02984 7.17001C7.89018 7.23408 7.76456 7.32511 7.66019 7.43787C7.55581 7.55063 7.47474 7.68289 7.42162 7.82707C7.3685 7.97125 7.34439 8.1245 7.35066 8.27802C7.35693 8.43154 7.39347 8.58231 7.45817 8.72168C9.13724 12.3182 12.0283 15.2093 15.6248 16.8883C15.9089 17.005 16.2275 17.005 16.5115 16.8883C16.801 16.7806 17.036 16.5624 17.1648 16.2817L17.8998 14.6483C18.503 14.864 19.1185 15.0432 19.7432 15.185C20.0465 15.255 20.3732 15.3133 20.6882 15.36C20.9513 15.4193 21.1859 15.5679 21.3518 15.7806C21.5177 15.9933 21.6048 16.257 21.5982 16.5267L21.6332 20.1667Z"
      fill="url(#paint0_linear_830_496)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_830_496"
        x1="0.742188"
        y1="11.975"
        x2="24.0482"
        y2="11.975"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00DC82" />
        <stop offset="1" stop-color="#36E4DA" />
      </linearGradient>
    </defs>
  </svg>
);

let iconStep_1 = (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.1668 0.666626H3.8335C2.90524 0.666626 2.015 1.03538 1.35862 1.69175C0.702245 2.34813 0.333496 3.23837 0.333496 4.16663V15.8333C0.333496 16.7616 0.702245 17.6518 1.35862 18.3082C2.015 18.9645 2.90524 19.3333 3.8335 19.3333H20.1668C21.0951 19.3333 21.9853 18.9645 22.6417 18.3082C23.2981 17.6518 23.6668 16.7616 23.6668 15.8333V4.16663C23.6668 3.23837 23.2981 2.34813 22.6417 1.69175C21.9853 1.03538 21.0951 0.666626 20.1668 0.666626V0.666626ZM19.6885 2.99996L12.8285 9.85996C12.72 9.96931 12.591 10.0561 12.4488 10.1153C12.3067 10.1746 12.1542 10.2051 12.0002 10.2051C11.8461 10.2051 11.6937 10.1746 11.5515 10.1153C11.4093 10.0561 11.2803 9.96931 11.1718 9.85996L4.31183 2.99996H19.6885ZM21.3335 15.8333C21.3335 16.1427 21.2106 16.4395 20.9918 16.6583C20.773 16.877 20.4762 17 20.1668 17H3.8335C3.52408 17 3.22733 16.877 3.00854 16.6583C2.78975 16.4395 2.66683 16.1427 2.66683 15.8333V4.64496L9.52683 11.505C10.1831 12.1604 11.0727 12.5285 12.0002 12.5285C12.9277 12.5285 13.8172 12.1604 14.4735 11.505L21.3335 4.64496V15.8333Z"
      fill="url(#paint0_linear_855_1249)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_855_1249"
        x1="0.333496"
        y1="9.99996"
        x2="23.6668"
        y2="9.99996"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00DC82" />
        <stop offset="1" stop-color="#36E4DA" />
      </linearGradient>
    </defs>
  </svg>
);

let iconStep_2 = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.16683 9.66671H8.50016C8.80958 9.66671 9.10633 9.54379 9.32512 9.325C9.54391 9.10621 9.66683 8.80946 9.66683 8.50004C9.66683 8.19062 9.54391 7.89388 9.32512 7.67508C9.10633 7.45629 8.80958 7.33337 8.50016 7.33337H6.16683C5.85741 7.33337 5.56066 7.45629 5.34187 7.67508C5.12308 7.89388 5.00016 8.19062 5.00016 8.50004C5.00016 8.80946 5.12308 9.10621 5.34187 9.325C5.56066 9.54379 5.85741 9.66671 6.16683 9.66671ZM22.5002 2.66671H13.1668V1.50004C13.1668 1.19062 13.0439 0.893875 12.8251 0.675083C12.6063 0.45629 12.3096 0.333374 12.0002 0.333374C11.6907 0.333374 11.394 0.45629 11.1752 0.675083C10.9564 0.893875 10.8335 1.19062 10.8335 1.50004V2.66671H1.50016C1.19074 2.66671 0.893997 2.78962 0.675205 3.00842C0.456412 3.22721 0.333496 3.52395 0.333496 3.83337V15.5C0.333496 16.4283 0.702245 17.3185 1.35862 17.9749C2.015 18.6313 2.90524 19 3.8335 19H9.1885L6.50516 21.6717C6.39581 21.7802 6.30902 21.9092 6.24979 22.0514C6.19056 22.1935 6.16006 22.346 6.16006 22.5C6.16006 22.6541 6.19056 22.8065 6.24979 22.9487C6.30902 23.0909 6.39581 23.2199 6.50516 23.3284C6.61362 23.4377 6.74265 23.5245 6.88482 23.5837C7.02699 23.643 7.17948 23.6735 7.3335 23.6735C7.48751 23.6735 7.64 23.643 7.78217 23.5837C7.92434 23.5245 8.05337 23.4377 8.16183 23.3284L10.8335 20.645V22.5C10.8335 22.8095 10.9564 23.1062 11.1752 23.325C11.394 23.5438 11.6907 23.6667 12.0002 23.6667C12.3096 23.6667 12.6063 23.5438 12.8251 23.325C13.0439 23.1062 13.1668 22.8095 13.1668 22.5V20.645L15.8385 23.3284C15.947 23.4377 16.076 23.5245 16.2182 23.5837C16.3603 23.643 16.5128 23.6735 16.6668 23.6735C16.8208 23.6735 16.9733 23.643 17.1155 23.5837C17.2577 23.5245 17.3867 23.4377 17.4952 23.3284C17.6045 23.2199 17.6913 23.0909 17.7505 22.9487C17.8098 22.8065 17.8403 22.6541 17.8403 22.5C17.8403 22.346 17.8098 22.1935 17.7505 22.0514C17.6913 21.9092 17.6045 21.7802 17.4952 21.6717L14.8118 19H20.1668C21.0951 19 21.9853 18.6313 22.6417 17.9749C23.2981 17.3185 23.6668 16.4283 23.6668 15.5V3.83337C23.6668 3.52395 23.5439 3.22721 23.3251 3.00842C23.1063 2.78962 22.8096 2.66671 22.5002 2.66671V2.66671ZM21.3335 15.5C21.3335 15.8095 21.2106 16.1062 20.9918 16.325C20.773 16.5438 20.4762 16.6667 20.1668 16.6667H3.8335C3.52408 16.6667 3.22733 16.5438 3.00854 16.325C2.78975 16.1062 2.66683 15.8095 2.66683 15.5V5.00004H21.3335V15.5ZM6.16683 14.3334H13.1668C13.4762 14.3334 13.773 14.2105 13.9918 13.9917C14.2106 13.7729 14.3335 13.4761 14.3335 13.1667C14.3335 12.8573 14.2106 12.5605 13.9918 12.3417C13.773 12.123 13.4762 12 13.1668 12H6.16683C5.85741 12 5.56066 12.123 5.34187 12.3417C5.12308 12.5605 5.00016 12.8573 5.00016 13.1667C5.00016 13.4761 5.12308 13.7729 5.34187 13.9917C5.56066 14.2105 5.85741 14.3334 6.16683 14.3334Z"
      fill="url(#paint0_linear_830_2260)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_830_2260"
        x1="0.333496"
        y1="12.0034"
        x2="23.6668"
        y2="12.0034"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00DC82" />
        <stop offset="1" stop-color="#36E4DA" />
      </linearGradient>
    </defs>
  </svg>
);

let iconStep_3 = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.6669 6.44673C23.6677 6.29319 23.6383 6.14098 23.5803 5.99884C23.5222 5.85669 23.4366 5.72741 23.3285 5.61839L18.3818 0.671727C18.2728 0.563599 18.1436 0.478052 18.0014 0.419994C17.8593 0.361935 17.7071 0.332506 17.5535 0.333394C17.4 0.332506 17.2478 0.361935 17.1056 0.419994C16.9635 0.478052 16.8342 0.563599 16.7252 0.671727L13.4235 3.97339L0.671849 16.7251C0.563721 16.8341 0.478175 16.9634 0.420116 17.1055C0.362057 17.2476 0.332628 17.3999 0.333516 17.5534V22.5001C0.333516 22.8095 0.456432 23.1062 0.675224 23.325C0.894017 23.5438 1.19076 23.6667 1.50018 23.6667H6.44685C6.6101 23.6756 6.77339 23.6501 6.92614 23.5918C7.07889 23.5335 7.21768 23.4438 7.33352 23.3284L20.0152 10.5767L23.3285 7.33339C23.435 7.22032 23.5218 7.09018 23.5852 6.94839C23.5964 6.8554 23.5964 6.76139 23.5852 6.66839C23.5906 6.61409 23.5906 6.55937 23.5852 6.50506L23.6669 6.44673ZM5.96852 21.3334H2.66685V18.0317L14.2519 6.44673L17.5535 9.74839L5.96852 21.3334ZM19.1985 8.10339L15.8969 4.80173L17.5535 3.15673L20.8435 6.44673L19.1985 8.10339Z"
      fill="url(#paint0_linear_830_834)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_830_834"
        x1="0.333496"
        y1="12.0009"
        x2="23.6669"
        y2="12.0009"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00DC82" />
        <stop offset="1" stop-color="#36E4DA" />
      </linearGradient>
    </defs>
  </svg>
);

const HireUs = () => {
  return (
    <div className="hireUsWrapper ">
      <section className="client_Section">
        <div className="contentWrapper">
          <h1> Become a client </h1>
          <p>
            Get highly experienced engineers that can help achieve your
            organization’s goals in due time. What is your company looking to
            achieve? What type of talent do you need? Save time, we have
            skill-equipped engineers in line with your goals.
          </p>
        </div>
      </section>

      <section className="hireUs_Section">
        <div>
          <h4>HIRE US</h4>
          <div className="contentWrapper">
            <h5>Let us help you build your product </h5>
            <p>
              We are Segsalerty Talent support an NGO platform set up for the
              purpose of developing, improving, and guiding tech talents,
              creating a platform for growth and development, and providing them
              with adequate resources to facilitate and empower them in their
              career path.
            </p>
            <p>
              Our highly trained engineers take your business ideas to release
              by using the best frameworks in project development. Would you
              like to give us a trial?
            </p>
            <div className="ctaWrapper">
              <a className="primaryButton" href="#">
                Become a client
              </a>
              <a className="secondaryButton" href="#">
                View skills
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contract_Section section_with_subSections">
        <h5 className="sectionLabel">Contract steps for hiring our talent</h5>
        <div className="processWrapper should_Flex">
          <div className="steps">
            <div className="step">
              <h2> 01 </h2>
              <div>
                {iconStep_0}
                <div>
                  <span>STEP 1</span>
                  <p>
                    A 30 minutes exploratory call is set up with the founder
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <h2> 02 </h2>
              <div>
                {iconStep_1}
                <div>
                  <span>STEP 2</span>
                  <p>
                    A feedback email will be sent to you in 3-4 days with
                    details of the talent(s) for hire
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <h2> 03 </h2>
              <div>
                {iconStep_2}
                <div>
                  <span>STEP 3</span>
                  <p>
                    A 30 minutes interview call with the talent will follow thus
                  </p>
                </div>
              </div>
            </div>

            <div className="step">
              <h2> 04 </h2>
              <div>
                {iconStep_3}
                <div>
                  <span>STEP 4</span>
                  <p>
                    A contract will be signed by both parties upon agreement
                    with costs and hiring model.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="imageWrapper">
            <img src={crossImg} alt="img" />
          </div>
        </div>
      </section>

      <section className="techSkillsSection section_with_subSections">
        <div className="techSkillWrapper should_stack">
          <div className="contentWrapper">
            <h4> Our talented tech skills </h4>
            <p>
              We have a large number of talented developers with different
              skills in the tech space
            </p>
          </div>

          <div className="skillCards">
            <SkillCard
              image={frontEndImg}
              title="Frontend Eevelopers"
              des="Upskill yourself with different programming languages and frameworks like javascript, HTML,CSS, vue, react, nextjs by being a part of a community where great tech minds convert data to a graphical interface so that users can view and interact with the data."
            />

            <SkillCard
              image={backEndImg}
              title="Backend Engineers"
              des="Interested in database creation,integration and management? Do you work with backend frameworks to build server side software? Are you generally interested in backend development? This is the right place to be."
            />

            <SkillCard
              image={designImg}
              title="Product Designers"
              des="Upskill yourself with different programming languages and frameworks like javascript, HTML,CSS, vue, react, nextjs by being a part of a community where great tech minds convert data to a graphical interface so that users can view and interact with the data."
            />

            <SkillCard
              image={QAImg}
              title="QA Engineers"
              des="Upskill yourself with different programming languages and frameworks like javascript, HTML,CSS, vue, react, nextjs by being a part of a community where great tech minds convert data to a graphical interface so that users can view and interact with the data.
                "
            />

            <SkillCard
              image={dataImg}
              title="Data Scientists"
              des="Interested in database creation,integration and management? Do you work with backend frameworks to build server side software? Are you generally interested in backend development? This is the right place to be."
            />

            <SkillCard
              image={managementImg}
              title="Product Managers"
              des="Upskill yourself with different programming languages and frameworks like javascript, HTML,CSS, vue, react, nextjs by being a part of a community where great tech minds convert data to a graphical interface so that users can view and interact with the data.
                "
            />

            <SkillCard
              image={devOpsImg}
              title="Dev Ops"
              des="Upskill yourself with different programming languages and frameworks like javascript, HTML,CSS, vue, react, nextjs by being a part of a community where great tech minds convert data to a graphical interface so that users can view and interact with the data.
                "
            />

            <SkillCard
              image={appDevImg}
              title="Mobile App Developers"
              des="Interested in database creation,integration and management? Do you work with backend frameworks to build server side software? Are you generally interested in backend development? This is the right place to be."
            />

            <SkillCard
              image={uxImg}
              title="UX writers & researchers"
              des="Upskill yourself with different programming languages and frameworks like javascript, HTML,CSS, vue, react, nextjs by being a part of a community where great tech minds convert data to a graphical interface so that users can view and interact with the data.
                "
            />
          </div>
        </div>
      </section>

      <Faq />
      <FooterBanner />
    </div>
  );
};

let SkillCard = ({ image, title, des }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div>
        <h5>{title}</h5>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default HireUs;
