/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import MaterialTable from "material-table";
import { API_URL } from '../../../config/index'
import Header from '../component/Header/Header';


const Registrationlist = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        ragistrationlist()
    },[])

    const ragistrationlist = () => {

        fetch(API_URL + "ragistration/list",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',

                },
            }
        ).then((response) => {
            if (response.status === 200) {
                response.json().then((resp) => {
           console.log("resp",resp)
                    let _temp = [];
                    resp.data.map((v, i) => {
                        _temp.push({
                            id:  v?.candidateid,
                            fullname: v?.firstname + " " + v?.lastname,
                            gender: v?.gender === 1?"Male" : "Female",
                            action: <p> <Link className="view" to={"/edit/registration/" + v?.id}>Edit</Link> <span className="view" style={{color: 'red'}}>Delete</span> </p>
                        })
                    })
                    setData(_temp);


                });
            }



        })
    }
    return (
        <div>
            <Header />
            <div className="container">
                <div className="table-box">
                    <div style={{ maxWidth: "100%" }} >
                        <MaterialTable options={{
                            search: false,
                            showTitle: false,
                            toolbar: false,
                        }}
                            columns={[
                                { title: "Id", field: "id" },
                                { title: "Full Name", field: "fullname" },
                                { title: "Gender", field: "gender" },
                                { title: "Action", field: "action" }
                            ]}
                            data={data}

                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Registrationlist;