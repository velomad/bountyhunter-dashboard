import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from "@mui/material/styles";
// animation-61bdi0 2.4s linear infinite
const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: "20px"
                }
            }
        },
        MuiCircularProgress: {
            styleOverrides: {
                root: {
                    animationDuration: "3s"
                },
                circle: {
                    border: "rounded",
                    strokeDasharray: "5"
                }
            }
        }
    }
})

function CircularProgressWithLabel(props) {
    return (
        <ThemeProvider theme={theme}>

            <Box sx={{ position: 'relative', display: 'inline-flex' }} className="text-gray-400">
                <CircularProgress thickness={2} size={100} color='inherit' disableShrink={true} {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
}


export default function CircularStatic({animationTime}) {
    const [progress, setProgress] = React.useState(10);
    const [stopProgress, setStopProgress] = React.useState(false);

    React.useEffect(() => {
        const timer = setInterval(() => {

            setProgress((prevProgress) => ((prevProgress ==100 ) ? 0 : prevProgress + 10));
        }, animationTime);

        if(progress ==0 || progress == 100) {
            clearInterval(timer)
        }
        return () => {
            clearInterval(timer);
        };
    }, [progress]);

    return (
        <div>
        {progress != 101 && (
    <CircularProgressWithLabel value={progress} /> )}
    </div>
    )


}
