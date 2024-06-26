import ChartDesign from "./ChartDesign/ChartDesign";
const { Grid, Typography, SvgIcon } = require("@mui/material")

const GithubInfo = (props)=>{
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{mt:"10px"}}>
                <Grid item container xs={12} md={8} direction="row" justifyContent="center" alignItems="center">
                    <Grid item container direction="row" justifyContent="center" alignItems="center" xs={11} md={12} sx={{borderRadius:"12px",backgroundColor:"customColor.BgElement",padding:"20px"}}>
                        <Typography variant="p"  sx={{fontSize:"14px",textAlign:"center"}}>
                            In addition, I am active on <Typography variant="span" component="a" href="https://github.com/behrozsedighi"  sx={{fontSize:"14px",textAlign:"center",fontWeight:"600",color:"customColor.themeText",textDecorationLine: "underline"}}>GitHub</Typography> and you can download my open source projects from there.
                        </Typography>
                      
                        {props?.data && <ChartDesign data={props?.data} />}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default GithubInfo;