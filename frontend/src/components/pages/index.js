import React from "react";
import LoginForm from "../partials/LoginForm";

const Body = () => (
  <>
    <div className="custom-container mt-6 text-center lg:mt-28 flex flex-col lg:flex-row items-center justify-between lg:text-left">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/2 w-full">
          <p className="text-base leading-4 text-gray-600">Choose your plan</p>
          <h1
            role="heading"
            className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800"
          >
            Our pricing plan
          </h1>
          <p
            role="contentinfo"
            className="text-base leading-5 mt-5 text-gray-600"
          >
            We’re working on a suit of tools to make managing complex systems
            easier, for everyone for free. we can’t wait to hear what you think
          </p>
          <div className="w-56">
            <button className="bg-gray-100 shadow rounded-full flex items-center mt-10 rounded-full">
              <div
                className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1"
                id="monthly"
              >
                Monthly
              </div>
              <div
                className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
                id="annually"
              >
                Annually
              </div>
            </button>
          </div>
        </div>
        <div
          className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
          role="list"
        >
          <img
            src="https://i.ibb.co/0n6DSS3/bgimg.png"
            className="absolute w-full -ml-12 mt-24"
            alt="background circle images"
          />
          <div
            role="listitem"
            className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30"
          >
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                Starter
              </h2>
              <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">
                FREE
              </p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
              Full access to all features and no credit card required
            </p>
          </div>
          <div
            role="listitem"
            className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
          >
            <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
            <div className="w-full p-8">
              <div className="md:flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                  Personal
                </h2>
                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                  <span className="font-normal text-base">/mo</span>
                </p>
              </div>
              <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                Unlimited products features and dedicated support channels
              </p>
            </div>
          </div>
          <div
            role="listitem"
            className="bg-white cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
          >
            <div className="md:flex items-center justify-between">
              <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                Team
              </h2>
              <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                <span className="font-normal text-base">/mo</span>
              </p>
            </div>
            <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
              Unlimited products features and dedicated support channels
            </p>
          </div>
        </div>
      </div>
    </div>
    <h1 className="xl:text-5xl mt-20 md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-500 sm:mb-0 mb-12">
      This is for Practicing Development purposes only{" "}
      <br className="md:block hidden" />
      Not a real site
    </h1>
    <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
      <img
        src="https://i.ibb.co/KjrPCyW/map.png"
        alt="world map image"
        className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
      />
      <img
        src="https://i.ibb.co/SXKj9Mf/map-bg.png"
        alt="mobile-image"
        className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
      />

      <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
        <p className="text-3xl font-semibold text-gray-800">20K+</p>
        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
          Posted legit items
        </p>
      </div>
      <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
        <p className="text-3xl font-semibold text-gray-800">8K+</p>
        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
          Overall legit users
        </p>
      </div>
      <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
        <p className="text-3xl font-semibold text-gray-800">15K+</p>
        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
          Recently Sold Items
        </p>
      </div>
    </div>
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900">
        <div
          tabIndex="0"
          aria-label="footer"
          className="focus:outline-none border-t border-b border-gray-200 dark:border-gray-700 py-16"
        >
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        className="focus:outline-none focus:underline  text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Components
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Templates
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        href="#"
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Documentation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Free components
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:outline-none focus:underline text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Changelog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li className="mt-6">
                      <a
                        className="focus:underline focus:outline-none text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        href="#"
                      >
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6">
                    <a aria-label="Github" href="#">
                      <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand">
                        <svg
                          className="footer-icon feather feather-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>{" "}
                    </a>
                    <a aria-label="Twitter" href="#" className="ml-4">
                      <div className="">
                        <svg
                          className="footer-icon feather feather-twitter text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="relative w-36">
                    <svg
                      id="auto"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="3" y1="19" x2="21" y2="19"></line>
                      <rect x="5" y="6" width="14" height="10" rx="1"></rect>
                    </svg>
                    <svg
                      id="light"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-brightness-up"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                      <line x1="12" y1="5" x2="12" y2="3"></line>
                      <line x1="17" y1="7" x2="18.4" y2="5.6"></line>
                      <line x1="19" y1="12" x2="21" y2="12"></line>
                      <line x1="17" y1="17" x2="18.4" y2="18.4"></line>
                      <line x1="12" y1="19" x2="12" y2="21"></line>
                      <line x1="7" y1="17" x2="5.6" y2="18.4"></line>
                      <line x1="6" y1="12" x2="4" y2="12"></line>
                      <line x1="7" y1="7" x2="5.6" y2="5.6"></line>
                    </svg>
                    <svg
                      id="dark"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-moon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="pointer-events-none absolute inset-0 m-auto mr-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-chevron-down"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <a
            className="focus:outline-none"
            tabIndex="0"
            role="link"
            aria-label="home link"
            href="#"
          >
            <svg
              className="dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="58"
              viewBox="0 0 86 58"
              fill="none"
            >
              <path
                d="M42.4701 4.49449H47.7911V0H42.4701V4.49449Z"
                fill="#E2E2E2"
              ></path>
              <path
                d="M47.7914 4.49449H53.1124V0H47.7914V4.49449Z"
                fill="#FF3565"
              ></path>
              <path
                d="M42.4701 8.98888H47.7911V4.49438H42.4701V8.98888Z"
                fill="#FF3565"
              ></path>
              <path
                d="M47.7914 8.98888H53.1124V4.49438H47.7914V8.98888Z"
                fill="#E2E2E2"
              ></path>
              <path
                d="M75.0956 23.7122L86.0001 8.98898H73.2641L65.5874 20.8944V0H55.0228V39.1479H65.5874V32.7501L67.6415 29.9918L72.5134 39.1479H85.485L75.0956 23.7122Z"
                fill="currentColor"
              ></path>
              <path
                d="M42.5478 28.2899C42.5421 28.2956 42.5356 28.3021 42.5307 28.3086C42.4859 30.6529 40.5794 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.7708 39.143 41.1133 37.9766 42.5478 36.7026V39.1479H53.1124V10.7993H42.5478V28.2899Z"
                fill="#FF3565"
              ></path>
              <path
                d="M42.4704 28.8132C42.1827 30.9153 40.4058 32.5423 38.2237 32.5423C35.8403 32.5423 33.9085 30.6105 33.9085 28.2271V0H23.4141V29.1628C23.4141 36.1931 29.8909 39.143 34.7815 39.143C39.6811 39.143 41.0644 38.0173 42.4704 36.7702V28.8132Z"
                fill="currentColor"
              ></path>
              <path
                d="M42.5479 39.1479H53.1124V38.0271H42.5479V39.1479Z"
                fill="#FF3565"
              ></path>
              <path
                d="M42.4701 39.1479H53.1121V10.7993H42.4701V39.1479Z"
                fill="#FF3565"
              ></path>
              <path
                d="M0 0V9.76985H10.5059V39.1479H21.6851V9.78371H23.4139V10.3298H33.9084V0H0Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6109 49.089C16.6109 49.6367 16.1675 50.0801 15.6198 50.0801C15.085 50.0801 14.6416 49.6367 14.6416 49.089C14.6416 48.5412 15.085 48.1108 15.6198 48.1108C16.1675 48.1108 16.6109 48.5412 16.6109 49.089ZM4.73414 49.9888V57.0574H2.86918V49.9888H0.32605V48.3586H7.26423V49.9888H4.73414ZM11.4745 56.2489C10.9789 56.8749 10.3007 57.2139 9.53129 57.2139C7.95324 57.2139 6.74037 56.0141 6.74037 53.9014C6.74037 51.8538 7.92716 50.6018 9.53129 50.6018C10.2747 50.6018 10.9659 50.9148 11.4745 51.5669V50.7583H13.1438V57.0574H11.4745V56.2489ZM10.0532 55.7402C9.10112 55.7402 8.44903 54.9969 8.44903 53.9013C8.44903 52.8189 9.10112 52.0755 10.0532 52.0755C10.6009 52.0755 11.2008 52.3885 11.4747 52.8058V55.0229C11.2008 55.4403 10.6009 55.7402 10.0532 55.7402ZM16.4546 57.0574V50.7583H14.7983V57.0574H16.4546ZM21.265 56.8096C21.0172 57.0314 20.5608 57.2139 19.8826 57.2139C18.7219 57.2139 18.1089 56.614 18.1089 55.4794V48.3586H19.7652V55.036C19.7652 55.4403 19.9739 55.7402 20.3391 55.7402C20.5869 55.7402 20.8216 55.6489 20.9129 55.5446L21.265 56.8096ZM24.8752 57.0574L26.2055 52.7667L27.5357 57.0574H29.3094L31.2265 50.7583H29.492L28.3182 54.9969L26.9358 50.7583H25.4621L24.0797 54.9969L22.9059 50.7583H21.1844L23.1016 57.0574H24.8752ZM33.8718 49.089C33.8718 49.6367 33.4284 50.0801 32.8807 50.0801C32.346 50.0801 31.9025 49.6367 31.9025 49.089C31.9025 48.5412 32.346 48.1108 32.8807 48.1108C33.4284 48.1108 33.8718 48.5412 33.8718 49.089ZM33.7155 57.0574V50.7583H32.0592V57.0574H33.7155ZM37.0257 52.8059V57.0574H35.3694V50.7583H37.0257V51.5669C37.43 51.0974 38.2125 50.6018 39.2298 50.6018C40.6252 50.6018 41.2904 51.3843 41.2904 52.6102V57.0574H39.621V53.2493C39.621 52.3755 39.1646 52.0755 38.4603 52.0755C37.8082 52.0755 37.3126 52.4407 37.0257 52.8059ZM45.3183 57.2139C46.0878 57.2139 46.766 56.8749 47.2616 56.2489V57.0574H48.9309V48.3586H47.2616V51.5669C46.766 50.9148 46.0617 50.6018 45.3183 50.6018C43.7142 50.6018 42.5274 51.8538 42.5274 53.9014C42.5274 56.0141 43.7403 57.2139 45.3183 57.2139ZM44.2357 53.9013C44.2357 54.9969 44.8878 55.7402 45.8398 55.7402C46.3876 55.7402 46.9875 55.4403 47.2613 55.0229V52.7928C46.9875 52.3755 46.3876 52.0755 45.8398 52.0755C44.8878 52.0755 44.2357 52.8189 44.2357 53.9013ZM57.9127 57.2139C60.5601 57.2139 61.8382 55.7272 61.8382 53.5753V48.3586H59.9472V53.5231C59.9472 54.736 59.256 55.5707 57.9127 55.5707C56.5694 55.5707 55.8651 54.736 55.8651 53.5231V48.3586H53.9871V53.5753C53.9871 55.7272 55.2652 57.2139 57.9127 57.2139ZM65.4225 48.3586V57.0574H63.5706V48.3586H65.4225ZM72.1346 57.0574V55.4403L72.891 54.6317L74.5604 57.0574H76.634L74.0648 53.6144L76.5557 50.7583H74.5212L72.1346 53.5623V48.3586H70.4783V57.0574H72.1346ZM79.2923 49.089C79.2923 49.6367 78.8489 50.0801 78.3012 50.0801C77.7665 50.0801 77.3231 49.6367 77.3231 49.089C77.3231 48.5412 77.7665 48.1108 78.3012 48.1108C78.8489 48.1108 79.2923 48.5412 79.2923 49.089ZM79.136 57.0574V50.7583H77.4797V57.0574H79.136ZM84.2856 56.8096C84.0378 57.0313 83.5944 57.2139 82.9031 57.2139C81.7424 57.2139 81.1295 56.614 81.1295 55.4794V52.2059H80.0861V50.7583H81.1295V49.0368H82.7858V50.7583H84.0639V52.2059H82.7858V55.036C82.7858 55.4403 82.9944 55.7402 83.3596 55.7402C83.6074 55.7402 83.8421 55.6489 83.9334 55.5446L84.2856 56.8096Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <p
            tabIndex="0"
            className="focus:outline-none mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50"
          >
            2021 For Development Purposes Only
          </p>
        </div>
      </footer>
    </div>
  </>
);

export default Body;