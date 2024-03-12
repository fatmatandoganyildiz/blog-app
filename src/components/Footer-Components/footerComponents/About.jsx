import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-6 py-10 mb-12">
      <h1 className="text-[54px] font-extralight text-center tracking-widest ">
        About us
      </h1>
      <div className="flex">
        <div className="basis-2/3">
          <Tab.Group>
            <Tab.List className="my-6 text-2xl font-thin flex justify-evenly">
              <Tab
                className={`${
                  activeTab === 0 ? "outline-none border-b-2 border-[#BE3726]" : ""
                }`}
                onClick={() => setActiveTab(0)}
              >
                Organization and Project Overview
              </Tab>
              <Tab
                className={`${
                  activeTab === 1 ? "outline-none border-b-2 border-[#BE3726]" : ""
                }`}
                onClick={() => setActiveTab(1)}
              >
                Mission-Vision
              </Tab>
              <Tab
                className={`${
                  activeTab === 2 ? "outline-none border-b-2 border-[#BE3726]" : ""
                }`}
                onClick={() => setActiveTab(2)}
              >
                Technological Infrastructure
              </Tab>
            </Tab.List>
            <Tab.Panels className="text-justify">
              <Tab.Panel>
                Welcome to the digital realm of Blog, an online sanctuary where
                the realms of intellect and creativity converge, inviting you to
                embark on an enriching journey through the boundless expanse of
                human thought and imagination. Established in 2023, our raison
                d'être is to forge a dynamic platform that serves as a melting
                pot for writers and readers alike—a space where the vast
                universe of ideas unfolds, unfettered by boundaries or
                constraints. <br />
                <br />
                Our blog is more than just a collection of articles; it's a
                kaleidoscopic journey across an extensive array of subjects,
                each piece meticulously crafted to engage, inform, and inspire.
                From the latest in technology to insights into lifestyle trends,
                from explorations of health and wellness to discussions on
                culture and society, we aim to provide a diverse tapestry of
                content that resonates with readers from all walks of life.
                <br />
                <br /> But our vision extends beyond the mere dissemination of
                information. We strive to create a living, breathing community
                where knowledge is not just shared but celebrated—a community
                where diverse voices harmonize to create a symphony of ideas
                that reverberates across the virtual landscape. Here, every
                article is an invitation to dialogue, an opportunity to engage
                in meaningful conversations that challenge perceptions, broaden
                horizons, and foster mutual understanding. <br />
                <br />
                So, whether you're a seasoned writer looking to share your
                expertise or a curious reader eager to explore new perspectives,
                we invite you to join us on this transformative odyssey. Immerse
                yourself in the mosaic of our articles, and become an integral
                part of this pulsating community—a community driven by
                curiosity, creativity, and the shared pursuit of knowledge.
                Welcome to Blog, where the journey of discovery never ends.
              </Tab.Panel>
              <Tab.Panel>
                <div>
                  <h5 className="font-semibold">Mission</h5>
                  <p>
                    At Blog, our mission is a testament to the essence of
                    community and knowledge. We are steadfast in our commitment
                    to deliver content that transcends boundaries—content that
                    is not just informative but an engaging exploration into the
                    intricate tapestry of human experiences. Through our
                    platform, we seek to kindle the flames of curiosity,
                    initiate dialogues that matter, and contribute positively to
                    the ever-evolving tapestry of online discourse.
                    <br /> <br /> Driven by a passion for fostering connections
                    and promoting understanding, we endeavor to cultivate a
                    digital sanctuary where individuals from all walks of life
                    can come together to share, learn, and grow. By championing
                    diversity, inclusivity, and authenticity, we aim to empower
                    voices that might otherwise go unheard, amplifying the
                    collective wisdom of our global community.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold">Vision</h5>
                  <p>
                    Our vision extends beyond being a mere digital repository.
                    We aspire to be the vanguard—a premiere destination where
                    seekers of profound and diverse perspectives converge.
                    Picture a collaborative space where writers and readers
                    seamlessly intertwine, where ideas flow freely, and where
                    the collective spirit enriches the very fabric of our
                    community. <br /> <br /> In pursuit of this vision, we are
                    committed to fostering an environment that celebrates
                    intellectual curiosity, fosters meaningful connections, and
                    nurtures a culture of mutual respect and understanding. By
                    providing a platform that encourages thought-provoking
                    discussions and facilitates the exchange of ideas, we aim to
                    spark positive change and inspire individuals to think
                    critically, act compassionately, and engage thoughtfully
                    with the world around them. <br /> <br /> As we continue on
                    this journey, we remain dedicated to upholding the values of
                    integrity, authenticity, and empathy. Together, let us
                    embark on a transformative odyssey—a journey of discovery,
                    enlightenment, and growth—as we strive to build a brighter,
                    more interconnected future for all.
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                In the hidden corridors of Blog, a cutting-edge technological
                infrastructure orchestrates the symphony of your digital
                experience. Our platform stands on the shoulders of robust
                frameworks, seamlessly integrating the latest advancements in
                web development practices. Committed to the relentless pursuit
                of innovation, we endeavor to offer not just a platform but an
                avant-garde and dependable medium for your blogging endeavors.
                <br />
                <br />
                Behind the scenes, the gears of technology turn tirelessly,
                driven by a passion for excellence and a dedication to pushing
                the boundaries of what's possible. From the intricacies of
                backend architecture to the sleek interfaces of our user
                experience design, every aspect of our platform is meticulously
                crafted to deliver a seamless and intuitive blogging experience.
                <br />
                <br /> But our commitment to technological excellence extends
                beyond mere functionality. We recognize that in today's rapidly
                evolving digital landscape, adaptability is key. That's why
                we're constantly monitoring industry trends, exploring emerging
                technologies, and refining our infrastructure to ensure that
                Blog remains at the forefront of innovation.
                <br />
                <br /> As we continue to push the envelope of what's possible,
                we invite you to join us on this journey of exploration and
                discovery. Together, let's unlock the full potential of the
                digital realm and usher in a new era of blogging excellence.
                Welcome to Blog—where technology meets creativity, and the
                possibilities are limitless.
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="basis-1/3 border-l border-gray-400 ml-2 flex items-center	text-justify">
          <div className="ml-2">
            At Blog, we aim to provide a digital experience driven by passion
            and creativity. Our cutting-edge technological infrastructure
            ensures a seamless platform for your blogging needs. Welcome to
            Blog, where technology and creativity converge.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
