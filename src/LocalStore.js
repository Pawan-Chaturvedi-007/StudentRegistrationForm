import React from 'react';
import 'antd/dist/antd.css';
import {useState} from 'react';
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

  const FormItemLayout = {
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
   <Option value="91">+91</Option>
   <Option value="90">+90</Option>
 </Select>
</Form.Item>
);

const StudentTestingData = (props)=>
{ 
  const [form] = Form.useForm();

  const [userData,setUserData] = useState([{}])
  const [userDataRevised,setUserDataRevised]=useState({});
  const [id,setId]=useState(localStorage.length);

   const onFinish = (values) => {
    if(localStorage.length==0)
    {
      setUserData([{
          ...values
         }])
      console.log(userData);
    }
    else
    {
      setUserDataRevised({
        ...values
      })
      console.log(userDataRevised)
    }

    
  };

  const storeData=()=>{
    if(localStorage.getItem(('dataUser'))==null)
    {
      localStorage.setItem("dataUser", JSON.stringify(userData));
      form.resetFields();
    }
    else
    {
        let fetchData = JSON.parse(localStorage.getItem('dataUser'))
        fetchData.push(userDataRevised);
        localStorage.setItem("dataUser", JSON.stringify(fetchData));
    } 
  }



    return(
      <Form
      onFinish={onFinish}
      {...layout}
      form={form}>
          <Form.Item 
                label="First Name"
                name="First Name">
                <Input className="border-solid border-gray-400 border-2 "/>
            </Form.Item>  

            <Form.Item 
                label="Last Name"
                name="Last Name">
                <Input className="border-solid border-gray-400 border-2 "/>
            </Form.Item>  

            <Form.Item 
                label="Father's Name"
               name="Father's Name">
                <Input className="border-solid border-gray-400 border-2 "  />
            </Form.Item>  

            <Form.Item 
                label="Mother's Name"
                name="Mother's Name">
                <Input className="border-solid border-gray-400 border-2 "/>
            </Form.Item>  

         <Form.Item
         label="age"
         name="age">
             <InputNumber  min={2} max={15} defaultValue={2} />
         </Form.Item>

         <Form.Item
         label="Standard"
         name="Standard">
             <InputNumber  min={1} max={8} defaultValue={1}  />
         </Form.Item>

         <Form.Item
         label="Date of Birth"
         name="dob">
           <DatePicker 
            />
         </Form.Item>

         <Form.Item
         label="Gender"
         name="Gender">
         <Radio.Group
        >
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
        />
      </Form.Item>
      <Form.Item  {...tailFormItemLayout}>
         <Button type="primary" htmlType="submit" >Submit</Button>
      </Form.Item>
      <Form.Item {...FormItemLayout} >
         <Button type="primary" onClick={storeData} >Store Data</Button>
      </Form.Item>
      </Form> 

    )

    
}

export default StudentTestingData;