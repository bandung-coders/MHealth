import React from 'react';
import Button from '../../atoms/button'
function ProfileDesc() {
    return ( <>
    
    <div className="feature-container profile-content">
           <table className='profile-table'>
            <tr>
                {/* <th>arqaa</th> */}
                {/* <th>arqaa</th> */}
            </tr>
            <tr>
                <td>Nama</td>
                <td>:</td>
                <td>Mardotilah Darmawan</td>
            </tr>
            <tr>
                <td>Tanggal lahir</td>
                <td>:</td>
                <td>29 Mei 2000</td>
            </tr>
            <tr>
                <td>Tempat lahir</td>
                <td>:</td>
                <td>Garut</td>
            </tr>
            <tr>
                <td>Program Studi</td>
                <td>:</td>
                <td>Teknik Informatika</td>
            </tr>
            <tr>
                <td>Universitas</td>
                <td>:</td>
                <td>ARS UNIVERSITY</td>
            </tr>
            
           </table>

            <div className='about-me'>
                <p>Halo, saya Mardotilah Darmawan akrab di panggil Ado. 
                Saya merupakan mahasiswa semester 8 program studi Teknik Informatika di Universitas Adhirajasa Reswara Sanjaya. 
                </p> 
                <p>Saya merupakan anak broken home juga loh, itulah mengapa saya tertarik untuk mengambil topik skripsi ini. 
                Lalu apakah saya merasa memiliki gangguan mental ilness? 
                Tentu saja, itu mengapa ini menjadi alasan kuat untuk 
                saya membuat aplikasi ini.</p>
            </div>    
            <div className='profile-btn'>
                <Button linkPath="/homepage">Kembali</Button>
            </div>
        </div>
    
    
    </> );
}

export default ProfileDesc;