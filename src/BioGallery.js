import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, Grid, Card, CardContent, Typography, CardActions, Button, Modal, Box, IconButton } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material'; // Import icons
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick'; // Import Slider
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSSimport nate from './nate.jpg'
import ashlyn from './ashlyn.JPG'
import ashlyn2 from './ashlyn2.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional effect for loading images
import ella from './ella.png'
import mya from './mya.jpg'
import hamza from './hamza.jpg'
import ana from './ana.jpg'
import sanjay from './sanjay.jpeg'
import sophia from './sophia.jpg'
import vivek from './vivek.jpg'
import ashlyn3 from './ashlyn3.png'
import haneyya from './haneyya.jpg'
import sophia2 from './sophia2.jpg'
import sophias from './sophias.jpeg'
import sophias2 from './sophias2.jpg'
import natek from './natek.jpeg'
import natek2 from './natek2.jpeg'
import nate from './nate.jpg'
import nate2 from './nate2.jpg'
import nate3 from './nate3.jpg'
import nate4 from './nate4.jpg'
import nate5 from './nate5.jpg'
import reza from './reza.jpg'
import olivia from './olivia.jpg'
import olivia2 from './olivia2.jpg'
import jesus from './jesus.jpg'
import dj from './dj.jpg'
import kevin from './kevin.jpg'
import maya from './maya.jpg'
import maya2 from './maya2.jpg'
import puneet from './puneet.jpg'
import puneet2 from './puneet2.jpg'
import ellie from './ellie.jpg'
import ellie2 from './ellie2.jpg'
import matt from './matt.jpg'
import tyler from './tyler.jpg'
import jess from './jess.jpg'
import addison from './addison.jpg'
import addison2 from './addison2.jpg'
import onome from './onome.jpg'
import kate1 from './kate1.jpg'
import kate2 from './kate2.jpg'
import katy from './katy.jpg'
import katy2 from './katy2.jpg'
import lisa from './lisa.jpeg'
//import lisa2 from './lisa2.jpeg'
import brooke from './brooke.jpg'
import brooke2 from './brooke2.jpg'
import kanella from './kanella.jpg'

import joe from './joe.jpg'
import joe2 from './joe2.jpg'
import hemant from './hemant.jpg'
import rachel from './rachel.jpeg'
import rachel2 from './rachel2.jpeg'
import anusri from './anusri.jpg'
import memo from './memo.png'
import memo2 from './memo2.png'

import zahra from './zahra.jpg'

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars except dash
    .replace(/--+/g, '-');

const bios = [
  // Your bios data here
  {
    name: 'Nate Roy',
    slug: slugify('Nate Roy'),
    images: [nate, nate2, nate4, nate3, nate5],
    description: 'D1 Football Player & MD/PhD Student',
    fullBio: 'Nate is an incoming doctoral student-athlete, studying for a PhD in adolescent psychiatry while playing varsity football at McGill University. He previously played Division 1 football in the Ivy League and published original research on concussions as an undergraduate at Cornell University. He currently works as a clinical research coordinator within Harvard’s Division of Neuropsychiatry and Neuromodulation. In the past, Nate has volunteered as a high school track and field coach and worked as a youth athlete mentor and personal trainer. Within these experiences, it has stood out to him that even though scientific knowledge can be profoundly helpful in athletic endeavors, there is an astonishing lack of application of scientific findings in the realm of athletics. His desire to distribute science in a palatable, engaging, and applicable manner to youth student-athletes led to the development of the CFAA with which his hope is to create better outcomes for student-athletes in uniform, in the classroom, and in life thereafter.',
    email: "nate@cortexflex.org",
    linkedin: "http://www.linkedin.com/in/nate-roy-b27543201",
    instagram: "https://www.instagram.com/nate.roy29/",
    position: "Chief Executive Officer",
    leader: true,
    bod: true
  },
  {
    name: 'Reza Ashrafi',
    slug: slugify('Reza Ashrafi'),
    images: [reza],
    description: 'Football Player & Neurobiology Researcher',
    fullBio: 'Reza Ashrafi ‘26 is a current student at Cornell University majoring in neurobiology and behavior. On campus, Reza is part of a biomedical engineering project team where he is currently researching and designing medical assist devices for patients with neurodegenerative diseases. Additionally, he is a member of Cornell’s Varsity Sprint Football team where he plays right tackle. He has previously been involved in community service organizations that sought to provide science education to elementary and middle school children. Through these experiences, he has zeroed in on the importance of scientific communication and how delivery of knowledge and understanding a target audience is a true artform that is continually developed. Within the cortex flex team, Reza hopes to leverage his experiences as a student-athlete, researcher, and volunteer to help foster safer sports.',
    linkedin: "https://www.linkedin.com/in/reza-ashrafi-b636801ab/",
    instagram: "https://www.instagram.com/reza_ashrafi26/",
    position: "Project Lead & Researcher",
    project: ["research", "media"],
  },
  {
    name: 'Matt Shumway',
    slug: slugify('Matt Shumway'),
    images: [matt],
    description: 'Medical Student & Researcher',
    fullBio: `Matt is a medical student with a strong passion for sports medicine, in particular the detailed training and advocacy for athlete safety. He spent two years during his undergraduate education studying & conducting research alongside a globally recognized developmental psychologist in Charlottesville, Virginia, in addition to conducting and presenting his own research project amongst the world's top scientists at the prestigious National Institutes of Health in Bethesda, Maryland. Matt played football and lacrosse for most of his childhood years, trained in MMA, and has even competed in multiple long distance running events. With his first-hand experiences in contact sports, medical research, and clinical training, his résumé aligns perfectly with the goals of CFAA. Matt is looking forward to advancing the field of CTE research and advocacy, while making sports safer and more enjoyable for the athletes involved.`,
    position: "Chief Operating Officer",
    leader: true
  },
  {
    name: 'Maya Haykal, MD',
    slug: slugify('Maya Haykal'),
    images: [maya, maya2],
    description: 'Medical Doctor & Former D1 Tennis Player',
    fullBio: `Maya Haykal, the eldest of eight siblings, embodies the ethos of "work hard, play hard". This
    motto was ingrained in her upbringing, which fueled her academic pursuits and athletic
    endeavors. Transitioning from dance to tennis after a teenage injury, Maya's passion for tennis
    flourished, leading her to compete at the Division I level at SUNY Binghamton, where she
    earned a Bachelor of Science in Biological Sciences and a minor in Anthropology. Her
    commitment to research, showcased through her pivotal role as a research assistant on an
    NIAAA R01 grant-funded project, extended her impact to promoting responsible alcohol
    consumption among student-athletes. Pursuing her aspiration to become a physician, Maya
    embarked on her medical education journey at SUNY Upstate Medical University, focusing on
    Physical Medicine and Rehabilitation. Throughout medical school, she demonstrated leadership
    in Sports Medicine and mentored young athletes through programs like Athlete to Athlete, while
    also becoming a certified yoga instructor (RYT 200 hour) to champion accessibility through a
    chair yoga program at Organic Yoga & Wellness studio. Maya's scholarly contributions,
    particularly her systematic reviews on Vitamin A and Zinc supplementation, underscore her
    commitment to pediatric health. With her adeptness in statistical analysis and holistic approach
    to well-being, Maya's diverse background makes her an incredible asset to Cortex Flex Athlete
    Alliance, showcasing her dedication to athletic mentorship, medical practice, and community
    outreach.`,
    medicaladvisor: true,
    bod: true
  },
  {
    name: 'Guillermo Gonzalez Garibay, MD',
    slug: slugify('Memo Garibay'),
    images: [memo,memo2],
    description: 'Medical Doctor & Research Fellow',
    fullBio: `Description: Guillermo is an MD based in Mexico City. He completed a Research Fellowship at Massachusetts General Hospital, Harvard Medical School, focusing on Neuropsychiatry and Neuromodulation. Following this, he embarked on a Research Fellowship at the National Institute of Neurology and Neurosurgery in Mexico City. Currently, he is pursuing a medical residency in Neurosurgery. Guillermo's passion for swimming led him to aspire to blend his love for sports with his medical expertise to aid young athletes in overcoming challenges more effectively. His ongoing research interests include neuromodulation techniques, epilepsy, ischemic stroke, and neuroanatomy. He is eager to contribute to advancing the scientific aspect of Cortex Flex.`,
    medicaladvisor: true
  },
  {
    name: 'Hamza Shahab, MD',
    slug: slugify('Hamza Shahab'),
    images: [hamza],
    description: 'Medical Doctor & Research Fellow',
    fullBio: 'Hamza is an MD, located in Boston and originally from Pakistan. He is completing a Research Fellowship at Massachusetts General Hospital, Harvard Medical School, in Neuropsychiatry and Neuromodulation. Following this, he will be starting his Adult Psychiatry Residency at Icahn School of Medicine at Mount Sinai, Elmhurst Hospital, NYC. Hamza’s first love was soccer and while he stopped playing following multiple concussions in High School, he is hoping to combine his love for sports with expertise in the field of medicine to help young athletes deal better with adversaries. His current research focus is on neuromodulation techniques for psychiatric disorders. Particularly the translation of low-risk neuromodulation techniques into prevention strategies for mental health pathologies in the youth. He is excited to advance the science portion of Cortex Flex.',
    medicaladvisor: true
  },
  {
    name: 'Tyler Thiele, DPT',
    slug: slugify('Tyler Thiele'),
    images: [tyler],
    description: 'Doctor of Physical Therapy & Former Decathlete',
    medicaladvisor: true,
    fullBio: `Tyler has been practicing as a Doctor of Physical Therapy since 2018, mainly working in underserved, rural areas as a traveling therapist. He believes everyone working to be the healthiest version of themselves is an athlete, and has practiced with athletes of all ages from beginner to professional throughout his career. Prior to becoming a physical therapist, Tyler was a decathlete and pole vaulter for Ithaca College. Now, Tyler has a special interest in working with endurance athletes and golfers in his private practice and seeks to empower athletes across the spectrum on injury risk reduction, safe return to sport after injury and safe and effective training principles.`
  },
  {
    name: 'Anusri Pakhare',
    slug: slugify('Anusri Pakhare'),
    images: [anusri],
    description: 'Medical Doctor',
    fullBio: `I am Anusri Pakhare, an international medical graduate from Shandong first medical
university. I am an applicant for this year’s Match cycle. I am a strong advocate for Children
and Adolescents physical and mental well being. I am grateful to be a part of community
that fosters highly accredited research oriented reforms to medical sciences. I will do my
due diligence to contribute as much as I can.`,
medicaladvisor: true

  },
  {
    name: 'Kevin Wisniewski',
    slug: slugify('Kevin Wisniewski'),
    images: [kevin],
    description: 'Medical Student & Non-profit Leader',
    fullBio: 'Kevin is a medical student and rising leader within holistic medicine. His skill set sits uniquely at the interface of both scientific research and medical practice, as he has previously conducted research for Pfizer, Boston Scientific, and Verathon in addition to serving as the lead medical assistant to the President of Urology at a leading institution. Outside of medicine, his guidance as the president of USF’s Zeta Beta Tau transformed a struggling organization into an award-winning philanthropic giant over the course of 3 years. Kevin is equipped with the ultimate combination of technical knowledge, passion for service, and tactful leadership. He aims to apply this within CFAA as a trailblazer in disseminating scientific information to the athletic community in a manner that improves lives for years to come.',
    medicaladvisor: true
  },
  {
    name: 'Vivek Khatri',
    slug: slugify('Vivek Khatri'),
    images: [vivek],
    description: 'Dental Student',
    //project: ["research"],
    medicaladvisor: true,
    fullBio: 'Vivek is a D2 at Columbia University College of Dental Medicine. He is passionate about advocating for dental health in athletes which is an often underrated part of athlete health.',
  },
  {
    name: 'Brooke Miller',
    slug: slugify('Brooke Miller'),
    images: [brooke, brooke2],
    description: 'D1 Soccer Player & Health Student',
    project: ["community"],
    position: "Community Mentor",
    fullBio: `Brooke Miller is a current Division 1 soccer at the University of Portland, striving to have a positive impact on young athletes within their sport and their overall health. While growing up in San Diego, Brooke's love for sports and helping others ignited at a young age. She found her calling in advocating for underprivileged youth in sports through her work with the non-profit organization Matters Athletic. There, she supported and mentored disadvantaged children, using sports as a tool for empowerment and social change. Brooke's commitment extended beyond advocacy as she spent time personally training kids one-on-one, receiving her U.S. Soccer grassroots coaching license, and then coaching at her colleges ID camps. In addition to her athletic pursuits, she is currently pursuing a degree in Integrative Health and Wellness at the University of Portland, with a minor in Business Administration. This academic pursuit aligns with her holistic approach to health and well-being, blending her passion for sports with her desire to promote overall wellness in larger populations and communities. Outside of her academic and athletic commitments, she is working to develop a business that aims to promote holistic health practices for athletes and young adults. With a vision to play professional soccer, become a certified health coach, and a certified holistic nutritionist, Brooke aspires to empower individuals to optimize their physical and mental well-being, unlocking their full potential both on and off the field.`,
    instagram: "https://www.instagram.com/brookeeemiller/",
  },

  {
    name: 'Jesus Salazar',
    slug: slugify('Jesus Salazar'),
    images: [jesus],
    description: 'Professional Soccer Player',
    project: ["community"],
    position: "Community Mentor",
    fullBio: 'Jesus Salazar is a professional soccer player in Asia who previously attended the University of Portland. In addition to becoming a student athlete, Jesus was a volunteer assistant coach at Sweetwater High School in San Diego, CA. During his time as a coach, Jesus played the role of a guidance counselor off the field as well, helping high school students learn the process of college admissions, networking with coaches or even applying for FAFSA. It was during this time as an assistant coach that Jesus began to shape an idea on what he felt he could deliver to athletes around the country. He decided he needed to be a bridge between these students and opportunity. Not only opportunity on the field, but the opportunity to develop a mentality which will help them grow mentally in a healthy manner. Jesus began working with more children, serving as a personal trainer and coach at college ID Camps, became an mentor at the Athlete to Athlete organization and now looks to leave his mark on Coretex Flex.',
    linkedin: 'https://www.linkedin.com/in/jesus-salazar-aa204427a/',
    instagram: 'https://www.instagram.com/chuyy.salazar/'
  },
  {
    name: 'Sophia Calabrese',
    slug: slugify('Sophie Calabrese'),
    images: [sophia, sophia2],
    project: ["community"],
    position: "Community Mentor",
    linkedin: 'https://www.linkedin.com/in/sophia-calabrese-47694a204/',
    instagram: 'https://www.instagram.com/easy.brese.beautiful',
    description: 'National-level Rower & Exercise Science Graduate',
    fullBio: `Sophia graduated from the University of Texas at Austin in May 2023, where she earned her bachelor’s degree in exercise science as well as a pre-health certificate with a focus in physical therapy. She was also a member of UT’s division 1 rowing team where she helped the team win two national championships and a top-5 placement over her four years there. Currently, she lives and trains in Vermont with the Green Racing Project and has her sights set on representing the US at the LA Olympics in 2028.Outside of rowing, Sophia has a deep interest in kinesiology, biomechanics, and human physiology. She has applied principles she’s studied to her own training and reaped many benefits. Sophia is excited and passionate about bringing this knowledge to athletes and empowering them to make educated decisions about their own training.`,
  },
  {
    name: 'Kaitlyn Holly',
    slug: slugify('Katy Holly'),
    images: [katy2, katy],
    description: 'Clinical Research Coordinator & Former D1 Softball Player',
    linkedin: 'http://www.linkedin.com/in/kaitlynholly',
    instagram: 'https://www.instagram.com/katyyholly?igsh=eGZibHNnNTZjNw%3D%3D&utm_source=qr',
    project: ["media"],
    position: "Podcast Host",
    fullBio: `Kaitlyn is a Division 1 softball student-athlete at Manhattan College. She will receive her Bachelor of Science in Biochemistry with a pre-health concentration in May of 2024. With hopes of becoming an orthopedic surgeon, she plans to work in clinical research after graduation before applying to medical school in 2025. 
    With a passion for mental health advocacy, Kaitlyn founded a club at Manhattan College, Mental Health at MC, that aims to provide the student body with access to mental health resources. In just one year, she initiated the formation of weekly student-athlete support groups. With CFAA, Kaitlyn hopes to merge her passion for athletics and science to provide easily digestible information for athletes to improve their mental health. Kaitlyn has seen firsthand, the impact that nurturing her mental health has had on her athletic performance, and hopes to pay it forward to athletes of all levels.`
  },
  {
    name: 'Nate Killeen',
    slug: slugify('Nate Killeen'),
    images: [natek, natek2],
    description: 'D1 Cross Country Athlete & Business Student',
    fullBio: 'Nate is Freshman on the XC/T&F team at Indiana University and 800M Indiana State Champion 2023',
    linkedin: "https://www.linkedin.com/in/natekilleen/",
  },
  {
    name: 'Mya Murray',
    slug: slugify('Mya Murray'),
    images: [mya],
    description: 'D1 Basketball Player & Health Administration Graduate Student',
    fullBio: `Mya is a 2024 graduate from Brown University with a bachelor's degree in Biology. Before Brown, she
was a local basketball star from Uniontown, PA that totaled over 1,300 points and 1,000 rebounds in her
high school career. She played for the AAU program Western PA Bruins during her four years in high
school, as well as a varsity athlete in volleyball and track. Since graduating from Brown, she is
completing her final year of collegiate eligibility at Robert Morris University and pursuing a master’s
degree in Health Administration. Outside of sports, Mya has volunteered at her hometown hospital’s
emergency department which solidified her decision to pursue a career in healthcare. As a lifelong athlete,
she understands the importance of taking care of one’s body to achieve the best physical and mental
results, on and off the court.`,
    project: ["community"],
    position: "Community Mentor"
  },
  {
    name: 'Joe Curtis',
    slug: slugify('Joe Curtis'),
    images: [joe, joe2],
    description: 'D1 Wrestler & Financial Economics Student',
    fullBio: 'Joe Curtis is a freshman at Columbia University where he is currently a freshman on the wrestling team and is studying Financial Economics.  He grew up in San Diego where he has been wrestling since he was 10.  After graduating high school in 2020, Joe served a 2-year LDS mission in the Republic of Congo.  He loves wrestling and finding the optimal way that he can train to have the best results.  He hopes to leverage the many places he’s lived (Japan, China, Republic of Congo, San Diego, NYC) to help people from all parts of the world to bridge the gap from Athletics to Medicine.  When Joe isn’t wrestling or studying , he enjoys lifting weights, going to the beach, listening to music, and finding good eats.',
    linkedin: "https://www.linkedin.com/in/joseph-curtis-103124300/",
    instagram: 'https://www.instagram.com/joe.curtis234/',
    position: "Chief Leadership Officer",
    project: ["community"],
    leader: true
  },
  {
    name: 'Rachel Zun',
    slug: slugify('Rachel Zun'),
    images: [rachel2, rachel],
    description: 'D1 Gymnast & Human Development Student',
    fullBio: `Rachel is a Division 1 gymnastics student-athlete at Cornell University. She will receive her Bachelor of Science in Human Development with a minor in Biology and a pre-health concentration in May of 2024. Rachel is EMT certified and planning to work as a medical assistant before applying to medical school. 
    During her time at Cornell, Rachel was the president of the Student Athlete Advisory Committee. Within this role she served as one of only two student representatives on the Cornell Student Athlete Mental Health Committee, helping to create the new Wellness Ambassador Program at Cornell. She also created the Bench for a Cause Fundraiser that raised $5000 for the newly created Cornell Student Athlete Mental Health Fund to support student athlete mental health through awareness, training, and education. She established partnerships with local and national mental health organizations like Morgan’s Message and The Sophie Fund. Rachel is using the success of the event to lobby the administration to improve mental health resources for student athletes. Rachel has seen firsthand how intertwined sports and mental health are and hopes to use her own experiences to better the next generation of athletes.`,
    linkedin: "https://www.linkedin.com/in/rachel-zun-1426981b9/",
    instagram: 'https://www.instagram.com/rach.zun/',
    project: ["community"],
    position: "Community Mentor",
  },
  {
    name: 'Sophia Simenz',
    slug: slugify('Sophia Simenz'),
    images: [sophias, sophias2],
    description: 'D1 Rower & Neuroscience Student ',
    fullBio: `Sophia Simenz is a rising sophomore at Columbia University where she competes on the division one women's rowing team and is studying neuroscience on the pre medicine track. Sophia has always been interested in medicine and athletics and how society can better integrate the two to create healthier and happier athletes in both the short term and long term. She hopes to use the skills she is learning to become a doctor and to help coach younger athletes. Sophia is from Milwaukee, Wisconsin and grew up a multi-sport athlete, and she loves spending time outside, trying new restaurants, traveling, and spending time with family and friends. She is super excited to work with CFAA to better the health and lives of all athletes, past, present, and future!`,
    project: ["community"],
    position: "Community Mentor",
    instagram: 'https://www.instagram.com/sophiasimenz'
  },
  {
    name: 'Ashlyn Kane',
    slug: slugify('Ashlyn Kane'),
    images: [ashlyn3, ashlyn, ashlyn2],
    project: ["grow"],
    position: "Chief Financial Officer",
    description: 'D1 Soccer Player & Exercise Science Graduate Student',
    leader: true,
    fullBio: `Hey everyone, my name is Ashlyn Kane. As a Division 1 soccer player at Mississippi State, it's not just about winning; it's about pushing myself to be the best player and teammate I can be. Off the field, I'm equally passionate about the science of sports performance. That's why I'm pursuing a Master's degree in Exercise Science here at Mississippi State. I'm diving deep into topics like human physiology, biomechanics, and sports nutrition, because understanding the science behind the game is key to maximizing performance. But I'm not just studying for myself—I'm also super excited to be involved with Cortex Flex, a nonprofit organization dedicated to advancing sports science research and education. Through Cortex Flex, I get to collaborate with top experts, conduct groundbreaking research, and develop innovative training techniques, and work with athletes to help them reach their fullest potential. Whether I'm on the field, in the lab, or out in the community with Cortex Flex, I'm always striving to push the boundaries of what's possible in sports science. I'm on a mission to make a real difference in the world of athletics, and can’t wait to help do that with Cortex Flex!`,
  },
  {
    name: 'Ana Radanovic, MSc',
    slug: slugify('Ana Radanovic'),
    images: [ana],
    description: 'Neuroscience PhD Student ',
    fullBio: 'Ana Radanovic is a PhD candidate in Neuroscience at Weill Cornell Medical School. Her interests lie in researching biomarkers of recovery after brain injury and disorders of consciousness using MRI, EEG, and PET imaging. She is passionate about improving the state of TBI treatment and rehabilitation, as well as disseminating scientific knowledge to the public in an engaging and informative matter.',
    position: "Researcher",
    project: ["research"],
  },
  {
    name: 'Ella Stroehmann',
    slug: slugify('Ella Stroehmann'),
    images: [ella],
    instagram: 'https://www.instagram.com/estroeh04',
    linkedin: 'https://www.linkedin.com/in/ella-stroehmann-65847730a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    description: 'D1 Volleyball Player % Pre-medical Student',
    fullBio: 'Ella Stroehmann is a current Division I volleyball player who has a passion for connecting with younger athletes. She attends UNC Asheville, majoring in Health and Wellness Promotion, focusing on Pre-Med studies. She hopes to pursue a career in oncology or palliative care. Throughout her volleyball career she has received multiple all conference awards, won multiple conference championships, and participated in many matches at the national level. During her college recruiting journey she wishes that she had other older athletes that she could talk to who had been through the same thing- this is where her passion for helping younger athletes grew from. Another passion that Ella has is advocating for athlete’s mental health surrounding identity outside of sport as well as injury. She has been through many injuries and surgeries and wants to be for others the outlet she wishes she had during those times. Ella has always had a passion for helping people. During her time in high school, she completed internships at her local fire department- working with the EMTs and Paramedics in the ambulance. She also volunteered at her local hospital, doing patient rounds and developing relationships with people in hospice/ post surgery care. She is excited about empowering athletes in their journeys to their dreams, and can’t wait to see the impact that she has.',
    project: ["community"],
    position: "Community Mentor",
  },
  {
    name: 'Addison Goodman',
    slug: slugify('Addison Goodman'),
    images: [addison2, addison],
    description: 'Cognitive Science Student',
    fullBio: `Addison is a third year undergraduate at Cornell University, studying for a degree in Cognitive Science. Before transferring to Cornell, Addison played on the varsity women’s soccer team at a Penn State campus, on which she also served as the team captain. In addition to competing as a collegiate student athlete, Addison volunteered in Elderly Care homes, served as a student government representative, and participated in various clubs. Addison's path took a profound turn when a severe concussion sustained during soccer necessitated months of intensive physical therapy. This experience catalyzed her mission to advocate for better concussion awareness among student athletes. She firmly believes that no athlete should endure such challenges without proper scientific understanding of when to prioritize recovery. Driven by her own journey, Addison strives to pave a smoother path for others facing similar obstacles. She envisions a future where the lives of student athletes, both during their athletic careers and beyond, are enriched through heightened awareness and support systems.`,
    instagram: 'https://www.instagram.com/addi.goodman?igsh=MTV1N3pwcDY0bjZwaA%3D%3D&utm_source=qr'
  },
  {
    name: 'Onome Kessington',
    slug: slugify('Onome Kessington'),
    images: [onome],
    project: ["community"],
    position: "Community Mentor",
    description: 'Business Owner & Former D1 Football Player',
    fullBio: 'Onome Kessington is a Cornell University graduate completing his degree in Applied Economics and Management. Onome has an array of business experience from International Tax at world rebound beverage company Constellation Brands to Risk Management and Credit at First American Equipment Finance where they specialize in Equipment financing. Onome is a natural born entrepreneur that always looks at how he can add value to any room he is in.'
  },
  {
    name: 'Sanjay Kumar',
    slug: slugify('Sanjay Kumar'),
    images: [sanjay],
    description: 'Photographer & Neuroscience Student',
    fullBio: `Sanjay Kumar is an undergraduate student at Rutgers University, New Brunswick, born and raised in New Jersey. For the past two years, he has been immersed in sports photography, working as a freelance photographer for teams such as Columbia Wrestling, PFL, MLS, UCLA Softball, and Team USA Wrestling. Sanjay enjoys meeting new people, connecting with athletes, and embracing life's full potential. He plans to study neuroscience with the aim of making significant contributions to the field. With a love for learning and creating, Sanjay hopes to help the media and research efforts of Cortex Flex to help push the core mission. `,
    project: ["media", "research"],
    position: "Media Manager & Researcher",
  },
  {
    name: 'Olivia Ramil',
    slug: slugify('Olivia Ramil'),
    images: [olivia2, olivia],
    description: ' Non-profit Leader & Former D1 Basketball Player ',
    fullBio: 'Olivia Ramil brings a wealth of experience to Cortex Flex Athlete Alliance as a former collegiate athlete, having competed in Division I Basketball for six years across prestigious institutions like Georgetown University, Binghamton University, St. Joseph’s University, and Samford University. Notably ranked by ESPN as the 16th best center in the 2016 Women’s Basketball class out of high school, Olivia balanced her athletic pursuits with scholarly passions, earning both a Bachelor of Science in Nursing and a Masters of Health Administration. In her transition from the court to professional roles, she has served as a Support Coordinator Intern with Samford University’s CAREs Team, Lead Project Manager and Recruiting Coordinator at SaveAround Fundraising, Athlete to Athlete Recruiter, PLAAY Mentor & Project Manager, and Registered School Nurse for Elementary and Middle Schools. As a member of the Cortex Flex Athlete Alliance, Olivia strives to equip and empower athletes, utilizing her varied expertise to nurture success, safety, and fulfillment in their careers and beyond.    '
  },
  {name: 'Zahra Ronizi',
  slug: slugify('Zahra Ronizi'),
  images: [zahra],
  description: 'Karateka & Astrobiology Researcher',
   fullbio: `Zahra is an incoming first-year at Harvard University, where she will be pursuing a joint-concentration in biomedical engineering and human developmental & regenerative biology with a secondary in astrophysics. She holds a black belt in Goju-Ryu Karate and has been competing and ttraining since the age of four. She currently teaches as a sensei at Satori Martial Arts School, passing on her passion and experience in martial arts to beginner and novice students each week. Zahra is a former NASA intern on the Mars Rover Resource Utilization Team through the SEES Program. She also works as an analog astronaut, performing medical and astrobiological research across the world on simulated missions to Mars. Some of her most memorable experiences were serving as the crew biologist on a mission in Spain and as a mission specialist on an expedition in northern Iceland.  In the future, Zahra aspires to become a cardiologist and aerospace medicine physician. Throughout Zahra’s experiences in martial arts and the space medicine community, the need to build a connection between scientists and athletes became crystal clear. She was drawn to CFAA’s mission to build that bridge in the athletic community and foster meaningful progress in the lives of student-athletes.`,
   instagram:"https://www.instagram.com/themarsgal/",
   linkedin:'https://www.linkedin.com/in/zahra-ronizi-b310a51b2',
   position: "Chief Communication Officer",
   project: ["media"],
   leader: true,
  },
  {
    name: 'DJ Hampton',
    slug: slugify('DJ Hampton'),
    images: [dj],
    description: 'Performance Enhancement Trainer & U.S Army Section Chief',
    fullBio: "DJ Hampton, an ISSA Certified Performance Enhancement Trainer, is the dynamic force behind BoyGuru Fitness. With a passion for cultivating excellence in student athletes, DJ's dual training methods in the physical and cognitive realms sets him apart. Currently Serving as a U.S. Army, combat arms Field Artillery Howitzer Section Chief, he effortlessly applies agile decision-making and creative problem-solving skills honed through tactical situations while also fostering a deliberate and process management mindset garnered through a certification in Program Management and a Green Belt in Six Sigma Methodology. Despite his recent foray into business, DJ's leadership, training, speaking, content creation, and marketing skills converge seamlessly. His mission extends beyond sports, aiming to transform individuals into forces of nature both in their sport and in the sport of life. DJ's diverse skill set positions him as a valuable asset to the Cortex Flex Athlete Alliance, making him a trusted ally for those seeking mastery of self and unparalleled performance enhancement.",
    project: ["media"],
    position: "Media Manager",  
  },
  {
    name: 'Katelyn Sylvester',
    slug: slugify('Katelyn Sylvester'),
    images: [kate1, kate2],
    description: 'Clinical Research Coordinator',
    linkedin: 'http://www.linkedin.com/in/katelyn-sylvester',
    instagram: 'https://www.instagram.com/katelynmsylvester?igsh=ODloang0MXQzNzJs&utm_source=qr',
    fullBio: `Katelyn is a hardworking individual passionate about increasing accessibility and understanding within various populations. She received her Bachelor of Arts in Psychology and Math from Boston University in May 2023, with hopes of pursuing higher education in Healthcare Systems Engineering. Currently, she works as a clinical research coordinator within the division of neuropsychiatry and neuromodulation at Massachusetts General Hospital. As she embarked on her educational journey and various athletic pursuits, she realized they are symbiotic by nature: the physicality and team dynamacy in athletics improves mental health, and neurological processes impact performance. Through CFAA, Katelyn strives to make the intricacies of brain health digestible for athletes at all levels, in addition to educating scientists on the complexities of various sports. 
    `,
    bod: true
  },
  {
    name: 'Lisa Liff',
    slug: slugify('Lisa Liff'),
    images: [lisa],
    project: ["research"],
    position: "Researcher",
    description: 'Medical Student',
    fullBio: 'Lisa is an EMT in Boston and a Clinical Care Tech at Tufts Medical Center. She graduated from Cornell University in May of 2023 where she majored in Biological Sciences with a concentration in Neurobiology and minors in Psychology and Global Health. A lifelong soccer player, Lisa picked up running during COVID and has continued this pursuit post-grad, running both the NYC and Philly Marathons in 2023. Passionate about athlete’s health and science, Lisa plans to compile and synthesize information on the two subjects in one place with CFAA',
  },
  {
    name: 'Kanella Basilion',
    slug: slugify('Kanella Basilion'),
    images: [kanella],
    description: 'Clinical Research Coordinator',
    fullBio: `Kanella is thrilled to be at the intersection of society and science here at Cortex Flex. She received her bachelor’s degree from McGill University in May 2023, where she majored in psychology and minored in French and behavioral science. She has a research background in pediatric ADHD at the Cleveland Clinic’s ADHD Summer Treatment Program, and cardiovascular psychophysiology through McGill University. Currently, she works in neurology research at Massachusetts General Hospital’s Frontotemporal Disorders Unit.
      Kanella is interested in all things health, nutrition, and quality of life, and hopes to pursue higher education in health psychology in the future. To Kanella, an informed society is foundational to creating well-being oriented spectators, athletes, and policymakers of the athletic world and beyond. She is excited to be able to bring a psychological lens to the scientific advocacy work of this organization, and to assist with the distribution of comprehensible learning resources to budding athletes throughout the United States.`,
    linkedin: "https://www.linkedin.com/in/kanella-basilion-bb67ab1b2/",
    project: ["research", "community"],
    position: "Researcher & Community Coordinator",
  },
  {
    name: 'Hemant Velidi',
    slug: slugify('Hemant Velidi'),
    images: [hemant],
    project: ["community"],
    position: ["Community Coordinator"],
    description: 'Business Student',
    fullBio: 'My name is Hemant Velidi, and I am from the Northern Virginia area. I have been a soccer athlete from the age of three up until my senior year of high school. Currently, I study finance at IU Kelley and hope to work in investment management and healthcare consulting. I was first introduced to Cortex Flex by my older brother, who is a director. After learning more about the mission, I realized how much I wish I had this as a younger athlete. I have always loved sports, and I always love spending time outside.',
  },
  {
    name: 'Jessalyn Pugh',
    slug: slugify('Jessalyn Pugh'),
    images: [jess],
    project: ["community"],
    position: "Community Coordinator",
    description: 'Health Sciences Student',
    fullBio: 'Jessalyn is a third-year student at the University of Cincinnati, where she is pursuing a Health Sciences degree with a focus in Minority Health. Her academic journey reflects her commitment to a career in healthcare as she prepares to apply to medical school this coming summer and work towards a career in Emergency Medicine. Beyond the classroom, Jessalyn is a Certified Phlebotomist and works as a Patient Care Assistant on a cardiac step-down and telemetry floor at a branch hospital of Cleveland Clinic. As a former competitive dancer, Jessalyn recognizes the necessity for improved training techniques and heightened emphasis on injury prevention within the realm of athletics. Driven by a deep-rooted commitment to promoting wellness, Jessalyn is passionate about utilizing research and education to mitigate athlete injuries. She aims to contribute to a world where individuals can lead happy and healthy lives, both on and off the field. This commitment underscores her belief in the transformative power of healthcare and education to positively impact communities.',
  },
  {
    name: 'Ellie Mccarron',
    slug: slugify('Ellie Mccarron'),
    images: [ellie, ellie2],
    description: 'Graphic Designer',
    fullBio: `An inspired creative excited by the intersection of graphic design, visual art, and advertising, Ellie McCarron has built a portfolio of technical skills, and experiences that position her for success as an emerging Art Director. The Boston University junior has completed intensive creative coursework, as well as an industry internship in Boston for a major non-profit. 
    Ellie was the digital marketing intern for Big Brothers Big Sisters of Eastern Massachusetts, where she contributed fresh strategies as well as new mediums of digital marketing. She helped develop BBBSEM’s presence online across platforms, such as Instagram, Facebook, TikTok, X, and LinkedIn. She learned how to use much of the Adobe Suite in a professional setting.
    She is currently a part of Boston University’s AdLab, the largest student-run advertising agency in the country. She is an Art Director for Under Armour, and has contributed unique, memorable content for them. She is a graphic designer for The BU BUZZ, a student-run lifestyle magazine. Ellie also participated in Boston University’s PRoBono, and provided exclusive graphics for a local non-profit’s social media page. She also has several years of customer service experience under her belt.   							
    At Boston University, Ellie has earned dean’s list honors while completing coursework in media relations, communications writing, advertising, and graphic design.`,
    linkedin: 'https://www.linkedin.com/in/elisabeth-mccarron-81580526a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagram: 'https://www.instagram.com/elliebelly17?igsh=NHZ6OTlrOGdweWZi&utm_source=qr'
  },
  {
    name: 'Puneet Velidi',
    slug: slugify('Puneet Velidi'),
    images: [puneet, puneet2],
    description: 'Software Engineer & Neuroscience Researcher',
    fullBio: 'Puneet was a software engineer at Walmart Global Tech where he builds web applications and now is research intern @ MGH/Harvard Medical School. He was a researcher in the Computational Connectomics Lab at Cornell and presented his work on the effect of heavy alcohol use on the brain at OHBM 2023.',
    email: "puneet@cortexflex.org",
    linkedin: "https://www.linkedin.com/in/puneet-velidi-555b21212",
    instagram: 'https://www.instagram.com/puneetvelidi/',
    position: "Chief Technology Officer",
    project: ["research"],
    leader: true,
  },

  {
    name: 'Haneyya Siddiqui',
    slug: slugify('Haneyya Siddiqui'),
    images: [haneyya],
    description: 'National-level Throwball Player ',
    fullBio: `Haneyya is a highschool student who just completed her ALevels. She is also a hybrid athlete who plays basketball, throwball and table tennis. In her free time, she runs obstacle course marathons or makes jewelry. 

She wants to study engineering in the future and hopes to use a MechE degree along with basketball to show the impact of sport in lives. Whether she ends up being a coach, a basketball camp host, or just a motorsport engineer, she wants to use sport to create impact because she believes sports can build relationships, memories, and opportunities that can help you be set for life.

Being a student athlete gave her a chance to practice skills that include leadership, having been a team captain since 6th grade. As she will be transitioning to a college phase soon, she wants to continue playing sports - while advocating for sports science and research.

As a current Voice In Sport Intern(!) and a part of the CF Team, she wants to use her skills in media and tech to advance the applications of research in sport science, and make sure Cortex Flex’s aim is pushed to all targeted audiences, including future and current athletes!
`,
    position: "Developer",
    project: ["media"]
  },

  // More bios...
];



const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#007bff', // Adjust this to match your theme's secondary color
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kosugi Maru, sans-serif',
  },
});

function BioGallery() {
  const [open, setOpen] = useState(false);
  const [selectedBio, setSelectedBio] = useState({});
  useEffect(() => {
    const navigateToBioByTitle = () => {
      const hash = window.location.hash.replace('#', '');
      const slug = decodeURIComponent(hash);
      const selectedBio = bios.find(bio => bio.slug === slug);

      if (selectedBio) {
        setSelectedBio(selectedBio);
        setOpen(true);
        const postElement = document.getElementById(slug);
        if (postElement) {
          postElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setOpen(false);
      }
    };

    if (bios.length > 0) {
      navigateToBioByTitle();
    }

    window.addEventListener('hashchange', navigateToBioByTitle, false);
    return () => window.removeEventListener('hashchange', navigateToBioByTitle, false);
  }, []); // Ensure dependencies are correctly listed

  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const bio = bios.find(b => b.slug === hash);
        if (bio) {
          setSelectedBio(bio);
          setOpen(true);
        }
      }
    };

    handleInitialHash(); // Call it on mount

    // Further code for event listeners...
  }, []);


  const handleOpen = (bio) => {
    setSelectedBio(bio);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
    window.history.pushState("", document.title, window.location.pathname + window.location.search); // Remove hash from URL
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%', // Adjusted width for better mobile view
    maxWidth: 375, // Added maxWidth for responsiveness 
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
  };

  const boardMembers = bios.filter(bio => bio.bod);
  const mas = bios.filter(bio => bio.medicaladvisor);
  const leadership = bios.filter(bio => bio.leader);
  const communitymembers = bios.filter(bio => Array.isArray(bio.project) && bio.project.includes("community"));
  const researchmembers = bios.filter(bio => Array.isArray(bio.project) && bio.project.includes("research"));
  const mediamembers = bios.filter(bio => Array.isArray(bio.project) && bio.project.includes("media"));
  //const growmembers = bios.filter(bio => Array.isArray(bio.project) && bio.project.includes("grow"));

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Notable, sans-serif' }} gutterBottom>Leadership</Typography>
      <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {leadership.map((bio, index) => (
         <Grid item xs={12} sm={6} md={2} key={index}>
         <Card>
           <Slider {...sliderSettings}>
             {bio.images.map((image, idx) => (
               <div key={idx}>
                 <LazyLoadImage
                   alt={bio.name}
                   style={{ width: '100%', height: '100%' }}
                   src={image}
                   effect="blur"
                 />
               </div>
             ))}
           </Slider>
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {bio.name}
             </Typography>
             <Typography variant="body1" color="primary" style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                {bio.position}
              </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
               {bio.description}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
             {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
             {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
             {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
           </CardActions>
         </Card>
       </Grid>
        ))}
      </Grid>
      <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Notable, sans-serif' }} gutterBottom>Medical Advisors</Typography>
      <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {mas.map((bio, index) => (
         <Grid item xs={12} sm={6} md={2} key={index}>
         <Card>
           <Slider {...sliderSettings}>
             {bio.images.map((image, idx) => (
               <div key={idx}>
                 <LazyLoadImage
                   alt={bio.name}
                   style={{ width: '100%', height: '100%' }}
                   src={image}
                   effect="blur"
                 />
               </div>
             ))}
           </Slider>
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {bio.name}
             </Typography>
             <Typography variant="body1" color="primary" style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                {bio.position}
              </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
               {bio.description}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
             {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
             {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
             {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
           </CardActions>
         </Card>
       </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Notable, sans-serif' }} gutterBottom>Cortex Community</Typography>
      <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {communitymembers.map((bio, index) => (
         <Grid item xs={12} sm={6} md={2} key={index}>
         <Card>
           <Slider {...sliderSettings}>
             {bio.images.map((image, idx) => (
               <div key={idx}>
                 <LazyLoadImage
                   alt={bio.name}
                   style={{ width: '100%', height: '100%' }}
                   src={image}
                   effect="blur"
                 />
               </div>
             ))}
           </Slider>
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {bio.name}
             </Typography>
             <Typography variant="body1" color="primary" style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                {bio.position}
              </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
               {bio.description}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
             {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
             {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
             {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
           </CardActions>
         </Card>
       </Grid>
        ))}
      </Grid>

      <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Notable, sans-serif' }} gutterBottom>Cortex Research</Typography>
      <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {researchmembers.map((bio, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card>
              <Slider {...sliderSettings}>
                {bio.images.map((image, idx) => (
                  <div key={idx}>
                    <LazyLoadImage
                      alt={bio.name}
                      style={{ width: '100%', height: '100%' }}
                      src={image}
                      effect="blur"
                    />
                  </div>
                ))}
              </Slider>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bio.name}
                </Typography>
                <Typography variant="body1" color="primary" style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                {bio.position}
              </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
                  {bio.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
                {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
                {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
                {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Notable, sans-serif'}} gutterBottom>Cortex Media</Typography>
      <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {mediamembers.map((bio, index) => (
         <Grid item xs={12} sm={6} md={2} key={index}>
         <Card>
           <Slider {...sliderSettings}>
             {bio.images.map((image, idx) => (
               <div key={idx}>
                 <LazyLoadImage
                   alt={bio.name}
                   style={{ width: '100%', height: '100%' }}
                   src={image}
                   effect="blur"
                 />
               </div>
             ))}
           </Slider>
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {bio.name}
             </Typography>
             <Typography variant="body1" color="primary" style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                {bio.position}
              </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
               {bio.description}
             </Typography>
           </CardContent>
           <CardActions>
             <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
             {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
             {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
             {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
           </CardActions>
         </Card>
       </Grid>
        ))}
      </Grid>
      <Typography variant="h4" sx={{ padding: '20px', textAlign: 'center', fontFamily: 'Notable, sans-serif' }} gutterBottom>Board of Directors</Typography>
      <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'center', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>
        {boardMembers.map((bio, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Card>
              <Slider {...sliderSettings}>
                {bio.images.map((image, idx) => (
                  <div key={idx}>
                    <LazyLoadImage
                      alt={bio.name}
                      style={{ width: '100%', height: '100%' }}
                      src={image}
                      effect="blur"
                    />
                  </div>
                ))}
              </Slider>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {bio.name}
                </Typography>
                <Typography variant="body1" color="primary" style={{ fontWeight: 'bold', fontSize: '14px', marginTop: '8px' }}>
                {bio.position}
              </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: '10px' }}>
                  {bio.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpen(bio)}>Learn More</Button>
                {bio.linkedin && <IconButton size="small" href={bio.linkedin}><LinkedIn /></IconButton>}
                {bio.instagram && <IconButton size="small" href={bio.instagram}><Instagram /></IconButton>}
                {bio.email && <IconButton size="small" href={`mailto:${bio.email}`}><Email /></IconButton>}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedBio.name}
          </Typography>
          {selectedBio.images && selectedBio.images.length > 0 && (
            <Slider {...sliderSettings}>
              {selectedBio.images.map((image, idx) => (
                <div key={idx}>
                  <LazyLoadImage
                    alt={selectedBio.name}
                    style={{ width: '100%', height: '100%' }}
                    src={image} // Use your own image URL here
                  />
                </div>
              ))}
            </Slider>
          )}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedBio.fullBio}
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default BioGallery;

