import Image from "next/image";
import SpinnerImg from '../assets/spinner.svg'

export function Spinner() {
  return (
    <Image
      src={SpinnerImg}
      alt='spiner'
      width={40}
      height={40}
    />
  )
}