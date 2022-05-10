import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function DropzoneComponent({acceptType,acceptMinSize,acceptMaxSize,acceptMultiple}) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const remove = () => {
    setFiles([])        // remove the file from the array
  };

  const {
    getRootProps,
    getInputProps,
    fileRejections,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    maxSize:1000000,
    maxFiles:1,
    multiple: false ,
    onDrop,
    accept: 'image/jpeg, image/png'
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const thumbs = files.map(file => (
    <div key={file.name}>
      <img 
      className='w-36 h-10 object-contain'
        src={file.preview}
        alt={file.name}
      />
      
    </div>
  ));

  // clean up
  useEffect(() => () => {

    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);



  return (
    <section>
      <div {...getRootProps({style})}>
        {thumbs}

        <input {...getInputProps()} />
        <div className='text-sm'>Click here or Drag and drop your images here.</div>
        <div className='text-xs'>image dimension 125 * 30.</div>
        {fileRejections.length > 0 &&  <div className='text-red-500'>Maximum accpeted image size is <strong>1Mb</strong></div>}

      </div>
      <div className={` ${files.length > 0 ? 'block': 'hidden'} text-center text-red`}>
          <button onClick={remove} className=" rounded-full border border-red-500">Remove</button>
      </div>
      {/* <aside> */}
      {/* </aside> */}
    </section>
  )
}

export default DropzoneComponent;