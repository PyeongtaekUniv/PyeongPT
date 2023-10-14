const styles = {
  innerWidth: "lg:max-w-[1024px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-26 mb:p-14 px-6 sm:py-48 py-24",
  yPaddings: "md:py-28 sm:py-14 py-24",
  xPaddings: "xl:px-[20%] ",
  topPaddings: "sm:pt-28 xs:pt-14 pt-24",
  bottomPaddings: "sm:pb-28 xs:pb-14 pb-24",

  Lifepaddings: "sm:p-26 mb:p-7 px-6 sm:py-48 mb:py-24 py-12",

  flexCenter: "flex justify-center items-center",
  flexAdapt: "flex justify-center items-center xxxl:flex-row flex-col",
  flexEvenly: "flex justify-evenly items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "py-10",

  infoHeading: "font-semibold md:text-[27px] text-[18px] text-black",

  heading:
    "font-[Pretendard-bold] lg:text-[46px] md:text-[34px] text-[28px] text-primary-grey leading-none",
  subheading:
    "font-[Pretendard-normal] lg:pt-20 pt-10 xl:text-[42px] md:text-[28px] text-[18px] text-primary-grey leading-none",
  paragraph:
    "font-[Pretendard-normal] lg:pt-20 pt-10 xl:text-[24px] text-[15px] text-primary-grey",
  paragraph2:
    "font-[Pretendard-normal] lg:pt-20 pt-10 xl:text-[20px] text-[15px] text-primary-grey",
  faq_heading:
    "font-[Pretendard-medium] lg:text-[30px] md:text-[24px] text-[18px]  leading-none",
  faq_content:
    "font-[Pretendard-light] leading-tight lg:text-[25px] md:text-[20px] text-[16px] ",

  // Images that appear on the side
  // hero section
  heroImage: "w-full relative md:-mt-[20px] -mt-[24px]",
  heroHeading:
    "font-[Pretendard-bold] lg:text-[68px] md:text-[54px] sm:text-[40px] text-[40px] text-white",
  LifeStyleHeading:
    "font-[Pretendard-semibold] lg:text-[68px] md:text-[54px] sm:text-[40px] text-[22px] text-black",
  LifeStyleParagraph:
    "font-[Pretendard-normal] lg:pt-20 pt-20 lg:text-[24px]  sm:text-[20px] text-[17px] text-black",

  ResearchSubtitle:
    "lg:pt-14 md:pt-5 text-[#0066FF] md:pb-7 pt-6 md:pr-9 pr-4  pb-3 lg:leading-10 sm:leading-[21px] leading-[18px] font-[Pretendard-semibold] lg:text-[30px] md:text-[24px] text-[17px]",
  ResearchMobileContent:
    "font-[Pretendard-light] leading-tight lg:text-[24px] md:text-[20px] text-[17px] md:pb-7 md:pr-9 pr-4 text-[#424242]",

  LegalHeading:
    "font-[Pretendard-medium] leading-tight xl:text-[45px] md:text-[35px] sm:text-[25px] text-[20px] text-[#0B8DFF] pb-4  xxl:mx-[15.5%] xl:mx-[16%] lg:mx-[8%] md:mx-16 sm:mx-12 mx-11",
  LegalHeadingSub:
    "font-[Pretendard-medium] leading-tight xl:text-[45px] md:text-[35px] sm:text-[25px] text-[20px] text-[#0B8DFF]   xxl:mx-[15.5%] xl:mx-[16%] lg:mx-[8%] md:mx-16 sm:mx-12 mx-11",
  Legaltitle:
    "font-[Pretendard-semibold] leading-tight lg:text-[45px] md:text-[35px] sm:text-[30px] text-[25px] text-[#121212] xl:mx-[15%] lg:mx-20 mx-10",
  Legalsubtitle:
    "font-[Pretendard-medium] leading-tight lg:text-[28px] md:text-[26px] sm:text-[23px] text-[21px] text-[#66666A] xl:mx-[15%] md:px-9 px-4 lg:mx-20 md:mx-12 sm:mx-10 mx-8 pb-3",
  LegalParagraph:
    "font-[Pretendard-light] lg:leading-10 md:leading-10 leading-7 lg:text-[25px] md:text-[23px] sm:text-[20px] text-[18px] text-[#66666A] xl:mx-[15%] md:px-9 px-4 lg:mx-20 md:mx-12 sm:mx-10 mx-8 xl:pb-[6%] lg:pb-[8%] pb-[10%]",
  LegalParagraph2:
    "font-[Pretendard-light] lg:leading-10 md:leading-10 leading-7 lg:text-[25px] md:text-[23px] sm:text-[20px] text-[18px] text-[#66666A] xl:mx-[15%] md:px-9 px-4 lg:mx-20 md:mx-12 sm:mx-10 mx-8 xl:pb-[2%] lg:pb-[4%] pb-[6%]",
  LegalTableContent:
    "font-[Pretendard-light] lg:leading-10 md:leading-10 leading-7 lg:text-[25px] md:text-[23px] sm:text-[20px] text-[18px] text-[#66666A] xl:mx-[15%] md:px-9 px-4 lg:mx-20 md:mx-12 sm:mx-10 mx-8 pb-10 align-top  pb-10",
  LegalTableTitle:
    "font-[Pretendard-medium] lg:leading-10 md:leading-10 leading-7 lg:text-[28px] md:text-[26px] sm:text-[23px] text-[21px] text-[#424242] text-start ",

  FooterHeading:
    "font-[Pretendard-medium] leading-tight xxxl:text-[19px] lg:text-[16px] md:text-[15px] text-[15px]",
  FooterContent:
    "font-[Pretendard-light] leading-tight xxxl:text-[19px] lg:text-[16px] md:text-[15px] text-[15px]",
  FooterMobileContent:
    "lg:pt-14 md:pt-5 text-[#929BA9] md:pb-7 pt-6 md:pr-9 pr-4  pb-3 lg:leading-10 sm:leading-[21px] leading-[18px] font-[Pretendard-normal] lg:text-[30px] md:text-[24px] text-[17px]",

  highlighted: {
    backgroundColor: "#F6E05E",
    fontWeight: "bold",
  },

  container:
    "flex flex-row justify-center items-center p-[36px, 100px] gap-[21px]",
};
//lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px]
export default styles;
