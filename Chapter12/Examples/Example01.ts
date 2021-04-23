const getTheValue = async (val: number, cb: Function) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 100) + val;
      console.log(`The value is ${number}`);
      cb(number);
    }, 1000);
  };
  
  getTheValue(0, (output: number) => {
    getTheValue(output, (output: number) => {
      getTheValue(output, (output: number) => {
        getTheValue(output, (output: number) => {
          getTheValue(output, (output: number) => {
            getTheValue(output, (output: number) => {
              getTheValue(output, (output: number) => {
                getTheValue(output, (output: number) => {
                  getTheValue(output, (output: number) => {
                    getTheValue(output, () => {});
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  
  