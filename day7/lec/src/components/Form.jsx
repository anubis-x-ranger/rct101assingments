import React,{ useState} from 'react'

const Form = () => {
    const [form,setForm]=useState({
        username:"",
        email:"",
        password:"",
        age:0,
        isIndian: false
    })

    const onChange= (e)=>{
        let {checked,type,name,value,files}=e.target;
        if(type==="checked"){
            setForm({
                ...form,
                [name]:checked
            });
        }else if(type==="file"){
            setForm({
                ...form,
                [name]:files
            });
        }
        else{
            setForm({
                ...form,
                [name]:value
            });
        }
        
    };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
    }
    
  return (
    <div>
        <h2>Form : </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name : </label>
                <input type="text" name="username"
                onChange={onChange} value={form.username} placeholder="Enter Name"/>
            </div>
            <div>
                <label htmlFor="">Email : </label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Enter Email"/>
            </div>
            <div>
                <label htmlFor="">Password : </label>
                <input type="password" name="password" onChange={onChange} value={form.password}  placeholder="Enter Password"/>
            </div>
            <div>
                <label htmlFor="">Age : </label>
                <input type="number" name="age" value={form.age} onChange={onChange} placeholder="Enter Age"/>
            </div>
            <div>
                <input type="checkbox" name="isIndian" checked={form.isIndian} onChange={onChange} />
                <label htmlFor=""> : Is Indian </label>
            </div>
            <div>
                <label htmlFor="">City: </label>
                <select name="city" onChange={onChange}>
                    <option value="">Select city</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Bangalore">Bangalore</option>
                </select>
            </div>
            <div>
               <div>
                <input type="radio" name="gender" value={"Male"} onChange={onChange} placeholder="Enter Age"/>
                <label htmlFor=""> Male </label>
               </div>
               <div>
                <input type="radio" name="gender" value={"Female"} onChange={onChange} placeholder="Enter Age"/>
                <label htmlFor=""> Female </label>
               </div>
               
            </div>
            <div>
                <label htmlFor="">USER Resume : </label>
                <input type="file" name="resume" value={form.resume} onChange={onChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form