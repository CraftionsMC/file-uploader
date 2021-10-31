/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import RHeader from "../../components/RHeader/RHeader";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <RHeader
        title={"Craftions Files"}
        image={logo}
        imageStyle={{ width: "256px" }}
      >
        <Link to={"/upload"}>Share</Link> files with your friends or family.
      </RHeader>
    </>
  );
}
