import { useEffect, useState, createContext } from "react";
import {ethers} from 'ethers';
import { contractAddress, contractAbi } from '../utility/constant';
import { Prev } from "react-bootstrap/esm/PageItem";

export const TransactionContext = createContext()

const { ethereum } = window;


const getEthContract =()=>{
    const provider =  new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer)
    // console.log({

    //     provider,
    //     signer,
    //     transactionContract,
    
    // })
    return transactionContract

}

export const TransactionProvider = ({children})=>{
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'', amount:'', keyword:'', message:''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"))



    const isWalletConnected = async () =>{
      try {
        if(!ethereum) return alert('Please install Meta Mask')
        const accounts = await ethereum.request({method: 'eth_accounts'})
        if(accounts.length){
            setCurrentAccount(accounts[0])
        }
    
        console.log(formData.addressTo)
      } catch (error) {
        throw new Error('No Ethereum Object.')
      }
    }

    const connectWallet = async() =>{
        try {
            if(!ethereum) return alert('Please connect your Metamask Wallet');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
            throw new Error('No Ethereum Object.')
            
        }
    }
    const sendTransactions = async() =>{
        try {
            if(!ethereum) return alert('Please connect your Metamask Wallet');
            const {keyword, message, amount, addressTo} = formData;
            const transactionContract =  getEthContract()
            const parsedAmount = ethers.utils.parseEther(amount)
            await ethereum.request({
                method: 'eth_sendTransaction',
                params:[{
                    from:currentAccount,
                    to:addressTo,
                    gas:'2.5A2D0E5604189374BC6A', //0.0005 wei
                    value:parsedAmount._hex // Amount value in hex 

                }]
            })
        
            const transactionHash= await transactionContract.addToBlock(addressTo, parsedAmount, message, keyword);
            setIsLoading(true)
            console.log('Loading', `${transactionHash.hash}`)
            await transactionHash.wait();
            setIsLoading(false)
            console.log('Success', `${transactionHash.hash}`);

            const transactionCount = transactionContract.getTransactionCount();
            console.log(~~transactionCount)
            setTransactionCount(transactionCount);
            
        } catch (error) {
            throw new Error(error.message)
            
        }
    }

    const handleChange = (e, name) =>{
        setFormData((Prev)=>({...Prev, [name]:e.target.value}))
    }

    useEffect(()=>{
        isWalletConnected() 
    },[])



    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount,sendTransactions, handleChange, formData, setFormData}} >
            {children}
        </TransactionContext.Provider>
    )

}






