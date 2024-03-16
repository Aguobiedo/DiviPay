import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import './Home.css';

function Home() {
  return (
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <h1 className="app-title">Bienvenido a DiviPay</h1>
            <p className="app-description">Una App pensada para dividir gastos</p>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <img src="/assets/images/app_logo.png" alt="Logo de DiviPay" className="app-logo" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton expand="block" routerLink="/login" className="button-login">Iniciar sesión</IonButton>
            <IonButton expand="block" routerLink="/register" color="secondary" className="button-signup">Registrarse</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}

export default Home;
