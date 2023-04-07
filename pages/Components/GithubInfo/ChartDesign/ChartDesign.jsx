import { Grid, Typography } from "@mui/material";

const ChartDesign = (props) =>{
    const boxDes={
        width:"10px",height:"10px",mt:"3px",borderRadius:"2px"
    }
    const ChangeColors={
        '#9be9a8':"#3C274B",
        '#40c463':"#f6d25129",
        '#30a14e':"#f6d25185",
        '#216e39':"#f6d251"
        
    }

    colors
: 

    return(
        <>
            <Grid item sx={{mt:"10px",overflow:"auto"}}>        
                <Typography variant="p" sx={{fontSize:"10px",mt:"20px",textAlign:"center"}}>
                    {props?.data?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions} contributions in the last year
                </Typography>
                <Grid container direction="row" justifyContent="center" sx={{mt:"10px",minWidth:"max-content",border:"1px solid #3c274b",borderRadius:"12px",padding:"10px"}}>
                    {
                        props?.data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks.map((x,i)=>{
                            return(
                                <Grid key={i} item sx={{width:"10px",mr:"5px"}}>
                                    {
                                        x.contributionDays.map((d,index)=>{
                                            return(
                                                <Grid key={index} item sx={boxDes} style={{backgroundColor:ChangeColors[d.color] === undefined ? "#3C274B" : ChangeColors[d.color] }} ></Grid>
                                            )
                                        })
                                    }
                                </Grid>
                            )
                        
                        })
                    }    
                </Grid>
            </Grid>
        </>
    )
}
export default ChartDesign;
