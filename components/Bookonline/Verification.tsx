// @ts-nocheck

"use client";
import React, { useEffect } from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/(taxi)/store/store";
import { SelectChangeEvent } from "@mui/material/Select";
import useStorage from "@/hooks/useStorage";
import { sendSms } from "@/utils/fetchers";
import CardPaymentBold from "@/components/Bookonline/CardPaymentBold";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./styles.module.scss";

// crypto
import AES from "crypto-js/aes";
import { updateStorage } from "@/heplers/updateStorage";

export default function Verification({}: {}) {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState("0");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [terms, setTerms] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bookingState, setBookingState] = useState<BookingState>();
  // const { data, error } = useSWR({}, tokenFetcher);

  const setClient = useStore((state: any) => state.setClient);
  const pickupLocation = useStore((state: any) => state.pickupLocation);
  const notes = useStore((state: any) => state.notes);
  const setNotes = useStore((state: any) => state.setNotes);

  const { getItem, setItem, removeItem } = useStorage();

  useEffect(() => {
    const cookieState = localStorage.getItem("bookinginfo");
    if (cookieState) {
      setBookingState(JSON.parse(cookieState));
      setDisabled(false);
    }
    return () => {};
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setDisabled(false);

    setCountryCode(event.target.value as string);
  };

  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value as string);
  };

  const handleFirstnameChange = (event: any) => {
    setDisabled(false);

    setFirstName(event.target.value as string);
  };

  const handleLastnameChange = (event: any) => {
    setDisabled(false);

    setLastName(event.target.value as string);
  };

  const handleChangeNotes = (event: any) => {
    setDisabled(false);

    setNotes(event.target.value);
  };

  function renderValue(option: string) {
    return option === "0" ? "Code" : `+${option}`;
  }

  // const reCaptchaRef = React.useRef<any>(null);

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();
    const clientData = {
      name: `${firstName} ${lastName}`,
      phone: `${countryCode}${phone}`,
      countryCode: `${countryCode}`,
      phoneNumber: `${phone}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    };

    setClient(clientData);

    onSubmit();
  };

  async function onSubmit() {
    let smsCode = Math.floor(Math.random() * 90000) + 10000;
    let securityCode = AES.encrypt(
      `${smsCode}`,
      `${process.env.NEXT_PUBLIC_CRYPTO_KEY}`
    ).toString();
    // bookingState = aegeanState;
    updateStorage("securityCode", securityCode);

    const mobileNumber = `${countryCode}${phone}`;

    // if (firstName && lastName === "testSeb@@") {
    //   sendSms(
    //     `00${mobileNumber.replace("+", "")}`,
    //     `Your access code is ${smsCode}`
    //   ).then(() => {
    //     router.push("/book-online/booking-confirmation");
    //   });
    // }

    // const token = await reCaptchaRef?.current.executeAsync();
    // await verifyToken({
    //   token,
    //   firstName,
    //   lastName,
    //   mobileNumber,
    // }).then((result: any) => {
    //   if (result.data.success) {
    sendSms(
      `00${mobileNumber.replace("+", "")}`,
      `Your access code is ${smsCode}`
    ).then(() => {
      router.push("/book-online/booking-confirmation");
    });
    //   }
    // });
  }

  // Constant for the checkbox properties
  const termsCheckboxProps = {
    name: "terms",
    labelText: "I agree to Aegean Taxi ",
    termsLinkText: "Terms and Conditions",
    termsLinkHref: "/terms",
    privacyLinkText: "Privacy Policy",
    privacyLinkHref: "/privacy",
  };

  const handleGoBack = () => {
    // Navigate to the previous page in the history stack
    router.back();
  };

  console.log("pickulocaton", pickupLocation);

  const isPortOrAirPort =
    pickupLocation.type === "port" || pickupLocation.type === "airport";

  return (
    <div className='flex flex-col flex-grow px-4 max-w-[500px] py-4 h-[calc(100dvh-70px)] mx-auto verification-container'>
      <div className='flex flex-col gap-4 flex-grow '>
        <div className='block md:hidden '>
          <div className='flex items-start'>
            <button
              onClick={handleGoBack}
              className='bg-[#264388]  focus:ring focus:ring p-2 w-[50px] h-[50px] rounded-full text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 105 105'
                fill='none'>
                <circle cx='52.5' cy='52.5' r='52.5' fill='#264388' />
                <path
                  d='M22.8787 49.8787C21.7071 51.0503 21.7071 52.9497 22.8787 54.1213L41.9706 73.2132C43.1421 74.3848 45.0416 74.3848 46.2132 73.2132C47.3848 72.0416 47.3848 70.1421 46.2132 68.9706L29.2426 52L46.2132 35.0294C47.3848 33.8579 47.3848 31.9584 46.2132 30.7868C45.0416 29.6152 43.1421 29.6152 41.9706 30.7868L22.8787 49.8787ZM86 49L25 49V55L86 55V49Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='flex flex-col flex-grow gap-2'>
          <div className='mb-2 w-full'>
            <input
              type='text'
              id='firstName'
              value={firstName}
              onChange={handleFirstnameChange}
              placeholder='Enter First Name'
              aria-label='Firstname'
              className='w-full bg-[#F6F6F6] placeholder:text-[#626262] p-2 py-4 border-0 focus:outline-none focus:ring-0'
            />
          </div>
          <div className='w-full'>
            <input
              type='text'
              id='lastName'
              value={lastName}
              onChange={handleLastnameChange}
              placeholder='Enter Surname '
              aria-label='Lastname'
              className='w-full bg-[#f6f6f6] placeholder:text-[#626262] p-2 py-4 border-0 focus:outline-none focus:ring-0'
            />
          </div>

          <div className='flex flex-row md:flex-grow-0 gap-4'>
            <div className='inline-flex'>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={countryCode}
                onChange={handleChange}
                defaultValue={"0"}
                native={false}
                renderValue={renderValue}
                name='countryCode'
                classes={{
                  icon: styles.icon,
                  iconOpen: styles.iconOpen,
                  select: styles.selectSelect,
                  nativeInput: styles.fontSize,
                }}
                sx={{
                  width: "80px", // Adjust the width to your desired size
                  "& .MuiFilledInput-root": {
                    borderBottom: "none", // Remove bottom border
                  },
                  "& .MuiInputBase-root:before, & .MuiInputBase-root:after": {
                    borderBottom: "none", // Remove bottom border in focus and active states
                  },
                  "& .MuiInputBase-root.Mui-focused:before, & .MuiInputBase-root.Mui-focused:after":
                    {
                      borderBottom: "none", // Remove bottom border when focused
                    },
                  "& fieldset": {
                    border: "none", // Remove bottom border when focused
                  },
                }}>
                <MenuItem
                  className={styles.MenuItem + "px-4"}
                  role='option'
                  value='0'>
                  Choose country code
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='1'>
                  +1
                  <span className={styles.countryLabel}>
                    United States/Canada
                  </span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='44'>
                  +44
                  <span className={styles.countryLabel}>United Kingdom</span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='33'>
                  +33
                  <span className={styles.countryLabel}>France</span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='30'>
                  +30
                  <span className={styles.countryLabel}>Greece</span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='39'>
                  +39
                  <span className={styles.countryLabel}>Italy</span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='49'>
                  +49
                  <span className={styles.countryLabel}>Germany</span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='41'>
                  +41
                  <span className={styles.countryLabel}>Switzerland</span>
                </MenuItem>
                <MenuItem className={styles.MenuItem} role='option' value='34'>
                  +34
                  <span className={styles.countryLabel}>Spain</span>
                </MenuItem>

                {countryListExcluded.map((country, index) => (
                  <MenuItem
                    className={styles.MenuItem}
                    key={index}
                    role='option'
                    value={country.phone}>
                    +{country.phone}
                    <span className={styles.countryLabel}>{country.label}</span>
                  </MenuItem>
                ))}
              </Select>
            </div>
            <input
              type='text'
              id='phoneNumber'
              value={phone}
              onChange={handlePhoneChange}
              placeholder='Phone number'
              aria-label='phone number'
              inputmode='numeric'
              pattern='[09]*'
              className='w-full bg-[#F6F6F6] placeholder:text-[#626262] p-2 py-4 border-0 focus:outline-none focus:ring-0'
            />
          </div>

          {isPortOrAirPort && (
            <div className='w-full pt-4'>
              <input
                type='text'
                id='notes'
                value={notes}
                onChange={handleChangeNotes}
                placeholder={
                  pickupLocation.type === "port"
                    ? "Enter vechel name"
                    : pickupLocation.type === "airport" && "Enter flight number"
                }
                aria-label='Notes'
                className='w-full bg-[#f6f6f6] placeholder:text-[#626262] p-2 py-4 border-0 focus:outline-none focus:ring-0'
              />
            </div>
          )}

          <div className='flex flex-grow md:flex-grow-0  items-end justify-center'>
            <CardPaymentBold />
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <div className='flex items-center gap-2'>
            <Checkbox
              sx={{ p: 0, "& .MuiSvgIcon-root": { fontSize: 35 } }}
              onChange={() => setTerms(!terms)}
              checked={terms}
            />
            <label className='flex items-center space-x-2'>
              {/* <input
                type="checkbox"
                name="termsCheckboxProps.name"
                className="h-[35px] w-[35px]"
              /> */}
              <span className='text-sm text-gray-500'>
                <a
                  href='termsCheckboxProps.termsLinkHref'
                  className='text-[#BCBCBC]'>
                  {termsCheckboxProps.labelText}
                  <span className='text-[#000]'>
                    {termsCheckboxProps.termsLinkText}
                  </span>
                  {" and "}
                </a>
                <a
                  href='termsCheckboxProps.privacyLinkHref'
                  className='text-[#000]'>
                  <span className=''>{termsCheckboxProps.privacyLinkText}</span>
                </a>
              </span>
            </label>
          </div>
          <button
            onClick={handleSubmit}
            disabled={
              disabled ||
              phone.length < 9 ||
              !firstName ||
              !lastName ||
              notes.length < 2 ||
              countryCode === "0" ||
              !terms
            }
            className='w-full  focus:ring focus:ring !bg-[#264388] h-[52px] text-white font-semibold text-xl  rounded-md disabled:opacity-50'>
            <div className='flex relative items-center'>
              <div className='w-full text-center'>Request code</div>
              <div className='w-[50px]  absolute rotate-180 right-0 mr-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 105 105'
                  fill='none'>
                  <path
                    d='M22.8787 49.8787C21.7071 51.0503 21.7071 52.9497 22.8787 54.1213L41.9706 73.2132C43.1421 74.3848 45.0416 74.3848 46.2132 73.2132C47.3848 72.0416 47.3848 70.1421 46.2132 68.9706L29.2426 52L46.2132 35.0294C47.3848 33.8579 47.3848 31.9584 46.2132 30.7868C45.0416 29.6152 43.1421 29.6152 41.9706 30.7868L22.8787 49.8787ZM86 49L25 49V55L86 55V49Z'
                    fill='white'
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* <ReCAPTCHA
          ref={reCaptchaRef}
          size="invisible"
          sitekey="6Lc_Wq8pAAAAAIXLFQ8NtSy1YwvRYiaXC52e70NP"
        /> */}
      </div>
    </div>
  );
}
const countryListExcluded = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1268",
  },
  { code: "AI", label: "Anguilla", phone: "1264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  {
    code: "MK",
    label: "North Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Province of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
