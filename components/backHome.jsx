import React from "react";
import { RollbackOutlined } from "@ant-design/icons";
import Link from "next/link";

function BackHome() {
  return (
    <div className=" h-fit w-fit">
      Click here to Exit Game :
      <button>
        <Link href="/">
          <RollbackOutlined className="text-2xl" />
        </Link>
      </button>
    </div>
  );
}

export default BackHome;
