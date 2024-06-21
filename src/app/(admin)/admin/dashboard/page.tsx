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
              {index === 0 && <>
                <h1 className='col-span-4 md:col-span-1 font-bold'>Content</h1>
              </>}
              {(index !== 0 && index !== 12 && index % 3 === 0) && (
                <div className="col-span-4 md:col-span-1">
                  <h2 className="font-bold">Content {index / 3}</h2>
                </div>
              )}
              {(index === 12) && (
                <h1 className='col-span-4 font-bold md:col-span-1'>Our Staff</h1>
              )}
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
