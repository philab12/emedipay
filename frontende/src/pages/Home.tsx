import React,{useState} from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
//Import Image
//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";
import Modal from "../components/Modal";
import ModalContent from "../components/ModalContent";

type Props = {};

const Home = (props: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const hanldeCheckVisible = () => {
     setIsVisible(!isVisible);
  }

  return (
    <>
      <AnimatedRoutes />
      <div className="xl:bg-primary/60 h-full ">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1 variants={fadeIn('down',0.2)} initial="hidden" animate="show" exit="hidden"  className="h1">
              Welcome To Emedipay <br />
              <span className="text-accent ">the smartest way families <br/>
abroad support healthcare</span>
            </motion.h1>
            {/* subtitle */}
            <motion.p  variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden"  className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            "Do not let healthcare cost become a barrier to the wellbeing of your parents and loved ones Use eMedipay; Secured Healthcare Platform"
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectBtn handleVisibility={hanldeCheckVisible} />
            </div>
            <motion.div variants={fadeIn('down',0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex"><ProjectBtn handleVisibility={hanldeCheckVisible} /></motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg image */}
          {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge"></div> */}
          {/* particles */}
          <ParticlesContainer />
          {/* avatar */}
          <motion.div variants={fadeIn('up',0.5)} initial="hidden" animate="show" transition={{ duration: 1, ease: 'easeInOut' }} exit="hidden" className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[2%]">
            <Avatar />
          </motion.div>
        </div>

        <Modal isVisible={isVisible} onClose={() => setIsVisible(false)} >
        <ModalContent />
      </Modal>
      </div>
   
    </>
  );
};

export default Home;
