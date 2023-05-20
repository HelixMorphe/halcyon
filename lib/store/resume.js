import { create } from "zustand";

const useResumeStore = create((set, get) => ({
  data: {
    basics: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      bio: "",
      url: "",
    },
    education: [
      {
        institution: "",
        field: "",
        degree: "",
        from: "",
        to: "",
        score: "",
        city: "",
      },
    ],
    work: [
      {
        name: "",
        position: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [""],
      },
    ],
  },
  setData: (data) => set((state) => ({ data })),
  updateField: (path, value) =>
    set((state) => {
      // clone data
      const data = JSON.parse(JSON.stringify(state.data));
      let field = data;
      // navigate to the field to be updated
      path.slice(0, -1).forEach((key) => (field = field[key]));
      // update the field
      field[path[path.length - 1]] = value;
      return { data };
    }),
  addEducation: () => {
    set((state) => ({
      ...state,
      data: {
        ...state.data,
        education: [
          ...state.data.education,
          {
            institution: "",
            field: "",
            degree: "",
            from: "",
            to: "",
            score: "",
            city: "",
          },
        ],
      },
    }));
  },
  deleteEducation: (index) => {
    set((state) => {
      const newEducation = state.data.education.filter((_, i) => i !== index);
      return { ...state, data: { ...state.data, education: newEducation } };
    });
  },
  addWorkExperience: () => {
    set((state) => ({
      ...state,
      data: {
        ...state.data,
        work: [
          ...state.data.work,
          {
            name: "",
            position: "",
            startDate: "",
            endDate: "",
            summary: "",
            highlights: [""],
          },
        ],
      },
    }));
  },
  deleteWorkExperience: (index) => {
    set((state) => {
      const newWorkExperience = state.data.work.filter((_, i) => i !== index);
      return { ...state, data: { ...state.data, work: newWorkExperience } };
    });
  },
}));

export default useResumeStore;
