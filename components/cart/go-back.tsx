"use client";

import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button type="button" className="w-fit text-15 text-black/50 hover:text-primary-main" onClick={handleClick}>
      Go Back
    </button>
  );
};

export default GoBack;
