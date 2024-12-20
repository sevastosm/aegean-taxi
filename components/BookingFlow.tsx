import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CancelButton from "./CancelButton";
import { sendSms } from "@/utils/fetchers";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/(taxi)/store/store";
const driversView = "/assets/booking-flow/driversView.png";
const islandView = "/assets/booking-flow/islandView.png";
const mobileView = "/assets/booking-flow/mobileView.png";
const walletIcon = "/assets/booking-flow/walletIcon.svg";
const nearbyDriversLg = "/assets/booking-flow/nearbyDriversLg.png";
const uberIcon = "/assets/booking-flow/uberIcon.svg";
const mapPin = "/assets/booking-flow/mapPin.svg";

// const appStore = "/assets/booking-flow/appStore.svg";
// const googlePlay = "/assets/booking-flow/googlePlay.svg";

type slide = {
  title: string;
  image: string;
  contentTitle: string;
  contentSubTitle: string;
  footerImage?: string | null;
  footerText?: string | null;
  footerImage2?: string | null;
};

const slides: slide[] = [
  {
    title: "Looking for nearby drivers",
    image: nearbyDriversLg,
    contentTitle: "Cars available to book online 24/7",
    contentSubTitle: "Instant booking & confirmation",
    footerImage: uberIcon,
    footerText: "Pre-book your return ride to avoid wait",
  },
  {
    title: "Connecting you to a driver",
    image: driversView,
    contentTitle: "3 categories of cars for all budgets",
    contentSubTitle: "Pay with cash or credit card",
    footerImage: walletIcon,
    footerText: "Card payment available with driver",
  },
  {
    title: "Getting driver details",
    image: islandView,
    contentTitle: "Available in all main islands & Athens",
    contentSubTitle: "Port & Airport Transfers + Tours",
    footerImage: mapPin,
    footerText: " Pre-book for all your destinations",
  },
  {
    title: "Confirming your booking",
    image: mobileView,
    contentTitle: "24/7 customer support",
    contentSubTitle: "Book online/whatsapp/taxi app",
    footerImage: null,
    footerImage2: null,
    footerText: "Download the Aegean Taxi App",
  },
];

interface Props {
  handleSwipeFinished?: () => void;
  orderId: string;
  phone: string;
}

const BookingFlow = ({ orderId = "", phone = "" }: Props) => {
  const client = useStore((state: any) => state.client);

  const router = useRouter();

  const mobileNumber = `00${client.phone}`;

  const handleSwipeChange = (swipe: { isEnd: boolean }) => {
    if (swipe.isEnd) {
      sendSms(
        mobileNumber,
        `Your taxi booking request has been received.Please check the below link to see the status of your reservation and your driver details once assigned. https://aegeantaxi.com/reservation-confirmed/order?orderid=${orderId}`
      );
      setTimeout(() => {
        router.push(`/reservation-confirmed/order?orderid=${orderId}`);
      }, 4000);
    }
  };

  return (
    <div className='flex flex-grow  flex-col'>
      <div className='swiper-container'>
        <Swiper
          onSlideChange={handleSwipeChange}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          allowTouchMove={false}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'>
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className='flex gap-4 flex-col pt-4'>
                <div className='flex items-center justify-center'>
                  <h1 className='font-bold text-2xl text-[#244284]'>
                    {slide.title}
                  </h1>
                </div>
                <div className='flex items-center justify-center mx-4'>
                  <div className='block rounded-t-lg rounded-b-lg bg-[#016974]'>
                    <img
                      src={slide.image}
                      alt='Nearby Drivers Image'
                      className='w-full rounded-t-lg'
                    />
                    <div className='text-center h-[100px] flex flex-col justify-around my-2 items-center'>
                      <p className='text-white font-semibold text-lg'>
                        {slide.contentTitle}
                      </p>
                      <p className='text-white font-semibold text-lg'>
                        {slide.contentSubTitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  {slide?.footerImage && (
                    <img
                      src={slide.footerImage}
                      alt='Wallet Icon'
                      className='w-[60px] h-[60px]'
                    />
                  )}
                  {slide?.footerImage2 && (
                    <img
                      src={slide?.footerImage2}
                      alt='Wallet Icon'
                      className='w-[60px] h-[60px]'
                    />
                  )}
                  <p className='text-black text-lg font-semibold'>
                    {slide.footerText}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex-grow flex flex-col justify-center'>
        <CancelButton orderId={orderId} />
      </div>
    </div>
  );
};

export default BookingFlow;
