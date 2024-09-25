import styles from "@/styles/login.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function Login() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-150">
            <div className="col-12 col-md-8 col-lg-6">
                <div className={`card ${styles.card} , card`}>
                    <div className={`card-header ${styles.cardHeader}`}>
                        Bio Data Saya
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <img src="/download.jpeg"
                                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
                                alt="Mahesa Radithya Priady" />
                        </div>

                        <h5 className="card-title">Nama Saya: Mahesa Radithya Priady</h5>
                        <p className="card-text">
                            Nama Saya Terlihat Unik Karena Ada Kata <q>esa</q> Di Nama Saya Yang Berarti Ada Keadilan Dan Ketangguhan Dalam Diri Saya. 
                            Lalu Kata <q>esa</q> Juga Berarti Tunggal.
                        </p>
                        <h5 className="card-text">Kelas Saat Ini: XI PPLG 4</h5>
                        <p className="card-text">
                            Ini Adalah Kelas Yang Sangat Baik Dan Bertanggung Jawab Akan Perintah.
                        </p>
                        <h5 className="card-text">Asal Sekolah (SD): Sd Negeri 2 Karang Sambung</h5>
                        <p className="card-text">
                            Sekolah Ini Terletak Lumayan Jauh Dari Rumah Saya Kalau Jalan Kaki, Tetapi Kenangan Nya Sangat Bagus Dan Sangat Diluar Nalar Sekali.
                        </p>
                        <h5 className="card-text">Asal Sekolah (SMP): Smp Negeri 11 Tasikmalaya</h5>
                        <p className="card-text">
                            Pengalaman Kurang Dikarenakan <b>Covid.</b> Penyakit Dan Virus Mematikan.
                        </p>
                        <h5 className="card-text">Asal Sekolah (SMK): Smk Negeri 4 Tasikmalaya</h5>
                        <p className="card-text">Sedang Prosess Mencari Jati Diri.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
