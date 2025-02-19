import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
export default function Contact() {
    const { t } = useTranslation();
    const [members] = useState([
        { 
            id: 1, 
            location: "NewYork", 
            firstName: "John", 
            lastName: "Doe", 
            email: "john.doe@example.com", 
            phoneNumber: "+123456789" 
        },
        { 
            id: 2, 
            location: "LosAngeles", 
            firstName: "Jane", 
            lastName: "Smith", 
            email: "jane.smith@example.com", 
            phoneNumber: "+987654321" 
        },
        { 
            id: 3, 
            location: "Chicago", 
            firstName: "Michael", 
            lastName: "Johnson", 
            email: "michael.johnson@example.com", 
            phoneNumber: "+1122334455" 
        }
    ]);

    return (
        <div className='container mt-4' > 
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item fs-6">
            <a href="/">{t("ngo.breadcrumbHome")}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/schemes/programs" style={{ textDecoration: "none", color: "red" }}>
              {t("contact.contactheading")}
            </Link>
          </li>
        </ol>
      </nav>
      <h2 className="text-center">{t("contact.contactheading")}</h2>
            <div style={{  padding: '10px', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', margin: '20px 0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>{t('S_No')}</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>{t('Location')}</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>{t('FirstName')}</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>{t('LastName')}</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>{t('Email')}</th>
                            <th style={{ padding: '10px', border: '1px solid #fff' }}>{t('PhoneNumber')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member, index) => (
                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0' }}>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{index + 1}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{t(member.location)}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{t(member.firstName)}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{t(member.lastName)}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.email}</td>
                                <td style={{ padding: '10px', border: '1px solid black' }}>{member.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
