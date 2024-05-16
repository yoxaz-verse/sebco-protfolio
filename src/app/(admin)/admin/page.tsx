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
                // User is signed in, see the User object.
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
        <Suspense fallback={<Spinner color="secondary" />}>
            <div>
                {user ? (
                    <div>
                        {
                            JSON.stringify(user)
                        }
                    </div>
                ) : (
                    <div>
                        <Spinner color="secondary" />
                    </div>
                )}
            </div>
        </Suspense>
    )
}

export default Page
