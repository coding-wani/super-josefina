// Legacy exports (pour compatibilité si besoin)
export { Content, type ContentProps } from "./Content";
export { MainArea, type MainAreaProps } from "./MainArea/MainArea";
export {
  SecondaryArea,
  type SecondaryAreaProps,
} from "./SecondaryArea/SecondaryArea";
export { Header, type HeaderProps } from "./MainArea/Header/Header";
export {
  Header as SecondaryHeader,
  type HeaderProps as SecondaryHeaderProps,
} from "./SecondaryArea/Header/Header";

// Nouveaux exports optimisés
export { OptimizedContent } from "./OptimizedContent";
