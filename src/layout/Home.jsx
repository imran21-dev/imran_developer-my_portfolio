import { RiDownloadCloud2Line, RiTailwindCssFill } from "react-icons/ri";
import userImg from "../assets/user.jpg";
import hsc from "../assets/hsc.jpg";
import diploma from "../assets/diploma.jpg";
import { Cover } from "../components/ui/cover";
import {
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNode,
  FaReact,
  FaSchool,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Meteors } from "../components/ui/Meteors";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { SparklesCore } from "../components/ui/sparkles";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../AssetsContext";
import { SiMongodb } from "react-icons/si";
import { BiLogoFirebase, BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot, FaRegCircleDot } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import ProjectCart from "../components/ProjectCart";
import resume from "../assets/myResume.pdf";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { partical } = useContext(ThemeContext);
  const [result, setResult] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("project.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const mess = event.target.Message.value;
    if (mess.trim() === "") {
      return;
    }
    setResult("sending");

    formData.append("access_key", "a4282212-2c5d-4fd6-92bb-52a6a6c5358e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(true);
      event.target.reset();
    } else {
      setResult(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-10/12 mx-auto py-5 "
    >
      <Helmet>
              <title>Home | Imran Developer</title>
            </Helmet>
      <div className=" w-full bg-primary  bg-dot-gray-500/50  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* Banner */}
        <section className="flex  flex-col-reverse gap-4 lg:gap-0 lg:flex-row items-start justify-between relative">
          <div className="lg:w-2/4  lg:pt-20 flex flex-col justify-center ">
            <h1 className="md:text-2xl font-medium pb-2 ">Hi, I&apos;m Imran</h1>
            <h1 className="text-2xl md:text-5xl pb-1 font-extrabold z-0">
              <Cover>
                <span className="gradient-text">
                  Professional Web Developer
                </span>
              </Cover>
            </h1>
            <p className="text-sm md:text-base py-2 md:py-3">
              I am a dedicated and hardworking individual with a strong passion
              for web development. I excel at handling multiple tasks and thrive
              under pressure. As a quick learner, I am always eager to explore
              and master new technologies to enhance my skills and deliver
              exceptional results.
            </p>

            <ul className="flex gap-2 py-1 md:py-5">
              <li className="banner-list">
                <a href="https://github.com/imran21-dev" target="_blank">
                  <FaGithub className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://www.linkedin.com/in/md-imran-parves-9300091ba/" target="_blank">
                  <FaLinkedin className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="mailto:mimranparves@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you." target="_blank">
                  <MdMail className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://x.com/Mohamma85577121" target="_blank">
                  <FaTwitter className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://www.facebook.com/mdimran.parves.9" target="_blank">
                  <FaFacebook className="banner-list-a" />
                </a>
              </li>
            </ul>

            <a
              href={resume}
              download={true}
              className="btn bg-transparent md:mt-0 mt-2 px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
            >
              <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                Download Resume <RiDownloadCloud2Line />
              </span>
            </a>
          </div>

          <div className="lg:w-2/4 relative  overflow-hidden">
            <Meteors number={2}></Meteors>
            <figure>
              <img
                src={userImg}
                alt="User Image"
                className="userLogo md:w-2/3 mx-auto"
              />
            </figure>
            <div>
              <h1 className="flex items-center  font-medium gap-2 rotate-90 bottom-5 -right-3 md:right-2 absolute origin-right">
                <span className="gradient-text text-xs md:text-base">Code. Create. Inspire.</span>
                <span className="w-20 md:w-44 h-[1px] bg-gradient-bg rotate-180"></span>{" "}
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* About section */}
      <section className="lg:pt-44 pt-10 lg:px-20">
        <h1 className="md:text-3xl text-xl font-bold mx-auto gradient-text py-5">
          About Me
        </h1>
        <div className="flex md:flex-row flex-col items-center gap-3 md:gap-10">
          <div className="w-max flex justify-center">
            <div className="avatar ">
              <div className="mask bg-gradient-bg  mask-hexagon w-64 pb-2 ">
                <div className="avatar">
                  <div className="mask mask-hexagon mt-2 bg-primary ml-2 w-60">
                    <img src={userImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 font-medium">
            <h1 className="md:text-base text-sm">
              I&apos;m Mohammad Imran, a professional web developer. I have
              expertise in various technologies including:
            </h1>
            <ul className="list-disc md:text-base text-sm list-inside py-3 md:py-5">
              <li className="">
                Frontend: HTML, CSS, Tailwind, JavaScript, React
              </li>
              <li className="">Backend: Node, Express, Firebase</li>
              <li className="">Databases: MongoDB</li>
            </ul>

            <p className="font-normal md:text-base text-sm">
              I offer services in Frontend Development, Backend Development,
              Full Stack Development, App Development, Responsive design, Error
              Fixing, Database Management, and Unit Testing.My focus is on
              simplifying complex user experiences through ethical design.
              creating solutions that foster meaningful connections for
              billions.
            </p>

            <Link
              to="/about"
              className="btn mt-2 md:mt-5 bg-transparent px-[2px] duration-300 hover:text-pColor py-[2px] explore-btn w-max rounded-full  h-max min-h-max  border-none hover:border-none"
            >
              <span className="bg-primary flex items-center gap-1 border-t border-[#8636ff]/50 md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3 rounded-full relative ">
                See More <GoArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skill section */}
      <section className="lg:pt-44 pt-10 lg:px-20 text-center">
        <h1 className="md:text-3xl text-xl font-bold mx-auto gradient-text py-2 md:py-5">
          Skills
        </h1>
        <p className="lg:w-2/4 mx-auto text-xs md:text-sm">
          A showcase of my expertise and tools of the trade, reflecting my
          journey in mastering technology and design. These skills drive my
          creativity and innovation in every project.
        </p>

        <div className="h-[12rem] w-full bg-primary flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor={partical ? "#ffffff" : "#000000"}
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-primary [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <section className="mx-auto justify-items-center md:pt-10 gap-3 md:gap-16 lg:w-5/12 grid md:grid-cols-4 grid-cols-3">
          <section>
            <div
              title="HTML"
              className="text-[#E34F26] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#E34F26] to-[#e34f26]  skill rounded-2xl md:scale-100 scale-75"
            >
              <FaHtml5 className="bg-primary  relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#e34f26] pt-2">
              HTML
            </h2>
          </section>

          <section>
            <div
              title="Tailwind CSS"
              className="text-[#38BDF8] p-[2px] w-20 h-20  before:bg-gradient-to-r from-[#38BDF8] to-[#38BDF8]  skill rounded-2xl  md:scale-100 scale-75"
            >
              <RiTailwindCssFill className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#38BDF8] pt-2">
              Tailwind
            </h2>
          </section>

          <section>
            <div
              title="JavaScript"
              className="text-[#F7DF1E] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#F7DF1E] to-[#F7DF1E]  skill rounded-2xl  md:scale-100 scale-75"
            >
              <FaJs className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#F7DF1E] pt-2">
              JavaScript
            </h2>
          </section>

          <section>
            <div
              title="React"
              className="text-[#61DAFB] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#61DAFB] to-[#61DAFB]  skill rounded-2xl  md:scale-100 scale-75"
            >
              <FaReact className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#61DAFB] pt-2">
              React
            </h2>
          </section>

          <section>
            <div
              title="Firebase"
              className="text-[#FFA000] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#FFA000] to-[#FFA000]  skill rounded-2xl  md:scale-100 scale-75"
            >
              <BiLogoFirebase className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#FFA000] pt-2">
              Firebase
            </h2>
          </section>

          <section>
            <div
              title="Node JS"
              className="text-[#339933] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#339933] to-[#339933]  skill rounded-2xl  md:scale-100 scale-75"
            >
              <FaNode className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>

            <h2 className="text-center text-sm md:text-base font-semibold text-[#339933] pt-2">
              Node JS
            </h2>
          </section>

          <section>
            <div
              title="MongoDB"
              className="text-[#47A248] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#47A248] to-[#47A248]  skill rounded-2xl  md:scale-100 scale-75"
            >
              <SiMongodb className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#47A248] pt-2">
              MongoBD
            </h2>
          </section>

          <section>
            <div
              title="GitHub"
              className="text-[#F05033] p-[2px] w-20 h-20 before:bg-gradient-to-r from-[#F05033] to-[#F05033]  skill rounded-2xl   md:scale-100 scale-75"
            >
              <FaGitAlt className="bg-primary relative w-full rounded-2xl  h-full p-5" />
            </div>
            <h2 className="text-center text-sm md:text-base font-semibold text-[#F05033] pt-2">
              Github
            </h2>
          </section>
        </section>
      </section>

      {/* Education */}
      <section className="lg:pt-44 pt-10 lg:px-20  text-center">
        <h1 className="md:text-3xl text-xl  relative font-bold  gradient-text py-8">
          Education Journey
          <div className="w-10 absolute h-1 md:h-2 bg-gradient-bg"></div>
        </h1>
        <section className="grid lg:grid-cols-2 gap-10 justify-items-center">
          <div className="w-full text-left ">
            <img
              className="w-full rounded-2xl h-60 lg:h-80 object-cover"
              src={diploma}
              alt="collage image"
            />
            <h2 className="my-3 w-max text-sm md:text-base rounded-full px-5 font-bold border border-pColor/50 gradient-text">
              Present
            </h2>
            <h1 className="flex items-center gap-1 text-lg md:text-xl font-semibold">
              <FaSchool />
              Pabna Polytechnic Institute
            </h1>
            <p className="font-medium text-xs md:text-base py-2 flex items-center gap-1">
              <FaGraduationCap />
              Diploma in Computer Science & Engineering
            </p>
            <p className="pb-3 text-sm md:text-base">
              Building a strong foundation in programming, web development, and
              database management. Actively engaging in tech clubs, coding
              competitions, and hands-on projects to enhance my technical skills
              and problem-solving abilities.
            </p>

            <h2 className="flex items-center gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Coursework:{" "}
              <span className="font-normal text-xs md:text-base">
                Programming, Web Development
              </span>
            </h2>
            <h2 className="flex items-center my-1 gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Activities:{" "}
            </h2>
            <ul className="list-disc list-inside md:pl-10">
              <li>
                <span className="font-normal text-xs md:text-base">
                  Member of the Tech Club
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Participated in Coding Competitions
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Developed small projects showcasing practical applications
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full text-left">
            <img
              className="w-full rounded-2xl h-60 lg:h-80 object-cover"
              src={hsc}
              alt="collage image"
            />
            <h2 className="my-3 w-max text-sm md:text-base rounded-full px-5 font-bold border border-pColor/50 gradient-text">
              2021 - 2023
            </h2>
            <h1 className="flex items-center gap-1 text-lg md:text-xl font-semibold">
              <FaSchool />
              Hazi Jasim Uddin Degree (Hons) College, Dublia
            </h1>
            <p className="font-medium text-xs md:text-base py-2 flex items-center gap-1">
              <FaGraduationCap />
              Higher Secondary Certificate (HSC)
            </p>

            <p className="pb-3 text-sm md:text-base">
              Focused on core science subjects, developing analytical thinking
              and a passion for technology. Participated in science fairs and
              collaborative projects that fostered teamwork and innovation.
            </p>

            <h2 className="flex items-center gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Major: <span className="font-normal text-xs md:text-base">Science</span>
            </h2>
            <h2 className="flex items-center my-1 gap-2 text-sm md:text-lg font-medium">
              <FaRegCircleDot />
              Achievements:{" "}
            </h2>
            <ul className="list-disc list-inside md:pl-10">
              <li>
                <span className="font-normal text-xs md:text-base">
                  Secured good grades in core science subjects
                </span>
              </li>
              <li>
                <span className="font-normal text-xs md:text-base">
                  Actively participated in science fairs and group projects
                </span>
              </li>
            </ul>
          </div>
        </section>
      </section>

      {/* Projects section */}
      <section className="lg:pt-44 pt-10  relative z-0 lg:px-20  text-center">
        <h1 className="md:text-3xl text-xl  font-bold mx-auto gradient-text py-2 md:py-5">
          Projects
        </h1>
        <p className="lg:w-2/4 mx-auto text-xs md:text-sm">
          A showcase of my work blending creativity and functionality, featuring
          interactive designs, seamless development, and innovative solutions.
        </p>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 py-5 md:py-10 justify-items-center">
          {projects.map((project) => (
            <ProjectCart key={project.id} project={project} />
          ))}
        </section>
      </section>

      {/* Contact section */}
      <section className="lg:pt-44 pt-10 lg:px-20  text-center">
        <h1 className="md:text-3xl text-xl font-bold mx-auto gradient-text py-5 md:py-10">
          Contact
        </h1>
        <section className="flex lg:flex-row flex-col items-center gap-10 md:gap-20">
          <div className="lg:w-2/4 text-left">
            <h1 className="gradient-text uppercase md:text-xl font-medium">
              Do you have a project to discuss?
            </h1>
            <h1 className="md:text-2xl text-xl py-2 md:py-3 font-bold">
              Let&apos;s Create Something Amazing Together!
            </h1>
            <p className="md:text-base text-sm">
              Thanks for stopping by! If you have any questions, ideas, or
              simply want to collaborate, feel free to reach out. Use the
              contact details below or fill out the quick form to send me a
              message directly. I&apos;m excited to connect and create something
              amazing together!
            </p>
            <h2 className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
              contact
            </h2>
            <ul className="text-sm md:text-base">
              <li className="">
                <a
                  href="https://www.google.com/maps/place//@23.9644477,89.3891674,18z/data=!4m9!1m8!3m7!1s0x39fe62bace053f9f:0x43fb82441c057a91!2sSujanagar!3b1!8m2!3d23.9384631!4d89.4086478!16s%2Fg%2F1230vf6q?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaLocationDot />
                  Sujanagar, Pabna, Bangladesh
                </a>
              </li>
              <li className="">
                <a
                  href="tel:+8801301460344"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <BiSolidPhoneCall /> +8801301460344
                </a>
              </li>
              <li className="">
                <a
                  href="https://wa.me/8801301460344"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp /> +8801301460344
                </a>
              </li>
              <li className="">
                <a
                  href="mailto:mimranparves@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <MdMail /> mimranparves@gmail.com
                </a>
              </li>
            </ul>

            <h2 className="uppercase  font-medium md:text-xl pt-3 md:pt-5 pb-2 gradient-text">
              social
            </h2>
            <ul className="flex gap-2 ">
            <li className="banner-list">
                <a href="https://github.com/imran21-dev" target="_blank">
                  <FaGithub className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://www.linkedin.com/in/md-imran-parves-9300091ba/" target="_blank">
                  <FaLinkedin className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="mailto:mimranparves@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you." target="_blank">
                  <MdMail className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://x.com/Mohamma85577121" target="_blank">
                  <FaTwitter className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="https://www.facebook.com/mdimran.parves.9" target="_blank">
                  <FaFacebook className="banner-list-a" />
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:w-2/4 w-full flex flex-col items-start">
            <h1 className="text-lg font-semibold pb-5">Direct Message</h1>
            <div className="bg-gradient-bg rounded-xl w-full p-[1px]">
              <form
                onSubmit={onSubmit}
                className="bg-primary/80 rounded-xl p-3 md:p-7 text-left w-full"
              >
                <div className="flex flex-col gap-1 items-start">
                  <label className="font-semibold text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="Enter your email"
                    className="w-full text-sm md:text-base bg-primary/50 focus:outline-none indent-2 p-2 rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-1 items-start pt-2">
                  <label className="font-semibold text-sm md:text-base">Message</label>
                  <textarea
                    name="Message"
                    type="text"
                    required
                    placeholder="Enter your message"
                    rows={5}
                    className="w-full text-sm md:text-base bg-primary/50 focus:outline-none indent-2 p-2 rounded-xl"
                  />
                </div>

                <button className="btn bg-gradient-bg text-primary mt-3 md:mt-5  min-h-max h-max  border-none rounded-full md:px-6 px-4 text-xs md:text-[14px] py-2 md:py-3">
                  Send <LuSend />
                </button>
                <h1
                  className={`font-medium pt-2 text-sm ${
                    result ? "gradient-text" : "text-red-500"
                  }`}
                >
                  {result === true && "Message sent!"}{" "}
                  {result === false && "Failed to send message"}{" "}
                  {result === "sending" && "Sending..."}
                </h1>
              </form>
            </div>
          </div>
        </section>
      </section>
    </motion.div>
  );
};

export default Home;
