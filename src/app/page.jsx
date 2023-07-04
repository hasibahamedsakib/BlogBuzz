import Button from '@/components/Button/Button'
import Image from 'next/image'
import hero from 'public/hero.png'
export default function Home() {
  return (
    <div className='flex items-center gap-[100px]'>
      <div className='text flex-1 flex flex-col gap-[50px]'>
        <h1 className='text-7xl bg-gradient-to-b from-green-600/80 to-white bg-clip-text text-transparent font-semibold'>Better design for your digital product</h1>
        <p className='text-lg font-normal'>Turning ideas into reality. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, error.</p>
        <Button url={'/portfolio'} text={'See Our Works'} ></Button>
      </div>
      <div className='imgcontainer flex-1 flex flex-col gap-[50px]'>
      <Image src={hero} alt='hero' className='w-full h-[500px] object-cover '></Image>
      </div>
    </div>
  )
}