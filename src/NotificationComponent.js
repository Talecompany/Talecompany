import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const NotificationComponent = () => {
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const socket = io('ws://localhost:9090/ws');

        // Écoute des notifications
        socket.on('notification', (data) => {
            setNotification(data);
        });

        // Nettoie la connexion WebSocket lors du démontage du composant
        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <h2>Notifications en temps réel</h2>
            {notification && (
                <div className="notification">
                    <strong>Notification:</strong> {notification}
                </div>
            )}
            {/* Autre contenu de votre composant React */}
        </div>
    );
};

export default NotificationComponent;
