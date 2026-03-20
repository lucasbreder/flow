import Image from 'next/image'

export const CustomLogo = () => {
  return (
    <div style={{ padding: '10px 0' }}>
      <Image src={'/assets/sudu-brand.svg'} alt="Sudu Logo" width={200} height={65} />
    </div>
  )
}
