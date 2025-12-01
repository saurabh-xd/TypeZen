"use client"
import Marquee from "react-fast-marquee";
import TestimonialCard from "./Testimonial-card";
import { motion } from "motion/react";

export const testimonials = [
  {
    name: "Jhon doe",
    role: "Content Marketer at Growthify",
    feedback:
      "TypeZen has completely transformed how I create blogs and newsletters. What used to take me hours now takes just minutes — and the tone always fits perfectly.",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Brown",
    role: "Freelance Copywriter",
    feedback:
      "I've tried multiple AI tools, but none feel as natural as TypeZen. It understands context and brand voice so well — it’s like having a creative partner 24/7.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olivia Smith",
    role: "Startup Founder, MindCraft",
    feedback:
      "The AI’s ability to draft emails, social posts, and even landing copy saves our team so much time. TypeZen feels like an extra content strategist on board.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ethan Davis",
    role: "Student & Blogger",
    feedback:
      "As a student who writes blogs and essays, TypeZen helps me sound professional and confident. The AI-generated suggestions are surprisingly accurate and easy to refine.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Miller",
    role: "Social Media Manager at Trendify",
    feedback:
      "Scheduling posts and writing captions used to be chaos. Now, I just enter my topic, and TypeZen generates perfect, catchy lines every single time. It’s a game changer.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Wilson",
    role: "Tech Blogger & YouTuber",
    feedback:
      "I use TypeZen for video descriptions, blog intros, and newsletter content. It keeps everything engaging and consistent with my personal style — I’m seriously impressed.",
    image: "https://images.unsplash.com/photo-1731951039662-047ebf42925a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



function Testimonials() {
    const topRow = testimonials.slice(0, 3);
const bottomRow = testimonials.slice(3, 6);
  return (
    <section id="Testimonials" className="max-w-8xl mx-auto py-24 px-6 text-neutral-100 flex flex-col justify-center items-center ">

       <motion.div
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{ duration: 0.6, delay: 0.1 }}
       viewport={{once: true}}
       >
        <h2 className="font-bold text-neutral-100 mb-12 text-3xl md:text-5xl max-w-2xl text-center"> See how <span className="text-primary">TypeZen</span> helps creators shine</h2>
       </motion.div>


               {/* marquee */}
       <div  className="w-full space-y-8  overflow-hidden mask-r-from-90% mask-l-from-90%">

<Marquee  pauseOnHover speed={30}>
        
            <div className="flex gap-6 px-4 ">  
          {[...topRow,...topRow].map((item,index)=>(

          <TestimonialCard key={index} item={item}/>
          ))}
          </div>
          </Marquee>


{/* bottom row  */}

           <Marquee direction="right" pauseOnHover speed={30}>
          <div className="flex gap-6 px-4 ">  
            {[...bottomRow, ...bottomRow, ...bottomRow].map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>

          </Marquee>

        </div>
       
    </section>
  );
}

export default Testimonials;
