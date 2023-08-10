import React from "react";
import Link from "next/link";
import Image from "next/image";

function entryDenied() {
  return (
    <div>
      <div className="text-7xl text-center">!!😛ENTRY DENIED😛!!</div>;
      <br />
      <br />
      <br />
      <br />
      <main>
        <div>
          <div className="flex justify-center">
            click <Link href="/">[here]</Link> to go back to Entry Page
          </div>
          <Link href="/" className="flex justify-center">
            <Image
              src="/goaway.gif"
              width={400}
              height={200}
              alt="Picture of the author"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}

export default entryDenied;
