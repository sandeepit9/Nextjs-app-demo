

const About = () => {
  return (
   <section className="w-screen mt-12 ">
      <div className="flex flex-1 justify-start gap-6 flex-col items-center">
        <h5 className="font-bold md:text-4xl xs:text-2xl"> Activities </h5>
        <p className="md:text-[22px] xs:text-15px] uppercase font-light"> EduRock Inastitute of Technology</p>
        <p className="w-3/5 text-center md:text-[22px] xs:text-15px] font-cursive">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Aspernatur necessitatibus nesciunt ipsam molestias laborum iure quas. Id quam impedit doloremque odit cum omnis dolore. 
        Alias magni necessitatibus doloremque laboriosam nostrum?</p>
        <div className="flex xs:flex-col md:flex-row items-center justify-center gap-6">
          
          <img className="md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl" src="https://cdn.pixabay.com/photo/2017/07/15/22/07/library-2507902_1280.jpg" alt="Img1"/>
          <img className="md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl" src="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg" alt="Img2"/>
          <img className="md:w-1/4 xs:w-3/4 shadow-lg hover:shadow-2xl" src="https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_640.jpg" alt="Img3"/>
 
        </div>
        <button className="border-red-500 border-2 p-2 rounded-md" >View More</button>
      </div>
     </section>
  )
}

export default About