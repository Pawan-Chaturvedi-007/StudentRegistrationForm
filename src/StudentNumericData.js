import React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import { Form,InputNumber,Input,DatePicker, Radio,Select,Button} from 'antd';
const { Option } = Select;


const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
 <Select
   style={{
     width: 50,
   }}
 >
   <Option value="86">+91</Option>
   <Option value="87">+90</Option>
 </Select>
</Form.Item>
);

const StudentNumericData = (props)=>
{ 
  const [form] = Form.useForm();

  const [userData,setUserData]=useState({
    firstName:'',
    lastName:'',
    fathersName:'',
    mothersName:'',
    phnNumber:'',
    gender:'',
   });

   const storedData=(event)=>{
    setUserData(prevState=>({
      ...prevState,
      [event.target.name]: event.target.value
   }));
   }

   const ageStored=(value)=>{
    setUserData(prevState=>({
      ...prevState,
      fifthInput: value,
   }));
   }

   const standardStored=(value)=>{
    setUserData(prevState=>({
      ...prevState,
      standard: value,
   }));
   }
 
   const dobStored=(date,dateString)=> {
    setUserData(prevState=>({
      ...prevState,
     dob:dateString
   }));
  }
   
    const submittedForm= (e)=>{
    console.log(userData);
    form.resetFields();
    
   }


    return(
      <Form
      {...layout}
      form={form}
      onFinish={submittedForm}>
          <Form.Item 
                label="First Name">
                <Input className="border-solid border-gray-400 border-2 " name="firstName" onChange={storedData}/>
            </Form.Item>  

            <Form.Item 
                label="Last Name">
                <Input className="border-solid border-gray-400 border-2 " name="lastName" onChange={storedData}/>
            </Form.Item>  

            <Form.Item 
                label="Father's Name">
                <Input className="border-solid border-gray-400 border-2 " name="fathersName" onChange={storedData} />
            </Form.Item>  

            <Form.Item 
                label="Mother's Name">
                <Input className="border-solid border-gray-400 border-2 " name="mothersName" onChange={storedData}/>
            </Form.Item>  

         <Form.Item
         label="age">
             <InputNumber  min={2} max={15} defaultValue={2} name="fifthInput" onChange={ageStored}/>
         </Form.Item>

         <Form.Item
         label="Standard">
             <InputNumber  min={1} max={8} defaultValue={1} name="standard" onChange={standardStored} />
         </Form.Item>

         <Form.Item
         label="Date of Birth">
           <DatePicker 
           name="dob"
           onChange={dobStored} />
         </Form.Item>

         <Form.Item
         label="Gender"
         name="Gender">
         <Radio.Group
         name="gender" 
         onChange={storedData}>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
        </Radio.Group>
         </Form.Item>
    <Form.Item
        name="phone"
        label="Phone Number"
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
          name="phnNumber" 
          onChange={storedData}
        />
      </Form.Item>
      <Form.Item  {...tailFormItemLayout}>
         <Button type="primary" htmlType="submit" >Submit</Button>
      </Form.Item>
      </Form> 

    )

    
}

export default StudentNumericData;