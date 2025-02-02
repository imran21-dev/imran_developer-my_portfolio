import { useEffect, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { MdMail } from "react-icons/md";
import { BackgroundLines } from "../components/ui/bg-lines";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      className="w-10/12 mx-auto relative "
    >
      <Helmet>
              <title>Contact Me | Imran Developer</title>
            </Helmet>
      <BackgroundLines>
      <h1 className="text-2xl md:text-4xl font-bold text-center">Contact Me</h1>
        <p className="lg:w-2/5 mx-auto pt-1 pb-10 text-xs md:text-sm text-center">
          Feel free to get in touch! Whether you have a project in mind, need
          assistance, or just want to connect, I&apos;d love to hear from you.
        </p>
      </BackgroundLines>
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
                  href="mailto:imransorker456@gmail.com"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <MdMail /> imransorker456@gmail.com
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
                <a href="https://www.linkedin.com/in/md-imran-sorker21/" target="_blank">
                  <FaLinkedin className="banner-list-a" />
                </a>
              </li>

              <li className="banner-list">
                <a href="mailto:imransorker456@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you." target="_blank">
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
  
    </motion.div>
        
  
  );
};

export default Contact;
