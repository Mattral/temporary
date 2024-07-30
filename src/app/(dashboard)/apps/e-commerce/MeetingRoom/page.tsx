"use client";

//import Alert from "components/Alert";
import Loader from "components/Loader";
import MeetingRoom from "components/MeetingRoom";
import MeetingSetup from "components/MeetingSetup";
import { useGetCallById } from "hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import styles from './MeetingRoom.module.css'; // Import the CSS module

const Meeting = () => {
  const { id } = useParams();
  const { isLoaded } = useUser();
  const { call, isCallLoading } = useGetCallById(id);
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  // Show loader while user or call data is being fetched
  if (!isLoaded || isCallLoading) return <Loader />;

  // Always render the video call and related components
  return (
    <main className={styles.mainContainer}> {/* Apply the mainContainer style */}
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;




/*
______________________________________________intial____________________________________-

// src/app/(dashboard)/apps/e-commerce/product-details/[id]/page.tsx
import Products from 'views/apps/Products';
import { ProductDetails } from 'views/apps/ProductDetails';

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;
  <ProductDetails id={id} />

  return <Products />;
}

export async function generateStaticParams() {
  const response = [1, 2, 3, 5];

  return response.map((prodId: number) => ({
    id: prodId.toString()
  }));
}
*/

/*
______________________________________________ORIGINAL ____________________________________-

// import { Products } from 'types/e-commerce';
// import axios from 'utils/axios';

import ProductDetails from 'views/apps/ProductDetails';

// ==============================|| PAGE ||============================== //

type Props = {
  params: {
    id: string;
  };
};

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: Props) {
  const { id } = params;

  return <ProductDetails id={id} />;
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // todo: this need to look back again once we implemted SWR
  // const response = await axios.get('/api/products/list');

  // return response.data.products.map((prod: Products) => ({
  //   id: prod.id
  // }));

  const response = [1, 2, 3, 5];

  return response.map((prodId: number) => ({
    id: prodId.toString()
  }));
}
*/