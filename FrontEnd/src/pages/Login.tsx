import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';
import './Login.css';

function Login() {
  return (
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <h1 className="login-title">Iniciar Sesión</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonItem lines="none">
              <IonLabel position="floating">Correo Electrónico</IonLabel>
              <IonInput type="email" required></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonItem lines="none">
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" required></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton expand="block" className="button-login">Iniciar Sesión</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <p className="signup-link">¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}

export default Login;
