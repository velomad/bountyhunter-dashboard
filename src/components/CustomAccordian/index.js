import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const CustomAccordian = ({
  SummaryComponent,
  children,
  classes,
  accordianSummaryBackgroundColor,
  backgroundChangeOnExpansion,
  expandedBackgroundColor,
  padding,
  getIsExpanded,
  accordianId,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    getIsExpanded && getIsExpanded(isExpanded);
  };

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: "15px",
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      {...props}
      expandIcon={
        <ArrowForwardIosSharpIcon
          style={{
            color: backgroundChangeOnExpansion && expanded !== false && "white",
          }}
          sx={{ fontSize: "0.9rem" }}
        />
      }
    />
  ))(({ theme, props }) => ({
    minHeight: "35px",
    backgroundColor: backgroundChangeOnExpansion
      ? expanded !== false && expandedBackgroundColor
      : accordianSummaryBackgroundColor,
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(0),
    },
  }));

  return (
    <div>
      <Accordion
        elevation={0}
        className={classes}
        expanded={expanded == accordianId}
        onChange={handleChange(accordianId)}
      >
        <AccordionSummary
          backgroundColor={accordianSummaryBackgroundColor}
          aria-controls={`${accordianId}+bh-content`}
          id={`${accordianId}+panel1bh-header`}
        >
          {<SummaryComponent />}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordian;
