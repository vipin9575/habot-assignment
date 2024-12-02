import footerLogo from "../assets/footerLogo.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedIn from "../assets/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="bg-[#123557] py-12 px-6 sm:px-20">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row py-8 px-4 border-t border-b border-slate-100/25">
        <div className="w-full sm:w-3/5 grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-4">
          <div className="place-self-center sm:place-self-start">
            <img src={footerLogo} alt="footer logo" className="mb-4" />
            <span className="text-white text-center sm:text-left block">
              © R Singhania
            </span>
          </div>
          <div className="text-center sm:justify-self-center">
            <h3 className="text-white font-bold text-left mb-4">Company</h3>
            <ul>
              <li className="text-white font-thin text-left text-sm mb-4">About</li>
              <li className="text-white font-thin text-left text-sm mb-4">FAQ</li>
            </ul>
          </div>
          <div className="text-center sm:justify-self-center">
            <h3 className="text-white font-bold text-left mb-4">Terms</h3>
            <ul>
              <li className="text-white font-thin text-left text-sm mb-4">Data Privacy</li>
              <li className="text-white font-thin text-left text-sm mb-4">Terms</li>
              <li className="text-white font-thin text-left text-sm mb-4">
                Accessibility
              </li>
            </ul>
          </div>
          <div className="text-center sm:justify-self-center">
            <h3 className="text-white font-bold text-left mb-4">Related</h3>
            <ul>
              <li className="text-white font-thin text-left text-sm mb-4">Find Buyer</li>
              <li className="text-white font-thin text-left text-sm mb-4">Feedback</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-2/5 flex justify-center sm:justify-end gap-4 mt-8 sm:mt-0">
          <img src={linkedIn} alt="linkedIn" className="w-8 sm:w-10" />
          <img src={twitter} alt="twitter" className="w-8 sm:w-10" />
          <img src={facebook} alt="facebook" className="w-8 sm:w-10" />
          <img src={instagram} alt="instagram" className="w-8 sm:w-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
