import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultAPI from '../../api/axios';
import { getCategories } from '../../api/queries/categories';
import { API_ENDPOINTS } from '../../utils/config/constants';
import MainButton from '../common/mianBtn';
import SelectMenu from '../common/selectMenu';
import TextInput from '../common/textInput';

const ProductForm = () => {
    const {id} = useParams();
    const inUpdate = !!id;
    const [img,setImg] = useState(null)
    const [sendImg,setSendImage] = useState(null)

    const [otherImages,setOtherImages] = useState([])
    const formRef = useRef()
    const {data:categoriesMenu} = useQuery({
        queryKey:[API_ENDPOINTS.CATEGORIES],
        queryFn:()=>getCategories()
    })
    const menuData = categoriesMenu?.data?.map(item=>({ name: item?.name, id: item?.id }))
    const handleImageChange =(e)=>{
        setImg(URL.createObjectURL(e.target.files[0]))
        setSendImage(e?.target.files[0])
    }
    const handleSubmit =(e)=> {
        e.preventDefault()
        const formData = new FormData(formRef.current);
        formData.append("main_image",sendImg)
        defaultAPI.post(API_ENDPOINTS.PRODUCTS, formData)
    }
    return (
    <div className='flex flex-col gap-[20px]'>
    <div className='text-start'>
        <h2 className='text-[20px] font-bold'>Add Product</h2>
    </div>
    <form ref={formRef} className='grid grid-cols-1 gap-[15px] lg:grid-cols-2' onSubmit={handleSubmit} encType="multipart/form-data">
      <TextInput label={"name"}  name={"name"} placeholder={"Product Name"} />
      <TextInput  label={"description"} name={"description"} placeholder={"Description"} />
      <TextInput label={"price"} name={"price"} placeholder={"Price"} type='number'/>
      <TextInput label={"Minimum Days"} name={"minimum_days"} placeholder={"Minimum Days"} type='number'/>
      <TextInput name={"maximum_days"} label={"Maximum Days"}  placeholder={"Maximum Days"} type='number'/>
      <TextInput name={"health"} label={"Health"} placeholder={"Health"} type='number'/>
        <SelectMenu options={menuData} name={"category_id"} label="Category"/>
        <TextInput label="Product Main Image" onChange={handleImageChange} name="main_image" type='file' />
        {img && <img src={img}  style={{width:"200px",height:"200px",margin:".5rem auto"}}/>}
        <TextInput label="Product other Image" name='otherImages' multiple={true} placeholder={'Other Images'} onChange={(e) => setOtherImages([...otherImages, ...e.target.files])} type='file' />
            <div className=' grid grid-cols-4 gap-[25px]'>
                {otherImages?.map((image, index) => (
                    <div key={index} className=' relative w-fit'>
                        <img src={URL.createObjectURL(image)} width={150} height={100} alt='' />
                        <button type="button" onClick={() => {
                            setOtherImages(otherImages.filter((img) => img !== image))
                        }} className=' absolute top-0 right-0 bg-red-500 text-red rounded-full p-1'>X</button>
                    </div>
                ))}
            </div>
            <MainButton className="my-5" type={"submit"}>Add Product</MainButton>
            </form>
    </div>
  ) 
}

export default ProductForm
