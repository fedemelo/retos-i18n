import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIntl } from 'react-intl';


const JobsList = () => {
    const [offers] = useState([
        {
            id: "0001",
            name: "Manager",
            company: "Schneider Electric",
            salary: 4.5,
            city: "Bogotá, Colombia",
            date: "2019-03-26",
            visits: 1250,
        },
        {
            id: "0002",
            name: "Software Engineer",
            company: "Google Inc.",
            salary: 20,
            city: "Palo Alto, CA, USA",
            date: "2019-03-27",
            visits: 1500,
        },
        {
            id: "0003",
            name: "Nurse",
            company: "Clínica La Aurora",
            salary: 1,
            city: "Cali, Colombia",
            date: "2019-03-28",
            visits: 2300,
        },
    ]);

    const intl = useIntl();
    const backgroundColor = intl.formatMessage({ id: "backgroundColor" });
    const color = intl.formatMessage({ id: "color" });
    const style = { backgroundColor: backgroundColor, color: color }

    return (
        <div>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col" style={style}>#</th>
                        <th scope="col" style={style}>
                            <FormattedMessage id="Position" />
                        </th>
                        <th scope="col" style={style}>
                            <FormattedMessage id="Company" />
                        </th>
                        <th scope="col" style={style}>
                            <FormattedMessage id="Salary" />
                        </th>
                        <th scope="col" style={style}>
                            <FormattedMessage id="City" />
                        </th>
                        <th scope="col" style={style}>
                            <FormattedMessage id="PublicationDate" />
                        </th>
                        <th scope="col" style={style}>
                            <FormattedMessage id="Views" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((e, i) => (
                        <Job key={i} offer={e} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobsList;
