import React, { useState, useEffect, useContext } from 'react';
import Card from '../result/Card';
import LocaleContext from '../context/LocaleContext';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard } from '../../store/reduxSlice';

type TypeProps = {
  resultPromis: Record<string, string | number>;
  index: number;
};
const f = false;

function ActiveCard({ resultPromis, index }: TypeProps) {
  const activeCard = useSelector((state) => state.project.activeCard);
  const dispatch = useDispatch();
  const setCard = () => dispatch(setActiveCard(-1));
  const [saveData, setSaveData] = useState<
    Record<string, string | number> | boolean
  >(f);
  const [activeBlock, setActiveBlock] = useState(f);
  useEffect(() => {
    !saveData && setSaveData(resultPromis);
    !activeBlock && setActiveBlock(true);
  }, [index]);
  const clickClose = () => {
    setActiveBlock(f);
    setSaveData(f);
    setCard();
  };
  return (
    <div
      data-testid="active--card"
      className={`block-active-card ${activeBlock && 'active'}`}
    >
      {activeBlock && (
        <>
          <div className="close-icon" onClick={clickClose}>
            <div className="close-icon__line" />
            <span className="close-icon--title">ClOSE</span>
          </div>
          <div className="active-card">
            <div className="first-info">
              <Card data={saveData} index={index} />
              <ul>
                <strong> Ingredients</strong>
                {saveData!.ingredients.map((el) => (
                  <li key={el}>{`${el} `}</li>
                ))}
              </ul>
            </div>
            <div className="definition-line"></div>
            <div className="second-info">
              <ol>
                <strong> Instructions</strong>
                {saveData!.instructions.map((el) => (
                  <li key={el}>{` ${el} `}</li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default ActiveCard;
