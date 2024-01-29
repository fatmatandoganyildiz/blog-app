import React from "react";
import { Disclosure } from "@headlessui/react";
import { cookies, termOfUse,privacyPolicy } from "../../../store/footerContents"
import { GoChevronUp } from "react-icons/go";
import classNames from "classnames";

function Terms() {
  return (
   <div>
      <div className="flex items-center justify-center overflow">
        <div className="my-10 w-full max-w-screen-lg bg-red-100">
          <h1 className="text-[54px] font-extralight tracking-widest">
            Terms and Conditions
          </h1>
          <div className="grid ">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-xl font-bold tracking-wider flex items-center justify-between">
                    Terms of Use
                    <GoChevronUp
                      className={classNames({
                        "rotate-180": open,
                      })}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500  max-w-screen">
                    <h4 className="font-bold">
                      Welcome to Blog! By accessing and using our
                      website/service, you agree to comply with and be bound by
                      the following terms and conditions. Please read them
                      carefully.
                    </h4>
                    <ul>
                      {termOfUse.map((e) => {
                        return (
                          <li key={e.id}>
                            <h6 className="font-semibold">{e.Header}</h6>
                            <p>{e.Content}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-xl font-bold tracking-wider flex items-center justify-between">
                    Privacy Policy
                    <GoChevronUp
                      className={classNames({
                        "rotate-180": open,
                      })}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
                    <h4 className="font-bold">
                      By using Blog, you agree to the terms and conditions
                      outlined in our Terms of Service and Privacy Policy. If
                      you do not agree with any part of these terms, please do
                      not use our services. For any questions or concerns
                      regarding these terms, please contact us at
                      blog@gamil.com.
                    </h4>
                    <ul>
                      {privacyPolicy.map((e) => {
                        return (
                          <li key={e.id}>
                            <h6 className="font-semibold">{e.Header}</h6>
                            <p>{e.Content}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-2 text-xl font-bold tracking-wider flex items-center justify-between">
                    Acceptance of Terms
                    <GoChevronUp
                      className={classNames({
                        "rotate-180": open,
                      })}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500">
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
                  <Disclosure.Button className="py-2 text-xl font-bold tracking-wider flex items-center justify-between">
                    Cookies
                    <GoChevronUp
                      className={classNames({
                        "rotate-180": open,
                      })}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500  max-w-screen">
                    <h4 className="font-bold">
                      At Blog, we utilize cookies to enhance your overall user
                      experience. Cookies are small text files that are stored
                      on your device when you visit our website. They serve
                      various purposes aimed at improving and personalizing your
                      interaction with our services.
                    </h4>
                    <ul>
                      {cookies?.map((cookie) => (
                        <div key={cookie.id}>
                          <h6 className="font-semibold">{cookie.Header}</h6>{" "}
                          <ul>
                            {Array.isArray(cookie.Content) ? (
                              cookie.Content.map((item) => (
                                <li key={item.id}>{item}</li>
                              ))
                            ) : (
                              <li>{cookie.Content}</li>
                            )}
                          </ul>
                        </div>
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
  );
}

export default Terms;
