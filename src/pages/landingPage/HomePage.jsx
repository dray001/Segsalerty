// import logo from './logo.svg';
import "./homePage.scss";
// import Layout from '../../components/layout'
import { homePageData } from "../../data/homePageData";
import Ctas from "../../components/ctas/Ctas";

let heroSection = homePageData.sections[0],
  introSection = homePageData.sections[1],
  programSection = homePageData.sections[2],
  aboutUsSection = homePageData.sections[3],
  socialProofSection = homePageData.sections[4];

let icon = (
  <svg
    width="30"
    height="52"
    viewBox="0 0 30 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.7086 51.9999H0L1.93272 36.7903C3.92778 44.3341 10.9728 48.5113 16.7086 51.9999Z"
      fill="#F1F1F1"
    />
    <path
      d="M6.68889 32.9311C2.16851 28.2488 3.86539 21.3285 4.30181 17.7124C8.1049 24.0717 17.304 28.4264 24.3771 34.3587C28.2426 37.6007 28.3049 39.3464 29.6142 51.005C26.871 46.2667 12.4483 38.8969 6.68889 32.9311Z"
      fill="#F1F1F1"
    />
    <path
      d="M26.8711 28.498C24.1902 20.9542 16.8958 14.8443 10.9106 12.3505C13.4044 11.9764 19.7138 11.7021 25.0007 13.5974L26.8711 28.498Z"
      fill="#F1F1F1"
    />
    <path
      d="M8.55206 8.45597L8.36377 10.7459C14.6902 9.04481 20.1422 9.95529 22.1088 10.6641L21.7949 8.21061C16.5731 6.77124 10.8115 7.85623 8.55206 8.45597Z"
      fill="#F1F1F1"
    />
    <path
      d="M11.626 5.30572L11.5 6.99732C13.8689 6.2809 17.4852 6.56612 18.9973 6.79828L18.8713 5.30572C16.6536 4.74849 13.1171 5.07354 11.626 5.30572Z"
      fill="#F1F1F1"
    />
    <rect x="14.6368" width="1.49945" height="3.99854" fill="#F1F1F1" />
  </svg>
);

let list = () => {
  const logos = [];

  for (let i = 0; i < 10; i++) {
    logos.push(
      <div className="logoInstance">
        <img src={aboutUsSection.sections[2].techLogos[i].image} alt="" />
        <span>{aboutUsSection.sections[2].techLogos[i].name}</span>
      </div>
    );
  }

  return logos;
};

const HomePage = () => {
  return (
    <div className="homePageWrapper desktopMaxWidth">
      <section className="heroSection section_flex">
        <div className="heroSectionInner ">
          <div className="contentWrapper">
            <h1
              dangerouslySetInnerHTML={{ __html: heroSection.heading }}
              style={{ maxWidth: 734 }}
            />
            <p className="heroDescription">{heroSection.para}</p>
            <div className="ctaWrapper">
              <a className="primaryButton" href={heroSection.url[0]}>
                {heroSection.cta[0]}
              </a>
              <a className="secondaryButton" href={heroSection.url[1]}>
                {heroSection.cta[1]}
              </a>
            </div>
          </div>

          <div className="imageWrapper">
            <img src={heroSection.image} alt="img" />
          </div>
        </div>
      </section>

      <section className="introSection ">
        <div className="contentWrapper">
          <h4 dangerouslySetInnerHTML={{ __html: introSection.heading }} />
          <p>{introSection.para}</p>
          <div className="ctaWrapper">
            <a className="primaryButton" href={introSection.url}>
              {introSection.cta}
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5803 4.51195L10.2902 2.22653V2.21654C9.89023 1.81735 9.89023 1.18861 10.2902 0.799397C10.6802 0.400201 11.3102 0.400201 11.7102 0.799397L15.7102 4.79136C15.9461 5.0207 16.0393 5.34492 15.9899 5.65148C15.9516 5.91804 15.8066 6.15147 15.6 6.30702L11.6995 10.1996C11.5095 10.3792 11.2495 10.489 10.9895 10.489L10.9995 10.5C10.7295 10.5 10.4695 10.3902 10.2895 10.2106C9.88954 9.82137 9.88954 9.18265 10.2795 8.79344V8.78345L12.5596 6.50793H1C0.44 6.50793 0 6.05883 0 5.50994C0 4.95106 0.44 4.51195 1 4.51195H12.5803Z"
                  fill="#F1F1F1"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="programSection section_with_subSections">
        <h5 className="sectionLabel">{programSection.label}</h5>

        <div className="srs should_Flex ">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: programSection.sections[0].heading,
              }}
            />
            <p>{programSection.sections[0].para}</p>
            <div className="ctaWrapper">
              <form className="footer_form">
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder={programSection.sections[0].placeHolder}
                />
                <button type="submit">{programSection.sections[0].cta}</button>
              </form>
            </div>
          </div>

          <div className="imageWrapper">
            <div className="imageWrappeContent">
              <div>
                {icon}
                <h6
                  dangerouslySetInnerHTML={{
                    __html: programSection.sections[0].imageContent.title,
                  }}
                />
              </div>
              <p>{programSection.sections[0].imageContent.des}</p>
            </div>
          </div>
        </div>

        <div className="sts should_Flex ">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: programSection.sections[1].heading,
              }}
            />
            <p>{programSection.sections[1].para}</p>
            <div className="ctaWrapper">
              <a
                className="primaryButton"
                href={programSection.sections[1].url[0]}
              >
                {programSection.sections[1].cta[0]}
              </a>
              <a
                className="secondaryButton"
                href={programSection.sections[1].url[1]}
              >
                {programSection.sections[1].cta[1]}
              </a>
            </div>
          </div>

          <div className="imageWrapper">
            <div className="imageWrappeContent">
              <div>
                {icon}
                <h6
                  dangerouslySetInnerHTML={{
                    __html: programSection.sections[1].imageContent.title,
                  }}
                />
              </div>
              <p>{programSection.sections[1].imageContent.des}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutUsSection section_with_subSections ">
        <h5 className="sectionLabel">{aboutUsSection.label}</h5>

        <div className=" should_stack">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: aboutUsSection.sections[0].heading,
              }}
            />
            <p>{aboutUsSection.sections[0].para}</p>
          </div>

          <div className="reasons">
            {aboutUsSection.sections[0].reasons.map((item) => {
              return (
                <div className="reasons_card">
                  <div>
                    <img src={item.icon} alt="" />
                    <h5>{item.subHeading}</h5>
                  </div>

                  <p>{item.subPara}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ourMission should_stack">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: aboutUsSection.sections[1].heading,
              }}
            />
            <p>{aboutUsSection.sections[1].para}</p>
            <div className="ctaWrapper">
              <a className="primaryButton" href={introSection.url}>
                {aboutUsSection.sections[1].cta}
                <svg
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5803 4.51195L10.2902 2.22653V2.21654C9.89023 1.81735 9.89023 1.18861 10.2902 0.799397C10.6802 0.400201 11.3102 0.400201 11.7102 0.799397L15.7102 4.79136C15.9461 5.0207 16.0393 5.34492 15.9899 5.65148C15.9516 5.91804 15.8066 6.15147 15.6 6.30702L11.6995 10.1996C11.5095 10.3792 11.2495 10.489 10.9895 10.489L10.9995 10.5C10.7295 10.5 10.4695 10.3902 10.2895 10.2106C9.88954 9.82137 9.88954 9.18265 10.2795 8.79344V8.78345L12.5596 6.50793H1C0.44 6.50793 0 6.05883 0 5.50994C0 4.95106 0.44 4.51195 1 4.51195H12.5803Z"
                    fill="#F1F1F1"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="missionMetrics">
            {aboutUsSection.sections[1].metrics.map((item) => {
              return (
                <div>
                  <h2>{item.number}</h2>
                  <p dangerouslySetInnerHTML={{ __html: item.des }} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="devStacks should_stack">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: aboutUsSection.sections[2].heading,
              }}
            />
            <p>{aboutUsSection.sections[2].para}</p>
          </div>

          <div className="logoWrapper">
            <div className="logoGroup">{list()}</div>
            <div className="logoGroup">{list()}</div>
            <div className="logoGroup">{list()}</div>
          </div>
        </div>
      </section>

      <section className="socialProofSection section_with_subSections ">
        <h5 className="sectionLabel">{socialProofSection.label}</h5>

        <div className="successStories should_Flex">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: socialProofSection.sections[0].heading,
              }}
            />
            <p>{socialProofSection.sections[0].para}</p>
            <div className="ctaWrapper">
              <a
                className="primaryButton"
                href={socialProofSection.sections[0].url[0]}
              >
                Join
              </a>
              <a
                className="secondaryButton"
                href={socialProofSection.sections[0].url[1]}
              >
                {socialProofSection.sections[0].cta[1]}
              </a>
            </div>
          </div>

          <div className="metrics">
            {socialProofSection.sections[0].metrics.map((item) => {
              return <p dangerouslySetInnerHTML={{ __html: item }} />;
            })}
          </div>
        </div>

        <div className="membersThoughts should_stack">
          <div className="contentWrapper">
            <h4
              dangerouslySetInnerHTML={{
                __html: socialProofSection.sections[1].heading,
              }}
            />
            <p>{socialProofSection.sections[1].para}</p>
          </div>

          <div className="testimonies">
            {socialProofSection.sections[1].testimonies.map((item) => {
              return (
                <div className="testimony">
                  <p> {item.testimony} </p>

                  <div className="author">
                    <img src={item.image} alt="" />
                    <div>
                      <span>{item.profession[0]}</span>
                      <span>{item.profession[1]}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Ctas />
    </div>
  );
};

export default HomePage;
