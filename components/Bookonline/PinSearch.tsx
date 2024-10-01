import React from 'react'
import Aegeanbutton from '../ui/Aegeanbutton'
import { resetPickUp } from '../ui/helpers'
import useUrl from "@/app/hooks/useUrl";
import { Place } from '@/types/types';
import { json } from 'stream/consumers';


type Props = {}

const PinSearch = (props: Props) => {

    const { updateUrl } = useUrl()

    const handleClick = () => {
        const address = document.getElementById("pinAddress").value
        const lat = document.getElementById("pinLat").value
        const lng = document.getElementById("pinLng").value
        const name = document.getElementById("pinName").value


        const place: Place = {
            address: address,
            name: name,
            lat: lat,
            lng: lng
        }

        updateUrl("origin", JSON.stringify(place))
        resetPickUp()
    }

    const handleCancel = () => {
        resetPickUp();
        updateUrl("pinpickup", null)
    }


    return (
        <div id="pinAddressWrapper" className='flex-col gap-2 hidden'>
            <div className='font-bold text-lg'>Choose your pick-up spot</div>
            <input id="pinAddress" className='text-lg w-full' />
            <input id="pinLat" className='hidden' />
            <input id="pinLng" className='hidden' />
            <input id="pinName" className='hidden' />
            <Aegeanbutton onClick={handleClick} label={'Confirm pickup'} />
            <Aegeanbutton onClick={handleCancel} label={'Cancel'} />
        </div>
    )
}

export default PinSearch