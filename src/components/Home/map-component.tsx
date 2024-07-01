"use client";
import { Titles } from '@/data/admintitle';
import { useFetchData } from '@/hooks/useFetchData';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from 'leaflet';
import Image from 'next/image';
import "../../styles/global.css";
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
const defaultIcon: any = new Icon({
  iconUrl: "./marker-icon-3x.png",
  iconSize: [24, 35]
});

const MapComponent: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>()
  useEffect(() => {
    setMounted(true)
  }, [])
  const { data, loading } = useFetchData(Titles.Location);
  const center: LatLngExpression = [9.979882, 76.580307];
  /*
   const computerCenter = (data: any[]): LatLngExpression => {
     let avgLat = 0;
     let avgLng = 0;
     if (data.length > 0) {
       const sumLat = data.reduce((sum, d) => sum + d.latitude, 0);
       const sumLng = data.reduce((sum, d) => sum + d.longitude, 0);
       avgLat = sumLat / data.length;
       avgLng = sumLng / data.length;
     }
 
     return [avgLat, avgLng];
   };
   */
  console.log(data);
  const router = useRouter();
  if (!loading && mounted) {
    return (
      <div className='w-full flex flex-col'>
        <h1 className='text-[#FFBD12] font-medium text-xl lg:text-3xl pb-8'>
          Browse Property through Map
        </h1>
        <MapContainer center={center} zoom={8} style={{ height: '500px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((location: any, _: number) => (
            <Marker
              key={location.id}
              icon={defaultIcon}
              position={[location.latitude, location.longitude]}
            >
              <Popup className='p-0 w-[200px]  bg-[#2C2C2B]'>
                <div className='bg-[#2C2C2B] flex flex-col items-center  gap-[1rem] justify-center text-yellow-600'>
                  <h3 className='text-lg w-full'>{location.title}</h3>
                  <Image src={location.image} loading='lazy' alt="location_image" width={400} height={400} />
                  <Button color='warning' onClick={() => router.push(location.project_link)}>Know More</Button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  }

  return null;
};

export default MapComponent;
