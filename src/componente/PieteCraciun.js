import PiataCraciun from "./PiataCraciun";
import "./PieteCraciun.css";

const PieteCraciun = () => {
    const PIETE_DE_CRACIUN = [
        {
            locatie: "Sibiu",
            dataDeschidere: "01/12/2022",
            numarMaximParticipanti: 3000,
            imagine: 'https://www.oradesibiu.ro/wp-content/uploads/2021/12/targ-craciun-sibiu.jpg',
            participantiInscrisi: 0
        },
        {
            locatie: "Brasov",
            dataDeschidere: "30/11/2022",
            numarMaximParticipanti: 2800,
            imagine: 'https://blogdecalatorie.ro/wp-content/uploads/2018/12/DSC_6986.jpg',
            participantiInscrisi: 0
        },
        {
            locatie: "Bucuresti",
            dataDeschidere: "28/11/2022",
            numarMaximParticipanti: 5000,
            imagine: 'https://storage0.dms.mpinteractiv.ro/media/1/1/1688/20339804/1/26220841-1810608212344022-7087711536412186135-o.jpg',
            participantiInscrisi: 0
        },
        {
            locatie: "Galati",
            dataDeschidere: "01/12/2022",
            numarMaximParticipanti: 2500,
            imagine: 'https://www.faramogul.ro/wp-content/uploads/2017/12/1-1.jpg',
            participantiInscrisi: 0
        }
    ];


    return (
        <div className="PieteCraciun">
            {
                PIETE_DE_CRACIUN.map((piataCraciun,index) => <PiataCraciun piataCraciun={piataCraciun} key={index}></PiataCraciun>)
            }
        </div>
    );
}

export default PieteCraciun;