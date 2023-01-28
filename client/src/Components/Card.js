import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea} from "@mui/material";

export default function ActionAreaCard(item) {
  return (
  
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent sx={{textAlign:'center'}}>
          <img 
          src={item.item.image} alt="err"
          style={{width:"200px", padding:"10px", height:"280px"}} 
          />
            <Typography gutterBottom variant="h5" >
              {item.item.title.substr(0,15)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.item.description.substr(0,130)}...
            </Typography>
            <Typography variant="subtitle2" sx={{pt:1}}>Price: ${item.item.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
