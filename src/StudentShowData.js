import React from 'react';
import {Table,Space,Button} from 'antd';
import {useState,useEffect} from 'react';
import StudentTestingForm from "./StudentTestingForm";
import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";

const StudentShowData=(props)=>
{
   let [data,setData] = useState(JSON.parse(localStorage.getItem('dataUser')))

   
   
  function DeleteUser(key){
      const id = data.indexOf(key);
      let arr = [...data];
      arr=arr.filter(items=>items!=key);
      localStorage.removeItem('dataUser')
      setData([...arr])
      localStorage.setItem('dataUser',JSON.stringify(arr))
   }

  
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'First Name',
      key: 'firtname',
    },
    {
      title: 'Last Name',
      dataIndex: 'Last Name',
      key: 'lastname',
    },
    {
      title: 'Father Name',
      dataIndex: "Father's Name",
      key: 'fathername',
    },
    {
      title: 'Mother Name',
      dataIndex: "Mother's Name",
      key: 'mothername',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'standard',
      dataIndex: 'Standard',
      key: 'standard',
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'DOB',
    },
    {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'Gender',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phonenumber',
    },
    {
      title: 'Action',
      dataIndex: 'operation',
      render: ( _, record) => (
        <Space size="middle">
          <a onClick={()=>{EditUser(record)}}>EDIT</a>
          <a onClick={()=>{DeleteUser(record)}}>DELETE</a>
        </Space>
      ),
    },
  ];


  return(
      <div>
        <Table dataSource={data} columns={columns}/>  
      </div>
    )

}
    
  export default StudentShowData;