import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Sidebar } from '../sidebar'

export function Layout() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    return (
        <Collapsible.Root
            defaultOpen
            className='h-screen w-screen bg-gray-950 text-slate-100 flex'
            onOpenChange={setIsSideBarOpen}
        >

            <Sidebar />

            <div className="flex-1 flex flex-col min-h-screen">
                <Header isSidebarOpen={isSideBarOpen} />

                <Outlet />
            </div>
        </Collapsible.Root >
    )
}