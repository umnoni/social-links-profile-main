import avartar from './assets/images/avatar-jessica.jpeg'
import SocialButton from './components/SocialButton';

export default function App(){
  return(
    <div className="bg-[#141414] min-h-screen flex items-center justify-center">
      <div className="bg-[#1f1f1f] rounded-md px-6 py-8 flex flex-col items-center w-full max-w-[350px]">
        <img src={avartar} className='rounded-full w-24 h-24'></img>
        <h1 className='mt-6 text-white text-[24px] text-center font-[Inter-SemiBold]'>
          Jessica Randall
        </h1>
        <h2 className='mb-6 text-[#d9f96a] text-center font-[Inter-SemiBold] text-[14px]'>
          London, United Kingdom
        </h2>
        <p className='text-[#c2c2c2] mb-4 text-center text-[14px] font-[Inter-Regular]'>
          "Front-end developer and avid reader."
        </p>
        <div className='flex flex-col gap-4 w-full'>
          <SocialButton url="https://github.com" name="GitHub"></SocialButton>
          <SocialButton url="https://frontendmentor.io" name="Frontend Mentor"></SocialButton>
          <SocialButton url="https://linkedin.com" name="LinkedIn"></SocialButton>
          <SocialButton url="https://x.com" name="Twitter"></SocialButton>
          <SocialButton url="https://instagram.com" name="Instagram"></SocialButton>
        </div>
      </div>
    </div>
  );
}