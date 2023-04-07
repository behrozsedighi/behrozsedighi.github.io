import { Avatar, Grid, Typography } from '@mui/material'

const Header = ()=>{
    return(
        <Grid   container direction="row" justifyContent="center" alignItems="center" sx={{minHeight:"400px",backgroundColor:"customColor.BgElement"}}>
            <Grid justifyContent="center" alignItems="center" item xs={12} md={3}>
                <Avatar alt="Behrouz Sedighi" src="/myLogo.jpg" sx={{width:"130px",height:"130px",margin:"auto"}} />
                <Typography variant="h1" sx={{fontSize:"20px",textAlign:"center",mt:"20px"}}>Behrouz Sedighi</Typography>
                <Typography variant="h2" sx={{fontSize:"20px",textAlign:"center",mt:"20px"}}><Typography variant="span" sx={{fontSize:"23px",fontWeight:"700",color:"customColor.themeText"}}>Java Script</Typography> Developer</Typography>
            </Grid>
        </Grid>
    )
}
export default Header;