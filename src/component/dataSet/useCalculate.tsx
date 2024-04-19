
import { useEffect, useState } from 'react';
import { OriginalDataType } from '../../statics/data';



type ClassStats = {
    [className: string]: {
      mean: number;
      median: number;
      mode: number|undefined;
    };
  };

  interface MyComponentProps {
    data: OriginalDataType[];
    property: string;
  }

type ClassStatsOne={
    [className:string]:number[]
}


const useCalculate = ({data,property}:MyComponentProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [resultantData, setResultantData] = useState<ClassStats>({});
    useEffect(()=>{
        const calculate = () => {
            let classes:ClassStatsOne = {};
            data.forEach(item => {
              const alcoholClass = `class${item["Alcohol"]}`;
              if (!classes[alcoholClass]) {
                classes[alcoholClass] = [];
              }
              classes[alcoholClass].push(parseFloat(item[property] as string));
            });
            
            const calculateStats = (arr:number[]) => {
                const mean:number = parseFloat((arr.reduce((acc, val:number) => acc + val, 0) / arr.length).toFixed(3));
                const sortedArr = [...arr].sort((a, b) => a - b);
                let median:number;
                if (sortedArr.length % 2 === 0) {
                  median = parseFloat(((sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) / 2).toFixed(3));
                } else {
                  median = parseFloat((sortedArr[Math.floor(sortedArr.length / 2)]).toFixed(3));
                }
                const modeMap:{[key: number]:number} = {};
                let maxCount = 0;
                let mode:number |undefined = undefined;;
                arr.forEach(val => {
                  modeMap[val] = (modeMap[val] || 0) + 1;
                  if (modeMap[val] > maxCount) {
                    maxCount = modeMap[val];
                    mode = parseFloat((val).toFixed(3));
                  }
                });
                return { mean, median, mode };
            }
            const result:ClassStats = {};
            for (const key in classes) {
              if (classes.hasOwnProperty(key)) {
                result[key] = calculateStats(classes[key]);
              }
            }
            // console.log(result);
            setResultantData(result);
            setLoading(false);
        
    }
        calculate();
    },[data,property])
    return { loading, resultantData };
}

export default useCalculate