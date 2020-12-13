import { motion } from "framer-motion";
import React from "react";

interface props {
  onClick: any;
}
const SubmitButton = ({ onClick }: props) => {
  return (
    <motion.button
      whileHover={{ opacity: 0.8 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="flex-grow flex justify-center items-center invisible md:visible"
    >
      <div className="rounded-full text-white bg-vod-primary cursor-pointer font-semibold shadow-card flex justify-center items-center w-auto h-12 px-4 transition duration-200">
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2138 11.2421L1.95224 0.132162C1.71801 0.0202996 1.45731 -0.0218311 1.20043 0.0106625C0.943547 0.0431561 0.701015 0.148941 0.500999 0.315732C0.300983 0.482524 0.151689 0.703479 0.0704526 0.95294C-0.0107834 1.2024 -0.0206283 1.47013 0.0420615 1.72504L1.70047 8.45903L12.3159 12.4989L1.70047 16.5387L0.0420615 23.2727C-0.0218079 23.5278 -0.0127846 23.7961 0.0680757 24.0462C0.148936 24.2963 0.29829 24.5178 0.498667 24.6849C0.699044 24.852 0.942159 24.9577 1.19957 24.9897C1.45699 25.0217 1.71806 24.9787 1.95224 24.8656L25.2138 13.7557C25.4489 13.6435 25.6476 13.4658 25.7868 13.2432C25.9261 13.0207 26 12.7625 26 12.4989C26 12.2353 25.9261 11.9771 25.7868 11.7545C25.6476 11.532 25.4489 11.3542 25.2138 11.2421Z"
            fill="white"
          />
        </svg>

        <span className="pl-2">Submit</span>
      </div>
    </motion.button>
  );
};

export default SubmitButton;
