import AdminNavbar from '@/components/Admin/navbar';
import React from 'react'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <AdminNavbar />
            <div className="mx-[12%] mt-2 ">
                {
                    children
                }
            </div>
        </div>
    )
}

export default layout