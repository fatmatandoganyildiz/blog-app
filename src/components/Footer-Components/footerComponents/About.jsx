import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="my-10 w-full max-w-screen-lg">
        <h1 className="text-[54px] font-extralight tracking-widest">
          About us
        </h1>
        <div className="flex">
          <div className="basis-2/3">
            <Tab.Group>
              <Tab.List className="my-6 text-2xl font-thin flex justify-evenly">
                <Tab
                  className={`${
                    activeTab === 0 ? "border-b-2 border-orange-200" : ""
                  }`}
                  onClick={() => setActiveTab(0)}
                >
                  Organization and Project Overview
                </Tab>
                <Tab
                  className={`${
                    activeTab === 1 ? "border-b-2 border-orange-200" : ""
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  Mission-Vision
                </Tab>
                <Tab
                  className={`${
                    activeTab === 2 ? "border-b-2 border-orange-200" : ""
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  Technological Infrastructure
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  Welcome to the digital realm of Blog, an online sanctuary
                  where the realms of intellect and creativity converge.
                  Established in 2023, our raison d'être is to forge a dynamic
                  platform that serves as a melting pot for writers and readers
                  alike—a space where the vast universe of ideas unfolds. Our
                  blog is a kaleidoscopic journey across an extensive array of
                  subjects, including technology, lifestyle, health, and more.
                  It transcends the conventional; it is a living, breathing
                  community where knowledge is not just disseminated but sparks
                  vibrant conversations. Diverse voices harmonize to create a
                  symphony of ideas that reverberates across the virtual
                  landscape. Embark on a transformative odyssey by immersing
                  yourself in the mosaic of our articles, and become an integral
                  part of this pulsating community.
                </Tab.Panel>
                <Tab.Panel>
                  <div>
                    <h5 className="font-semibold">Mission</h5>
                    <p>
                      At Blog, our mission is a testament to the essence of
                      community and knowledge. We are steadfast in our
                      commitment to deliver content that transcends
                      boundaries—content that is not just informative but an
                      engaging exploration into the intricate tapestry of human
                      experiences. Through our platform, we seek to kindle the
                      flames of curiosity, initiate dialogues that matter, and
                      contribute positively to the ever-evolving tapestry of
                      online discourse.
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
                      community.
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
                  The gears of technology turn tirelessly to ensure a digital
                  haven that evolves with the ever-shifting landscapes of the
                  online world
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="basis-1/3 border-l border-gray-400 ml-2">
            <div className="ml-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              voluptatum amet consequatur iste ea, obcaecati quam dignissimos
              optio necessitatibus! Suscipit maxime omnis voluptates eveniet
              modi explicabo perspiciatis nesciunt et eos sint sapiente, velit
              neque porro asperiores nulla reiciendis tempore delectus?
              Assumenda similique consectetur voluptates dolorum vel quos
              eligendi iure consequuntur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
