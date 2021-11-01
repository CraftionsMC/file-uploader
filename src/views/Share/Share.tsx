/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import { useEffect } from "react";
import "./Share.scss";

export default function Share() {
  useEffect(() => {
    const dropArea = document.querySelector(".drag-area") as HTMLDivElement,
      dragText = dropArea.querySelector("#upl-header") as HTMLDivElement,
      button = dropArea.querySelector("#upl-button") as HTMLButtonElement,
      input = dropArea.querySelector("#upl-input") as HTMLInputElement;
    let file: Blob;

    button.onclick = () => {
      input.click();
    };

    input.addEventListener("change", function () {
      // @ts-ignore
      file = this.files[0];
      dropArea.classList.add("active");
      uploadFile();
    });

    function uploadFile() {
      const form = document.querySelector("#upl-form") as HTMLFormElement;
      form.submit();
    }
  }, []);

  return (
    <>
      <h1 className={"title has-text-centered"}>Share Files</h1>
      <div className="d-a">
        <div className="drag-area">
          <div className="icon">
            <i className="fas fa-cloud-upload-alt" />
          </div>
          <header id={"upl-header"}>Upload File</header>
          <button id={"upl-button"} className={"mt-4"}>
            Browse File
          </button>
          <form
            id={"upl-form"}
            action={"/api/upload"}
            method={"post"}
            encType={"multipart/form-data"}
          >
            <input name="uplFile" type="file" hidden id={"upl-input"} />
          </form>
        </div>
      </div>
    </>
  );
}
