// social media link icons import

import towerboxImg from '../images/landingPage/towerBox.png'
import bannerImg from '../images/landingPage/bannerImg.png'
import seg_resourcesImg from '../images/landingPage/seg_Resources.png'
import seg_talentSupportImg from '../images/landingPage/seg_TalentSupport.png'

// 3d icons import
import puzzleImg from '../images/brandAssets/3dIcons/puzzle.png'
import toolImg from '../images/brandAssets/3dIcons/tool.png'
import verifiedImg from '../images/brandAssets/3dIcons/verified.png'

// testimony images
import testimonyImg1 from '../images/landingPage/testimony/testimony_1.png'
import testimonyImg2 from '../images/landingPage/testimony/testimony_2.png'
import testimonyImg3 from '../images/landingPage/testimony/testimony_3.png'

// techLogos
import adobeImg from '../images/landingPage/techLogos/Adobe.png'
import androidImg from '../images/landingPage/techLogos/Android.png'
import angularImg from '../images/landingPage/techLogos/Angular.png'
import atlassianImg from '../images/landingPage/techLogos/Atlassian.png'
import awsImg from '../images/landingPage/techLogos/aws.png'
import cSharpImg from '../images/landingPage/techLogos/c#.png'
import clojureImg from '../images/landingPage/techLogos/Clojure.png'
import figmaImg from '../images/landingPage/techLogos/figma.png'
import githubImg from '../images/landingPage/techLogos/Github.png'
import gaImg from '../images/landingPage/techLogos/G_A.png'
import golangImg from '../images/landingPage/techLogos/golang.png'
import googleImg from '../images/landingPage/techLogos/Google.png'
import iosImg from '../images/landingPage/techLogos/ios.png'
import javaImg from '../images/landingPage/techLogos/java.png'
import javascriptImg from '../images/landingPage/techLogos/javascript.png'
import jiraImg from '../images/landingPage/techLogos/jira.png'
import miroImg from '../images/landingPage/techLogos/Miro.png'
import mongodbImg from '../images/landingPage/techLogos/MongoDB.png'
import nodejsImg from '../images/landingPage/techLogos/nodeJs.png'
import pythonImg from '../images/landingPage/techLogos/Python.png'
import react0Img from '../images/landingPage/techLogos/react_0.png'
import react1Img from '../images/landingPage/techLogos/react_1.png'
import swiftuiImg from '../images/landingPage/techLogos/SwiftUI.png'
import typescriptImg from '../images/landingPage/techLogos/TypeScript.png'
import vueImg from '../images/landingPage/techLogos/vue.png'


export const homePageData = {
sections: [
        {
            label: 'hero',
            heading: `A Community of <span> Gifted </span> Techies`,
            para: 'We are a thriving community of highly-skilled young Africans building tech-driven solutions for the advancement of our continent.',
            cta: ['Join Us','View gallery'],
            image: towerboxImg,
            url: ['#JoinUs','#ViewGallery']
        },

        {
            heading: 'What is Segsalerty?',
            para: 'We partner with individuals and organisations willing to build innovative solutions leveraging an agile team of young energetic and disciplined tech professionals.',
            cta: 'Find out more',
            image: bannerImg,
            url: '#'
        },

        {
            label: 'View our programmes',
            sections:   [
                            {
                                heading: 'Segsalerty Resources (SRS)',
                                para: 'A Foundation of Segsalerty that provides the necessary support for skilled talents to fly. We provide a conducive environment for you to nurture your skills, build your portfolio and get your first job. ',
                                placeHolder: 'Enter email address',
                                cta: 'Join the network',
                                image: seg_resourcesImg,
                                imageContent: {
                                    title: 'SEGSALERTY <br/> RESOURCES',
                                    des: 'A community of tech developers, enthusiasts, and professionals.'
                                },
                                url: '#'
                            },
                            {
                                heading: 'Segsalerty Talent Support Initiative (STS)',
                                para: 'A Foundation of Segsalerty that provides the necessary support for skilled talents to fly. We provide a conducive environment for you to nurture your skills, build your portfolio and get your first job.',
                                placeHolder: 'Enter email address',
                                cta: ['Register','Learn More'],
                                url: ['#','#'],
                                image: seg_talentSupportImg,
                                imageContent: {
                                    title: `SEGSALERTY <br/> TALENT <br/> SUPPORT`,
                                    des: 'A support foundation for grooming and developing tech talents live and all for free.'
                                },
                            }

                        ]
        },

        {
            label: 'What about us?',
            sections:   [
                            {
                                heading: 'Why Segsalerty?',
                                para: 'We help you source and vet talents suitable for the role in your company while allowing you to concentrate on important managerial activities.',
                                reasons: [
                                    {
                                        icon: puzzleImg,
                                        subHeading: 'A platform for accelerating talents',
                                        subPara: 'We offer you the opportunity to work, and network with talents of diverse skills while providing progressive development and exceptional career journey.',
                                    },
                                    {
                                        icon: toolImg,
                                        subHeading: 'We create global skilled talents',
                                        subPara: 'With our highly vetted mentors and regular skill in-house challenges, our Engineers have stood the test of time in building quality software solutions.',
                                    },
                                    {
                                        icon: verifiedImg,
                                        subHeading: 'Professional and experienced mentors',
                                        subPara: 'Our mentors are equipped with knowledge to guide you through early journey in tech to professional level as well as providing moral support.',
                                    }
                                ]
                            },
                            {
                                heading: 'Our Mission',
                                para: 'To develop emerging minds and foster growth by eliminating inferiority complex and imposter syndrome within tech talents, end learning gaps and groom them to become world-class developers.',
                                cta: 'Find out more',
                                url: '#',
                                metrics: [
                                    {
                                        number: '1K+',
                                        des: `Nigerian tech employments`
                                    },
                                    {
                                        number: '12K+',
                                        des: `Bankable technical skills`
                                    },
                                    {
                                        number: '1K+',
                                        des: `Classes in Nigeria accessible <span> for free </span>`
                                    },
                                ] 
                            },
                            {
                                heading: 'Our development stacks',
                                para: 'We have a large number of talented developers, designers, content writers and product managers across stacks in the tech space',
                                techLogos: [
                                    {
                                        name: 'Adobe',
                                        image: adobeImg
                                    },
                                    {
                                        name: 'Android',
                                        image: androidImg
                                    },
                                    {
                                        name: 'Angular',
                                        image: angularImg
                                    },
                                    {
                                        name: 'Atlassian',
                                        image: atlassianImg
                                    },
                                    {
                                        name: 'AWS',
                                        image: awsImg
                                    },
                                    {
                                        name: 'C#',
                                        image: cSharpImg
                                    },
                                    {
                                        name: 'Clojure',
                                        image: clojureImg
                                    },
                                    {
                                        name: 'Figma',
                                        image: figmaImg
                                    },
                                    {
                                        name: 'G.A.',
                                        image: gaImg
                                    },
                                    {
                                        name: 'Github',
                                        image: githubImg
                                    },
                                    {
                                        name: 'Golang',
                                        image: golangImg
                                    },
                                    {
                                        name: 'Google',
                                        image: googleImg
                                    },
                                    {
                                        name: 'IOS',
                                        image: iosImg
                                    },
                                    {
                                        name: 'Java',
                                        image: javaImg
                                    },
                                    {
                                        name: 'Javascript',
                                        image: javascriptImg
                                    },
                                    {
                                        name: 'Jira',
                                        image: jiraImg
                                    },
                                    {
                                        name: 'Miro',
                                        image: miroImg
                                    },
                                    {
                                        name: 'MongoDB',
                                        image: mongodbImg
                                    },
                                    {
                                        name: 'Node.Js',
                                        image: nodejsImg
                                    },
                                    {
                                        name: 'Python',
                                        image: pythonImg
                                    },
                                    {
                                        name: 'React',
                                        image: react0Img
                                    },
                                    {
                                        name: 'React Native',
                                        image: react1Img
                                    },
                                    {
                                        name: 'Swift UI',
                                        image: swiftuiImg
                                    },
                                    {
                                        name: 'TypeScript',
                                        image: typescriptImg
                                    },
                                    {
                                        name: 'Vue',
                                        image: vueImg
                                    },

                                    
                                ] 
                            }
                        ]
        },

        {
            label: 'View our social proofs',
            sections:   [
                            {
                                heading: 'Numbers are telling our success stories',
                                para: 'Our achievement in the journey depicted in numbers. We have a large number of talented developers, designers, content writers and product managers across stacks in the tech space.',
                                cta: ['Join the network','View gallery'],
                                url: ['#','#'],
                                metrics: [
                                   `<span> 10+ </span> Happy clients|`,
                                   `<span> 10+ </span> Completed projects||`,
                                   `<span> 300+ </span> Dedicated members|`,
                                   `<span> 30+ </span> Talent hired|`
                                ]
                            },
                            {
                                heading: 'What our members are saying',
                                para: 'Don’t take our words for it directly. See what our students have to say about their experience with segsalerty resources and talent support.',
                                testimonies: [
                                    {
                                        testimony: 'A community that streamlines your tech hurdles by either becoming a part of us or partnering to build amazing products. Are you in search of skilled talents for your projects? We are at your beck and call.',
                                        profession: ['Joyce Eboh','Product Designer, Cova Inc.'],
                                        image: testimonyImg1,
                                    },
                                    {
                                        testimony: 'A community that streamlines your tech hurdles by either becoming a part of us or partnering to build amazing products. Are you in search of skilled talents for your projects? We are at your beck and call.',
                                        profession: ['Joshua Freeman','Front End Developer, Oval.'],
                                        image: testimonyImg2,
                                    },
                                    {
                                        testimony: 'A community that streamlines your tech hurdles by either becoming a part of us or partnering to build amazing products. Are you in search of skilled talents for your projects? We are at your beck and call.',
                                        profession: ['Adeolu Ogunbade','Backend Developer, Andela.'],
                                        image: testimonyImg3,
                                    },
                                ],
                                cta: 'View all',
                            }
                        ]
        },

        {
            label: 'Join Segsalerty',
            sections:   [
                            {
                                heading: 'Become a Client',
                                para: 'Get highly experienced engineers that can help achieve your organization’s goals in due time. What is your company looking to achieve? Save time, we have skill-equipped talents in line with your goals.',
                                notice: 'There are many ways to contribute to our cause',
                                cta: 'Become a client',
                                image: ''
                            },
                            {
                                heading: 'Join our community',
                                para: 'Do you have passion for creating ideas, innovating, solving problems? Do you also have a strong desire to position yourself in the global tech ecosystem, then Segsalerty community is for you.',
                                placeHolder: 'Enter email address',
                                cta: 'Join the network',
                                image: ''
                            }

                        ]
        },
    ]
}

