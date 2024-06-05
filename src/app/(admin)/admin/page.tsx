"use client";
import { Suspense, use, useEffect, useState } from 'react'
import { Spinner } from '@nextui-org/react'
import React from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/backend/database';
import { useRouter } from 'next/navigation';
import { ADMIN_ROUTES } from '@/core/routes';

function Page() {
  const [user, setUser] = useState<any>(null)
  const routes = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        routes.push(ADMIN_ROUTES.DASHBOARD)
        setUser(user)
      } else {
        console.log('User is signed out');
        setUser(null)
        routes.push(ADMIN_ROUTES.AUTH)
      }
    });

  }, [routes])

  return (
    <Suspense>
      <div className='flex items-center justify-center flex-col h-[100vh]'>
        {user ? (
          <>
            <Spinner color="secondary" />
            <h1>Redirecting to dashboard..</h1>
          </>
        ) : (
          <>
            <Spinner color="secondary" />
          </>
        )}
      </div>
    </Suspense>
  )
}

export default Page
