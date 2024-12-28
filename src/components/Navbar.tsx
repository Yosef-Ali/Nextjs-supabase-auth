'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { Button } from '@/components/ui/button';
import AuthModalContext from '@/context/AuthModalContext';
import CreateProfileContext from '@/context/CreateProfileContext';
import { useSession } from '@/hooks/useSession';
import { createClient } from '@/utils/supabaseClient';

const Navbar = () => {
  const { toggleAuthModal } = useContext(AuthModalContext);
  const { toggleCreateProfileModal } = useContext(CreateProfileContext);
  const { user, loading } = useSession();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 bg-blue-50 p-2 rounded-sm'
        >
          Home
        </Link>

        <div className='flex items-center space-x-5 w-auto'>
          {!loading && (
            <>
              {user ? (
                <>
                  <Link
                    href='/profile'
                    className='block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'
                  >
                    Profile
                  </Link>
                  <Button onClick={toggleCreateProfileModal} variant='outline'>
                    Update Profile
                  </Button>
                  <Button onClick={handleSignOut} variant='destructive'>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button onClick={toggleAuthModal} variant='default'>
                  Sign In
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
