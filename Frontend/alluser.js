import React from 'react'


function All_Users(props) {
    console.log(props.users)
  return (
    <div>
        <h2>All Users</h2>
   
    {props.users && props.users.map(property =>{
            return (
                <div key={property.id}>
                    <table className = 'table'>

                        <tr>
                            <th className ='th'>UserName</th>
                            <th className ='th'>Address</th>
                            <th className ='th'>country</th>
                            <th className ='th'>Mobile</th>
                            <th className ='th'>About</th>
                            <th className ='th'>UserType</th>
                        </tr>
                        
                        <tr className ='tr'>
                            <td className = 'th'>{property.UserName}</td>
                            <td className = 'th'>{property.Address}</td>
                            <td className = 'th'>{property.Country}</td>
                            <td className = 'th'>{property.Mobile}</td>
                            <td className = 'th'>{property.About}</td>
                            <td className = 'th'>{property.UserType}</td>
                        </tr>
                    </table>
                </div>
            )
        })}
</div>
  )
}

export default All_Users