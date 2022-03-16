import { useState } from 'react';
import './Todo.css';
export default function () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [employeesList, setEmployeeList] = useState([]);
    const [update, setUpdate] = useState(false);
    const [myIndex, setMyIndex] = useState();
    const addEmployeeHandler = () => {
        let newEmployee = {
            firstName,
            lastName,
            email
        }
            setEmployeeList([...employeesList, newEmployee]);
            setFirstName("");
            setLastName("");
            setEmail("");
    }
    const deleteHandler = (email) => {
        let newEmployees = employeesList.filter((filteredEmail) => {
            return filteredEmail.email !== email;
        });
        setEmployeeList(newEmployees);
    }
    const editHandler = (item, index) => {
        setUpdate(true);
        setFirstName(item.firstName);
        setLastName(item.lastName);
        setEmail(item.email);
        setMyIndex(index);
    }
    const updateEmployee = () => {
        setUpdate(false);
        let updatedEmployee = {
            firstName,
            lastName,
            email
        }
        let updatedEmployeesList = employeesList.map((element, i) => {
            if (myIndex === i) {
                return updatedEmployee;
            }
            else {
                return element;
            }
        })
        setEmployeeList(updatedEmployeesList);
        setFirstName("");
        setLastName("");
        setEmail("");
    }
    return (
        <div>
            <div className='container'>
                <div className='my-5'>
                    <h1 className='text-center'>Employee List</h1>
                </div>
                <div>
                    <form action="#">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" value={firstName} required className="form-control my-2" placeholder="First Name" aria-label="Username" onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" value={lastName} required className="form-control my-2" placeholder="Last Name" aria-label="Username" onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} required className="form-control my-2" placeholder="Email" aria-label="Username" onChange={(e) => setEmail(e.target.value)} />
                    </form>
                    <div className='my-5 text-center'>
                        {
                            update ?
                                <button type="button" className="btn btn-primary" onClick={updateEmployee}>Update Employee</button>
                                :
                                <button type="button" className="btn btn-primary" onClick={addEmployeeHandler}>Add Employee</button>
                        }
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Employee First Name</th>
                                <th scope="col">Employee Last Name</th>
                                <th scope="col">Employee Email Id</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeesList.map((item, index) => {
                                return <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td><i className="fa-solid fa-pen-to-square ms-3 icons" onClick={() => editHandler(item, index)}></i><i className="fa-solid fa-trash-can ms-3 icons" onClick={() => deleteHandler(item.email)}></i><i className="fa-solid fa-eye ms-3 icons"></i></td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

