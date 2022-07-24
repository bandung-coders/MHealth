function splashData(){

    const sData = [
            {
                judul:"konsultasi Dengan Pakar",
                deskripsi:" Meski aku tumbuh dengan luka dari orang tua, aku akan tetap berusaha membuat mereka bangga."
            },
            {
                judul:"Stop self diagnose",
                deskripsi:" Meski aku tumbuh dengan luka dari orang tua, aku akan tetap berusaha membuat mereka bangga."
            },
            {
                judul:"You are loved",
                deskripsi:" Meski aku tumbuh dengan luka dari orang tua, aku akan tetap berusaha membuat mereka bangga."
            },
     
        ]

        const data = splashData.map(data => <h1>{data.judul}</h1>)


    return (
        <div>
        {data}
        </div>
    )
}

export default splashData