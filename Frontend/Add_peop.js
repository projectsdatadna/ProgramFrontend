import React from 'react'



function Uraddprop(props) {
    console.log(props.articles)
  return (
    <div>
        <h2>Added Properties</h2>
        
        
        {props.articles &&  props.articles.map(property =>{
                return (
                    <div key={property.id}>
                        <table  className = 'table'>

                            <tr>
                                <th className ='th'>Member</th>
                                <th className ='th'>Date</th>
                                <th className ='th'>Property Type</th>
                                <th className ='th'>Property Condtion</th>
                                <th className ='th'>Property For</th>
                                <th className ='th'>Address</th>
                                <th className ='th'>Postal Code</th>
                                <th className ='th'>Country</th>
                                <th className ='th'>Total Area</th>
                                <th className ='th'>Cost</th>
                                <th className ='th'>Comments</th>
                            </tr>
                            
                            <tr className = 'tr'>
                                <td className = 'th'>{property.Member}</td>
                                <td className = 'th'>{property.Date}</td>
                                <td className = 'th'>{property.PropertyType}</td>
                                <td className = 'th'>{property.PropertyCondition}</td>
                                <td className = 'th'>{property.PropertyFor}</td>
                                <td className = 'th'>{property.Address}</td>
                                <td className = 'th'>{property.PostalCode}</td>
                                <td className = 'th'>{property.Country}</td>
                                <td className = 'th'>{property.TotalArea}</td>
                                <td className = 'th'>{property.Cost}</td>
                                <td className = 'th'>{property.Comments}</td>
                            </tr>
                        </table>
                    </div>
                )
            })}
           
    </div>
  );

        }

export default Uraddprop
