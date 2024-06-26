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
  iconUrl: "./marker-icon-2x.png"
});

const MapComponent: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>()
  useEffect(() => {
    setMounted(true)
  }, [])
  const { data, loading } = useFetchData(Titles.Location);
  const center: LatLngExpression = [8.50515, 76.271080];
  const router = useRouter();
  if (!loading && mounted) {
    return (
      <div className='w-full flex flex-col'>
        <h1 className='text-[#FFBD12] font-medium text-xl lg:text-3xl pb-8'>
          Browse Property through Map
        </h1>
        <MapContainer center={center} zoom={10} style={{ height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((location: any, _: number) => (
            <Marker
              key={location.id}
              icon={defaultIcon}
              position={[location.latitude, location.longitude]}
            >
              <Popup className='p-0 w-[400px] overflow-y-scroll bg-[#2C2C2B]'>
                <div className='bg-[#2C2C2B] overflow-y-scroll text-yellow-600'>
                  <Image src={location.image} loading='lazy' alt="location_image" width={800} height={800} />
                  <h3 className='text-2xl'>{location.name}</h3>
                  <h1 className='text-xl font-bold'>{location.description}</h1>
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
