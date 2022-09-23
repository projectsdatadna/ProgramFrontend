import React from "react";

class Profile extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"http://localhost:5000/profile/get")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Profile </h1> {
				items.map((item) => (
                    <table  className = 'table'>
                        <tr className="tr">
				<ol key = { item.id } >
					<th className="th">User_Name: <br/>{ item.Name },</th>
					<th className="th">Picture: <br/>{ item.Picture },</th>
					<th className="th">User_Email:<br/> { item.Email },</th>
                    <th className="th">Familyname:<br/> { item.Familyname }</th>
					</ol>
                    </tr>
                    </table>
				))
			}
		</div>
	);
}
}

export default Profile;
