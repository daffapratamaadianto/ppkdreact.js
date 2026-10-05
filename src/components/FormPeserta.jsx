import { useEffect, useState } from "react"
const FormPeserta = ({ onSimpan, onCancel, pesertaEdit }) => {

    const [nama, setNama] = useState("");
    const [jurusan, setJurusan] = useState("");
    const [eror, setEror] = useState("")

    // use effect hasil req dari server menghasilkan sebuah data, dirender cuma 1 kali  
    useEffect(() => {
        console.log(pesertaEdit)

        if (pesertaEdit) {
            setNama(pesertaEdit.nama)
            setJurusan(pesertaEdit.jurusan)
        } else {
            setNama("")
            setJurusan("")
        }
    }, [pesertaEdit])

    const handleSimpan = (e) => {
        e.preventDefault();
        // jika dia edit
        
        if (pesertaEdit) {

        }


        // jika dia tambah
        onSimpan({
            id: pesertaEdit ? pesertaEdit.id : Date.now(),
            nama,
            jurusan
        })
        setNama("")
        setJurusan("")
    }
    return (
        <form
            onSubmit={handleSimpan}
            method="post" style={{
                background: "#7A7676",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "20px",
            }}>
            <h3>Tambah Peserta</h3>
            <div style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
            }}>
                <input type="text" placeholder="Nama Peserta"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    style={{
                        padding: "8px"
                    }}
                />
                <input type="text" placeholder="Jurusan"
                    value={jurusan}
                    onChange={(e) => setJurusan(e.target.value)}
                    style={{
                        padding: "8px"
                    }} />
                <button type="submit" style={{
                    background: "#2817c5",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    padding: "8px 16px"
                }}>
                    Simpan
                </button>
            </div>
        </form>
    );
};

export default FormPeserta;