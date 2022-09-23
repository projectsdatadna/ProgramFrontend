import React from 'react'


function All_Projects(props) {
    console.log(props.properties)
  return (
    <div>
        <h2>All projects</h2>
   
    {props.properties && props.properties.map(property =>{
            return (
                <div key={property.id}>
                    <table className = 'table'>

                        <tr>
                            <th className ='th'>projectName</th>
                            <th className ='th'>projectIncludes</th>
                            <th className ='th'>Address</th>
                            <th className ='th'>country</th>
                        </tr>
                        
                        <tr className ='tr'>
                            <td className = 'th'>{property.ProjectName}</td>
                            <td className = 'th'>{property.ProjectIncludes}</td>
                            <td className = 'th'>{property.Address}</td>
                            <td className = 'th'>{property.Country}</td>
                        </tr>
                    </table>
                </div>
            )
        })}
</div>
  )
}

export default All_Projects