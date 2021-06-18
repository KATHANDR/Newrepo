import React,{useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const BorderLinearProgress = withStyles((theme) => ({
  root: {
  height:8,
    borderRadius: 10,
    textAlign:'center',
    //marginTop: theme.spacing.unit * 13,
    marginLeft: theme.spacing.unit * 35,
    marginRight: theme.spacing.unit * 35,
    overflowX: "auto"
  },
  colorPrimary: {
       backgroundColor: '#8ed0d8'
    
  },
  bar: {
    height: 8,
    borderRadius: 10,
       backgroundColor: '#00738b',   
  },
}))(LinearProgress);


const useStyles1 = makeStyles({
  root: {
    height:33,
    width:18,
    colorPrimary: {
    }},
 });

const useStyles = makeStyles({
  root: {
    paddingTop: 80,
    flexGrow: 1,   
  },
  paper: {
    height: 227,
    width: 144,
  },
 
});


export default function CustomizedProgressBars() {

  
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  
  const classes = useStyles();
  const classes1 = useStyles1();
  const [progoressValues, setProgoressValues] = useState(0);
  const [spacing, setSpacing] = React.useState(10);  
  const newArry = [{name:'Gas', text:'Which type of fuel does your boiler use?',icon:()=> <InfoIcon onClick={handleClickOpen}></InfoIcon>,
   Gas:[{name:'Combination', text:'What type of boiler do you have?Not sure?',
            Combination:[{name:'Detached',text:"What kind of home do you want the boiler installed in?",
            Detached:[
              {name:'1',text:'How many bedrooms do you have?',
                 1:[
                {name:'0',text:'How many bathtubs do you have?',
                0:[
                  {name:'0',text:'How many shower cubicles do you have?',
                                0:[
                                  {name:'onetofive',text:'How many radiators do you have?',
                                  onetofive:[
                                    {name:'Yes',text:'Do you want to move your boiler?',
                                    Yes:[
                                      {name:'Same Room',text:'How many bedrooms do you have?'},
                                        {name:'Different Room Same Floor'},
                                        {name:'Different Room Different Floor'},
                                        {name:'Loft'},
                                        {name:'Garage'}, 
                                      ],
                                  },
                                      {name:'No',
                                      No:[
                                        {name:'WallMounted',text:'Where is your flue?',
                                        WallMounted:[
                                          {name:'Groundfloor',text:'What floor is your flue on?',
                                          Groundfloor:[
                                            {name:'Yes',text:'How many bedrooms do you have?',
                                          Yes:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                            Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                        },
                                                {name:'Morethan30cm',
                                                Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                              }
                                        ]
                                          },
                                              {name:'No',
                                            No:[{name:'yes',Yes:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                            Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                        },
                                                {name:'Morethan30cm',
                                                Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                              }
                                        ]},
                                        {name:'No',
                                        No:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                        Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                    },
                                            {name:'Morethan30cm',
                                            Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                          }
                                    ] 
                                  }]
                                   },
                                            ],
                                        
                                        },
                                            {name:'Firstfloor',
                                            Firstfloor:[
                                              {name:'Yes',text:'How many bedrooms do you have?',
                                            Yes:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                              Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                          },
                                                  {name:'Morethan30cm',
                                                  Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                                }
                                          ]
                                            },
                                                {name:'No',
                                              No:[{name:'yes',Yes:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                              Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                          },
                                                  {name:'Morethan30cm',
                                                  Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                                }
                                          ]},
                                          {name:'No',
                                          No:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                          Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                      },
                                              {name:'Morethan30cm',
                                              Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                            }
                                      ]
                                        }]
                                              },
                                              ]
                                          },
                                            {name:'Secondfloor',
                                            Secondfloor:[
                                              {name:'Yes',text:'How many bedrooms do you have?',
                                            Yes:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                              Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                          },
                                                  {name:'Morethan30cm',
                                                  Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                                }
                                          ]
                                            },
                                                {name:'No',
                                              No:[{name:'yes',Yes:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                              Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                          },
                                                  {name:'Morethan30cm',
                                                  Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                                }
                                          ]},
                                          {name:'No',
                                          No:[{name:'Lessthan30cm',text:'How close is your flue to any door or window?',
                                          Lessthan30cm:[{name:'Lessthan90cm',text:'How close is your flue to the boundary of your property?'},{name:'morethan90cm'}]
                                      },
                                              {name:'Morethan30cm',
                                              Morethan30cm:[{name:'Lessthan90cm'},{name:'morethan90cm'}]
                                            }
                                      ]
                                        }]
                                              },
                                              ]
                                          },
                                            {name:'Thirdfloororabove',},
                                          ]
                                      },
                                          {name:'RoofMounted',
                                        RoofMounted:[
                                          {name:'PitchedRoof'},
                                          {name:'FlatRoof'}
                                        ]
                                        }, 
                                        ],
                                    },  
                                    ],
                                },
                                    {name:'sixtoeight'},
                                    {name:'ninetoten'},
                                    {name:'eleventofourteen'},
                                    {name:'fifteentoseventen'},
                                    {name:'seventen+'},
                                  ]
                                },
                    {name:'1'},
                    {name:'2'},
                    {name:'3'},
                    {name:'4+'}]
              },
                  {name:'1'},
                  {name:'2'},
                  {name:'3'},
                  {name:'4+'},
              ],
            },
                {name:'2'},
                {name:'3'},
                {name:'4'},
                {name:'5'},
                {name:'6+'},
              ],
           },
                                {name:'Semidetached',
                                Semidetached:[
                                  {name:'1',text:'How many bedrooms do you have?',
                                     1:[
                                    {name:'0',text:'How many bathtubs do you have?',
                                    0:[
                                      {name:'0',text:'How many shower cubicles do you have?',
                                                    0:[
                                                      {name:'onetofive',text:'How many radiators do you have?',
                                                      onetofive:[
                                                        {name:'Yes',text:'Do you want to move your boiler?',
                                                        Yes:[
                                                          {name:'Same Room',text:'How many bedrooms do you have?'},
                                                            {name:'Different Room Same Floor'},
                                                            {name:'Different Room Different Floor'},
                                                            {name:'Loft'},
                                                            {name:'Garage'}, 
                                                          ],
                                                      },
                                                          {name:'No'},  
                                                        ],
                                                    },
                                                        {name:'sixtoeight'},
                                                        {name:'ninetoten'},
                                                        {name:'eleventofourteen'},
                                                        {name:'fifteentoseventen'},
                                                        {name:'seventen+'},
                                                      ]
                                                    },
                                        {name:'1'},
                                        {name:'2'},
                                        {name:'3'},
                                        {name:'4+'},]
                                  },
                                      {name:'1'},
                                      {name:'2'},
                                      {name:'3'},
                                      {name:'4+'},
                                  ],
                                },
                                    {name:'2',
                                    2:[
                                      {name:'0',text:'How many bathtubs do you have?',
                                      0:[
                                        {name:'0',text:'How many shower cubicles do you have?',
                                                      0:[
                                                        {name:'onetofive',text:'How many radiators do you have?',
                                                        onetofive:[
                                                          {name:'Yes',text:'Do you want to move your boiler?',
                                                          Yes:[
                                                            {name:'Same Room',text:'How many bedrooms do you have?'},
                                                              {name:'Different Room Same Floor'},
                                                              {name:'Different Room Different Floor'},
                                                              {name:'Loft'},
                                                              {name:'Garage'}, 
                                                            ],
                                                        },
                                                            {name:'No'},  
                                                          ],
                                                      },
                                                          {name:'sixtoeight'},
                                                          {name:'ninetoten'},
                                                          {name:'eleventofourteen'},
                                                          {name:'fifteentoseventen'},
                                                          {name:'seventen+'},
                                                        ]
                                                      },
                                          {name:'1'},
                                          {name:'2'},
                                          {name:'3'},
                                          {name:'4+'},]
                                    },
                                        {name:'1'},
                                        {name:'2'},
                                        {name:'3'},
                                        {name:'4+'},
                                    ]
                                  },
                                    {name:'3',
                                    3:[
                                      {name:'0',text:'How many bathtubs do you have?',
                                      0:[
                                        {name:'0',text:'How many shower cubicles do you have?',
                                                      0:[
                                                        {name:'onetofive',text:'How many radiators do you have?',
                                                        onetofive:[
                                                          {name:'Yes',text:'Do you want to move your boiler?',
                                                          Yes:[
                                                            {name:'Same Room',text:'How many bedrooms do you have?'},
                                                              {name:'Different Room Same Floor'},
                                                              {name:'Different Room Different Floor'},
                                                              {name:'Loft'},
                                                              {name:'Garage'}, 
                                                            ],
                                                        },
                                                            {name:'No'},  
                                                          ],
                                                      },
                                                          {name:'sixtoeight'},
                                                          {name:'ninetoten'},
                                                          {name:'eleventofourteen'},
                                                          {name:'fifteentoseventen'},
                                                          {name:'seventen+'},
                                                        ]
                                                      },
                                          {name:'1'},
                                          {name:'2'},
                                          {name:'3'},
                                          {name:'4+'},]
                                    },
                                        {name:'1'},
                                        {name:'2'},
                                        {name:'3'},
                                        {name:'4+'},
                                    ]
                                  },
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]
                              },
                                {name:'Terraced',
                                Terraced:[
                                  {name:'1',text:'How many bedrooms do you have?',
                                     1:[
                                    {name:'0',text:'How many bathtubs do you have?',
                                    0:[
                                      {name:'0',text:'How many shower cubicles do you have?',
                                                    0:[
                                                      {name:'onetofive',text:'How many radiators do you have?',
                                                      onetofive:[
                                                        {name:'Yes',text:'Do you want to move your boiler?',
                                                        Yes:[
                                                          {name:'Same Room',text:'How many bedrooms do you have?'},
                                                            {name:'Different Room Same Floor'},
                                                            {name:'Different Room Different Floor'},
                                                            {name:'Loft'},
                                                            {name:'Garage'}, 
                                                          ],
                                                      },
                                                          {name:'No'},  
                                                        ],
                                                    },
                                                        {name:'sixtoeight'},
                                                        {name:'ninetoten'},
                                                        {name:'eleventofourteen'},
                                                        {name:'fifteentoseventen'},
                                                        {name:'seventen+'},
                                                      ]
                                                    },
                                        {name:'1'},
                                        {name:'2'},
                                        {name:'3'},
                                        {name:'4+'},]
                                  },
                                      {name:'1'},
                                      {name:'2'},
                                      {name:'3'},
                                      {name:'4+'},
                                  ],
                                },
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]
                                },
                                {name:'Bungalow',
                                Bungalow:[
                                  {name:'1',text:'How many bedrooms do you have?'},
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]
                              },
                                {name:'Maisonette',
                                Maisonette:[
                                  {name:'1',text:'How many bedrooms do you have?'},
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]
                                },
                                {name:'Flat',
                                Flat:[
                                  {name:'Ground',text:'What floor is your flat located on?'},
                                    {name:'First floor'},
                                    {name:'Second floor'},
                                    {name:'Third floor or above'},
                                  ]}
                              ]},
                           {name:'Regularboiler',
                            Regularboiler:[
                              {name:'Combination',text:'Do you want a different type of boiler?',
                              
                              Combination:[{name:'Detached',text:"What kind of home do you want the boiler installed in?",
            Detached:[
              {name:'1',text:'How many bedrooms do you have?',
                 1:[
                {name:'0',text:'How many bathtubs do you have?',
                0:[
                  {name:'0',text:'How many shower cubicles do you have?',
                                0:[
                                  {name:'onetofive',text:'How many radiators do you have?',
                                  onetofive:[
                                    {name:'Yes',text:'Do you want to move your boiler?',
                                    Yes:[
                                      {name:'Same Room',text:'How many bedrooms do you have?'},
                                        {name:'Different Room Same Floor'},
                                        {name:'Different Room Different Floor'},
                                        {name:'Loft'},
                                        {name:'Garage'}, 
                                      ],
                                  },
                                      {name:'No'},  
                                    ],
                                },
                                    {name:'sixtoeight'},
                                    {name:'ninetoten'},
                                    {name:'eleventofourteen'},
                                    {name:'fifteentoseventen'},
                                    {name:'seventen+'},
                                  ]
                                },
                    {name:'1'},
                    {name:'2'},
                    {name:'3'},
                    {name:'4+'},]
              },
                  {name:'1'},
                  {name:'2'},
                  {name:'3'},
                  {name:'4+'},
              ],
            },
                {name:'2'},
                {name:'3'},
                {name:'4'},
                {name:'5'},
                {name:'6+'},
              ],
            },
                                {name:'Semidetached',
                                Semidetached:[
                                  {name:'1',text:'How many bedrooms do you have?'},
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ],
                              },
                                {name:'Terraced',
                                Terraced:[
                                  {name:'1',text:'How many bedrooms do you have?'},
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]},
                                {name:'Bungalow',
                                Bungalow:[
                                  {name:'1',text:'How many bedrooms do you have?'},
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]
                              },
                                {name:'Maisonette',
                                Maisonette:[
                                  {name:'1',text:'How many bedrooms do you have?'},
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ]
                                },
                                {name:'Flat',
                                Flat:[
                                  {name:'Ground',text:'What floor is your flat located on?'},
                                    {name:'First floor'},
                                    {name:'Second floor'},
                                    {name:'Third floor or above'},
                                  ]}
                              ],
                              },
                                {name:'Regular'},
                                {name:'System'},
                                {name:'No Thank you'}
                            ]},
                                {name:'Systemboiler',Systemboiler:[{name:'Detached',text:"What kind of home do you want the boiler installed in?",
                                Detached:[
                                  {name:'1',text:'How many bedrooms do you have?',
                                     1:[
                                    {name:'0',text:'How many bathtubs do you have?',
                                    0:[
                                      {name:'0',text:'How many shower cubicles do you have?',
                                                    0:[
                                                      {name:'onetofive',text:'How many radiators do you have?',
                                                      onetofive:[
                                                        {name:'Yes',text:'Do you want to move your boiler?',
                                                        Yes:[
                                                          {name:'Same Room',text:'How many bedrooms do you have?'},
                                                            {name:'Different Room Same Floor'},
                                                            {name:'Different Room Different Floor'},
                                                            {name:'Loft'},
                                                            {name:'Garage'}, 
                                                          ],
                                                      },
                                                          {name:'No'},  
                                                        ],
                                                    },
                                                        {name:'sixtoeight'},
                                                        {name:'ninetoten'},
                                                        {name:'eleventofourteen'},
                                                        {name:'fifteentoseventen'},
                                                        {name:'seventen+'},
                                                      ]
                                                    },
                                        {name:'1'},
                                        {name:'2'},
                                        {name:'3'},
                                        {name:'4+'},]
                                  },
                                      {name:'1'},
                                      {name:'2'},
                                      {name:'3'},
                                      {name:'4+'},
                                  ],
                                },
                                    {name:'2'},
                                    {name:'3'},
                                    {name:'4'},
                                    {name:'5'},
                                    {name:'6+'},
                                  ],
                               },
                                                    {name:'Semidetached',
                                                    Semidetached:[
                                                      {name:'1',text:'How many bedrooms do you have?'},
                                                        {name:'2'},
                                                        {name:'3'},
                                                        {name:'4'},
                                                        {name:'5'},
                                                        {name:'6+'},
                                                      ],
                                                  },
                                                    {name:'Terraced',
                                                    Terraced:[
                                                      {name:'1',text:'How many bedrooms do you have?'},
                                                        {name:'2'},
                                                        {name:'3'},
                                                        {name:'4'},
                                                        {name:'5'},
                                                        {name:'6+'},
                                                      ]},
                                                    {name:'Bungalow',
                                                    Bungalow:[
                                                      {name:'1',text:'How many bedrooms do you have?'},
                                                        {name:'2'},
                                                        {name:'3'},
                                                        {name:'4'},
                                                        {name:'5'},
                                                        {name:'6+'},
                                                      ]
                                                  },
                                                    {name:'Maisonette',
                                                    Maisonette:[
                                                      {name:'1',text:'How many bedrooms do you have?'},
                                                        {name:'2'},
                                                        {name:'3'},
                                                        {name:'4'},
                                                        {name:'5'},
                                                        {name:'6+'},
                                                      ]
                                                    },
                                                    {name:'Flat',
                                                    Flat:[
                                                      {name:'Ground',text:'What floor is your flat located on?'},
                                                        {name:'First floor'},
                                                        {name:'Second floor'},
                                                        {name:'Third floor or above'},
                                                      ]}
                                                  ]
                              },
                                {name:'Backboiler',Backboiler:[
                                  {name:'Regular',text:'What type of boiler do you want?',

                                  Regular:[{name:'Detached',text:"What kind of home do you want the boiler installed in?",
                                  Detached:[
                                    {name:'1',text:'How many bedrooms do you have?',
                                       1:[
                                      {name:'0',text:'How many bathtubs do you have?',
                                      0:[
                                        {name:'0',text:'How many shower cubicles do you have?',
                                                      0:[
                                                        {name:'onetofive',text:'How many radiators do you have?',
                                                        onetofive:[
                                                          {name:'Yes',text:'Do you want to move your boiler?',
                                                          Yes:[
                                                            {name:'Same Room',text:'How many bedrooms do you have?'},
                                                              {name:'Different Room Same Floor'},
                                                              {name:'Different Room Different Floor'},
                                                              {name:'Loft'},
                                                              {name:'Garage'}, 
                                                            ],
                                                        },
                                                            {name:'No'},  
                                                          ],
                                                      },
                                                          {name:'sixtoeight'},
                                                          {name:'ninetoten'},
                                                          {name:'eleventofourteen'},
                                                          {name:'fifteentoseventen'},
                                                          {name:'seventen+'},
                                                        ]
                                                      },
                                          {name:'1'},
                                          {name:'2'},
                                          {name:'3'},
                                          {name:'4+'},]
                                    },
                                        {name:'1'},
                                        {name:'2'},
                                        {name:'3'},
                                        {name:'4+'},
                                    ],
                                  },
                                      {name:'2'},
                                      {name:'3'},
                                      {name:'4'},
                                      {name:'5'},
                                      {name:'6+'},
                                    ],
                                  icon:()=> <InfoIcon onClick={handleClickOpen}></InfoIcon>},
                                                      {name:'Semidetached',
                                                      Semidetached:[
                                                        {name:'1',text:'How many bedrooms do you have?'},
                                                          {name:'2'},
                                                          {name:'3'},
                                                          {name:'4'},
                                                          {name:'5'},
                                                          {name:'6+'},
                                                        ],
                                                    },
                                                      {name:'Terraced',
                                                      Terraced:[
                                                        {name:'1',text:'How many bedrooms do you have?'},
                                                          {name:'2'},
                                                          {name:'3'},
                                                          {name:'4'},
                                                          {name:'5'},
                                                          {name:'6+'},
                                                        ]},
                                                      {name:'Bungalow',
                                                      Bungalow:[
                                                        {name:'1',text:'How many bedrooms do you have?'},
                                                          {name:'2'},
                                                          {name:'3'},
                                                          {name:'4'},
                                                          {name:'5'},
                                                          {name:'6+'},
                                                        ]
                                                    },
                                                      {name:'Maisonette',
                                                      Maisonette:[
                                                        {name:'1',text:'How many bedrooms do you have?'},
                                                          {name:'2'},
                                                          {name:'3'},
                                                          {name:'4'},
                                                          {name:'5'},
                                                          {name:'6+'},
                                                        ]
                                                      },
                                                      {name:'Flat',
                                                      Flat:[
                                                        {name:'Ground',text:'What floor is your flat located on?'},
                                                          {name:'First floor'},
                                                          {name:'Second floor'},
                                                          {name:'Third floor or above'},
                                                        ]}
                                                    ]
                                },
                                {name:'Combination'},
                                {name:'System'},
                                ]
                              }
                              ]},
                                {name:'Electricity'},
                                {name:'LPG'},
                                {name:'Oil'},
                              ];
                                  
                                
                                  
  const[listData, setListData] = useState([...newArry]);
  let [histroy,setHistory] = useState([]);
 

  const changeProgress = (name, index, list)=>{
    //console.log(list)    
    const newlistData = listData[index][name];
   if(newlistData)
    setListData([...newlistData])
      if(progoressValues<100) 
            setProgoressValues(progoressValues+10)
            setHistory([...list]);        
  }

  const backToList=()=>{
    //console.log(histroy)
    if(histroy.length>0) {
      setListData([...histroy])
    }

  }

  return (
    
    <>
    
      <div className={classes.root}>
    <BorderLinearProgress variant="determinate" value={progoressValues} />
    <div class="progress-display-text">
      {progoressValues} % completed
    </div>
      </div>

      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div>
           <h2 id="transition-modal-title">Which type of fuel do I use?</h2>
            <img src="https://lqa-nextsteps.eoninstall.com/content/dam/eon-feh-service-uk/boilers-journey/help-images/Gas_Smart_Meter_Wall_Help.jpg" alt="Smart Meter" width="100%" height="100%"></img>
         <h1>Gas</h1> 
            <h3>You have a gas meter and your current boiler uses gas that comes via that gas meter.</h3>
            <img src="https://lqa-nextsteps.eoninstall.com/content/dam/eon-feh-service-uk/boilers-journey/help-images/LPG_tank_Help.jpg" alt="LPG tank"width="100%" height="100%"></img>
          <h1>LPG (Liquid Petroleum Gas)</h1>
        <h3>You have a tank outside that stores the gas used by your boiler.</h3>
         <img src="https://lqa-nextsteps.eoninstall.com/content/dam/eon-feh-service-uk/boilers-journey/help-images/oil_tank_Help.jpg" alt="oil tank"height="100%" width="100%"></img>
         <h1>Oil</h1>
          <h3>You have a tank outside that stores the oil used by your boiler.</h3>
          <h1>Electric</h1>
          <h3>You probably don't have a gas meter and your heating is powered by electricity.</h3>
         </div>
          </DialogContentText>
        </DialogContent>        
      </Dialog>
    </div>  
  <div>

  <ButtonGroup  size="large" color="green" aria-label="large outlined primary button group">
        <Button className={classes1.root} onClick={backToList}> Back</Button>
          </ButtonGroup>
    

<Grid container className={classes.root} spacing={2}>

      <Grid item xs={12}> 
      {listData.map((value,index) => (   
      <div key={value.text} item={12} ><h1>{value.text} {value.icon&&<value.icon/>}</h1>  
      </div>
      ))}    
       <Grid container justify="center" spacing={spacing}>
          {listData.map((value,index) => (
            <Grid key={value.name} item={12}>
            <Card onClick={()=>changeProgress(value.name,index, listData)} className={classes.paper}>
                <CardActionArea>                
                  <CardContent>
                    <Typography gutterBottom variant="h2" component="h2">
                      <FireplaceIcon />
                        </Typography>
                    <Typography variant="body2" color="textSecondary" component="">
                    </Typography>
                  </CardContent>
                </CardActionArea>      
               <h3>{value.name}</h3> 
              
            </Card>
           </Grid>
          ))}
        </Grid> 
        </Grid>
    </Grid>
  </div>

  </>
);

 
}

