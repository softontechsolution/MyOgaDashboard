import React from 'react'

const Dmode = (props) => {
    return (
        <div class="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <p class="text-slate-400 hover:text-sky-400 text-left">Delivery Mode</p>
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p class="text-slate-500 font-medium">
                        Rate: {props.rate}/km
                    </p>
                    <p class="text-slate-500 font-medium">
                        Duration: {props.duration}hrs
                    </p>
                </div>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
                <button class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete</button>
            </div>
        </div>
    )
}

export default Dmode