  import LNavBar from "../LeonardoNavBar";


export const Dashboard = () => {



  return (
    <div className="w-full h-[100vh] bg-leonardoRed">
      <div className="absolute inset-0 w-full h-full bg-loginForm bg-contain bg-no-repeat bg-center filter opacity-20"></div>
      <LNavBar icon={1}></LNavBar>
      <div className="flex flex-col md:flex-row justify-center items-center w-[100%] h-full rounded-lg">
      </div>
    </div>
  );
}

export default Dashboard;
