"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import uuid4 from "uuid4";

const Page = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const createNewSession = async () => {
    console.log("called");
    const id = uuid4();
    const workspaceUrl = `/workspace/${id}`;
    router.push(workspaceUrl);
    // TODO: set `deployed version url
    // TODO: show toaster
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}${workspaceUrl}`,
    );
  };

  const joinSession = async () => {
    // checking if valid url conditions: domain, workspace and uuid4
    // TODO: alter expression after deployed
    const regex =
      /^https:\/\/localhost\/workspace\/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const test = regex.test(url);
    if (!test) {
      // TODO: show toaster
      return console.log("invalid url");
    }
    router.push(url);
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute max-xl:hidden"
        width={"100%"}
        height={"100%"}
        disablePictureInPicture
        muted
        autoPlay
        src="/assets/videos/earth.mp4"
      ></video>
      <Image
        src={"/assets/images/earth.png"}
        alt="earth-image"
        className="hidden size-full object-cover max-xl:block"
        priority
        quality={100}
        width={100}
        height={100}
      />
      <div className="absolute inset-x-0 top-0 h-screen w-full p-8">
        <h1 className="hx-bold text-right text-white max-md:text-center">
          CordEditor Prototype v1
        </h1>
        <div className="absolute bottom-1/4 right-8 w-2/5 flex-col space-y-4 max-sm:inset-x-0 max-sm:mx-2 max-sm:w-full max-sm:text-center">
          <div>
            <p className="pb-1 text-white">
              Create your own session, invite collabrator around the world.
            </p>
            <Button onClick={createNewSession} className="primary-btn">
              New Session
            </Button>
          </div>
          <div className="text-white">
            <span className="span-or opacity-80">OR</span>
          </div>
          <br />
          <br />
          <br />
          <div className="flex max-sm:flex-col">
            <Input
              type="text"
              onClick={() => {}}
              value={url}
              className="rounded-none bg-white"
              placeholder="Collabrator session link, eg: https://cord-editor-prototype/workspace/uid"
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button onClick={joinSession} className="primary-btn">
              Join Session
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
