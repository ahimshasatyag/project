import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_widya.png';
import './dashboard.css';

const Dashboard = () => {

  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = await response.json();
        setUsers(result);
        if (token)
          fetchUsers();
        else
          navigate("/login");
      } catch (error){
        console.log(error);
      }
    }
  }, [token, navigate]);

  return (
    <div className="app-container">
      {/* Gambar Logo */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* Penjelasan */}
      <section className="description">
        <p>
        PT Widya Informasi Nusantara atau Widya Wicara merupakan bagian dari Widya Indonesia Group yang berdiri sejak 26 Februari 2019.
 
        Kami menawarkan solusi untuk berbagai kebutuhan masyarakat Indonesia yang berbasis teknologi suara (pengolahan bahasa dan pengucapan).
         
        4 inovasi produk yang kami tawarkan, yaitu Text-to-Speech (TTS) Widya Wicara, Speech-to-Text (STT) Widya Wicara, Chatbot, dan Smart Speaker Widya Wicara.
        </p>
      </section>

      {/* Visi dan Misi */}
      <section className="vision-mission">
        <div className="vision">
          <h2>Visi Kami</h2>
          <p>
            Menjadi pemimpin dalam menyediakan solusi teknologi yang inovatif
            dan berkelanjutan untuk masyarakat global.
          </p>
        </div>
        <div className="mission">
          <h2>Misi Kami</h2>
          <ul>
            <li>Menyediakan produk dan layanan teknologi yang berkualitas tinggi.</li>
            <li>Berfokus pada keberlanjutan dan dampak positif terhadap masyarakat.</li>
            <li>Mengutamakan inovasi untuk menciptakan solusi terbaik.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard
