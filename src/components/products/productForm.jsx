import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../api/queries/categories';
import { addProduct, showMyProduct } from '../../api/queries/myProducts';
import { API_ENDPOINTS } from '../../utils/config/constants';
import MainButton from '../common/mianBtn';
import SelectMenu from '../common/selectMenu';
import TextInput from '../common/textInput';

const ProductForm = () => {
    const {id} = useParams();
    const inUpdate = !!id;
    const [img,setImg] = useState(null)
    const [sendImg,setSendImage] = useState(null)
    const {invalidateQueries} = useQueryClient()
    const [otherImages,setOtherImages] = useState([])
    const formRef = useRef()
    const {data:categoriesMenu} = useQuery({
        queryKey:[API_ENDPOINTS.CATEGORIES],
        queryFn:()=>getCategories()
    })

    const { data } = useQuery({
        queryKey:["getOneProduct",id],
        queryFn:()=> id && showMyProduct(id),
    })

    const menuData = categoriesMenu?.data?.map(item=>({ name: item?.name, id: item?.id }))
    const handleImageChange =(e)=>{
        setImg(URL.createObjectURL(e.target.files[0]))
        setSendImage(e?.target.files[0])
    }


    const {mutate: add, isPending: addPending, isSuccess} = useMutation({
        mutationFn:(addData)=>addProduct(addData),
        onSuccess:()=>invalidateQueries(["getMyProducts"])
    })




    const handleSubmit =(e)=> {
        e.preventDefault()
        const formData = new FormData(formRef.current);
        formData.append("main_image",sendImg)
        otherImages.forEach((img, index)=>formData.append(`other_images[${index}]`,img))
        if(!inUpdate){
         add(formData)
        //  if(isSuccess){
            formRef.current.reset(); 
        setImg(null); 
        setSendImage(null); 
        setOtherImages([]);
        //  }
        
        } 
    }
    useEffect(()=>{
        if(data?.data){
            formRef.current.name.value = data?.data?.name
            formRef.current.description.value = data?.data?.description
            formRef.current.price.value = data?.data?.price
            formRef.current.minimum_days.value = data?.data?.minimum_days
            formRef.current.maximum_days.value = data?.data?.maximum_days
            formRef.current.health.value = data?.data?.health
            formRef.current.category_id.value = data?.data?.category_id
            setOtherImages(data?.data?.other_images?.map((img)=>img?.url))
            setImg(data?.data?.main_image)
        }
    },[data])
    return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className='flex flex-col gap-[20px]'>
    <div className='text-start'>
        <h2 className='text-[20px] font-bold'>{inUpdate ? "Update" : "Add"} Product</h2>
    </div>
    <form ref={formRef} className='grid grid-cols-1 gap-[15px] lg:grid-cols-2' onSubmit={handleSubmit} encType="multipart/form-data">
      <TextInput defaultValue={data?.data?.name} label={"name"}  name={"name"} placeholder={"Product Name"} />
      <TextInput  label={"description"} name={"description"} placeholder={"Description"} />
      <TextInput label={"price"} name={"price"} placeholder={"Price"} type='number'/>
      <TextInput label={"Minimum Days"} name={"minimum_days"} placeholder={"Minimum Days"} type='number'/>
      <TextInput name={"maximum_days"} label={"Maximum Days"}  placeholder={"Maximum Days"} type='number'/>
      <TextInput name={"health"} label={"Health"} placeholder={"Health"} type='number'/>
        <SelectMenu defaultValue={data?.data?.category_id} options={menuData} name={"category_id"} label="Category"/>
        <TextInput label="Product Main Image" onChange={handleImageChange} name="main_image" type='file' />
        {img && <img src={img}  style={{width:"200px",height:"200px",margin:".5rem auto"}}/>}
        
            <MainButton disabled={addPending} className="my-5" type={"submit"}>{inUpdate ? "Update Product" : "Add Product"}</MainButton>
            </form>
    </div>
    </Suspense>
  ) 
}

export default ProductForm
