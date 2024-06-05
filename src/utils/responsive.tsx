import React from 'react'

interface ResponsiveProps {
    laptop?: boolean
    tablet?: boolean 
    mobile?: boolean 
    children: React.ReactNode
}
function Responsive(
    { laptop = false, tablet = false, mobile = false,children }: ResponsiveProps
) {
    return (
        <div className={`${mobile?'block':'hidden'} ${tablet?'md:block':'md:hidden'} ${laptop?'lg:block':'lg:hidden'}`}>
            {children}
        </div>
    )
}

export default Responsive