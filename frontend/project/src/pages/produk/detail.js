import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/produk/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Detail Produk</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Nama Produk : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3>Kontak Detail</h3>
                        <h5>Email  : {empdata.email}</h5>
                        <h5>Phone  : {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/produk">Kembali</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Detail;