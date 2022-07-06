import { IonContent, IonHeader, IonPage,IonImg, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Image Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Image Demo</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonImg src="../../assets/laptop_image.jpg" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
