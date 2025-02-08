import { useState } from "react";
import "./App.css";
import { FaFilter, FaUserPlus } from "react-icons/fa"; 
import PostCard from "./Postcard.jsx";
import PostCard2 from "./Postcard2.jsx";
import PostCard3 from "./Post3.jsx";
import SignupModal from "./SignUp.jsx"
function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <div className="h-auto bg-gray-100 flex justify-center">
        <div className="w-full max-w-[1440px] flex flex-col items-center">

          
          <nav className="bg-white shadow-md px-6 py-4 h-[72px] flex justify-between items-center w-full">
            <h1 className="text-xl font-bold text-green-600">
              <img src="/logo.svg" alt="Logo" />
            </h1>

          
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="px-4 py-2 border rounded-lg w-1/3 hidden md:block"
            />

            <button
              className="text-blue-600 font-semibold hidden md:block"
              onClick={() => setIsSignupOpen(true)}
            >
              Create account. <span className="font-bold">It's free!</span>
            </button>
          </nav>

        
          <section className="relative w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eSS0Ck2OphFehO3j81PtkvcKnQLauO~cN1j725LqpiRQKVqw~G4Lm7cU~Nko3z3zVBynIE5LCCwtAKc0yl3uiZqJZUkGL7T08mpoARZYaEJyqYsQSjfrFN~J-K5~3yEXweDyxRuymi1E6sAzTif-sDHnga44ETBsm~1DG6ilIkxRLA4xZKklBOAZZTBAmRkp2nCiKwwQHbtdrmIUzoV5FLLWv-IR9Ud9zZpgdFj8AalZR1rawkmwcYJeA4H878lNLEXtTqWAVP34XYA1agiywmBA5p2PD3L3AP6EY4vFKx4qxVpGa4cHGK6-t-Ombn2SRgw4O5E4DaFYhnXyDpriqQ__"
              alt="Group Banner"
              className="w-full h-[440px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold">Computer Engineering</h2>
              <p className="text-lg">142,765 Computer Engineers follow this</p>
            </div>
          </section>

          
          <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />

      
          <nav className="bg-white w-full shadow-md sticky top-0 h-[72px] z-10 flex flex-wrap justify-between items-center px-4 md:px-16">
            
            
          <div className="flex flex-wrap gap-3 text-gray-500 text-lg">
  <button className="text-black font-semibold px-3 py-1">All Posts (32)</button>
  <button className="hover:text-black px-3 py-1 hidden md:block">Article</button>
  <button className="hover:text-black px-3 py-1 hidden md:block">Event</button>
  <button className="hover:text-black px-3 py-1 hidden md:block">Education</button>
  <button className="hover:text-black px-3 py-1 hidden md:block">Job</button>
</div>


          
            <div className="flex space-x-4">
              <button className="border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 hidden md:block">
                Write Post
              </button>
              <button className="border px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 hidden md:block">
                Join Group
              </button>

            
              <button className="md:hidden border px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center space-x-2">
                <FaFilter /> <span>Filter</span>
              </button>
            </div>

          </nav>

      
          <div className="flex justify-center bg-gray-100 w-full">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row">

            
              <div className="w-full md:w-[692px] mt-6 md:ml-[100px] flex flex-col items-center space-y-6">
                <PostCard />
                <PostCard2 />
                <PostCard3 />
              </div>

  
              <div className="hidden md:block w-[320px] h-auto bg-white rounded-lg shadow-md p-4 ml-[100px] mt-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📍</span>
                    <span className="text-lg font-semibold">Noida, India</span>
                  </div>
                  <button className="text-gray-500 hover:text-black">✏️</button>
                </div>
                <hr className="border-gray-300 mb-2" />
                <div className="flex items-start space-x-2 text-gray-600 text-sm">
                  <span>⚠️</span>
                  <p>Your location will help us serve better and extend a personalized experience.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


      <button 
        className="md:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
        onClick={() => setIsSignupOpen(true)}
      >
        <FaUserPlus size={24} />
      </button>

    </>
  );
}

export default App;
