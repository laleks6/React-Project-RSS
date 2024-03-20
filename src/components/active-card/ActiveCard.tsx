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
    console.log('activeBlock check', activeBlock);
    console.log('saveData check', saveData);
    !saveData && setSaveData(resultPromis);
    !activeBlock && setActiveBlock(true);
  }, [index]);
  const clickClose = () => {
    setActiveBlock(f);
    setSaveData(f);
    setCard();
    console.log('CLICK CLOUSR ACTIVE CARD');
  };
  console.log('ActiveCard');
  console.log('ActiveCard', saveData);
  return (
    <div
      data-testid="active--card"
      className={`block-active-card ${activeBlock && 'active'}`}
    >
      {activeBlock && (
        <>
          <div className="close-icon" onClick={clickClose}>
            <div className="close-icon__line" />
          </div>
          <div className="active-card">
            <Card data={saveData} index={index} />
            <div className="active-card__description">
              <div>
                {saveData!.ingredients.map((el) => (
                  <span>{` ◾${el} `}</span>
                ))}
              </div>
              <div>
                {saveData!.instructions.map((el) => (
                  <span>{` ◾${el} `}</span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default ActiveCard;
