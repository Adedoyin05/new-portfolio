import React from 'react'

const About = () => {
    return (
      <div
      id="About"
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl mt-20">
            Hello,I'm Adedoyin Adebajo Motunrayo.
            I am a Frontend Software Developer that specializes in buliding craetive and intuitive frontend web applications.
            I have been working as web Developer for 2 years.
            i am also learning Back-End Development and looking forward to be a full  Stack web Developer.
           
          </p>
  
          <br />
  
          <p className="text-xl">
          If i yam to introduce myself in 7 words.
          It will be Responsible, creative, open-minded, friendly and ambitious web developer.
          This is how I see myself, and hope you will give me a chance to prove my words.
          </p>
        </div>
      </div>
    );
  };

export default About
