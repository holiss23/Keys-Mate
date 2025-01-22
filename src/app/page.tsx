import CopyBtn from "@/app/components/copyBtn";
import KeyIcon from "@/svg/key";
import { getRedisClient } from "@/lib/redis";
import crypto from "crypto";
import Particle from "@/app/components/particle";
export const dynamic = 'force-dynamic';
export default async function keygen() {
  const redisClient = await getRedisClient();
  const randomString = crypto
    .randomBytes(8)
    .toString("hex")
    .slice(0, 16)
    .toUpperCase();
  await redisClient.SADD("key", randomString);
  return (
    <>
      <div className="flex h-screen items-center justify-center from-purple-200 via-purple-300 to-purple-500">
        <Particle />
        <div className="flex h-44 w-64 flex-col items-center justify-center rounded-2xl bg-purple-500 p-2 text-center shadow-[0_0px_75px_-15px_rgba(168,85,247,0.8)]">
          <p className="text-lg font-extrabold">Key Mate Gen</p>
          <div className="mt-2 flex h-10 w-56 items-center justify-center gap-4 rounded-lg bg-purple-800 p-2 font-mono font-semibold">
            <KeyIcon className="size-5 fill-green-400" />
            <p>{randomString}</p>
          </div>
          <CopyBtn randomString={randomString} />
        </div>
      </div>
    </>
  );
}
