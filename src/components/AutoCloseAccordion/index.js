
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { withStyles } from "@mui/styles";

const index = ({ SummaryComponent, children, index, handleChange, expanded }) => {

  const StyledAccordionSummary = withStyles({
    root: {
      minHeight: 35,
      maxHeight: 35,
      '&.Mui-expanded': {
        minHeight: 35,
        maxHeight: 35,
      }
    },

  })(AccordionSummary);
  const theme = createTheme({
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root	: {
            minHeight: "0px",
          },
        },
      },
      MuiAccordionSummary : {
        styleOverrides: {
          content	: {
            minHeight: "0px",
          },
          expanded	:{
            minHeight: "0px",

          }
        },
      },
      // MuiButtonBase:{
      //   styleOverrides: {
      //     root	: {
      //       minHeight: "0px",
      //     },
      //   },
      // },
    }


  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion
          elevation={0}
          expanded={expanded === index}
          onChange={handleChange}
          className={expanded !== index && " border-blue-light border-b border-t"}
        >
          <StyledAccordionSummary

            // expandIcon={
            //   <svg
            //     xmlns="http://www.w3.org/2000/svg"
            //     class="h-6 w-6"
            //     fill="none"
            //     viewBox="0 0 24 24"
            //     stroke="currentColor"
            //   >
            //     <path
            //       stroke-linecap="round"
            //       stroke-linejoin="round"
            //       stroke-width="2"
            //       d="M19 9l-7 7-7-7"
            //     />
            //   </svg>
            // }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            {SummaryComponent}
          </StyledAccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
};

export default index;

