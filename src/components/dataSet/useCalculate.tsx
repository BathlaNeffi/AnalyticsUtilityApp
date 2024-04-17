import { useEffect, useState } from 'react';

const useCalculate = (data: any, property: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [resultantData, setResultantData] = useState<any>({});

  useEffect(() => {

    // calculate methods is use to get a data as per the desired form with mean mdeian and mode
    const calculate = () => {
      let classes: any = {};
      //  First, I created an object with class as the key and the corresponding values as an array
      data.forEach((item: any) => {
        const alcoholClass = `class${item["Alcohol"]}`;
        if (!classes[alcoholClass]) {
          classes[alcoholClass] = [];
        }
        classes[alcoholClass].push(item[property]);
      });
      //  calcluateSats will return mean , meadian , mode when  sent array as an argumnet
      const calculateStats = (arr: any[]) => {
        const mean = (arr.reduce((acc, val) => acc + parseFloat(val), 0) / arr.length).toFixed(3);
        const sortedArr = [...arr].sort((a, b) => a - b);
        let median;
        if (sortedArr.length % 2 === 0) {
          median = ((sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) / 2).toFixed(3);
        } else {
          median = (sortedArr[Math.floor(sortedArr.length / 2)]).toFixed(3);
        }
        const modeMap: any = {};
        let maxCount = 0;
        let mode;
        arr.forEach((val) => {
          modeMap[val] = (modeMap[val] || 0) + 1;
          if (modeMap[val] > maxCount) {
            maxCount = modeMap[val];
            mode = (val).toFixed(3);
          }
        });

        return { mean, median, mode };
      };

      const result: any = {};
      for (const key in classes) {
        if (classes.hasOwnProperty(key)) {
          result[key] = calculateStats(classes[key]);
        }
      }
      // setting the resultant sate as result
      setResultantData(result);
      setLoading(false);
    }

    calculate();
  }, [data, property]);

  return { loading, resultantData };
};

export default useCalculate;
