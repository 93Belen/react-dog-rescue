import './App.css';
import AdoptButton from './components/AdoptButton';
import ApplyButton from './components/ApplyButton';
import { motion } from "framer-motion"
import FosterModal from './components/FosterModal';
import ApplicationModal from './components/ApplicationModal';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App w-full text-black font-[300] h-fit text-[1.25rem]">
      <FosterModal/>
      <ApplicationModal name={'Choose a dog'} />
      <section className='flex box-border md:pb-40 flex-col gap-6 px-4 md:px-10 xl:px-32 py-12 pt-4 md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-10 md:p-12 md:grid-rows-[5%_70%] 2xl:grid-rows-[15%_60%] h-fit'>
          <h1 className='text-[2.5rem] h-fit'>Lucky 13</h1>
          <motion.p 
          initial={{x: -250}}
          whileInView={{ x: 0}}
          transition={{duration: 0.5}}
          viewport={{ once: true }}
          className='md:col-start-1 xl:justify-self-end h-fit'>Lucky 13 Rescue is an organization dedicated to the rescue and aid of homeless
            and neglected dogs in the Kansas City metro and surrounding rural areas. 
            We do not limit our efforts to a specific breed, but rather strive to assist 
            any dog that is facing neglect, homelessness, abuse or death. Our ultimate goal 
            is to rehabilitate each canine in our care through placement in loving fosters homes 
            until they can be carefully matched with adoptive families. <br />
            We are a foster based rescue as we do not have a facility to intake dogs on the spot.</motion.p>
          <motion.img
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{duration: 0.3}}
          viewport={{ once: true }}
          className='w-full col-start-2 row-start-1 row-span-2 rounded-lg md:w-auto md:h-full 2xl:w-[60%] 2xl:h-auto md:mx-auto object-cover object-[35%]' src="./troy.png" alt="" />
      </section>
      <section className='bg-gradient-to-b from-blue to-lightblue text-white px-6 py-12 text-center flex flex-col items-center gap-6 md:gap-12'>
        <h2 className='text-[2rem]'>Foster</h2>
        <motion.p 
        initial={{x: 250}}
        whileInView={{ x: 0}}
        transition={{duration: 0.5}}
        viewport={{ once: true }}
        className='md: max-w-[500px]'>
        Save a life! Foster a homeless dog. 
        We provide you with all of the supplies and cover all vetting expenses.
        As a foster home based rescue, we are dependent upon local foster homes providing 
        temporary care for our homeless dogs. Join our Lucky 13 foster family and help dogs in need. 
        All supplies and medical care provided - you provide the love!
        </motion.p>
        <ApplyButton/>
      </section>
      <section className='flex flex-col gap-6 px-6 py-12 md:px-10 xl:px-32 py-12 md:grid grid-col-2'>
      <h2 className='text-[2rem]'>Adoption Application</h2>
        <ol>
        <motion.li
        initial={{x: -250}}
        whileInView={{ x: 0}}
        transition={{duration: 0.5, delay: 0}}
        viewport={{ once: true }}
        className='col-start-1'
        >1. Fill out application</motion.li>
                <motion.li
        initial={{x: -250}}
        whileInView={{ x: 0}}
        transition={{duration: 0.5, delay: 0.1}}
        viewport={{ once: true }}
        className='col-start-1'
        >2. Meet and greet scheduled once approved.</motion.li>
                <motion.li
        initial={{x: -250}}
        whileInView={{ x: 0}}
        transition={{duration: 0.5, delay: 0.2}}
        viewport={{ once: true }}
        className='col-start-1'
        >3. If the meet and greet goes well, you may possibly be able to adopt at that time.</motion.li>
                <motion.li
        initial={{x: -250}}
        whileInView={{ x: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        viewport={{ once: true }}
        className='col-start-1'
        >4. Home check required.</motion.li>
        </ol>
        <AdoptButton />
        <img
          className='md:col-start-2 rounded-lg md:row-start-1 hidden md:block md:row-span-2 md:w-auto md:h-full md:mx-auto object-cover object-[25%]' src="./troy-3.png" alt="" />
      </section>
      <section className='bg-gradient-to-b from-blue to-lightblue md:px-10 xl:px-32 py-12 text-white px-6 py-12 flex flex-col gap-6 md:grid md:gap-12 grid-cols-2'>
      <h2 className='text-[2rem]'>Donate</h2>
        <motion.p
        initial={{x: 250}}
        whileInView={{ x: 0}}
        transition={{duration: 0.5, delay: 0}}
        viewport={{ once: true }}
        >
        There are numerous ways you can donate to Lucky 13 including:
          <ul className='list-disc'>
                  <motion.li
          initial={{x: 250}}
          whileInView={{ x: 0}}
          transition={{duration: 0.5, delay: 0.1}}
          viewport={{ once: true }}
          className='col-start-1'
          >Monetary Donations</motion.li>
                  <motion.li
          initial={{x: 250}}
          whileInView={{ x: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          viewport={{ once: true }}
          className='col-start-1'
          >Monthly Donor Programs</motion.li>
                  <motion.li
          initial={{x: 250}}
          whileInView={{ x: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          viewport={{ once: true }}
          className='col-start-1'
          >Goods and Services</motion.li>
          </ul>
          Our rescue is run 100% on donations, so we thank you in advance for your generosity!
          </motion.p>
          <Link to='/donate' className='bg-yellow rounded-2xl hover:bg-darkyellow duration-1000 font-[200] w-[9.93rem] flex justify-center items-center h-[2.31rem] text-black text-[1.25rem]' >
            Donate
          </Link>
          <motion.img
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.3}}
            viewport={{ once: true }}
            className='w-full rounded-lg md:col-start-1 md:row-start-1 md:row-span-3 md:w-auto md:h-[90%] md:mx-auto object-cover object-[25%]' src="./troy-2.png" alt="" />
        </section>
      <section className='text-center px-6 py-12 flex flex-col gap-6'>
        <h2 className='text-[2rem]'>Sponsors</h2>
        <div className='grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-4 p-2 md:flex flex-row justify-around md:p-20'>
          <img src="./sponsor-1.png" alt="" />
          <img src="./sponsor-2.png" alt="" />
          <img src="./sponsor-3.png" alt="" />
          <img src="./sponsor-4.png" alt="" />
          <img src="./sponsor-5.png" alt="" />
          <img src="./sponsor-6.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
