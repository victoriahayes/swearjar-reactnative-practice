import {NavigationStackProp} from 'react-navigation-stack';

export interface NavigationProps {
  navigation: NavigationStackProp;
}

export interface ModalProps {
  closeAction: (data: any) => void;
}
