import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPreviewModal: { isOpen: false, images: [] },
  isLightboxOpen: false,
  displayAccountSettingModal: true,
  activeAccordion: false,
  isNotificationPanelOpen: false,
  isSignInModalOpen: false,
  isDisplaySettingModalOpen: true,
  isProfileModalOpen: false,
  isChangePasswordModalOpen: false,
  drawer: { anchor: "left", open: false },
  sidebarMenuSelectionIndex: null,
  isSwipableDrawer: false,
};

const appState = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.drawer = action.payload;
    },
    toggleSwipableDrawer: (state, action) => {
      state.isSwipableDrawer = action.payload;
    },
    toggleProfileModal: (state, action) => {
      state.isProfileModalOpen = action.payload;
    },

    toggleAccordion: (state, action) => {
      state.activeAccordion = action.payload;
    },

    togglePreviewModal: (state, action) => {
      state.isPreviewModal = action.payload;
    },

    toggleAccountSettingModal: (state, action) => {
      state.isDisplaySettingModalOpen = action.payload;
    },
    toggleChangePasswordModal: (state, action) => {
      state.isChangePasswordModalOpen = action.payload;
    },

    toggleLightbox: (state, action) => {
      state.isLightboxOpen = action.payload;
    },

    toggleNotificationPanel: (state, action) => {
      state.isNotificationPanelOpen = action.payload;
    },

    toggleSignInModal: (state, action) => {
      state.isSignInModalOpen = action.payload;
    },

    setSidebarMenuSelectionIndex: (state, action) => {
      state.sidebarMenuSelectionIndex = action.payload;
    },
  },
});

export const {
  toggleDrawer,
  setMenuData,
  toggleLightbox,
  togglePreviewModal,
  toggleSubMenu,
  toggleSecondarySubMenu,
  toggleNotificationPanel,
  toggleSignInModal,
  toggleProfileModal,
  toggleAccordion,
  toggleAccountSettingModal,
  toggleChangePasswordModal,
  setSidebarMenuSelectionIndex,
  toggleSwipableDrawer,
} = appState.actions;

export default appState.reducer;
