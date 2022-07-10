import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import clsx from "clsx";
import { URL_REGEX } from "../../utils";

const QRCode = () => {
  const [url, setUrl] = useState("");
  const qrRef = useRef();

  const downloadQRCode = (e) => {
    e.preventDefault();
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor="#00ff00"
      level="H"
    />
  );

  const downloadDisabled = !URL_REGEX.test(url);
  return (
    <div className="container qrcode__container">
      <div className="columns is-vcentered is-centered is-mobile" ref={qrRef}>
        <div className="column is-full has-text-centered">{qrcode}</div>
      </div>
      <div className="columns is-centered is-vcentered mb-3">
        <div className="column is-full">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label className="label">Enter URL</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="text"
                  value={url}
                  onChange={qrCodeEncoder}
                  placeholder="http://stacy.com"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button
                  onClick={downloadQRCode}
                  className={clsx("button", "is-link")}
                  type="button"
                  disabled={downloadDisabled}
                >
                  Download QR Code
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
