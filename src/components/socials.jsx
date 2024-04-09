import {
    SiGithub,
    SiGmail,
    SiLinkedin,
  } from "react-icons/si";
const Socials = () => {
    return(
        <section>
          <div className="m-4">
            <h3 className="text-3xl text-center py-2 text-amber-950 font-medium mt-4">
              Contact
            </h3>
            <p className="text-lg text-center py-2 font-medium mt-4">
              Say Hello!
            </p>
            <div className="uppercase flex justify-center text-5xl mt-10 gap-16 text-gray-600">
              <a
                href="mailto:websmithcreations@gmail.com"
                target="_blank"
                className="group"
              >
                <SiGmail className="mx-auto group-hover:text-[#EA4335]" />
                <p className="text-sm text-center font-medium text-white group-hover:text-black">
                  Gmail
                </p>
              </a>
              <a
                href="http://www.linkedin.com/in/yoosuf-ahmad"
                target="_blank"
                className="group"
              >
                <SiLinkedin className="mx-auto group-hover:text-[#0A66C2]" />
                <p className="text-sm text-center font-medium text-white group-hover:text-black">
                  Linkedin
                </p>
              </a>
              <a
                href="https://github.com/YoosufAhmad"
                target="_blank"
                className="group"
              >
                <SiGithub className="mx-auto group-hover:text-black" />
                <p className="text-sm text-center font-medium text-white group-hover:text-black">
                  Github
                </p>
              </a>
            </div>
            <p className="text-lg text-center py-2 font-medium mt-4">
              Thank you for visiting my website😁
            </p>
          </div>
        </section>
    )
}

export default Socials;