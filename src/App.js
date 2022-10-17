import bg from "./bg-pattern-card.svg"
import avatar from "./image-victor.jpg"

function App() {
  return (
    <div className="h-screen bg-dark-cyan flex items-center justify-center">
      <div className="w-[350px] h-[375px] rounded-xl bg-white flex flex-col">
        <img src={bg} className="rounded-t-xl absolute"/>
        <div className="h-[75%] flex flex-col items-center">
          <img src={avatar} className="w-[100px] h-[100px] border-4 border-white rounded-full z-10 mt-[25%]"/>
          <div className="w-[100%] gap-3 h-[50%]  flex flex-col items-center justify-center border-b-2 border-dark-grayish-blue">
            <h1 className="text-[18px] font-[700] text-very-dark-desaturated-blue">Victor Crest <span className="text-dark-grayish-blue font-[400]">26</span></h1>
            <h1 className="text-[15px] text-dark-grayish-blue">London</h1>
          </div>
        </div>
          <div className="w-[100%] h-[25%] flex justify-evenly items-center">
            <div className="ml-5 w-[20%] h-[50%] flex flex-col text-center justify-center">
              <h1 className="text-[18px] font-[700] text-very-dark-desaturated-blue">80K</h1>
              <h1 className="text-[12px] font-[400] text-dark-grayish-blue">Followers</h1>
            </div>
            <div className="w-[20%] h-[50%] flex flex-col text-center justify-center">
              <h1 className="text-[18px] font-[700] text-very-dark-desaturated-blue">803K</h1>
              <h1 className="text-[12px] font-[400] text-dark-grayish-blue">Likes</h1>
            </div>
            <div className="mr-5 w-[20%] h-[50%] flex flex-col text-center justify-center">
              <h1 className="text-[18px] font-[700] text-very-dark-desaturated-blue">1.4K</h1>
              <h1 className="text-[12px] font-[400] text-dark-grayish-blue">Photos</h1>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
