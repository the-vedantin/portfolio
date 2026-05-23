window.portfolioContent = {
  pages: {
    home: {
      title: "ME!",
      body: [
        "Hi! I'm Aayu. I'm a Mechanical Engineering student studying at the University of Houston (Class of 2029).",
        "I’m driven by competitive engineering and pursue my projects with a lot of ambition to deliver designs that make the most out of the constraints I’m working with. I emphasize efficient workflows that use parametric models to cut out repetitive work and create faster design cycles."
      ],
      heroImage: "assets/about/aayu-about.jpg",
      links: [],
      highlights: [],
      visualizers: [
        {
          kicker: "FSAE",
          title: "2026 FSAE suspension visualizer",
          embed: {
            title: "2026 FSAE suspension visualizer",
            src: "embeds/suspension_3d.html"
          },
          body: ["As part of UH's Formula SAE team, I've contributed to the development of the suspension system. My involvement spans designing the kinematic model, component design and FEA validation, and CNC machining, giving me ownership of one of the most critical systems on the racecar as a first-year student. Separately, I modeled a full FSAE car from scratch in two weeks to develop my top-down parametric CAD approach."],
          links: [{ label: "Open FSAE", href: "/fsae/" }]
        },
        {
          kicker: "Robotics",
          title: "DepthCharge 2025 competition robot",
          embed: {
            title: "DepthCharge 2025 competition robot CAD visualizer",
            src: "embeds/robot_3d.html?v=robot-web-basic-2"
          },
          body: ["I spent three years with FRC team 2583, growing from makerspace committee lead to Robot Director. Improving my skills as an engineer and a leader, managing budget and build timelines, coordinating sub teams to deliver competitive machines that win awards."],
          links: [{ label: "Open Robotics", href: "/robotics/" }]
        }
      ],
      projects: [],
      galleryLinks: [
        {
          title: "Look at my build gallery here",
          image: "assets/site-images/home/05-5873b57abe.jpg",
          links: [{ label: "Build Gallery", href: "/build-gallery/" }]
        },
        {
          title: "Look at my CAD gallery here",
          image: "assets/site-images/home/06-7fde2494f3.jpg",
          links: [{ label: "CAD Gallery", href: "/cad-gallery/" }]
        }
      ]
    },
    fsae: {
      eyebrow: "Formula SAE",
      title: "FSAE Suspension, Simulation, and Vehicle CAD",
      hideHero: true,
      lead: "FSAE work spanning suspension kinematics for the UH car, vehicle dynamics, FEA validation, CNC manufacturing, uprights, Vahan as a separate simulator project, and a full summer CAD project.",
      heroImage: "",
      links: [
        { label: "2025-2026 VD Binder", href: "https://drive.google.com/file/d/1Lf5DLrOVL8FCHjbPtm_apU45Xse8KaiJ/view?usp=sharing" }
      ],
      projects: [
        {
          kicker: "UH FSAE team suspension work",
          title: "2025-2026 Vehicle Dynamics and Suspension",
          embed: {
            title: "2026 FSAE suspension visualizer",
            src: "embeds/suspension_3d.html",
            large: true,
            fullWidth: true
          },
          stats: [
            { value: "18/25", label: "design score" }
          ],
          body: ["Suspension kinematics and vehicle dynamics work I did for the UH FSAE car: the interactive model here is the suspension geometry itself, showing the wishbones, steering, pushrod/rocker geometry, uprights, wheels, CG, roll axis, and pitch axis. The binder covers the motion ratio targets, toe and camber behavior, roll-center migration, tire/load-transfer assumptions, and design load cases for the 2026 car."],
          links: [{ label: "2025-2026 VD Binder", href: "https://drive.google.com/file/d/1Lf5DLrOVL8FCHjbPtm_apU45Xse8KaiJ/view?usp=sharing" }]
        },
        {
          kicker: "Suspension dynamics simulator",
          title: "Vahan",
          image: "assets/site-images/fsae/01-bd9868cea7.png",
          body: ["Using Python and Claude Code, I developed a suspension dynamics simulator that can analyze forward kinematic curves using the Newton Raphson method and Jacobian matrices, perform inverse kinematics using differential evolution, Levenberg Marquardt, and orthogonal methods, and perform steady-state vehicle dynamics analysis."],
          links: [{ label: "GitHub repo", href: "https://github.com/the-vedantin/SUSDYN" }]
        },
        {
          kicker: "FEA and CNC",
          title: "Suspension Bellcranks and Steering Rack Mounts",
          image: "assets/site-images/fsae/03-8992cf0b76.jpg",
          body: ["The suspension bellcranks were designed in Onshape following the kinematic geometry from the model. Each iteration was validated through FEA in Fusion 360, achieving a safety factor of 2.25 while reducing weight by 40% from the unskeletonized part. CNC toolpaths were generated in Fusion 360 CAM and machined in house on a Mach3Mill-controlled router.", "FEA validated steering rack mounts were also completed."],
          links: [
            { label: "FEA Results (Bellcranks)", href: "https://drive.google.com/file/d/1BuX5zbxTCQz_dFGPSCn25sY0c51qfBPy/view?usp=sharing" },
            { label: "Steering Rack Mount Results", href: "https://drive.google.com/file/d/1fsU93aC3NNLl7jOc7x7mEO45YLs5iJ6A/view?usp=sharing" }
          ]
        },
        {
          kicker: "Manufacturable backup design",
          title: "4130 Chromoly Uprights",
          image: "assets/site-images/fsae/04-e0754e59b9.jpg",
          body: ["Designed backup uprights that can be welded out of 4130 chromoly steel and are 15% lighter than the billet aluminum uprights, without requiring access to a 5-axis CNC or complex 3-axis CNC jobs, at a safety factor of about 4. Bend calculations were taken into account."],
          links: [{ label: "FEA Results", href: "https://drive.google.com/file/d/11eUl_aaUl3a5gMBcnEQWtZosTdGNHgyw/view?usp=sharing" }]
        },
        {
          kicker: "Two-week CAD project",
          title: "Revision Zero FSAE CAD Project",
          image: "assets/site-images/fsae/05-0f57ebed1f.jpg",
          body: ["A two-week CAD project to explore fast design cycles for a Formula SAE car. I designed the entire vehicle tied to a single workspace, where all subsystems including chassis, suspension, and powertrain update from shared geometry. This workflow lets me modify pickup points, packaging, or major geometry instantly and minimize the energy that goes into remodeling affected components."],
          links: [{ label: "Revision Zero Writeup", href: "https://drive.google.com/file/d/1wHwuxrIwpWSCbYGz-tbHONxoMxf3i-BK/view" }]
        }
      ]
    },
    robotics: {
      eyebrow: "FRC and robot design",
      title: "Robotics",
      hideHero: true,
      lead: "",
      heroImage: "",
      links: [],
      projects: [
        {
          kicker: "Onshape workflow",
          title: "DepthCharge 2025 Competition Robot CAD",
          embed: {
            title: "DepthCharge 2025 competition robot CAD visualizer",
            src: "embeds/robot_3d.html?v=robot-web-basic-2",
            large: true,
            fullWidth: true
          },
          body: ["I have logged over 1000 hours in Onshape learning parametric modeling and top-down design. Modeling full robots with complex assemblies like continuous elevators, coaxial gearboxes, and swerve modules allowed me to develop a remarkably fast CAD workflow and design DepthCharge, the 2025 competition robot, in only 3 days. The interactive model here lets you orbit the DepthCharge CAD directly. The robot saw no mechanical failures at in-season competitions."],
          links: [
            { label: "CADathon Submission", href: "https://drive.google.com/file/d/1KwpW53MEeKyYi1NS2xE7FN4x0r2EiYLd/view" },
            { label: "Design Standards (Obsolete)", href: "https://docs.google.com/document/d/1FxQ36kwEG97egxujqLab-jtVC45wR5FM9ErZcslNIxs/edit?tab=t.0" }
          ]
        },
        {
          kicker: "FRC Team 2583",
          title: "Toast, Kiwi, and DepthCharge",
          image: "assets/site-images/robotics/02-2248e6c70f.jpg",
          body: ["I solo designed and led fabrication for the robots of the 2024 and 2025 FRC seasons. Toast was the season robot and Kiwi the offseason robot (9993) for 2024. Kiwi was a 0-DOF robot built with a strict 20 by 24 inch size constraint and a 1 week build time; despite that, Kiwi had a 4 piece autonomous routine, allowing us to win the offseason events 4R and NTX.", "The 2025 robot DepthCharge, designed in 3 days, had a 3 piece autonomous and propelled the team's world EPA percentile from top 40% to top 15%, a milestone in the team's history. Through FRC, I also learned to operate the lathe and generate G-code in Fusion 360 for CNC operations on a Mach3Mill-controlled router."],
          links: [{ label: "DepthCharge", href: "https://www.youtube.com/watch?v=QUDzrMtQH3E" }]
        },
        {
          kicker: "Senior project",
          title: "Quarantine 4-DOF Robot",
          image: "assets/site-images/robotics/03-b5f2cc4511.jpg",
          body: ["For my senior project in high school, I designed a 4-DOF robot using BEAR Series actuators from Westwood Robotics. It used a modular wrist and base to hot swap end effectors and place the robot onto drivetrains or turrets with ease."],
          links: [{ label: "QUARANTINE Writeup", href: "https://drive.google.com/file/d/12iJiMOsZV_Oa-f53DnbNLyjpN4q4G9bq/view?usp=sharing" }]
        }
      ]
    },
    "cad-gallery": {
      eyebrow: "Onshape assemblies and renders",
      title: "CAD Gallery",
      lead: "Full assembly links and rendered models. All rendered models displayed here were designed by me.",
      heroImage: "assets/renders/33-vasuki-2024-aug-08-10-55-22pm-000-customizedview1636563838-jpg.jpg",
      cadLinks: [
        { label: "FSAE Car : Summer before college", href: "https://cad.onshape.com/documents/df8758a449cf495eeeaa7ba0/w/ba96230b83cf074d708fa65c/e/3eb064eaf07092929480af54" },
        { label: "DepthCharge : 2025 Comp Robot", href: "https://cad.onshape.com/documents/1218d0ea3f284e60671ea11c/w/eec483161ebf856b93b6b1ff/e/29f0d060100cf65f730ef988" },
        { label: "Kiwi : 2024 Offseason Bot", href: "https://cad.onshape.com/documents/2b8912fb92510fc6fea27c45/w/c759da4573879576741fbf82/e/21e42a6196574fed0138787e" },
        { label: "Yu Swerve (Modified MaxSwerve)", href: "https://cad.onshape.com/documents/0584ec88699f00a358fd470e/w/b1295f475c8b2226bd5cb001/e/ba4ed5ef5ff9873c1bb48f9e" },
        { label: "FRC Robot : Layup (2024 CADathon)", href: "https://cad.onshape.com/documents/aa9a4471971c557f2d453123/w/3b4069449eaeb534fd566a32/e/cced70ec64c5fa49854ee351" },
        { label: "FRC Robot : Horus (2024)", href: "https://cad.onshape.com/documents/e795c58ac97a41223068c36d/w/237a66138bf22634bedd2c39/e/8315acf7593699043bd50d81" },
        { label: "FRC Robot : Horus v2", href: "https://cad.onshape.com/documents/a7480c76fb9d5254b1330627/w/292e404f81fc39eac993bae5/e/efb818824d503c8a3691bec2" },
        { label: "FRC Robot : Horus v3", href: "https://cad.onshape.com/documents/d1081b2a7aaa2eed161f6d1c/w/43167be6f47faf95fe8e9977/e/fb4701508fcd34149aa162ed" },
        { label: "FRC Robot : Disarm (2023 ReCAD)", href: "https://cad.onshape.com/documents/c90ddee085a12abb3e8d0391/w/7d6c1d2b8f8baef40cf3ee7b/e/48621a5ffb7872396fc658b9" },
        { label: "FRC Robot : Toast (2024 CompBot)", href: "https://cad.onshape.com/documents/efe590dbbc3bb59d139af501/w/0c0143c22b2770e4e1f02666/e/db9d449342b19fa32b28c353" },
        { label: "FRC Robot : 808 (2024)", href: "https://cad.onshape.com/documents/61291720dd309f5457c40508/w/e22e26034c04c799b4ffd034/e/d6365bd33d6611fac4dbe06f" },
        { label: "FRC Robot : 2023 Concept", href: "https://cad.onshape.com/documents/b02ce3fdb81d805014789d24/w/5d6d371c7757d75ea5af928c/e/7e57e1e0e30a384eb225e990" },
        { label: "FRC Robot : 2024 Concept", href: "https://cad.onshape.com/documents/e9c6dd936bb396e6ac8f388f/w/4368df3c9d945235061269ba/e/dee8903b944b4ef43b2c9924" },
        { label: "FRC Mechanism : Elevator Arm Concept", href: "https://cad.onshape.com/documents/3909384df880a0778a92d2c8/w/24c6471b1109330ed69c3363/e/a9f3afaf12f732b95beb1268" },
        { label: "Quarantine Robot", href: "https://cad.onshape.com/documents/dea6371756bf710e9edc5b76/w/df4b942ce4c2594dc0975218/e/36ba400ab7aaa87c307bb6ef" },
        { label: "FRC Robot : Coaxial Concept", href: "https://cad.onshape.com/documents/24777e6873ec5ddc1b4777d0/w/e4656eff54bc243f3d2c99e3/e/925d6be072ce046b8bbdaed8" }
      ],
      galleryTitle: "Rendered Models",
      gallery: [
        "https://lh3.googleusercontent.com/sitesv/AA5AbUBBV_geqnZ82GwzgTlJJa7Zmz-0Nqr0bSgXxKpKLZXVDRnTLjXo4TtibvJ1fI8NSHQTorDdf8eG0J27Q5fi6-2mssPuYr2Xyq35B4V67HIRq04Ue5rdwU7eCxr6zUHdJY9LwreDK7htoZYOau08i5EvcVQenIO5plZNxs9q3CkvEhxlWlqVvVwtasUxv3fLd9MuXERUcXyrRUaTep6Ek-1KPL2kp-ALg0yOBzA=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUCcrIlaMmJtbQeNx53UGlteHR3652svgPcw7-yCF4MtBV8h-rD9W6WHD2NJ_rVUqPkqwuPsf1t6EQVUbz4jMsmtME3HDiOiVSpvzH0X_dCntQwAsmCBham93E73QzJkej5IEwHKC8hOxQddLPzB7Doky1KZtMNqNwajVvl5W5hfm-YDovAQ8r02OGEJeSDgE9XteN9pqDgZTk92MwVbR7N7cZwGTZ5wOZfibP8=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUAJY5x8drjjIwoKYpUWIBy4Khxf9moDcPz-FVSOHeV8fUZAUo2cg50YRnEgiOxLOZQl7FpGt5M4gYdSQOW8_OrRhG584mqbZAb0fvWrasWhzaspqwbQo94BRzFyJh3AVC4MoYe9SAqXg015Mf9B8_H7RRl_O6d4XbOIsxnT4lP0zfRV8koA4kDJQzVa9abR1mRK1mi4-gcI3ZjlV723V_s_cRcJWvCrbRG4VhM=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUBgKzigVE_-jCf2RWZZhtTlqRRGtPOWm51-DABoqIA42lsxy39nGaKjlkEVN89_wO9_xPBwC-HqTygROu2sOnEECAYV5jjVpsabmy6YCYxgzdoTvzPsgW-ZbgscrtU7ycO2nUyO9kdEXhMlRaHspYgwTuif07DLR-TzFBEJrAN8FPn-0ZhMgkfA95HWrFUyrpfld2MgtDgkCts-5uJ1hV88HFYM-juPiw=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUAA2sILWkMVbLu2c2ZHBvtReJd2_GS6z1MJ-RS23Slfo9fuWv1XOfWDWKUml00J0LZB4_XhIDSQRctooVwYc2Xog_7MInGFvEFj2N19mYIFENkVuoeWNi1qtBHYXDp9eKxlAbwlc6tkGdhTsJoJi9JQdnyHs1OhFqhhWMVFLjM65lj9PGfJP33IUi7e9APi1mr5tzRAkiacJId5EYSFwNg15JAjrDejtDkwDXk=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUAaFQhP2jnIHxmKYOKFCJBSVBV9bJoZPXvLLtuDfq4ltLvxQxpSRq9pJlSrFhWfXbjAvYNCX-h1yeNEkhQAY5T9ZVytbg5cQisqYkPrY_vwI7t73enqb4SSZvqgJh1cbG92zJ2jEQ8OGM2idZNaFLkC-ODhw04-5emVSeG0lVQqdSguErmxf-xc-MEm4rl9fEm-sdkY3UzM2UnRFBUe8zHcB-P-MeU-nOyiSy0=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUDVXPhXJIX4FfMvEzmp4eK4-XpHRewROSMp2noUqqY7khQd8RCV5VA5GbmkDb36l43JAmHEycRMYwn_eg1DYZB1VFZevOXsniLiIn1wPykayBolPfv8u2w1nbXDYZZoWaxmf6Qqyz7lem2rQDMkW_SPvqyd9axsi_m5MhJ8dxDqAQdteRje2YhxYrxyuh7uaac5x7xJQcgrFf81erIkT7nzDJX8Z3Vue2tf=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUCXhSgLmyhpU9cpdK8Z2itjWXKcHMjYiv6wnepZa354aQE-WPvXgikofIVyXvKKxiLDNvSJvlkk4dSRWcmYb-VrmVQv2zYA9-D4TDfY5_VI463YZtbBoMfmSzPfTPHD5MTp-s_dKI1b2kx1EO5r2uW9LjpIQ89o2IsjKkXYVwDqjXD6PcPaMzHmujWL1rEKgomwzSDeGZclJExr0QlMJV-5obR08I9u9pF8JG8=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUA5EM1s1XGlqoWgko4mZsn1FLgkoztjELu0yxlv9IPjTB3nvShGnQmtWk6Albk_8Af2kIrnIygukkR--kG5wP3rZQ-8B7fVQzW3R5yMN2DMZa3gwm5rJ6i7E2VFpQpq2WuyiWSeKr2KENWKoYTGk9E--0xAwHUTjwPHZNqt4XGh5Vv8xlGRLKtbJj_1ePgZLJFmxrECwHkmMhzQWNUyekhKGLuY0SGvdW3zJRQ=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUD_OodKhaEppLjexYlxDclwdqPWMwrbCtTqrV28SC0yv0OICsDjfYmF8lE0L4GMv8cSSZHdpFB-mNIibPde5n7CuhT8ELmOfZxR48lX10W0XU-C5e9q7GVwNj_nekNYRJ2e1wRLQDJkhrgqBndlRQ3-qeAwF_zyRVwdLRCuEEaH4yS_-GU2tzoPWkIGbV0pWd7cKSndah28Ge9NagIhZEDOHr7lYETh3uR41jc=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUCt-6y9gCxuM0LIi-OrQVsc795zVmzlLbTPmgmlDd1ptbkdvd6gSSF9_p_QrrLc4ro_iC-2daaDta_HoiJLQNcCf_yDUL8B7UtUNmvsni09QT2i6Sd_bdoWNdaI0rW-C4H5u8h0WtPeJVOl1E9Jrjz13i8rFafLUuDZ_866X_lI6YDo_YNHFVoT0PYUSM-uQpoHotrqKtXw_LRN8UVvBo8msKEjQuUeqWXya6Y=w1280",
        "https://lh3.googleusercontent.com/sitesv/AA5AbUDxoBig309Xjp5krX8Z0zc30tCE0uhEgzV5OJhXT_wv3O6r92Qwkbys7I4utpLh8jMZjiIBsAoVRM1z_ggYuJKUf8QiDdH6RSc6HmTn1Ppj4J6OzLVw6lQBeetVsVeZOs0kx0SB59EQc9pKbqW0aaJSXkBEtk6IpK3jin9dZNcQbW2-bKFkdsxCo2ZQYLE8SfsfJiMMow3hKB91prq8-u8xZcOdo1wFeaI1=w1280"
      ].map((image) => ({ image })),
      embeds: [
        { title: "UH 2025 car render", src: "https://drive.google.com/file/d/1baSepIet6X4x_on8S0qxZM5XSAuocwvX/preview", caption: "UH's 2025 Car, Rendered in Unreal's TwinMotion" },
        { title: "FRC 2583 2026 robot render", src: "https://drive.google.com/file/d/1PKXJpnk4dD6dXs59hUV1qAxH2lRffpGC/preview", caption: "FRC 2583's 2026 Robot, Rendered in Unreal's TwinMotion" }
      ]
    },
    "build-gallery": {
      eyebrow: "Machining, fabrication, repair",
      title: "Build Gallery",
      lead: "A migrated gallery of fabrication, machining, robot build, repair, and prototyping work.",
      heroImage: "",
      galleryTitle: "Builds",
      gallery: [
        { title: "Spacers", body: "Turned spacers and small hardware on the lathe.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDHibECe0geXDAnQXtmwJVsnwf5Lzu_FQEu6zEJVeIkQ-145AOl9BsPdmhfPIw-0RPcAJEn62eMRR38tvhy6_VyMjj7XJUOoCGVdqNqlh_zKRfZuKyo-XaG2-FmX3qqASX36tAyCbnqu3LOSMoJczYv1tbSaFhAsPPZKQdo_yz5FnY3LF1mU3t63PeauOpcqWvk2IW884Juf2GFmRw1Ehafty3mGZdBWczpDpM=w1280" },
        { title: "Bellcranks", body: "Machined suspension bellcranks from Fusion 360 CAM toolpaths.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUAj-Gf63umIxiwohoxQNhv4WQPHz0Rztt3MwZW4cDWqo0gaGMKHEUsiIZLKgxhdEEsCI5V5uVPlAYUkl8mR5_aSuohx7RJeq2Sfhw0RM9Gy6UwPx6X6JdEIJ7SF4jhurNdW2MT8euH34Bf21X2DhZTJF310I0k8r15EpcOu4B7iyGfUqUG-pijPvlFRlbf7uGiHmQpF9zrMbHqHpjYg_pxFL-j_PnoHcmFH=w1280" },
        { title: "DepthCharge", body: "2025 robot designed in 3 days with a 3 piece autonomous routine.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUCX8en2hlfYEAouTN-DNhvkrBLyJrdkeKg9VjVtw7MU7DqmqtGA9hOAnzKafYG6as4p0ftKBDGTUUuTlV6x0zFsp9NljfEXaw5JBkaCh5--EKgXn9nxSpvSQ6xMX3mytP7PiH0cmiskgma-wkXxsR3VRgEqYNqrnmk9sGmCluvLDeApVYjn19D2y81r51iz4RdG77QDBQrA_EOoMhTuw9Y-JYeRVtvfGXrWjrY=w1280" },
        { title: "RobotCart", body: "Fabricated support equipment for FRC robot transport and work.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDTs4blzzYswTHwPSl64wRyV7U1VIozmO-PtAHbzsk5793DOZKWcLj5Ezm9KUWlPuNZlR7PYZ7nD4zY43TbQnNGUNmn3xf3Qbm_oSUAzTiS9II1Zx23FYUx1TAPKfcZfAI0XrrRAGlohkyqEtGxvSWgt1qBxL49ifPPOdRRegnHKgr0N8pu6dTLuIlNgX3y2DB7zPUe44LXD1qJCfV23hPYCeTHX3MIIJsVX8g=w1280" },
        { title: "Quarantine", body: "4-DOF senior project robot with modular wrist and base.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUAm5_FnYDLFIjeoMtuE79osGW4HQ7fzweM9Z2_HcjCHP6XjP-Pckkbc6JCEB3vgqwHsQbUnHVPCbGONN2tys76qNI5j-dvCiTwvavkf5sih8CDsSZQ3QVdzsWUkR50onz30dIUEurWQUtMlqL_yW-E-oC9fE4bHB9FWtigtYirMnxvfiFhmE1AT9XsPFdXUETE3EH-uWMaajmmxBGSnmwLSaEDZwhg7e_ODwO0=w1280" },
        { title: "Lathe Project", body: "Learning lathe work and turning shafts/spacers for robot assemblies.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUAiDMWoolQDWh3EuIRh7sDzuf7N4rEWs7eTWZIeRA_KAb-7hhDKHWHrwkDF9u6VXVq8f4hZ6QrCYo4FMpHjJQPrQaDBepHDXsUbOG_nb6TYKLfImLk-mID3myI9BRAR7s2E3djg7sddxcL2upOV78aVPNef_tcxs-82HCTYZuZw6oyXnb7LBipi5Cff51X5IvUD3RW_fedyonZP9LPKRq0bhjZyo7wWRvcwPuM=w1280" },
        { title: "Kiwi", body: "2024 offseason 0-DOF robot with strict 20 by 24 inch size constraint and a 1 week build time.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUAK7yOv4263xKrSZzSTGHbFDw-NXD4lLpE6n-LWDjeq564m34nXxDy5dtznwMrN0_IV7k3pa7AM-EJX-BiEKaQGTuGcpBZZjhCPq3V1ExkOl3vLRqxGgJTHMVs8bCevD0gOd3th6O4SZMsmJgV37nFiRoN7srz9djh6PpKKs0o5v96u9Yk7FzCMZcD8IE_lBl1vqbl2IfBuTJaHgrWeuSEJ5S70x9bWqg=w1280" },
        { title: "Parts Cart", body: "Shop and team support equipment for organizing fabricated robot parts.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBFvyYdyVqT3DFC9NXZLwpSngmEbIfeHNz5xuTQH683yjGHgNZfJAO1dspgmDXU2mOOUmoTo-TE9nCk26sLMauOAz1dmfM91ar1slc6SXbXQ9nzxYGCd_WkSxBBFzymd_BHSuuFAT2Xqtc9T77VXjkz-WB1fSATNmoYJl2HxWKxBtavPsXX31ZLoNXfrPawF-EVVB55OgMmob-ffU1CxelvmRkfP4JYhMzM9Hw=w1280" },
        { title: "Bambu P1S", body: "Maintained and repaired a Bambu P1S for FRC. Replaced the extruder, fans, and nozzles.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDS7lEzfjr-fZr8xGIVeAw9AMY8KjxDII3b0A7nyo7sODVdWi_IeI4CktcOGV1rLfSbmT2Prz-Uw3aD1Zl_f7l2oAHsOL67GwIzFN-QSU6rTsUNwgZG60nukq5cm2lzppqTjiaAIe8vlTa5015gSZtk9OLDJuPuiAB1kfulX0CN6JaU_tXo4N0CiuGBciubgg7VDSdK8YKithjiW8KUDwlT-nIXh-IXlcFoDfM=w1280" },
        { title: "Toast", body: "2024 season robot that I designed. I helped cut the plates on the CNC and turned shafts on the lathe.", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDR9zEKROtmWDp3TpR-3Ib_SX1oYgpfVpv_yqIhJn_pnGCxg5dHwnt3JOfM0AXOEq8pWz-QQ5d7j8lKIwq1_dljoo1lxSkPsnp_XFjwpKFCQucmNdIH3kqorVO67Y-vmgdeDXp2tVxB6biI_yKxQa52JZZA726yDuEtkH7MLy2sL2EME9lPbT7S1c63vj_4Lx8Ay8rV3iq77eqeacuVMOYRVUiB7fg_1028=w1280" }
      ]
    }
  }
};

const renderLibrary = (window.portfolioRenders || []).map((item) => item.local);
const renderByName = (name) => {
  const lowered = name.toLowerCase();
  const match = (window.portfolioRenders || []).find((item) => item.sourceName.toLowerCase().includes(lowered));
  return match ? match.local : renderLibrary[0];
};

Object.assign(window.portfolioContent.pages.home, {
  backgroundImage: "assets/about/aayu-about-tint.jpg"
});
Object.assign(window.portfolioContent.pages.fsae, {
  backgroundImage: ""
});
Object.assign(window.portfolioContent.pages.robotics, {
  backgroundImage: ""
});
Object.assign(window.portfolioContent.pages["cad-gallery"], {
  backgroundImage: renderByName("jazz")
});
Object.assign(window.portfolioContent.pages["build-gallery"], {
  backgroundImage: renderByName("toast")
});

const projectBackgrounds = {
  fsae: [
    "assets/renders/21-revision-zero-2025-jul-12-06-20-47am-000-customizedview3908991307-jpg.jpg",
    "assets/site-images/fsae/07-vahan-hardpoints.png",
    "assets/renders/22-revision-zero-2025-jul-12-06-34-20am-000-customizedview12647960830-jpg.jpg",
    "assets/renders/23-revision-zero-2025-jul-12-06-37-45am-000-customizedview4558678813-jpg.jpg",
    "assets/renders/24-revision-zero-2025-jul-12-06-39-40am-000-customizedview8583869675-jpg.jpg"
  ],
  robotics: [
    "assets/renders/02-0-robot-1-horus-2024-aug-08-10-46-18pm-000-customizedview5174201726-jpg.jpg",
    "assets/site-images/robotics/06-orange-dynamite-roller.jpg",
    "assets/site-images/robotics/07-orange-dynamite-lit.jpg"
  ]
};

for (const [pageId, backgrounds] of Object.entries(projectBackgrounds)) {
  (window.portfolioContent.pages[pageId].projects || []).forEach((project, index) => {
    project.backgroundImage = backgrounds[index] || window.portfolioContent.pages[pageId].backgroundImage;
  });
}

const localImagePattern = /^assets\/.*\.(?:jpg|jpeg|png|webp)$/i;
const collectUsedImages = () => {
  const used = new Set();
  const visit = (value) => {
    if (!value) return;
    if (typeof value === "string") {
      if (localImagePattern.test(value)) used.add(value);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (typeof value === "object") {
      Object.values(value).forEach(visit);
    }
  };
  visit(window.portfolioContent.pages);
  return used;
};

if (renderLibrary.length) {
  const cadPage = window.portfolioContent.pages["cad-gallery"];
  const usedImages = collectUsedImages();
  cadPage.gallery = (window.portfolioRenders || []).filter((item) => !usedImages.has(item.local)).map((item) => ({
    image: item.local
  }));
}

window.portfolioContent.pages["build-gallery"].gallery = [
  { title: "Spacers", body: "Machined in house at the UH machine shop for bellcranks, machined to tolerance.", image: "assets/site-images/build-gallery/01-3213bf1b94.jpg" },
  { title: "Spacers", body: "Machined in house at the UH machine shop for bellcranks, machined to tolerance.", image: "assets/site-images/build-gallery/02-39ff174b47.jpg" },
  { title: "Bellcranks Assembled", body: "Bellcranks assembled and ready for the suspension package.", image: "assets/site-images/build-gallery/03-0eec47128d.jpg" },
  { title: "Bellcranks", body: "FEA validated bellcranks made from 6061-T6 aluminum. G-code was made in Fusion and milled on a Mach3Mill-operated router.", image: "assets/site-images/build-gallery/04-7c66e77385.png" },
  { title: "DepthCharge", body: "2025 FRC season robot. Generated G-code, milled certain SRPP and aluminum plates, and turned shafts on the lathe.", image: "assets/site-images/build-gallery/05-be0a2f46b6.png" },
  { title: "DepthCharge", body: "Wiring on the chassis of DepthCharge.", image: "assets/site-images/build-gallery/06-9565210e66.png" },
  { title: "DepthCharge", body: "Isogrid skeletonized aluminum belly pan to secure wiring and cut weight.", image: "assets/site-images/build-gallery/07-316f0b3415.png" },
  { title: "RobotCart", body: "Sturdy and spacious robot cart to transport the robot and hold it for maintenance.", image: "assets/site-images/build-gallery/08-977a3702c3.png" },
  { title: "QURANTINE", body: "4-DOF modular robot using actuators from Westwood Robotics, laser-cut and powder-coated plates, and wrapped aluminum plates.", image: "assets/site-images/build-gallery/09-6d0036b611.png" },
  { title: "Quarantine", body: "Modular end effector that can be hot swapped by disconnecting one cable and six accessible screws.", image: "assets/site-images/build-gallery/10-e63e83181b.png" },
  { title: "PM DC Lathe", body: "Operated and maintained the robotics makerspace lathe. Spent money and time repairing the lathe to keep it operational.", image: "assets/site-images/build-gallery/11-c316d69510.png" },
  { title: "CIM Motor Cover", body: "Turned a steel CIM motor cover on the lathe.", image: "assets/site-images/build-gallery/12-a702448a5e.png" },
  { title: "Machinist Hammer", body: "Turned a machinist hammer on the lathe out of steel and aluminum.", image: "assets/site-images/build-gallery/13-10eb92d043.png" },
  { title: "Pen Turning", body: "Turned a pen on the lathe out of a cedar wood branch and aluminum.", image: "assets/site-images/build-gallery/14-bf2e6786bf.png" },
  { title: "Kiwi", body: "2024 offseason robot, super compact for an FRC robot at a 20 by 24 inch frame, with powerful flywheels.", image: "assets/site-images/build-gallery/15-c1634f6391.png" },
  { title: "Kiwi", body: "Under-the-bumper intake and 0.25 inch thick 304 steel bellypan for a rigid chassis and low center of gravity.", image: "assets/site-images/build-gallery/16-1a09ba3720.png" },
  { title: "Kiwi", body: "Battery housing and SB50 mounts.", image: "assets/site-images/build-gallery/17-496c3d7f55.png" },
  { title: "Spin Tops", body: "Turned on the lathe out of aluminum and steel.", image: "assets/site-images/build-gallery/18-06b53d97fa.png" },
  { title: "Parts Cart", body: "Refurbished the top of the parts cart. Cut, sanded, and oiled the new top.", image: "assets/site-images/build-gallery/19-f4547b58c8.png" },
  { title: "Bambu P1S", body: "Maintained and repaired a Bambu P1S for FRC. Bought and replaced the extruder, fans, and nozzles.", image: "assets/site-images/build-gallery/20-b08688dc27.png" },
  { title: "Toast", body: "2024 season robot that I designed. I helped cut the plates on the CNC and turned shafts on the lathe.", image: "assets/site-images/build-gallery/21-cfb99714c7.png" },
  { title: "FSAE Rear Shocks", body: "Rear shock and bellcrank assembly on the UH FSAE car.", image: "assets/site-images/build-gallery/23-fsae-rear-shocks-track.jpg" },
  { title: "FSAE Bellcrank Install", body: "Installed rear bellcrank, pushrod, and suspension links on the chassis.", image: "assets/site-images/build-gallery/24-fsae-bellcrank-install.jpg" },
  { title: "FSAE Rear Linkage", body: "Rear suspension links and wheel-end hardware installed on the chassis.", image: "assets/site-images/build-gallery/25-fsae-rear-linkage.jpg" }
];
