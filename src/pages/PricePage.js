import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Plan from '../components/Plan/Plan'
import NewComponent from '../components/NewComponent/NewComponent'

const PricePage = () => {
  const { id } = useParams();

  const [plan, setPlan] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPlan = async () => {
      setLoading(true)

      try {
        const planFromAPI = await axios.get(`https://prog-3-leads-api-rest.vercel.app/prices/${id}`);
        console.log(planFromAPI)
        setPlan(planFromAPI.data)
        setLoading(false)
      } catch (error) {
        console.log('ERROR DEL CATCH:', error)
        setLoading(false)
      }

    }

    fetchPlan();

  }, [id])

  return (
    <div>
      <NewComponent plan={plan}/>
    </div>
  );
};

export default PricePage;
