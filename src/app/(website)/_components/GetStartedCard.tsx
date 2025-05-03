import { BentArrowRight } from "@/components/svgs"
import TrialClassButton from "./TrialClassButton"

export default function GetStartedCard() {
  return (
    <div className="w-full bg-secondary relative px-[33.5px] xl:px-[43.5px] py-[64px] xl:py-[117px] flex justify-center items-center">
      <div className="w-full max-w-[1196px] h-full rounded bg-primary flex flex-col lg:flex-row justify-between py-8 px-3 xl:gap-12">
        <p className="max-w-[556px] h-[176px] text-[#FBF8E6] font-inter font-normal text-[38px]/[45px] xl:text-[65px]/[70px] tracking-normal text-left capitalize flex flex-col px-3 place-content-center">
          <span>Ready to</span>{" "}
          <span className="flex items-center ml-1">
            <BentArrowRight className="text-[#FBF8E6] w-[47px] h-[28px] lg:w-[57px] lg:h-[57px]" />{" "}
            <span>Get Ahead?</span>
          </span>
        </p>

        <div className="w-full lg:w-[465px] lg:h-[197px] flex flex-col gap-[22px] lg:gap-[28px]">
          <p className="font-light font-inter text-[15px]/[20.8px] lg:text-[16px]/[20.8px] text-[#FBF8E6] tracking-normal align-middle">
            The best way to prepare your child for the future is by equipping
            them with the right skills today. Whether they are just starting out
            or already tech-savvy.
          </p>

          <TrialClassButton className="w-[230px] h-[51px] py-[15px] px-[33px] bg-[#FBF8E6] text-[#202426] hover:bg-[#DFE5E6] hover:border-[#DFE5E6] cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
