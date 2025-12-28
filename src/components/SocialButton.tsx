export default function SocialButton({ name, url }:{ name:string; url:string; }){
  return(
    <a href={url} className="py-3 text-white text-[14px] bg-[#333333] rounded-md font-[Inter-SemiBold] text-center hover:text-[#1f1f1f] hover:bg-[#d9f96a] hover:cursor-pointer transition-colors">
      {name}
    </a>
  );
}