"use client"

export default function HeroSection() {
  return (
    <section className="w-full h-full  min-h-screen relative bg-[#FBF8E6] pt-24 pb-16 lg:pt-24 lg:pb-12 flex justify-center items-center">
      <div className="w-full 3xl:w-[1440px] h-full px-2 lg:px-10 3xl:px-[100px]">
        <div className="w-full 2xl:w-[1240px] max-w-[1240px] flex flex-col justify-center items-center gap-6 px-4 lg:px-5">
          <div className="w-full xl:w-[960px] 2xl:w-[1200px] bg-secondary flex flex-col xl:flex-row items-center rounded">
            <div className="w-full min-h-[510px] flex flex-col gap-[55px] px-5 py-12 lg:p-12">
              <h2 className="font-inter font-normal text-[#ECECEC] text-[30px]/[36px] lg:text-[60px]/[60px] tracking-[0.72px] md:tracking-normal align-middle">
                Our Story
              </h2>
              <div className="w-full flex flex-col gap-[21px]">
                <h4 className="font-inter font-normal text-[#FBF8E6] text-[16.03px]/[28px] tracking-normal align-middle">
                  <span className="text-[44px]/[44px]"> H</span>ey there! 👋
                </h4>
                <div className="w-full flex flex-col lg:flex-row gap-[32px]">
                  <p className="flex flex-col gap-[21px] font-inter font-light max-w-[512px] text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                    During our years at Springboard, we helped adults break into
                    tech and transform their lives. It was inspiring to see
                    people in their 30s and 40s juggle learning with work and
                    family determined to build have a new career. But one
                    question kept bothering us: why wait until adulthood to
                    learn these skills?
                    <span>
                      We kept thinking: What if kids had access to these
                      opportunities earlier? What if they could explore
                      technologies like AI, blockchain, and product design while
                      their curiosity is at its peak? How much further could
                      they go?
                    </span>
                  </p>
                  <p className="max-w-[512px] flex flex-col gap-[21px] font-inter font-light text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                    That question sparked an idea. And Xelaris was born.
                    <span>
                      We had a different vision: we wanted to create something
                      more than just another coding program. We wanted a
                      platform that introduces kids to the technologies shaping
                      the future, like AI, blockchain, and web3.
                    </span>
                    <span>
                      We started small, growing through word-of-mouth, focusing
                      on quality over scale. Now, with the right systems and a
                      great team, we&apos;re just getting started.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[960px] 2xl:w-[1200px] min-h-[284px] flex flex-col xl:flex-row items-center gap-8 rounded">
            <div className="w-full h-full lg-md:h-[315px] 2xl:h-[284px] flex flex-col gap-6 px-5 py-12 lg:px-8 lg:py-12 2xl:p-12 bg-secondary rounded">
              <h2 className="font-inter font-medium text-[#FBF8E6] text-[29.88px]/[36px] lg:text-[43.83px]/[36px] tracking-normal align-middle">
                Our Vision
              </h2>
              <p className="font-inter font-light max-w-[512px] text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                Our vision is to be the leading platform for empowering young
                minds with emerging technology skills, fostering creativity and
                critical thinking.
              </p>
            </div>
            <div className="w-full h-full lg-md:h-[315px] 2xl:h-[284px] flex flex-col gap-6 px-5 py-12 lg:px-8 lg:py-12 2xl:p-12 bg-secondary rounded">
              <h2 className="font-inter font-medium text-[#FBF8E6] text-[24px]/[37.13px] xl:text-[43.83px]/[36px] tracking-normal align-middle">
                Our Mission
              </h2>
              <p className="font-inter font-light max-w-[512px] text-[#FBF8E6] text-[16px]/[28px] tracking-normal align-middle">
                We started Xelaris to inspire young minds to explore and harness
                the power of technology. Our mission is to educate the next
                generation of innovators equipping them with the skills to
                build, the curiosity to explore, and the responsibility to apply
                their knowledge ethically to achieve social good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
