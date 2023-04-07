import { Grid, Typography } from "@mui/material";

const BoxData = (props)=>{
    const dada={
        height:"38px"
    }
    return(
        <>
            <Grid item  container direction="row" justifyContent="center" sx={{borderRadius:"12px",backgroundColor:"customColor.BgElement",padding:"20px"}} >
                <Grid  item sx={{width:"10px",mr:"5px"}}>
                        <Grid item sx={{width:"15px",height:"15px",backgroundColor:"#f6d251",borderRadius:"12px"}} ></Grid>
                        <Grid item sx={{height:"50px",width:"2px",backgroundColor:"#f6d251",marginLeft:"6px"}}></Grid>
                        <Grid item sx={{width:"15px",height:"15px",backgroundColor:"#f6d251",borderRadius:"12px"}} ></Grid>
                        <Grid item sx={{height:"50px",width:"2px",backgroundColor:"#f6d251",marginLeft:"6px"}}></Grid>
                        <Grid item sx={{width:"15px",height:"15px",backgroundColor:"#f6d251",borderRadius:"12px"}} ></Grid>
                        <Grid item sx={{height:"50px",width:"2px",backgroundColor:"#f6d251",marginLeft:"6px"}}></Grid>
                        <Grid item sx={{width:"15px",height:"15px",backgroundColor:"#f6d251",borderRadius:"12px"}} ></Grid>
                </Grid>
                <Grid  item xs={9} sx={{width:"10px",ml:"10px"}}>
                        {
                            props?.data?.map((x,index)=>{
                                return(
                                    <Grid key={x}>
                                        <Typography variant="p" sx={{fontSize:"13px",mt:"20px",textAlign:"center"}}>{x}</Typography>
                                        {
                                            props?.data.length -1 > index && 
                                            <Grid item sx={dada}></Grid>
                                        }
                                        
                                    </Grid>
                                )
                            })
                        }
                        
                        {/* <Typography variant="p" sx={{fontSize:"13px",mt:"20px",textAlign:"center"}}>Industrial Automation Engineering field</Typography>
                        <Grid item sx={dada}></Grid>
                        <Typography variant="p" sx={{fontSize:"13px",mt:"20px",textAlign:"center"}}>Industrial Automation Engineering field</Typography>
                        <Grid item sx={dada}></Grid>
                        <Typography variant="p" sx={{fontSize:"13px",mt:"20px",textAlign:"center"}}>Industrial Automation Engineering field</Typography> */}
                </Grid>
            </Grid>
        </>
    )
}
export default BoxData;