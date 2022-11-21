const dbConnect=require("./mongodbcon");
const insert=async()=>{
    const db=await dbConnect("Data","ads");
    const docs=[
        {
            _id:"1",
            companyId:"3",
            primaryText:"The world’s leading CRM is ready to help you simplify the business part of your small business",
            
            hedline:"Salesforce for Small Business",
            description:"Business",
            CTA:"Sign Up",
            imageUrl:"https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing",
            
        },
{
    _id:"2",
    companyId:"1",
    primaryText:"We like where you’re going with this.",
    hedline:"Relaxed Fit Men's Jeans    ",
    description:"    ",
    CTA:"Shop Now",
    imageUrl:"https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing",

},
{
    _id:"3",
    companyId:"6",
    primaryText:"Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.    ",
    
    hedline:"Made With Recycled Plastic    ",
    description:"Shop Back to School    ",
    CTA:"Shop Now    ",
    imageUrl:"https://drive.google.com/open?id=17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq&authuser=rohit103%40gmail.com&usp=drive_fs    ",
    
},
{
    _id:"4",
    companyId:"7",
    primaryText:"The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.    ",
    
    hedline:"Norm Macdonald's Nothing Special gives one last dose of the late comic    ",
    description:"",
    
    CTA:"Learn More  ",
    imageUrl:"https://drive.google.com/file/d/17o3sgN_A6GKPwgZsEpneBYODhRs9tKga/view?usp=sharing    ",
    
},
{
    _id:"5",
    companyId:"9",
    primaryText:"Visit Valentino.com, discover the new products and shop now!    ",
    
    hedline:"Valentino Hexagonal Metal Frame With Crystal Studs    ",
    description:"    ",
    CTA:"Shop Now    ",
    imageUrl:"https://drive.google.com/file/d/17sz2UuPNcoHXz-U27EYcwmhkI1ZQUmPZ/view?usp=sharing    ",
    
},{
    _id:"6",
    companyId:"11",
    primaryText:"Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.    ",
    
    hedline:"Cooler Summers Start Here    ",
    description:"Shop Purple products, designed to help you sleep cool.    ",
    CTA:"Shop Now    ",
    imageUrl:"https://drive.google.com/file/d/17vrlQMchymHqlN35p4os23jYqQjFiUNq/view?usp=sharing    ",
    
},{
    _id:"7",
    companyId:"10",
    primaryText:"Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
    
    hedline:"Personalized skincare for dark spots, acne, and more.    ",
    description:"Personalized skincare for dark spots, acne, and more. Results may vary.    ",
    CTA:"Order Now",
    imageUrl:"https://drive.google.com/file/d/17vzdu8jSulXgzk9rkJaHP7W1940pQaAV/view?usp=sharing    ",
    
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
