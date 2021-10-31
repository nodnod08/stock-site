import React from "react";
import LoginForm from "../partials/LoginForm";

const Body = () => {
  return (
    <>
      <div className="custom-container mt-6 text-center lg:mt-28 flex flex-col lg:flex-row items-center justify-between lg:text-left">
        <div className="max-w-3xl p-5 rounded mb-10">
          <p className="sm:text-4xl lg:text-5xl text-3xl italic font-medium text-gray-500">
            Implement Your Innovation Phases
          </p>
          <p className="my-10 text-base font-normal max-w-7xl lg:max-w-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            libero, facilis atque voluptatibus harum molestias hic earum esse
            quaerat, nostrum officia enim, exercitationem illo. Labore.facilis
            atque voluptatibus harum molestias hic earum esse quaerat, nostrum
            officia enim, exercitationem illo. Labore.facilis atque voluptatibus
            harum molestias hic earum esse quaerat, nostrum officia enim,
            exercitationem illo. Labore.
          </p>
          <p className="mt-1 text-1xl font-semibold">
            WE INNOVATE PLATFORMS FOR YOU
          </p>
          <div className="pt-7 flex sm:flex-row flex-col justify-between">
            <div className="flex items-center sm:flex-row flex-col mb-5">
              <i className="text-3xl text-yellow-500 fab fa-connectdevelop"></i>
              <span className="font-medium ml-1">Enhanced Modification</span>
            </div>
            <div className="flex items-center sm:flex-row flex-col mb-5">
              <i className="text-3xl text-blue-500 fab fa-buromobelexperte"></i>
              <span className="font-medium ml-1">Unity Module</span>
            </div>
            <div className="flex items-center sm:flex-row flex-col mb-5">
              <i className="text-3xl text-pink-500 fas fa-compress-arrows-alt"></i>
              <span className="font-medium ml-1">Hybrid Conjunction</span>
            </div>
          </div>
        </div>
        <div className="max-w-xs rounded shadow-lg bg-gray-50 p-2">
          <LoginForm />
        </div>
      </div>
      <div className="bg-gray-800 mt-16 pt-20 pb-10 px-8">
        <div className="custom-container flex lg:flex-row-reverse items-center mb-10">
          <p className="text-2xl text-gray-50 font-medium">
            CONTINOUS INTEGRATE AS WE DESCRIBE
          </p>
        </div>
        <div className="custom-container flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-md lg:max-w-xs bg-gray-700 rounded p-3 border border-gray-50">
            <div className="flex items-center">
              <i className="text-2xl fas fa-file-alt mr-3 text-blue-100"></i>
              <p className="text-1xl text-gray-50 font-medium">
                TESTER CONDUCTED
              </p>
            </div>
            <p className="text-gray-100 text-xs my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              nam quam reprehenderit doloribus, maiores sapiente sequi placeat
              alias tenetur officiis similique debitis eaque soluta, non amet
            </p>
            <button className="border border-white text-gray-50 text-sm rounded py-1 px-2 font-medium hover:bg-gray-50 hover:text-gray-800">
              <i className="fas fa-arrow-right"></i> LEARN MORE
            </button>
          </div>
          <div className="max-w-md lg:max-w-xs bg-gradient-to-r mb-10 mt-10 from-gray-600 to-blue-500 border border-gray-50 rounded p-3">
            <div className="flex items-center">
              <i className="text-2xl mr-3 text-blue-100 fas fa-business-time"></i>
              <p className="text-1xl text-gray-50 font-medium">
                BUSINESS LOGIC
              </p>
            </div>
            <p className="text-gray-100 text-xs my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              nam quam reprehenderit doloribus, maiores sapiente sequi placeat
              alias tenetur officiis similique debitis eaque soluta, non amet
            </p>
            <button className="border border-white text-gray-50 text-sm rounded py-1 px-2 font-medium hover:bg-gray-50 hover:text-gray-800">
              <i className="fas fa-arrow-right"></i> GET QUOTE
            </button>
          </div>
          <div className="max-w-md lg:max-w-xs bg-gray-700 rounded p-3  border border-gray-50">
            <div className="flex items-center">
              <i className="text-2xl mr-3 text-blue-100 fas fa-money-check-alt"></i>
              <p className="text-1xl text-gray-50 font-medium">
                PAY AS YOU USE
              </p>
            </div>
            <p className="text-gray-100 text-xs my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              nam quam reprehenderit doloribus, maiores sapiente sequi placeat
              alias tenetur officiis similique debitis eaque soluta, non amet
            </p>
            <button className="border border-white text-gray-50 text-sm rounded py-1 px-2 font-medium hover:bg-gray-50 hover:text-gray-800">
              <i className="fas fa-arrow-right"></i> CONDUCT NOW
            </button>
          </div>
        </div>
        <div className="custom-container items-center mt-10 mb-10 px-6">
          <p className="text-1xl text-gray-50 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eum.
          </p>
          <br />
          <p className="text-1xl text-gray-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            eaque quae suscipit repellendus? Nobis exercitationem dolorem
            cupiditate quo consequuntur? Quidem itaque reprehenderit quasi quam
            quaerat. Iusto debitis eligendi veniam enim!
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
