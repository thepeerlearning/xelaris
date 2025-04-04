export default function DiscountCardSection() {
  return (
    <div
      className="w-full bg-white py-16 md:py-24 min-h-[608px] flex flex-col gap-[47px] relative"
      data-aos="fade-up"
      data-aos-once={true}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative w-full h-full lg:h-[553px] lg:max-w-[1010px] xl:max-w-[1206px] xxl:max-w-[1263px] flex flex-col lg:flex-row justify-center items-center px-6 xl:px-0 bg-[#131820]">
          <div className="w-full h-full xl:h-[435px] xl:max-w-[1030px] flex flex-col lg:flex-row gap-8 justify-between lg:px-8 xl:px-0 py-12">
            <div className="w-full h-full md:w-[402px] flex flex-col gap-4 justify-center items-center md:justify-center md:items-start">
              <h4 className="w-[331px] font-inter font-medium md:text-[42px]/[44px] text-[40px]/[40px] lg:text-[47.67px]/[64.8px] -tracking-[1.08px] text-center md:text-left text-[#F4F4F4]">
                Discounts <span className="block">Available!</span>
              </h4>
              <p className="w-[300px] text-[#EAEAEA] lg:w-[377px] font-inter font-normal -tracking-[0.3px] text-center md:text-left md:-tracking-[0.2px] text-sm md:text-[20px]/[30.24px] px-2 md:px-0">
                This is our way of supporting families investing in their
                children&apos;s future
              </p>
            </div>

            <div className="w-full h-full xl:w-[515px] flex flex-col justify-center items-center gap-6 place-content-center">
              <div className="w-full border border-solid border-[#9DA4AE] h-full md:h-[205px] rounded-[5.4px] p-2">
                <div className="w-full h-full flex flex-col bg-[#FECBFF] place-content-center rounded-[5.4px] py-6 px-4 md:p-8 gap-4">
                  <h4 className="w-full font-inter font-bold -tracking-[0.2px] text-[22px]/[30.24px] text-[#131820] text-left uppercase  flex flex-col md:flex-row justify-between gap-2">
                    Annual Discount{" "}
                    <span className="w-[150.44px] h-[44px]  bg-white rounded-lg font-inter font-bold  -tracking-[0.2px] text-[22px]/[30.24px] text-[#131820] text-left uppercase p-2 flex justify-center items-center">
                      Save 15%
                    </span>
                  </h4>{" "}
                  <p className="w-full max-w-[353px] font-inter font-normal text-xl/[30.24px] -tracking-[0.2px] text-left text-[#131820]">
                    Get a 15% discount When you choose to pay annually
                  </p>
                </div>
              </div>
              <div className="w-full border border-solid border-[#9DA4AE] h-full md:h-[205px] rounded-[5.4px] p-2">
                <div className="w-full h-full flex flex-col bg-[#A9F5CA] place-content-center rounded-[5.4px] px-4 py-6 md:p-8 gap-4">
                  <h4 className="w-full font-inter font-bold -tracking-[0.2px] text-[22px]/[30.24px] text-[#131820] text-left uppercase  flex flex-col md:flex-row justify-between gap-2">
                    Family Discount
                    <span className="w-[150.44px] h-[44px]  bg-white rounded-lg font-inter font-bold  -tracking-[0.2px] text-[22px]/[30.24px] text-[#131820] text-left uppercase p-2 flex justify-center items-center">
                      Save 10%
                    </span>
                  </h4>{" "}
                  <p className="w-full max-w-[353px] font-inter font-normal text-xl/[30.24px] -tracking-[0.2px] text-left text-[#131820]">
                    Get a 10% family discount when you register two or more
                    kids!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
