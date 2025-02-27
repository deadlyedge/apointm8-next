import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className='bg-primary/20'>
      <nav className='flex items-center justify-between max-w-4xl mx-auto p-3'>
        <Link href='/' className='flex items-center justify-center'>
          <Image
            src='/logo_with_text.svg'
            alt='logo_with_text'
            width={160}
            height={40}
            className='h-auto'
            priority
          />
          <span className='ml-2 text-2xl'>a-point-mate</span>
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  )
}

export default Header
