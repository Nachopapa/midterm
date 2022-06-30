import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const cardInfo = [

  {

    image: require("./images/s1.png"),

    name: "Mike",

    gpa: 3.8,

  },

  {

    image: require("./images/s2.png"),

    name: "Manal",

    gpa: 3.6,

  },

  {

    image: require("./images/s3.png"),

    name: "Moe",

    gpa: 3.2,

  },

  {

    image: require("./images/s4.png"),

    name: "Mary",

    gpa: 2.6,

  },

];

const styles = {

  card: {

    padding: 40,

  },

};

export const Contact = () => {

  return (

    <Grid

      container

      spacing={0}

      alignItems="center"

      justify="center"

    >

      {cardInfo.map((card) => {

        return (

          <Card

            sx={{

              margin: 4,

              boxShadow: 10,

              minHeight: "300px",

              minWidth: "200px",

              textAlign: "center",

            }}

          >

            <CardMedia

              component="img"

              height="140"

              image={card.image}

              alt="green iguana"

              className={styles.cardMedia}

              sx={{ borderRadius: "50%" }}

            />

            <CardContent sx={{ margin: "auto" }}>

              <Typography gutterBottom variant="h5" component="div">

                {card.name}

              </Typography>

              <Typography variant="body2" color="text.secondary">

                {card.gpa}

              </Typography>

            </CardContent>

            <CardActions sx={{ margin: "auto" }}>

              <Button size="small">Grade</Button>

            </CardActions>

          </Card>

        );

      })}

    </Grid>

  );

};


export default Contact;

