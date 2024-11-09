import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className='bg-primary/20'>
      <nav className='flex items-center justify-between max-w-4xl mx-auto p-3'>
        <Link href='/'>
          <Image
            src='/logo_with_text.svg'
            alt='logo_with_text'
            width={160}
            height={40}
            className=""
          />
        </Link>

        <ul className='flex items-center justify-center space-x-4'>
          <li>
            <Link href='/blogs' className='text-white hover:underline'>
              Blogs
            </Link>
          </li>
          <li>
            {/* {user?.name ? (
              <LoggedIn />
            ) : (
              <Link
                href='/api/auth/signin'
                className='text-white hover:underline'>
                login
              </Link>
            )} */}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
