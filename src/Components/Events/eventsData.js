// Import event images
import smp from "../../Assets/Events/SMP.jpeg";
import foresight from "../../Assets/Events/Foresight.png";
import oct from "../../Assets/Events/OffCampus.jpg";
import examania from "../../Assets/Events/Examania.jpg";
import cos from "../../Assets/Events/COS.jpg";
import pds from "../../Assets/Events/PDS.jpg";
import elat from "../../Assets/Events/ELAT.png";
import rgw from "../../Assets/Events/RGW.jpg";
import ct from "../../Assets/Events/CampusTour.png";
import sa101 from "../../Assets/Events/SA101.jpg";
import playstorelogo from "../../Assets/Events/playstore.png";

// Categories configuration
export const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'career', label: 'Career' },
  { id: 'academic', label: 'Academic' },
  { id: 'mentorship', label: 'Mentorship' },
];

// Events data
export const events = [
  {
    id: 1,
    category: 'mentorship',
    title: 'Student Mentorship Program',
    description: 'An important initiative to connect seniors with freshers and mentor them throughout their first year journey, and further as a guide and support.',
    image: smp,
  },
  {
    id: 2,
    category: 'academic',
    title: 'Study Abroad 101',
    description: 'An offline event where panellists guide about higher education opportunities abroad and how to crack various examinations.',
    image: sa101,
  },
  {
    id: 3,
    category: 'career',
    title: 'Off-Campus Talks',
    description: 'An offline session conducted to resolve all the doubts regarding the off-campus internship and placement opportunities.',
    image: oct,
  },
  {
    id: 4,
    category: 'academic',
    title: 'Examania',
    description: 'An offline event conducted before mid-semester exams to guide the freshers. We provide students with essential resources, study materials, and links to past exam papers to help them succeed in mid-semester exams.',
    image: examania,
  },
  {
    id: 5,
    category: 'career',
    title: 'Career Orientation Session',
    description: 'Access curated study materials, previous year question papers, and preparation strategies for your semester exams. Our Exam Prep resources are designed to help you excel in your academics with minimal stress.',
    image: cos,
  },
  {
    id: 6,
    category: 'academic',
    title: 'PDS Doubt Session',
    description: 'An offline initiative conducted to improve the skills in Programming and Data Structures for first years and get guidance from seniors regarding the grade in PDS and coding skills.',
    image: pds,
  },
  {
    id: 7,
    category: 'mentorship',
    title: 'English Language Assessment Test',
    description: 'An offline initiative conducted to improve the English Language, which is useful for various careers.',
    image: elat,
  },
  {
    id: 8,
    category: 'career',
    title: 'Research Guidance Webinar',
    description: 'An online session where panellists give insights about various research opportunities.',
    image: rgw,
  },
  {
    id: 9,
    category: 'mentorship',
    title: 'Campus Tour',
    description: 'An offline event for freshers to show them around the campus and learn stories about important places.',
    image: ct,
  },
  {
    id: 10,
    category: 'career',
    title: 'FORESIGHT',
    description: 'A blog-based initiative that provides all the strategic guidance students need to crack their dream internships and placements. The blogs are published based on articles submitted by IIT Kharagpur students who have successfully completed internships or secured full-time job offers through CDC.',
    image: foresight,
    link: 'https://swgiitkgp.org/placementblogs',
  },
];

// App store configuration
export const appConfig = {
  title: 'Get the SWG App',
  subtitle: 'Stay connected with all SWG events, resources, and updates right from your phone.',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.swg.swg_app',
  playstoreLogo: playstorelogo,
};

// Hero section configuration
export const heroConfig = {
  title: 'Explore',
  highlight: 'SWG Events',
  subtitle: 'Your gateway to mentorship, career growth, and campus life at IIT Kharagpur.',
  scrollText: 'Scroll to explore',
};
