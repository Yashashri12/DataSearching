const dbConnect=require("./mongodbcon");
const insert=async()=>{
    const db=await dbConnect("Data","companies");
    const docs=[
        {
            _id:"1",
            name:"Levi's  ",
            url:"levis.com            "
        },
        {
            _id:"2",
            name:"Puma            ",
            url:"puma.com            "
        },
        {
            _id:"3",
            name:"Salesforce            ",
            url:"salesforce.com            "
        },
        {
            _id:"4",
            name:"Adidas            ",
            url:"adidas.com            "
        },
        {
            _id:"5",
            name:"Nike            ",
            url:"nike.com            "
        },
        {
            _id:"6",
            name:"Cotopaxi            ",
            url:"cotopaxi.com            "
        },
        {
            _id:"7",
            name:"Netflix            ",
            url:"netflix.com            "
        },
        {
            _id:"8",
            name:"Colgate            ",
            url:"colgate.com            "
        },
        {
            _id:"9",
            name:"Valentino            ",
            url:"valentino.com            "
        },
        {
            _id:"10",
            name:"Curology            ",
            url:"curology.com            "
        },
        {
            _id:"11",
            name:"Purple            ",
            url:"purple.com            "
        },




    ];
    const option={ordered:true};
    const result=await db.insertMany(docs, option);
    if(result.acknowledged)
    {
        console.log(`${result.insertedCount}record inserted sucessfully`);
    }else{
        console.log("data not inserted");

    }
    };
        insert()
