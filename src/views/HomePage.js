import React, { useCallback, useEffect, useRef, useState } from 'react'
import bg from '../assets/background2.jpg'
import Icon1 from '../assets/Icon1'
import Icon2 from '../assets/Icon2'
import Icon3 from '../assets/Icon3'
import Icon4 from '../assets/icon-4.svg'
import Icon5 from '../assets/icon-5.svg'
import Icon6 from '../assets/icon-6.svg'
import { useSpring, config, animated, useTransition } from 'react-spring'
import { useInView } from 'framer-motion'
import cover from '../assets/cover.png'
import cover1 from '../assets/cover-1.png'
import cover2 from '../assets/cover-2.png'
import cover3 from '../assets/cover-3.png'
import bg1 from '../assets/bg.jpg'
import Vector from '../assets/vector.svg'
import Vector1 from '../assets/Vector-1.svg'
import Vector2 from '../assets/Vector-2.svg'
import Vector3 from '../assets/Vector-3.svg'
import Vector4 from '../assets/Vector-4.svg'
import Vector5 from '../assets/Vector-5.svg'
import Vector6 from '../assets/Vector-6.svg'
import Vector7 from '../assets/Vector-7.svg'
import Vector8 from '../assets/Vector-8.svg'
import Vector9 from '../assets/Vector-9.svg'
import Vector10 from '../assets/Vector-10.svg'
import techco from '../assets/techco.svg'
import ftechco from '../assets/f-techco.svg'

export default function HomePage() {
  const container = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref)
  const { number1 } = useSpring({
    from: { number1: 0 },
    pause: !isInView,
    number1: 180,
    delay: 200,
    config: config.molasses,
  })
  const { number2 } = useSpring({
    from: { number2: 0 },
    pause: !isInView,
    number2: 20,
    delay: 200,
    config: config.molasses,
  })
  const { number3 } = useSpring({
    from: { number3: 0 },
    pause: !isInView,
    number3: 95,
    delay: 200,
    config: config.molasses,
  })
  const { number4 } = useSpring({
    from: { number4: 0 },
    pause: !isInView,
    number4: 143,
    delay: 200,
    config: config.molasses,
  })
  const reff = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#365B6D',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#365B6D' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#FF7B47' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#365B6D' },
  })

  const reset = useCallback(() => {
    reff.current.forEach(clearTimeout)
    reff.current = []
    set([])
    reff.current.push(setTimeout(() => set(['Finance and', 'Consultancy', 'Solution']), 2000))
    reff.current.push(setTimeout(() => set(['Finance and', 'Solution']), 5000))
    reff.current.push(setTimeout(() => set(['Finance and', 'Consultancy', 'Solution']), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => reff.current.forEach(clearTimeout)
  }, [])
  // const [windowSize, setWindowSize] = useState(getWindowSize());
  // useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {

    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);

  return (
    <div ref={container} className='scroll-smooth'>
      <div className={`bg-local  bg-cover bg-center bg-no-repeat `}
        style={{ backgroundImage: "url(" + bg + ")", width: '100%' }}>
        {/* <img src={bg} width={'100%'} className={`absolute top-0 left-0 right-0 h-144 bg-local  bg-cover bg-center bg-no-repeat `} />  */}
        <div className={` m-auto fixed top-0 left-0 right-0 z-50 
        ${scrollValue > 5 && 'backdrop-blur-lg shadow-lg'}  lg:px-[222px]`}>
          <div className='m-auto flex flex-row py-4 justify-center lg:justify-between'>
            {/* <h1 className='text-3xl font-bold w-[187px] '>
              Logo
            </h1> */}
            <img src={techco} style={{ height: 80, width: 170 }} />
            <div className='hidden lg:flex flex-1  flex-row items-center justify-center'>
              <button onClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              })} className={`text-[16px] font-semibold font-mono ${(scrollValue < 810) ? 'text-primary' : 'text-[#d7d7d7]'} active:text-primary`}>
                Home
              </button>
              <button onClick={() => window.scrollTo({
                top: 850,
                left: 0,
                behavior: 'smooth'
              })}
                className={`text-[16px] font-semibold font-mono pl-10 ${(scrollValue >= 810 && scrollValue < 1400) ? 'text-primary' : 'text-[#d7d7d7]'} hover:text-primary`}>
                Experience
              </button>
              <button onClick={() => window.scrollTo({
                top: 1420,
                left: 0,
                behavior: 'smooth'
              })} className={`text-[16px] font-semibold font-mono pl-10 ${(scrollValue >= 1400 && scrollValue < 2020) ? 'text-primary' : 'text-[#d7d7d7]'} hover:text-primary`}>
                Blog
              </button>
              <button onClick={() => window.scrollTo({
                top: 2040,
                left: 0,
                behavior: 'smooth'
              })} className={`text-[16px] font-semibold font-mono pl-10 ${(scrollValue >= 2020 && scrollValue < 2724) ? 'text-primary' : 'text-[#d7d7d7]'} hover:text-primary`}>
                About Us
              </button>
              <button onClick={() => window.scrollTo({
                top: 2740,
                left: 0,
                behavior: 'smooth'
              })} className={`text-[16px] font-semibold font-mono pl-10 ${(scrollValue >= 2724) ? 'text-primary' : 'text-[#d7d7d7]'} hover:text-primary`}>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className='container m-auto w-full pt-[120px]  h-[700px]'>
          <div className='min-h-[240px]'>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div style={rest}>
                <animated.h1 className='font-extrabold font-mono text-[58px] leading-[80px] text-left align-top  w-[409x] lg:w-[509px]  '
                  style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.h1>
              </animated.div>
            ))}
          </div>
          {/* <h1 className='font-extrabold font-mono text-[58px] leading-[80px] text-left align-top text-tcolor w-[409x] lg:w-[509px] '>
            Finance and Consultancy Solution
          </h1> */}
          <h4 className='text-[20px] w-[350px] text-white text-left align-top mt-[35px]  tracking-normal'>
            We know how large objects will act,
            but things on a small scale.
          </h4>
          <div className='mt-[35px] flex gap-[20px] '>
            <button className='h-12 rounded-full text-[14px] font-[700] bg-second tracking-normal text-white px-6 
          transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-primary hover:scale-110
          '>Get Quote Now</button>
            <button className='tracking-normal rounded-full text-primary hover:bg-primary hover:text-white
          border-solid border-[1px] border-primary px-6 font-[700] text-[14px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>Learn More</button>
          </div>
        </div>

      </div>
      <div className='container m-auto -mt-36 p-0'>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3  justify-items-center mt-20'>
          <div className='w-[328px] rounded-[10px] py-[35px] px-[40px] mb-3 bg-white shadow-md'>
            <Icon1 fill={'#365B6D'} height={48} width={48} />
            <h3 className='font-[700] text-[24px] text-tcolor w-[195px] mt-[10px]'>
              Environmental Consulting
            </h3>
            <p className='text-tcolor2 font-[500] text-[14px] mt-[10px]'>
              We focus on ergonomics and
              meeting you where you work.
            </p>
          </div>
          <div className='w-[328px] rounded-[10px] py-[35px] px-[40px] mb-3 bg-white shadow-md'>
            <Icon2 fill={'#365B6D'} height={48} width={48} />
            <h3 className='font-[700] text-[24px] text-tcolor mt-[10px]'>
              Finance and
              consultancy
            </h3>
            <p className='text-tcolor2 font-[500] text-[14px] mt-[10px]'>
              Just type what's on your mind
              and we'll get you there.
            </p>
          </div>
          <div className='w-[328px] rounded-[10px] py-[35px] px-[40px] mb-3 bg-primary shadow-md'>
            <Icon3 fill={'#fff'} height={48} width={48} />
            <h3 className='font-[700] text-[24px] text-white  mt-[10px]'>
              Financial Services Consulting
            </h3>
            <p className='text-white w-[213px] font-[500] text-[14px] mt-[10px]'>
              the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
      </div>
      <div className='container m-auto pb-40 pt-32'>
        <div className='flex flex-col items-center  '>
          <h2 className='font-bold text-[40px] text-tcolor text-center'>
            Designing Better Experience
          </h2>
          <p className='mt-2 text-[14px] text-center w-[390px] text-tcolor2 '>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='grid lg:grid-cols-4 grid-cols-2 gap-y-8 justify-between mt-12'>
          <div ref={ref} className=' flex flex-col items-center'>
            <img src={Icon4} height={48} />
            <div className='flex'>
              <animated.h1 className={'mt-2 text-[40px] font-bold text-tcolor'}>
                {number1.to(n => n.toFixed())}
              </animated.h1>
              <h1 className='mt-2 text-[40px] font-bold text-tcolor'>+</h1>
            </div>
            <h5 className='mt-2 font-bold text-[22px] text-tcolor2 text-center'>Consumer Products</h5>
          </div>
          <div className='flex flex-col items-center'>
            <img src={Icon5} style={{ height: 48, width: 48 }} />
            <div className='flex'>
              <animated.h1 className={'mt-2 text-[40px] font-bold text-tcolor'}>
                {number2.to(n => n.toFixed())}
              </animated.h1>
              <h1 className='mt-2 text-[40px] font-bold text-tcolor'>+</h1>
            </div>
            {/* <h1 className='mt-2 text-[40px] font-bold text-tcolor'>181+</h1> */}
            <h5 className='mt-2 font-bold text-[22px] text-tcolor2 text-center'>Financial Services </h5>
          </div>
          <div className='flex flex-col items-center'>
            <img src={Icon6} style={{ height: 48, width: 48 }} />
            <div className='flex'>
              <animated.h1 className={'mt-2 text-[40px] font-bold text-tcolor'}>
                {number3.to(n => n.toFixed())}
              </animated.h1>
              <h1 className='mt-2 text-[40px] font-bold text-tcolor'>%</h1>
            </div>
            {/* <h1 className='mt-2 text-[40px] font-bold text-tcolor'>98%</h1> */}
            <h5 className='mt-2 font-bold text-[22px] text-tcolor2 text-center'>Environmental </h5>
          </div>
          <div className='flex flex-col items-center'>
            <Icon1 fill={'#365B6D'} height={48} width={48} />
            <div className='flex'>
              <animated.h1 className={'mt-2 text-[40px] font-bold text-tcolor'}>
                {number4.to(n => n.toFixed())}
              </animated.h1>
              <h1 className='mt-2 text-[40px] font-bold text-tcolor'>+</h1>
            </div>
            {/* <h1 className='mt-2 text-[40px] font-bold text-tcolor'>746+</h1> */}
            <h5 className='mt-2 font-bold text-[22px] text-tcolor2 text-center'>Business & Finance </h5>
          </div>
        </div>
      </div>
      <div className='container m-auto py-16'>
        <div className='flex flex-col items-center '>
          <h2 className='font-bold text-[40px] text-tcolor text-center'>
            Featured Articles
          </h2>
          <p className='mt-2 text-[14px] text-center w-[390px] text-tcolor2'>
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 justify-items-center mt-12'>
          <div>
            <h5 className='w-[135px] font-[700] text-[18px] text-tcolor'>
              A single source
              of truth
            </h5>
            <p className='w-[160px] text-[14px] mt-2 text-tcolor2'>Newton thought that
              light was made up of
              particles, but then it
              was discovered </p>
            <img src={cover} className={'mt-8'} width={230} height={138} />
          </div>
          <div>
            <h5 className='w-[135px] font-[700] text-[18px] text-tcolor'>
              Fastest way to
              organize
            </h5>
            <p className='w-[160px] text-[14px] mt-2 text-tcolor2'>Newton thought that
              “Quantum mechanics”
              is the description of the
              behaviour of matter</p>
            <img src={cover1} className={'mt-8'} width={230} height={138} />
          </div>
          <div>
            <h5 className='w-[135px] font-[700] text-[18px] text-tcolor'>
              Fastest way to
              take action
            </h5>
            <p className='w-[160px] text-[14px] mt-2 text-tcolor2'>Newton thought that
              They describe a
              universe consisting of
              bodies moving</p>
            <img src={cover2} className={'mt-8'} width={230} height={138} />
          </div>
          <div>
            <h5 className='w-[135px] font-[700] text-[18px] text-tcolor'>
              Work better
              together
            </h5>
            <p className='w-[160px] text-[14px] mt-2 text-tcolor2'>Newton thought that
              They finally obtained
              a consistent description
              of the behaviour </p>
            <img src={cover3} className={'mt-8'} width={230} height={138} />
          </div>
        </div>
      </div>
      <div className='container m-auto py-16'>
        <div className='flex flex-col items-center '>
          <h2 className='font-bold text-[40px] text-tcolor'>
            Who We Are
          </h2>
          <p className='mt-2 text-[14px] text-center w-[390px] text-tcolor2'>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='relative flex  flex-wrap lg:flex-nowrap  mt-10'>
          <img src={bg1} width={'597px'} height={'442px'}
          // className={'bg-gradient-to-r from-primary'}
          // style={{background:'linear-gradient(180deg, rgba(0, 0, 0, 0) 14.58%, rgba(56, 56, 56, 0.84) 100%)'}}
          />
          {/* <div className={'bg-gradient-to-t from-[#000] to-[#383838D6] opacity-50 absolute top-0 left-0 right-0 w-full'}
            style={{ width: '597px', height: '442px' }} /> */}
          <div className='lg:ml-28'>
            <h2 className='font-bold text-[40px] text-tcolor w-6/6'>
              Most trusted in
              our field
            </h2>
            <p className='mt-2 text-[14px]  text-tcolor2 w-10/12'>
              Most calendars are designed for teams. Slate
              is designed for freelancers who want a
              simple way to plan their schedule.
            </p>
            <div className='flex align-top mt-10'>
              <img src={Vector} className='self-start mt-1' />
              <div className='ml-6'>
                <h5 className='font-[700] text-[18px] text-tcolor'>
                  the quick fox jumps over the lazy
                  dog
                </h5>
                <h6 className='mt-1'>
                  Things on a very small scale ...
                </h6>
              </div>
            </div>
            <div className='flex align-top mt-10'>
              <img src={Vector1} className='self-start mt-1' />
              <div className='ml-6'>
                <h5 className='font-[700] text-[18px] text-tcolor'>
                  the quick fox jumps over the lazy
                  dog
                </h5>
                <h6 className='mt-1'>
                  Things on a very small scale ...
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#203641] mt-16 pb-10'>
        <div className='container relative m-auto  '>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
        justify-items-center items-center gap-y-8 py-10 px-8' >
            <img src={Vector2} />
            <img src={Vector3} />
            <img src={Vector4} />
            <img src={Vector5} />
            <img src={Vector6} />
            <img src={Vector7} />
          </div>
          <div className='flex flex-wrap justify-between px-4 lg:px-12  rounded-md py-8  bg-[#284351] shadow-md' >
            <div className='w-full lg:w-3/6'>
              <h3 className='text-2xl text-white text-center  lg:text-left lg:w-3/5'>
                Subscribe For Latest
                Newsletter
              </h3>
            </div>
            <div className='relative w-full lg:w-3/6 mt-3 lg:mt-0'>
              <input className='w-full rounded-lg pl-6' placeholder='Your Email' style={{ height: 58 }} />
              <button className='absolute top-0 right-0 h-[58px] border rounded-r-lg px-4 lg:px-8 bg-second hover:bg-primary text-white text-lg'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='bg-[#203641] bottom-0 w-full h-[77px] -mt-14' /> */}
      <div className='container m-auto py-28 '>
        <div className='flex flex-col items-center '>
          <h2 className='font-bold text-[40px] text-tcolor'>
            Get In Touch
          </h2>
          <p className='mt-2 text-[14px] text-center w-[390px] text-tcolor2'>
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='grid gap-8 md:flex mt-16 items-center justify-center'>
          <div className='flex flex-col items-center py-12 px-10 bg-white rounded-xl shadow-2xl
          transition ease-in-out hover:-translate-y-1 duration-300  hover:scale-110'>
            <img src={Vector8} />
            <h6 className='mt-4'>georgia.young@example.com</h6>
            <h6 className='mt-2'>georgia.young@ple.com</h6>
            <h5 className='font-bold mt-6'>Get Support</h5>
            <button className='border-2 p-2 rounded-md mt-6 border-second text-second'>Submit Request</button>
          </div>
          <div className='flex flex-col items-center py-16 px-10 bg-primary rounded-xl shadow-2xl 
          transition ease-in-out hover:-translate-y-1 duration-300  hover:scale-110'>
            <img src={Vector10} />
            <h6 className='mt-4 text-white'>georgia.young@example.com</h6>
            <h6 className='mt-2 text-white'>georgia.young@ple.com</h6>
            <h5 className='font-bold mt-6 text-white'>Get Support</h5>
            <button className='border-2 p-2 rounded-md mt-6 border-white text-white'>Submit Request</button>
          </div>
          <div className='flex flex-col items-center py-12 px-10 bg-white rounded-xl shadow-2xl
          transition ease-in-out hover:-translate-y-1 duration-300  hover:scale-110'>
            <img src={Vector9} />
            <h6 className='mt-4'>georgia.young@example.com</h6>
            <h6 className='mt-2'>georgia.young@ple.com</h6>
            <h5 className='font-bold mt-6'>Get Support</h5>
            <button className='border-2 p-2 rounded-md mt-6 border-second text-second'>Submit Request</button>
          </div>
        </div>
      </div>
      <div className='bg-white shadow-2xl shadow-tcolor2 '>
        <div className='container m-auto py-10 '>
          <div className='flex justify-between '>
            <div>
              <h3 className='font-bold text-lg line-clamp-1'>
                Consulting Agency For Your Business
              </h3>
              <p className='line-clamp-1'>
                the quick fox jumps over the lazy dog
              </p>
            </div>
            <button className='rounded-md bg-second text-white py-4 px-4 w-36
            transition ease-in-out hover:-translate-y-1 duration-300  hover:scale-110'>Contact Us</button>
          </div>
        </div>
      </div>
      <div className='bg-[#203641]'>
        <div className='container m-auto py-16'>
          <div className='grid grid-cols-1 lg:grid-cols-4 lg:justify-items-center gap-y-8'>
            <div className='self-start justify-self-start -mt-7' >
              <img src={ftechco} style={{ height: 80, width: 170, marginBottom: 15 }} />
              <p className='text-white'>
                Techco is a company specialized in the field of information technology and business solutions. It includes a team of creators in designing and developing websites, smart phone applications, and other services
              </p>

            </div>
            <ul className='list-none'>
              <li className='text-white font-bold mb-4' >
                <a href='#' >
                  Legal
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  About Us
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Carrier
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  We are hiring
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Blog
                </a>
              </li>

            </ul>
            <ul className='list-none'>
              <li className='text-white font-bold mb-4' >
                <a href='#' >
                  Features
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Business Marketing
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  User Analytic
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Live Chat
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Unlimited Support
                </a>
              </li>

            </ul>
            <ul className='list-none'>
              <li className='text-white font-bold mb-4' >
                <a href='#' >
                  Resources
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  IOS & Android
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Watch a Demo
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  Customers
                </a>
              </li>
              <li className='text-white mb-3' >
                <a href='#' >
                  API
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}