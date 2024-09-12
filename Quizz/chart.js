const Age=[18,20,22,24,28,30,32,36,38,40]
const Expense=[1250,3650,4550,5550,6500,7000,7500,8000,9000,9500]
const Income=[5641,8891,9652,9578,6245,3261,4562,4500,2600,3600]




new Chart("mychart",{
    type:"line",
    data:{
        labels:Age,
        datasets:[{
                label:"Expense",
                data:[1250,3650,4550,5550,6500,7000,7500,8000,9000,9500],
                borderColor:"yellow",
                Fill:false,
                // backgroundColor:"#fff",
                lineTension:0.4,
                pointRadius:4,
            },
            {
                label:"Income",
                data:[5641,8891,9652,9578,6245,3261,4562,4500,2600,3600],
                borderColor:"green",
                Fill:false,
                // backgroundColor:"#fff",
                lineTension:0.4,
                pointRadius:4, 
            },
        ],
    },
    options:{
        legend:{display:true},
    },
});