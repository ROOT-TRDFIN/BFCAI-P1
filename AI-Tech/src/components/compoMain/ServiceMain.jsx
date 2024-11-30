// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

import Website from '../ServiceWeb'
import AI from '../ServiceAI'
import Blockchain from '../ServiceBC'
// //import React, { useEffect, useState } from "react";
// import { fetchServiceapi } from "/apiService";

const ServiceMain = () => {
  return (
        <>
        {/* <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div> */}
        <Website/>
        <AI/>
        <Blockchain/>
        </>
  )
}

export default ServiceMain