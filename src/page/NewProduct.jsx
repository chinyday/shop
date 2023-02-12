import React, {useState} from "react";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";
import Button from "../components/ui/Button";

export default function NewProduct() {

  const [product, setProduct] = useState({});
  const [file, setFile] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // 제품의 사진을 cloudinary에 업로드하고 URL 획득
    uploadImage(file).then(url => {
      addNewProduct(product, url);
       // firebase에 새로운 제품 추가 
    })
   
  }
  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if(name === 'file'){
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({...product, [name]:value}))
  }
  return (
   <section>
    {file && <img src={URL.createObjectURL(file)} alt="local" />}
    <form onSubmit={handleSubmit}>
      <input type='file' name="file" accept="image/*" required onChange={handleChange}/>
      <input type='text' name="title" value={product.title ?? ''} required onChange={handleChange} placeholder="상품명을 넣어주세요." />
      <input type='number' name="price" value={product.price ?? ''} required onChange={handleChange} placeholder="가격를 넣어주세요." />
      <input type='text' name="category" value={product.category ?? ''} required onChange={handleChange} placeholder="카테고리를 설정해주세요." />
      <input type='text' name="description" value={product.description ?? ''} required onChange={handleChange} placeholder="제품 설명를 넣어주세요." />
      <input type='text' name="options" value={product.options ?? ''} required onChange={handleChange} placeholder="제품 옵션(콤마(,)로 구분해주세요.)" />
      <Button text={'제품 등록하기'} />
    </form>
   </section>
  )
}