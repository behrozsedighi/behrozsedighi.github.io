import { Grid } from "@mui/material";
import BoxData from "./box/BoxData";
const Targets = ()=>{
    const dataBox1 = ["Express backend","Database : Mysql, Redis, MongoDb","Fluent in Amazon's Object Storage S3","Designing and implementing complex databases and experience working with SQL and NoSQL"];
    const dataBox2 = ["Industrial Automation Engineering field","Learning HTML and CSS","Learning PHP and JavaScript","Building a website with React"];
    return(
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{mt:"10px",mb:"50px"}}>
                <Grid item container xs={12} md={8} justifyContent="center" alignItems="center" spacing={2} >
                    <Grid item xs={12} md={6} >
                        <BoxData data={dataBox1} title="My progress stages" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <BoxData data={dataBox2} title="My progress stages" />
                    </Grid>
                </Grid>
            </Grid>
    )
}
export default Targets;