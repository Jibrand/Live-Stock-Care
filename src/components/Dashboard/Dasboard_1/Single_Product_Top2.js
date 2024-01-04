import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { client, urlFor } from '../../../Client';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { t } = useTranslation();
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const costerID = localStorage.getItem('costerID');

    const fetchNotifications = async () => {
      const query = `*[_type == "Orders" && user._ref == "${costerID}"] | order(date1 desc, _createdAt desc)`;

      const notificationData = await client.fetch(query);

      setNotifications(notificationData);
      setIsLoading(false);
    };

    fetchNotifications();
  }, [params.id]);

  return (
    <React.Fragment>
      <div className='p-1' style={{ textAlign: 'left', overflowY: 'scroll', maxHeight: '160px' }}>
        <h5 style={{ color: 'black', fontWeight: 'bold' }}>{t('l63')}</h5>
        {isLoading ? (
          <p>{t('l65')}</p>
        ) : notifications.length === 0 ? (
          <p>{t('l64')}</p>
        ) : (
          notifications.map((notification) => {
            let daysLeft = moment().diff(moment(notification.date1).subtract(30, 'days'), 'days');

            // Check if daysLeft is less than or equal to -1
            if (daysLeft <= -1) {
              daysLeft += 30;
            }

            // Set the color based on the number of days left
            const color = daysLeft <= 3 && daysLeft !== 0 ? 'red' : 'black';

            // Display "30 days" when exactly 0 days left
            const displayDays = daysLeft === 0 ? 30 : daysLeft;

            return (
              <React.Fragment key={notification._id}>
                <p className='lato' style={{ marginBottom: '5px', color: color }}>
                  Your Animal{' '}
                  <b>
                    <span style={{ color: '#430e7e' }}>
                      <u>
                        <Link to={`/User/Dashboard/product/product/preview/${notification._id}`}>
                          {notification.name1}
                        </Link>
                      </u>
                    </span>
                  </b>
                  -[<span style={{ fontSize: '13px' }}><i>{notification._id}</i></span>] Service will expire in{' '}
                  {displayDays} days
                </p>
              </React.Fragment>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
}
