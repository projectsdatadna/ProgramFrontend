import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";


const data  = {
    

    
    rows: [
        {
            title: "What is Property Management?",
            content: `Property management is the daily oversight of residential, commercial, or industrial real estate by a third-party contractor.
             Generally, property managers take responsibility for day-to-day repairs and ongoing maintenance, security, and upkeep of properties.
             They usually work for the owners of investment properties such as apartment and condominium complexes, private home communities, shopping centers, and industrial parks..`,
        },
        {
            title: "What are the services available under Property Management?",
            content:
                "From calculating taxes to filling vacancies, property management requires handling a plethora of activities on a daily basis. Plus, with multiple stakeholders in the picture, catering to their needs and addressing serious issues needs a holistic approach. This is where availing property management services come into play.",
        },
        {
            title: "What are the steps taken in Real Estate Selling and Buying Assistance?",
            content: `Companies that offer property management services set the right rental price based on market trends. Along with screening tenants, they also conduct a background check of tenants, prepare lease agreements, and collect the rent on your behalf. Maintaining your property after the tenants move out, filling in the vacancies, and settling the monthly utility bills is also where these companies will assist you. `,
        },
        {
            title: "Can Property Management Company find tenants for my property?",
            content: <p></p>,
        },
        {
            title: "What is Rental Property Management?",
            content: <p></p>,
        },
        {
            title: "What are the property management fees?",
            content: <p></p>,
        },
        {
            title: "How often will the property be inspected?",
            content: <p></p>,
        },
        {
            title: "What are the methods for handling repairs and maintenance?",
            content: <p></p>,
        },
        {
            title: "How to keep the tenants happy?",
            content: <p></p>,
        },
        {
            title: "Role of a Property Management company",
            content: <p></p>,
        },
    ],
};

const styles = {
     bgColor: '#FFE5DB',
    titleTextColor: " #0000FF",
    rowTitleColor: "purple",
    // rowContentColor: 'grey',
    // arrowColor: "red",
    
    
    
};

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};

export default function App () {
    const [rows, setRowsOption] = useState(null);
    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);
        }
    }, [rows]);

    return (
        <div>
            <h2 className="section-title">FAQ section</h2>

            <div className="faq-style-wrapper">
                <Faq data={data} getRowOptions={setRowsOption}
                styles={styles}
                />
            </div>
        </div>
    )}
    


    

   