"use client"

import Link from 'next/link';
export default function Home() {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
        <div className="col-span-4 sm:col-span-3">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src="data:image/jpeg;base64,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"
                className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
              />
              <h1 className="text-xl font-bold">Gunjan Ukani</h1>
              <p className="text-gray-700">React.js Developer</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                >
                  Resume
                </a>
              </div>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <div className="flex flex-col">
              <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                Skills
              </span>
              <ul>
                <li className="mb-2">JavaScript</li>
                <li className="mb-2">React</li>
                <li className="mb-2">Next.js</li>
                <li className="mb-2">HTML/CSS</li>
                <li className="mb-2">Tailwind Css</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-9">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700">
              
            </p>
            <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
            <div className="flex justify-center items-center gap-6 my-6">
              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds LinkedIn"
                href="https://www.linkedin.com/in/gunjan-ukani/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>
              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds YouTube"
                href=""
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  ></path>
                </svg>
              </a>
              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds Facebook"
                href=""
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds Instagram"
                href="https://www.instagram.com/ll_gunjan_ukani_ll/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a
                className="text-gray-700 hover:text-orange-600"
                aria-label="Visit TrendyMinds Twitter"
                href=""
                target="_blank"
              >
                <svg
                  className="h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
            </div>
            <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold">React.js Intern</span>
                <p>
                  <span className="text-gray-700 mr-2">at Spark To Ideas</span>
                  <span className="text-gray-700">2022 - 2023</span>
                </p>
              </div>
              <p className="mt-2">
              Ensured responsive design for seamless user experience across devices. <br />
Collaborated with UX designers and integrated front-end with back-end functionalities. <br /> Conducted cross-browser testing for compatibility.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="text-gray-700 font-bold">Web Developer</span>
                <p>
                  <span className="text-gray-700 mr-2">at Imbuesoft LLP</span>
                  <span className="text-gray-700">2017 - 2019</span>
                </p>
              </div>
              <p className="mt-2">
              Developer Medical Management System Project 
Develop Project using Tailwind and Antd
Making PdfModule For various type of Reports
Collaborated with the team to integrate the module into the main project.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
