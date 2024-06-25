"use client";
import { Titles } from "@/data/admintitle";
import { useFetchData } from "@/hooks/useFetchData"
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Card, CardBody, CardHeader, CardFooter, User } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Counter = ({ from, to }: { from: number, to: number }) => {
  const nodeRef = useRef<any>();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => controls.stop();
  }, [from, to]);
  return <h1 className="font-bold text-4xl" ref={nodeRef} />
}


export const StatsCard = ({ title, link }: { title: string, link: any }) => {
  const { data, loading } = useFetchData(title);
  const Apply_For_Job = Titles.Apply_for_job;
  const router = useRouter();
  if (loading) {
    return (
      <Card onClick={() => router.push(link)} className="text-violet-400 w-[300px] h-[150px]   flex flex-row items-center justify-around">
        <h1 className="font-bold">
          No of {title.toUpperCase() === "Apply_for_job".toUpperCase() ? "People applied for Jobs" : `${title.toUpperCase()}S`}
        </h1>
        <Counter from={0} to={0} />
      </Card>
    )
  } else {
    return (
      <Card isPressable={true} onPress={() => router.push(link)} className="text-violet-400 cursor-pointer w-[300px] h-[150px] flex flex-row items-center justify-around px-[2rem]">
        <User name={title.toUpperCase() === "Apply_for_job".toUpperCase() ? "People applied for Jobs" : `${title.toUpperCase()}S`} />
        <Counter to={data.length} from={0} />
      </Card>
    )
  }
}
