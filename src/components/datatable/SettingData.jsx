import './settingData.scss';
import Dmode from '../settings/Dmode';
import LocationSet from '../settings/LocationSet';
import VehicleSet from '../settings/VehicleSet';
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';

const SettingData = () => {

    const [Mdata, setMData] = useState([]);
    const [Ldata, setLData] = useState([]);
    const [Vdata, setVData] = useState([]);

    useEffect(() => {
        fetchMode();
        fetchVehicle();
        fetchLocation();

    });

    const fetchMode = () => {
        const unsub = onSnapshot(collection(db, "Settings/deliverymodes/modes"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, name: doc.data().name, rate: doc.data().rate, duration: doc.data().duration });
            });
            setMData(list);
            // setMsg(" Displaying Users Information ");
            // setType("success");
            // snackbarRef.current.show();
        }, (error) => {
            // setMsg(error.message);
            // setType("error");
            // snackbarRef.current.show();
        });

        return () => {
            unsub();
        }
    }
    const fetchVehicle = () => {
        const unsub = onSnapshot(collection(db, "Settings/deliveryVehicles/vehicles"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, name: doc.data().name });
            });
            setVData(list);
            // setMsg(" Displaying Users Information ");
            // setType("success");
            // snackbarRef.current.show();
        }, (error) => {
            // setMsg(error.message);
            // setType("error");
            // snackbarRef.current.show();
        });

        return () => {
            unsub();
        }
    }
    const fetchLocation = () => {
        const unsub = onSnapshot(collection(db, "Settings/locations/states"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach(doc => {
                list.push({ id: doc.id, name: doc.data().name });
            });
            setLData(list);
            // setMsg(" Displaying Users Information ");
            // setType("success");
            // snackbarRef.current.show();
        }, (error) => {
            // setMsg(error.message);
            // setType("error");
            // snackbarRef.current.show();
        });

        return () => {
            unsub();
        }
    }

    return (
        <div class="container mx-auto">
            <div className="setTile px-8 py-8"><p class="text-slate-400 hover:text-sky-400">System Settings</p></div>
            <div className="top">
                <div className="leftCard p-4">
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add</button>
                    <div className="shadow-md flex flex-wrap justify-center">
                        {Mdata.map((data) => {
                            return (
                                < Dmode name={data.name} id={data.id} rate={data.rate} duration={data.duration} />
                            )
                        })}
                    </div>
                </div>
                <div className="rightCard p-4">
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add</button>
                    <div className='shadow-md flex flex-wrap justify-center'>
                        {Ldata.map((data) => {
                            return (
                                < LocationSet name={data.name} id={data.id} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="leftCard p-4">
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add</button>
                    <div className="shadow-md flex flex-wrap justify-center">
                        {Vdata.map((data) => {
                            return (
                                < VehicleSet name={data.name} id={data.id} />
                            )
                        })}
                    </div>
                </div>
                <div className="rightCard p-4">
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add</button>
                    <div className="shadow-md flex flex-wrap justify-center">

                    </div>
                </div>
            </div>
        </div >
    )
}

export default SettingData