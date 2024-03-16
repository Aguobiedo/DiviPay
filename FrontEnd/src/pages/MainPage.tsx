import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import './MainPage.css'; // Importa tu archivo de estilos CSS

const MainPage: React.FC = () => {
    useEffect(() => {
        // Simulación de la integración con Google Maps
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Dividir Gastos App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="container">
                    <h2>Mapa de Solicitudes</h2>
                    <div id="map" className="map"></div>
                    <h2>Solicitudes Recientes</h2>
                    <div className="request">
                        <p><strong>Solicitud de Viaje en Auto</strong></p>
                        <p><em>Usuario: Juan Pérez</em></p>
                        <p>Detalles: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed cursus magna vel massa dapibus tristique.</p>
                        <button>Aceptar Solicitud</button>
                    </div>
                    <div className="request">
                        <p><strong>Solicitud de Comida</strong></p>
                        <p><em>Usuario: María Rodríguez</em></p>
                        <p>Detalles: Fusce aliquet tortor vel lacus porttitor, sed gravida elit volutpat. Morbi lacinia risus nec eros eleifend, sed vehicula felis aliquam.</p>
                        <button>Aceptar Solicitud</button>
                    </div>
                    {/* Agregar más solicitudes aquí */}
                </div>
            </IonContent>
            <IonFooter className='footer'>
                <IonToolbar  >
                    <IonTitle  >Dividir Gastos App</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default MainPage;
