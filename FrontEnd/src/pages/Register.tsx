import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';
import './Register.css';

function Register() {
  return (
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <h1 className="register-title">Regístrate</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonItem lines="none">
              <IonLabel position="floating">Nombre</IonLabel>
              <IonInput type="text" required></IonInput>
            </IonItem>
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
          <IonCol size="12">
            <IonItem lines="none">
              <IonLabel position="floating">Confirmar Contraseña</IonLabel>
              <IonInput type="password" required></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton expand="block" className="button-register">Registrarse</IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <p className="login-link">¿Ya tienes una cuenta? <a href="/login">Inicia sesión aquí</a></p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}

export default Register;
