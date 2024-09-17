import { LoaderConfig, ModalConfig } from "@appTypes/common.types";

/// 🟥🟥 GUIInvoker observer types
export type InvocationsObserverEvents =
  | "invokeLoader"
  | "invokeLoaderWithText"
  | "invokeModal"
  | "configModal"
  | "invokeModalWithConfig"
  | "invokeModalDatosObligatorios"
  | "invokeModalTokenExpirado"
  | "invokeModalCamposConError";

export type InvocationsObserverDataTypes<TObserverEvent extends InvocationsObserverEvents> =
  TObserverEvent extends "invokeLoader" ? boolean :
  TObserverEvent extends "invokeLoaderWithText" ? LoaderConfig :
  TObserverEvent extends "invokeModal" ? boolean :
  TObserverEvent extends "configModal" ? Omit<ModalConfig, "onClose" > :
  TObserverEvent extends "invokeModalWithConfig" ? Omit<ModalConfig, "onClose" > :
  TObserverEvent extends "invokeModalDatosObligatorios" ? null | undefined :
  TObserverEvent extends "invokeModalTokenExpirado" ? null | undefined :
  TObserverEvent extends "invokeModalCamposConError" ? null | undefined :
  never;