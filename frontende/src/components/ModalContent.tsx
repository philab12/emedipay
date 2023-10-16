import React,{useState} from "react";
import { Link } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import SignIn from "./WebForms/SignIn";
import CreateSupport from "./WebForms/CreateSupport";
import CreateProvider from "./WebForms/CreateProvider";

type Props = {};

const ModalContent = (props: Props) => {
  const [portal, setPortal] = useState<string>("Support");
  const [createSupportAccount, setCreateSupportAccount] = useState<boolean>(false);
  const [createProvidersAccount, setCreateProvidersAccount] = useState<boolean>(false);

  const handleCreatePortal = () => {
       if(portal === "Support") {
        setCreateSupportAccount(true);
        setCreateProvidersAccount(false);
       }else {
        setCreateSupportAccount(false);
        setCreateProvidersAccount(true);
       }
  }


  const handleChangeSupportPortal = () => {


    setCreateSupportAccount(false);
    setPortal("Support");

  }

  const handleChangeProviderPortal = () => {


    setCreateProvidersAccount(false);
    setPortal("Providers");

  }

  return (
    <>
    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center">
      {
        
        !createSupportAccount && !createProvidersAccount && (
          <>
      <div className={`${ portal === "Support" && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} z-20 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black after:absolute after:-bottom-1 after:left-0`} onClick={handleChangeSupportPortal}>Support Families</div>
      <div className={`${ portal === "Providers" && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} z-20 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black after:absolute after:-bottom-1 after:left-0`} onClick={handleChangeProviderPortal}>Providers</div>
         </>
        )
      }
      </div>

      <div className="py-6 px-6 lg:px-8 text-left">
        
   
          
          {
           createSupportAccount ? <CreateSupport handleChangeSupportPortal={handleChangeSupportPortal} /> : createProvidersAccount ? <CreateProvider /> : <SignIn handleCreatePortal={handleCreatePortal} portal={portal} />  
          }
          
     
      </div>
    </>
  );
};

export default ModalContent;
