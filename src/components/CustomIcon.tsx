import Image from 'next/image'

export const CustomIcon = () => {
  return (
    <div>
      <Image src={'/assets/sudu-icon.svg'} alt="Sudu Logo" width={90} height={90} />
    </div>
  )
}
