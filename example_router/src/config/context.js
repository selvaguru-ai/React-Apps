import { createContext, useState } from "react";


//Create a context
export const APIContext = createContext();

//Create a provider component
export const UserProvider = ({children}) => {
    const [agentCommission, setAgentCommission] = useState([
        {
            agent_id: 8398,
            trn_date: "2023-01-31",
            policy_type: "A",
            policy_value: 92967,
            agent_experience: 26,
            number_of_policies_sold: 29,
            customer_satisfaction_score: 3.52,
            commission_amt: 1498.98,
          },
          {
            agent_id: 2446,
            trn_date: "2023-12-30",
            policy_type: "L",
            policy_value: 285073,
            agent_experience: 6,
            number_of_policies_sold: 11,
            customer_satisfaction_score: 3.63,
            commission_amt: 13532.92,
          },
          {
            agent_id: 1468,
            trn_date: "2022-05-10",
            policy_type: "H",
            policy_value: 451271,
            agent_experience: 21,
            number_of_policies_sold: 47,
            customer_satisfaction_score: 1.23,
            commission_amt: 10152.38,
          },
          {
            agent_id: 1629,
            trn_date: "2023-07-18",
            policy_type: "H",
            policy_value: 480980,
            agent_experience: 13,
            number_of_policies_sold: 6,
            customer_satisfaction_score: 1.46,
            commission_amt: 11927.26,
          },
          {
            agent_id: 4382,
            trn_date: "2023-02-04",
            policy_type: "L",
            policy_value: 334730,
            agent_experience: 20,
            number_of_policies_sold: 31,
            customer_satisfaction_score: 3.31,
            commission_amt: 10593.81,
          },
          {
            agent_id: 7538,
            trn_date: "2022-12-31",
            policy_type: "H",
            policy_value: 243267,
            agent_experience: 23,
            number_of_policies_sold: 43,
            customer_satisfaction_score: 1.04,
            commission_amt: 3513.82,
          },
          {
            agent_id: 1113,
            trn_date: "2022-11-10",
            policy_type: "H",
            policy_value: 475102,
            agent_experience: 24,
            number_of_policies_sold: 41,
            customer_satisfaction_score: 3.43,
            commission_amt: 16462.76,
          },
          {
            agent_id: 2225,
            trn_date: "2020-05-01",
            policy_type: "H",
            policy_value: 122657,
            agent_experience: 18,
            number_of_policies_sold: 43,
            customer_satisfaction_score: 4.46,
            commission_amt: 1940.54,
          },
    ])

    return (
        <APIContext.Provider value={{agentCommission, setAgentCommission}}>
            {children}
        </APIContext.Provider>
    )
}