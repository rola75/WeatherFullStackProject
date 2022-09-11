import { City } from "../weather_Model/weather_Model.js";

export const getCity = (req, res) => {
    City.findAll()
    .then(city => {
      res.status(200).send(city)
    })
    .catch(err => {
      console.log(err)
    })
  };

export const addCity = (req, res) => {
    const {id, name, img, temp, description} = req.body;
    City.create({id, name, img, temp, description})
      .then(() => {
        res.status(201).send({ message: "Created" });
      })
      .catch((err) => {
        console.log(err);
      });
  };