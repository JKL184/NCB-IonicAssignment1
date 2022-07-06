import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonList,IonListHeader,IonItem,IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Programme List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Programme List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonListHeader color="primary">
            <IonLabel>Majors</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel color="primary">BSc. General - Computer Science Major</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">BSc. General - Software Engineering Major</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">BSc Information Technology</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">BSc. Software Engineering (Mobile Application Technologies)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">BSc Computer Studies Option</IonLabel>
          </IonItem>
        </IonList>
        <IonList>
          <IonListHeader color="secondary">
            <IonLabel>Minors</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel color="secondary">Minor in Computer Science</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="secondary">Minor in Software Engineering</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="secondary">Minor in Information Technology</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
