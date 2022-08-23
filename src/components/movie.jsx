import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function Movie(props) {
  return (
      <div className="">
        <Card className="m-10">
          <CardHeader color="blue" className="relative h-56">
            <img
              src={props.url}
              alt="img-blur-shadow"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              {props.title}
            </Typography>
            <Typography>{props.description}</Typography>
          </CardBody>
          {/* <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">$899/night</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Barcelona, Spain
          </Typography>
        </CardFooter> */}
        </Card>
      
      {/* <div className="absolute bottom-0 left-0 my-rotate-y-180 backface-hidden">
        <h1>Descriptionnnnnnnnnnnnnnnnnnnnnn</h1>
      </div> */}
    </div>
  );
}
