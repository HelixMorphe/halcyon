import { create } from "zustand";

const useResumeStore = create((set, get) => ({
  resume: {
    personalDetails: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
    },
  },
  setPersonalDetails: (details) =>
    set((state) => ({ resume: { ...state.resume, personalDetails: details } })),
}));

export default useResumeStore;
