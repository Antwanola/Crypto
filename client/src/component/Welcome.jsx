import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { createContext } from "react";
import {TransactionContext} from '../context/transactionContext'

import Loader from "./Loader";
import { useContext } from "react";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-grey-400 text-white";

const Form = ({ placeholder, name, type, value, handleChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    step="0.0001"
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-full p-2
   outline-none bg-transparent text-white 
   border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
const {currentAccount, connectWallet, sendTransactions, handleChange, formData} = useContext(TransactionContext);
console.log(currentAccount)


const handleSubmit = (e) =>{
  const {keyword, message, amount, addressTo} = formData;
  e.preventDefault();
  if(!addressTo || !message || !amount || !keyword) return alert('No form data')
  sendTransactions();
  

}

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-20 px-4">
        <div className=" flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send crypto <br /> across the world
          </h1>
          <p className="text-left text-white mt-5 font-light md:w-9/12 w-11/12 text-base">
            Exploer the crypto world. Buy and sell crypto currencies easily on
            crypt
          </p>
          {!currentAccount && (<button
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] text-white rounded-full
            p-3 cursor-pointer hover:bg-[#2546bd]"
            type="button"
            onClick={ connectWallet}
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>)}
          <div className="grid sm:grid-cols-3 grid-cols-2 mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl  ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl  ${commonStyles}`}>Web 3.0</div>
            <div className={` ${commonStyles}`}>Low Fees</div>
            <div className={`rounded-br-2xl  ${commonStyles}`}>Blockchain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-large mt-1 font-light text-sm">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Form
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
              
            />
            <Form
              placeholder="Amount (Eth)"
              name="amount"
              type="number"
              handleChange={ handleChange}
            />
            <Form
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={ handleChange}
            />
            <Form
              placeholder="Message"
              name="message"
              type="text"
              handleChange={ handleChange}
            />
            <div className="h-[1px] w-full bg-grey-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
                type="button"
                onClick={handleSubmit}
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
