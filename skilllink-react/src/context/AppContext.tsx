import React, { createContext, useContext, useReducer, useCallback } from "react";
import { Page, Project, Application, Notification } from "@/types";
import { PROJECTS, APPLICATIONS, NOTIFICATIONS } from "@/lib/constants";

interface AppState {
  currentPage: Page;
  role: "manufacturer" | "artisan" | "admin" | null;
  user: { name: string; company: string };
  shortlisted: number[];
  applications: Application[];
  projects: Project[];
  activeProjectId: number;
  selectedChat: number;
  notifications: Notification[];
  showCreateRequirement: boolean;
  reqStep: number;
  reqForm: Record<string, string>;
  showWhyModal: number | null;
  showQCModal: boolean;
  toast: string | null;
}

type Action =
  | { type: "SET_PAGE"; payload: Page }
  | { type: "SET_ROLE"; payload: "manufacturer" | "artisan" | "admin" }
  | { type: "TOGGLE_SHORTLIST"; payload: number }
  | { type: "UPDATE_APPLICATION"; payload: { id: number; status: string } }
  | { type: "UPDATE_PROJECT"; payload: Project }
  | { type: "SET_ACTIVE_PROJECT"; payload: number }
  | { type: "SET_CHAT"; payload: number }
  | { type: "TOGGLE_NOTIFICATION_READ"; payload: number }
  | { type: "MARK_ALL_NOTIFICATIONS_READ" }
  | { type: "TOGGLE_CREATE_REQ"; payload: boolean }
  | { type: "SET_REQ_STEP"; payload: number }
  | { type: "UPDATE_REQ_FORM"; payload: Record<string, string> }
  | { type: "SET_WHY_MODAL"; payload: number | null }
  | { type: "SET_QC_MODAL"; payload: boolean }
  | { type: "SET_TOAST"; payload: string | null };

const initialState: AppState = {
  currentPage: "landing",
  role: null,
  user: { name: "Aditi Shah", company: "Aria Manufacturing" },
  shortlisted: [],
  applications: APPLICATIONS,
  projects: PROJECTS,
  activeProjectId: 1,
  selectedChat: 1,
  notifications: NOTIFICATIONS,
  showCreateRequirement: false,
  reqStep: 1,
  reqForm: {},
  showWhyModal: null,
  showQCModal: false,
  toast: null,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "TOGGLE_SHORTLIST": {
      const idx = state.shortlisted.indexOf(action.payload);
      const newShort = idx === -1 ? [...state.shortlisted, action.payload] : state.shortlisted.filter(id => id !== action.payload);
      return { ...state, shortlisted: newShort };
    }
    case "UPDATE_APPLICATION": {
      const updated = state.applications.map(app =>
        app.id === action.payload.id ? { ...app, status: action.payload.status as any } : app
      );
      return { ...state, applications: updated };
    }
    case "UPDATE_PROJECT": {
      const updated = state.projects.map(p => p.id === action.payload.id ? action.payload : p);
      return { ...state, projects: updated };
    }
    case "SET_ACTIVE_PROJECT":
      return { ...state, activeProjectId: action.payload };
    case "SET_CHAT":
      return { ...state, selectedChat: action.payload };
    case "TOGGLE_NOTIFICATION_READ": {
      const updated = state.notifications.map(n =>
        n.id === action.payload ? { ...n, read: true } : n
      );
      return { ...state, notifications: updated };
    }
    case "MARK_ALL_NOTIFICATIONS_READ": {
      const updated = state.notifications.map(n => ({ ...n, read: true }));
      return { ...state, notifications: updated };
    }
    case "TOGGLE_CREATE_REQ":
      return { ...state, showCreateRequirement: action.payload };
    case "SET_REQ_STEP":
      return { ...state, reqStep: action.payload };
    case "UPDATE_REQ_FORM":
      return { ...state, reqForm: { ...state.reqForm, ...action.payload } };
    case "SET_WHY_MODAL":
      return { ...state, showWhyModal: action.payload };
    case "SET_QC_MODAL":
      return { ...state, showQCModal: action.payload };
    case "SET_TOAST":
      return { ...state, toast: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
  addToast: (msg: string) => void;
} | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  const addToast = useCallback((msg: string) => {
    dispatch({ type: "SET_TOAST", payload: msg });
    setTimeout(() => dispatch({ type: "SET_TOAST", payload: null }), 3000);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, addToast }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};