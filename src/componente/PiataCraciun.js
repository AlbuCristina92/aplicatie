import './PiataCraciun.css';
import { useState } from 'react';

const PiataCraciun = (props) => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const piataCraciun = props.piataCraciun;

  const onInscriere = () => {
    setIsSubscribe(true);
  };

  return (
    <div className="PiataCraciun">
      <img className="imagine" src={piataCraciun.imagine} />
      <h3>Locatie: {piataCraciun.locatie}</h3>
      <h3>Data deschidere: {piataCraciun.dataDeschidere}</h3>
      <h3>Numar maxim participanti: {piataCraciun.numarMaximParticipanti}</h3>
      {!isSubscribe ? (
        <button className="buttonInscriere" onClick={onInscriere}>
          Inscriere
        </button>
      ) : (
        <p className="mesajInscriere">Ai fost inscris cu succces!</p>
      )}
    </div>
  );
};

export default PiataCraciun;
