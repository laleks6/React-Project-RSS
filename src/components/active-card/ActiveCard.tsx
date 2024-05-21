import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hook';
import Card from '../result/Card';
import { setActiveCard } from '../../store/reduxSlice';
import { Recipe } from '../../types/types';

type TypeProps = {
  resultPromis: Recipe;
  index: number;
};
const f = false;

function ActiveCard({ resultPromis, index }: TypeProps) {
  const dispatch = useAppDispatch();
  const setCard = () => dispatch(setActiveCard(-1));
  const [saveData, setSaveData] = useState<Recipe | null>(null);
  const [activeBlock, setActiveBlock] = useState(f);
  useEffect(() => {
    if (!saveData) setSaveData(resultPromis);
    if (!activeBlock) setActiveBlock(true);
  }, [index]);
  const clickClose = () => {
    setActiveBlock(f);
    setSaveData(null);
    setCard();
  };
  return (
    <div
      data-testid="active--card"
      className={`block-active-card ${activeBlock && 'active'}`}
    >
      {activeBlock && (
        <>
          <div
            className="close-icon"
            onClick={() => clickClose()}
            onKeyDown={() => clickClose()}
            aria-hidden
          >
            <div className="close-icon__line" />
            <span className="close-icon--title">ClOSE</span>
          </div>
          <div className="active-card">
            <div className="first-info">
              {saveData && <Card data={saveData} index={index} />}
              <ul>
                <strong> Ingredients</strong>
                {saveData!.ingredients.map((el) => (
                  <li key={`${el}`}>{`${el} `}</li>
                ))}
              </ul>
            </div>
            <div className="definition-line" />
            <div className="second-info">
              <ol>
                <strong> Instructions</strong>
                {saveData!.instructions.map((el) => (
                  <li key={`${el}`}>{` ${el} `}</li>
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
