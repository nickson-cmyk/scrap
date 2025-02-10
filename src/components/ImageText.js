import {
    Typography,
    Button,
  } from "@mui/material";
const ImageText = () => {
  return (
    <div className="imagetext">
        <Typography variant="h1" sx={{ mt: 3 }}>
            CALL NOW
        </Typography>
        <Typography variant="h1" sx={{ mt: 3 }}>
            TO SCRAP HARBOR AND WE WILL COLLECT
        </Typography>
        <Typography variant="h1" sx={{ mt:2 }}>
            +91 84381 92377
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
            SCRAP HARBOR
        </Button>
    </div>
  );
};

export default ImageText;
