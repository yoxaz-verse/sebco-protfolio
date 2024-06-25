"use client";
import React from 'react'
import { Titles } from '@/data/admintitle'
import { StatsCard } from '@/components/Admin/StatsCard'
import { ADMIN_ROUTES } from '@/core/routes';

function Dashboard() {
  return (
    <>
      <div className='grid grid-cols-0 md:grid-cols-4 gap-4 grid-rows-0 md:grid-rows-3'>
        {Object.entries(Titles).map(([key, value], index) => {
          return (
            <>
              <StatsCard
                key={index}
                title={key}

                link={
                  index === 12 && ADMIN_ROUTES.OUR_STAFF ? ADMIN_ROUTES.OUR_STAFF :
                    index === 0 ? `${ADMIN_ROUTES.CONTENT}/#${key.toLowerCase()}` :
                      `${ADMIN_ROUTES.CONTENT}${Math.floor(index / 3)}/#${key.toLowerCase()}`
                }
              />
            </>
          )
        })}
      </div>
    </>
  )
}

export default Dashboard
