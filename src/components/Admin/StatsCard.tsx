"use client";
import { Titles } from "@/data/admintitle";
import { useFetchData } from "@/hooks/useFetchData";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Card, User } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface StatsCardProps {
  title: string;
  link: any;
}

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(0);
        }
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <h1 className="font-bold text-4xl" ref={nodeRef} />;
};

const StatsCard: React.FC<StatsCardProps> = ({ title, link }) => {
  const { data, loading } = useFetchData(title);
  const normalizedTitle = title.toUpperCase();
  const router = useRouter();

  const cardPressHandler = () => {
    router.push(link);
  };

  return (
    <Card
      isPressable={!loading}
      onPress={cardPressHandler}
      className="text-violet-400 w-[300px] h-[150px] flex flex-row items-center justify-around px-[2rem] cursor-pointer"
    >
      <User className="flex flex-row" name={normalizedTitle === Titles.Apply_for_job ? "People applied for Jobs" : `${normalizedTitle}s`} />
      {loading ? (
        <Counter from={0} to={0} />
      ) : (
        <Counter from={0} to={data?.length || 0} />
      )}
    </Card>
  );
};

export default StatsCard;
