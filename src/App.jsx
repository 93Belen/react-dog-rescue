import './App.css';
import AdoptButton from './components/AdoptButton';
import ApplyButton from './components/ApplyButton';
import DonateButton from './components/DonateButton';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
    <div className="App w-full text-black font-[300] h-fit text-[1.25rem]">
      <section className='flex box-border flex-col gap-6 px-4 md:px-18 py-12 pt-4 md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-12 md:p-12 md:grid-rows-[10%_80%] h-fit'>
          <h1 className='text-[2.5rem] h-fit'>Lucky 13</h1>
          <p className='md:col-start-1 md:max-w-[500px]'>Lucky 13 Rescue is an organization dedicated to the rescue and aid of homeless
            and neglected dogs in the Kansas City metro and surrounding rural areas. 
            We do not limit our efforts to a specific breed, but rather strive to assist 
            any dog that is facing neglect, homelessness, abuse or death. Our ultimate goal 
            is to rehabilitate each canine in our care through placement in loving fosters homes 
            until they can be carefully matched with adoptive families. <br />
            We are a foster based rescue as we do not have a facility to intake dogs on the spot.</p>
          <img className='w-full md:col-start-2 md:row-start-2 md:row-span-2 md:w-auto md:h-[90%] md:mx-auto object-cover object-[25%]' src="./troy.png" alt="" />
      </section>
      <section className='bg-gradient-to-b from-blue to-lightblue text-white px-6 py-12 text-center flex flex-col items-center gap-6'>
        <h2 className='text-[2rem]'>Foster</h2>
        <p>
        Save a life! Foster a homeless dog. 
        We provide you with all of the supplies and cover all vetting expenses.
        As a foster home based rescue, we are dependent upon local foster homes providing 
        temporary care for our homeless dogs. Join our Lucky 13 foster family and help dogs in need. 
        All supplies and medical care provided - you provide the love!
        </p>
        <ApplyButton/>
      </section>
      <section className='flex flex-col gap-6 px-6 py-12'>
      <h2 className='text-[2rem]'>Adoption Application</h2>
        <ol>
        <li>1. Fill out application</li>
        <li>2. Meet and greet scheduled once approved.</li>
        <li>3. If the meet and greet goes well, you may possibly be able to adopt at that time.</li>
        <li>4. Home check required.</li>
        </ol>
        <AdoptButton />
      </section>
      <section className='bg-gradient-to-b from-blue to-lightblue text-white px-6 py-12 flex flex-col gap-6'>
      <h2 className='text-[2rem]'>Donate</h2>
        <p>
        There are numerous ways you can donate to Lucky 13 including:
        <ul className='list-disc'>
        <li>Monetary Donations</li>
        <li>Monthly Donor Programs</li>
        <li>Goods and Services</li>
        </ul>
        Our rescue is run 100% on donations, so we thank you in advance for your generosity!
        </p>
        <DonateButton/>
      </section>
      <section className='text-center px-6 py-12 flex flex-col gap-6'>
        <h2 className='text-[2rem]'>Sponsors</h2>
        <div className='grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-4 p-2'>
          <img src="./sponsor-1.png" alt="" />
          <img src="./sponsor-2.png" alt="" />
          <img src="./sponsor-3.png" alt="" />
          <img src="./sponsor-4.png" alt="" />
          <img src="./sponsor-5.png" alt="" />
          <img src="./sponsor-6.png" alt="" />
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default App;
