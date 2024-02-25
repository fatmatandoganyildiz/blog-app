import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  cookies,
  termOfUse,
  privacyPolicy,
} from "../../../store/footerContents";
import { GoChevronUp } from "react-icons/go";

function Terms() {
  return (
    <div className="my-6">
      <div className="container px-6 py-10 mx-auto ">
        <h1 className="text-[54px] font-extralight text-center tracking-widest ">
          Terms and Conditions
        </h1>
        <div className="flex justify-center">
        <div className="max-w-screen-lg  bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="space-y-8">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center text-lg font-semibold focus:outline-none">
                    <span>Terms of Use</span>
                    <GoChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-700">
                    <h4 className="font-bold mb-4">Welcome to Blog!</h4>
                    <p>
                      By accessing and using our website/service, you agree to
                      comply with and be bound by the following terms and
                      conditions. Please read them carefully.
                    </p>
                    <ul className="list-disc ml-8">
                      {termOfUse.map((e) => (
                        <li key={e} className="mt-2">
                          <h6 className="font-semibold">{e.Header}</h6>
                          <p className="text-sm">{e.Content}</p>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center text-lg font-semibold focus:outline-none">
                    <span>Privacy Policy</span>
                    <GoChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-700">
                    <h4 className="font-bold mb-4">By using Blog</h4>
                    <p>
                      By using Blog, you agree to the terms and conditions
                      outlined in our Terms of Service and Privacy Policy. If
                      you do not agree with any part of these terms, please do
                      not use our services. For any questions or concerns
                      regarding these terms, please contact us at
                      blog@gamil.com.
                    </p>
                    <ul className="list-disc ml-8">
                      {privacyPolicy.map((e, index) => (
                        <li key={index} className="mt-2">
                          <h6 className="font-semibold">{e.Header}</h6>
                          <p className="text-sm">{e.Content}</p>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center text-lg font-semibold focus:outline-none">
                    <span>Acceptance of Terms</span>
                    <GoChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-700">
                    <p>
                      By using Blog, you agree to the terms and conditions
                      outlined in our Terms of Service and Privacy Policy. If
                      you do not agree with any part of these terms, please do
                      not use our services. For any questions or concerns
                      regarding these terms, please contact us at blog@gmail.com
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center text-lg font-semibold focus:outline-none">
                    <span>Cookies</span>
                    <GoChevronUp
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-700">
                    <h4 className="font-bold mb-4">At Blog</h4>
                    <p>
                      At Blog, we utilize cookies to enhance your overall user
                      experience. Cookies are small text files that are stored
                      on your device when you visit our website. They serve
                      various purposes aimed at improving and personalizing your
                      interaction with our services.
                    </p>
                    <ul className="list-disc ml-8">
                      {cookies.map((cookie, index) => (
                        <li key={index} className="mt-2">
                          <h6 className="font-semibold">{index}</h6>{" "}
                          <ul>
                            {Array.isArray(cookie.Content) ? (
                              cookie.Content.map((item) => (
                                <li key={item.id}>{item}</li>
                              ))
                            ) : (
                              <li>{cookie.Content}</li>
                            )}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Terms;
