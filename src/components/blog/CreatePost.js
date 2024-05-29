// CreatePost.js
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";


function CreatePost() {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiryDate] = useState('');
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
      const allof={name:name,
        company:company,
        expiry_date:expiry_date,}
    async function addPost(){
        await axios.post('https://medicalstore.mashupstack.com/api/medicine',allof,{
            headers: { 'Authorization': "Bearer " + user.token }
        }).then((response)=>{
            navigate('/blog/posts');
            console.log(response.data)
        }).catch(error => {
            console.error('Error adding new medicine:', error);
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Add Medicine</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input
                                type="text"
                                className="form-control"
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={expiry_date}
                                onChange={(event) => setExpiryDate(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" onClick={addPost}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;