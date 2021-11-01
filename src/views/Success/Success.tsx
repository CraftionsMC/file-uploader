/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";

export default function Success() {
  const usp = new URLSearchParams(location.search);

  return (
    <>
      <h1 className="title has-text-centered">Uploaded File!</h1>
      <h2 className="subtitle has-text-centered">
        Your File has been uploaded! You can download your file at&nbsp;
        <a
          href={decodeURIComponent(usp.get("url") as string)}
          target={"_blank"}
          rel={"noreferrer"}
        >
          {location.protocol +
            "//" +
            location.host +
            decodeURIComponent(usp.get("url") as string)}
        </a>
        .
      </h2>
    </>
  );
}
