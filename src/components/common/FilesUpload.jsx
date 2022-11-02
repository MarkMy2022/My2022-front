// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function FilesUpload() {
//   const [file, setFile] = useState();
//   const [list, setList] = useState();

//   const onFileChange = (e) => {
//     setFile({ profileImg: e.target.files[0] });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('profileImg', file.profileImg);
//     //보통 form 태그에서 데이터를 전송할때는 json 형식을 이용하지만,
//     //이미지나 파일등을 업로드 할때에는 formData 객체를 이용한다.
//     //append() 메서드를 통해 빈 FormData 객체에 key-value 쌍을 추가해준다.
//     console.log(formData);

//     axios
//       .post('http://localhost:3030/api/user-profile', formData, {})
//       // form-data, x-www-form-urlencoded 등의 파일을 보낼 때에는 헤더를 추가해줘야 한다.
//       // 위의 형식은 { headers: { 'Content-Type': 'multipart/form-data' } } 이다.
//       // 하지만 headers의 기본 Content-Type이 multipart/form-data 이므로 생략 가능하다.
//       .then((res) => {
//         console.log(res);
//       });
//   };

//   useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       const response = await axios.get('http://localhost:4000/api');
//       // db에 저장된 (서버에 저장되어 있는) 이미지의 경로를 가져온다.
//       setList(response.data.users);
//       // ...
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <input type="file" onChange={onFileChange} />
//           </div>
//           <div className="form-group">
//             <button className="btn btn-primary" type="submit">
//               Upload
//             </button>
//           </div>
//         </form>
//       </div>
//       {list &&
//         list.map((image, index) => (
//           <img key={index} src={`${image.profileImg}`} />
//         ))}
//     </div>
//   );
// }

// export default FilesUpload;

import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function FilesUpload(props) {
  const [Images, setImages] = useState([]);
  console.log(Images);

  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    formData.append('file', files[0]);
    axios.post('/posts/uploadImage', formData, config).then((response) => {
      if (response.data.success) {
        setImages([...Images, response.data.filePath]);
        props.refreshFunction([...Images, response.data.filePath]);
      } else {
        alert('저장을 하는 데 실패했습니다.');
      }
    });
  };
  const deleteHandler = (image) => {
    const currentIndex = Images.indexOf(image);
    let newImages = [...Images];
    newImages.splice(currentIndex, 1);
    console.log(newImages);
    setImages(newImages);
    props.refreshFunction(newImages);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {/* <Icon type="plus" style={{ fontSize: '3rem' }}></Icon> */}
            <SaveAltIcon style={{ fontSize: '3rem' }}></SaveAltIcon>
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: 'flex',
          width: '350px',
          height: '240px',
          overflowX: 'scroll',
        }}
      >
        {Images.map((image, index) => (
          <div onClick={() => deleteHandler(image)} key={index}>
            <img
              style={{ minWidth: '300px', width: '300px', height: '240px' }}
              src={`http://localhost:3030/${image}`}
              alt="올해의 대표 이미지"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilesUpload;
