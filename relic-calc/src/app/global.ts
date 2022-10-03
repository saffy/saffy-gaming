export type CalculatedRelics = Array<{
  relics: {
    [key: string]: number;
  };
  points: number;
}>;

export var relicList = [
  { id: 'Lesser_Ancient_Crown', name: 'Lesser Ancient Crown', points: 2400 }, 
  { id: 'Lesser_Ancient_Goblet', name: 'Lesser Ancient Goblet', points: 1200  }, 
  { id: 'Lesser_Ancient_Icon',name: 'Lesser Ancient Icon', points: 300  }, 
  { id: 'Lesser_Ancient_Seal',name: 'Lesser Ancient Seal', points: 600 },
  { id: 'Ancient_Crown', name: 'Ancient Crown', points: 4800 }, 
  { id: 'Ancient_Goblet', name: 'Ancient Goblet', points: 2400 }, 
  { id: 'Ancient_Icon', name: 'Ancient Icon', points: 600  }, 
  { id: 'Ancient_Seal', name: 'Ancient Seal', points: 1200  },
  { id: 'Greater_Ancient_Crown', name: 'Greater Ancient Crown', points: 7200 }, 
  { id: 'Greater_Ancient_Goblet',name: 'Greater Ancient Goblet', points: 3600  }, 
  { id: 'Greater_Ancient_Icon',name: 'Greater Ancient Icon', points: 900 }, 
  { id: 'Greater_Ancient_Seal',name: 'Greater Ancient Seal', points: 1800  },
  { id: 'Major_Ancient_Crown',name: 'Major Ancient Crown', points: 9600  }, 
  { id: 'Major_Ancient_Goblet',name: 'Major Ancient Goblet', points: 4800  }, 
  { id: 'Major_Ancient_Icon',name: 'Major Ancient Icon', points: 1200  }, 
  { id: 'Major_Ancient_Seal',name: 'Major Ancient Seal', points: 2400  }];

  export const RELIC_LIST: {[index:string]: {name: string, shortName: string, points: number}} = 
    {'Lesser_Ancient_Crown': {name: 'Lesser Ancient Crown', shortName:'L Crown', points: 2400 },
    'Lesser_Ancient_Goblet': { name: 'Lesser Ancient Goblet',shortName:'L Goblet', points: 1200 }, 
    'Lesser_Ancient_Icon':{name: 'Lesser Ancient Icon',shortName:'L Icon', points: 300  }, 
    'Lesser_Ancient_Seal':{name: 'Lesser Ancient Seal', shortName:'L Seal',points: 600 },
    'Ancient_Crown':{ name: 'Ancient Crown', shortName:'Crown',points: 4800 }, 
    'Ancient_Goblet':{ name: 'Ancient Goblet',shortName:'Goblet', points: 2400 }, 
    'Ancient_Icon':{ name: 'Ancient Icon', shortName:'Icon',points: 600  }, 
    'Ancient_Seal':{ name: 'Ancient Seal', shortName:'Seal',points: 1200  },
    'Greater_Ancient_Crown':{ name: 'Greater Ancient Crown', shortName:'G Crown',points: 7200 }, 
    'Greater_Ancient_Goblet':{name: 'Greater Ancient Goblet',shortName:'G Goblet', points: 3600  }, 
    'Greater_Ancient_Icon':{name: 'Greater Ancient Icon',shortName:'G Icon', points: 900 }, 
    'Greater_Ancient_Seal':{name: 'Greater Ancient Seal',shortName:'G Seal', points: 1800  },
    'Major_Ancient_Crown':{name: 'Major Ancient Crown',shortName:'M Crown', points: 9600  }, 
    'Major_Ancient_Goblet':{name: 'Major Ancient Goblet',shortName:'M Goblet', points: 4800  }, 
    'Major_Ancient_Icon':{name: 'Major Ancient Icon',shortName:'M Icon', points: 1200  }, 
    'Major_Ancient_Seal':{name: 'Major Ancient Seal',shortName:'M Seal', points: 2400  }};