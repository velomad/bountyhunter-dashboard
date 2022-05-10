import Modal from "components/Modal";
import React, { useState } from "react";
import LightboxComponent from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const Lightbox = ({ images, isOpen, close }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Modal
        isAppbar={true}
        title="Delete Report"
        handleConfirmClick={() => console.log("test")}
        maxWidth="sm"
        isFullWidth={true}
        open={isModalOpen}
        close={() => setIsModalOpen(false)}
      >
        <div className="capitalize">
          are you sure you want to delete this report
        </div>
      </Modal>

      {isOpen && (
        <LightboxComponent
          imageTitle="Title of the Document"
          imageCaption="Sample caption of the image"
          showThumbnails={true}
          children={<div>test</div>}
          nextLabel="next"
          toolbarButtons={[
            <div className="px-4">{`${photoIndex + 1}/${images.length}`}</div>,
            <button
              className="ril-zoom-in ril__toolbarItemChild ril__builtinButton"
              onClick={() => setIsModalOpen(true)}
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>,
          ]}
          discourageDownloads={false}
          mainSrcThumbnail={images[photoIndex]}
          nextSrcThumbnail={images[(photoIndex + 1) % images.length]}
          prevSrcThumbnail={
            images[(photoIndex + images.length - 1) % images.length]
          }
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => close(false)}
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % images.length);
          }}
        ></LightboxComponent>
      )}
    </div>
  );
};

export default Lightbox;
