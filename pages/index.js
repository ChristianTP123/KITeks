import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react';
import zxcvbn from 'zxcvbn';

const words = ["Adgangskoder", "Kodeord", "Svagheder", "Styrker"];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let interval = null;
let timetocrack = "0 seconds"

function Menu(props) {
  return (
    <a href={props.link}>
    <div className="border-2 rounded-xl border-primary bg-primary text-white m-1.5 p-2 text-center">
      <h2 className='text-2xl'>{props.name}</h2>

    </div>
    </a>
  )
}

export default function Home() {
  let [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    animateText("test", currentWordIndex);
  }, [currentWordIndex]);

  function animateText(id) {
    let iteration = 0;
    const element = document.getElementById(id);
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      const word = words[currentWordIndex];
  
      element.innerText = word
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return word[index];
          }
  
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
  
      if (iteration >= word.length) {
        clearInterval(interval);
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(() => animateText(id), 4000);
      }
  
      iteration += 1 / 3;
    }, 20);
  }

  const [showPassword, setShowPassword] = useState(false);


  const [password, setPassword] = useState('');

  function handleChange(event) {
    const value = event.target.value;
    setPassword(value);
     timetocrack = zxcvbn(password).crack_times_display.offline_slow_hashing_1e4_per_second

  }

console.log(zxcvbn("hej"))

  const hasLowercaseLetters = /[a-z]/.test(password);
  const hasuppercaseLetters = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols =  /[^\w\s]/.test(password);

  return (
    <div className={styles.container}>
      <Head>
        <title>Adgangskode tjekkeren</title>
        <meta name="description" content="very good" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="top" className='grid h-fit  gap-1'>
        <div className="grid grid-cols-3 gap-2">
          <Menu name="Tjek" link="#tjek"/> 
          <Menu name="Hacking" link="#hacking"/> 
          <Menu name="Tips" link="#tips"/> 

        </div>
        <div className=''>
          <div className='col-span-1'>
            <div className=' absolute left-5 top-20 bg-primary bottom-2 h-[170%] w-0.5 z-10'></div>
            <div className='absolute left-[15px] top-[70px] border rounded-full border-primary p-1 border-2 z-0'></div>
            <img className='absolute left-[3px] top-[450px] w-9' src="/mus.png"/>
            <img className='absolute left-[-15px] top-[475px] w-20' src="/scroll.png"/>
          </div>
          
          <div className='col-span-3 text-center text-white flex flex-col justify-center'>
            <h1 className='text-4xl'><em className='text-primary text-5xl mr-2'>&lt;</em>Test dine</h1>
            <div className='whitespace-nowrap'>
              <h5 className="text-4xl text-primary inline-block mr-2 ekstra float-left ml-14" id="test"><b>Kodeord</b></h5>
              <h1 className='text-white text-5xl inline-block float-right mr-4'> &frasl;&gt;</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <p className='text-white ml-2'>Så lang tid vil det tage at hacke dit kodeord:</p>
            <div className='grid grid-cols-7 text-left'>
              <h1 className='col-span-4 text-1xl ml-10 text-primary'>{timetocrack}</h1>
              
              <p className='col-span-2 text-sm ml-4 '>Vis kodeord</p>
              <label>
              <input type="checkbox" class="form-checkbox h-3 w-3 text-primary bg-main transition duration-150 ease-in-out mr-2 mb-2" onClick={() => setShowPassword(!showPassword)}/>
              </label>
            </div>
          </div>
          <div className='grid grid-cols-4 ml-4 mr-4 text-white text-xs text-center mb-1 mt-2'>
            <p className={hasLowercaseLetters ? "text-primary": "text-white"}>Små </p>
            <p className={hasuppercaseLetters ? "text-primary": "text-white"}>Store </p>
            <p className={hasNumbers ? "text-primary": "text-white"}>Tal</p>
            <p className={hasSymbols ? "text-primary": "text-white"}>Symboler</p>
          </div>
          <div className='flex justify-center ml-5'>
            <input id="tjek"className='border-4 rounded border-primary bg-main text-white mx-auto text-2xl text-center' type={showPassword ? "text": "password"} placeholder="Skriv dit kodeord" onChange={handleChange}/>
          </div>
      

          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id="hacking" className='bg-gray-900 text-white'>
            <h1 className='text-3xl ml-10 mb-5 mt-2'>Hvordan fungerer denne hjemmeside</h1>
            <p className='ml-10 mb-2'>Denne adganskode tjekker er inspireret af adgangskode-krakkere. Ved hjælp af mønstergenkendelse, genkender og vejer den 30.000 almindelige adgangskoder, almindelige navne og efternavne ifølge US Census-data, populære engelske ord fra Wikipedia og amerikanske tv- og filmproduktioner samt andre almindelige mønstre som datoer, gentagelser (aaa), sekvenser (abcd), tastaturmønstre (qwertyuiop) og l33t speak.</p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div id="tips" className='bg-gray-900 text-white'>
            <h1 className='text-3xl ml-10 mb-5 mt-2'>Sådan gør du dit kodeord bedre</h1>
            <p className='ml-10 mb-2'>At have et sikkert og stærkt kodeord er en af de vigtigste ting, man kan gøre for at beskytte sin online sikkerhed. Her er nogle tips til, hvordan man kan gøre sit kodeord bedre:

Brug en kombination af store og små bogstaver, tal og specialtegn. Jo mere forskelligartet dit kodeord er, jo sværere er det for hackere at gætte det.

Brug ikke personlige oplysninger i dit kodeord. Undgå at bruge navne på familiemedlemmer eller kæledyr.</p>
          </div>
          <div className=' text-primary absolute bottom-[-80%] left-6'>
            <a href="#top">Gå tilbage til toppen</a>
            
          </div>

        </div>
        
      </div>
    
    
  )
}
