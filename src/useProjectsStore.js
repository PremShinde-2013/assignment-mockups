import create from "zustand";

const useProjectsStore = create((set) => ({
  projects: [
    {
      id: 1,
      name: "4 kW Residential Rooftop Plant",
      client: "Arun Kumar Pandey",
      Address: "Satara, Maharashtra(24 km from service region)",
      installation: "1 month",
      shared: "3rd Aug, 4:32 pm",
      status: "Matched",
    },
    {
      id: 2,
      name: "7 kW Residential Rooftop Plant",
      client: "Ram Kumar Shinde",
      Address: "Kanpur, Uttarpradesh(14 km from service region)",
      installation: "1 month",
      shared: "3rd Aug, 4:32 pm",
      status: "Submitted",
    },
    {
      id: 3,
      name: "14 kW Residential Rooftop Plant",
      client: "Trun Kumar Pandey",
      Address: "Kanpur, Uttarpradesh(4 km from service region)",
      installation: "1 month",
      shared: "3rd Aug, 4:32 pm",
      status: "Submitted",
    },
    {
      id: 4,
      name: "Installation expected in 1 month",
      client: "Prem Prakash Shinde",
      Address: "Kanpur, Uttarpradesh(54 km from service region)",
      installation: "1 month",
      shared: "3rd Aug, 4:32 pm",
      status: "Closed",
    },
    {
      id: 5,
      name: "Project Name 5",
      client: "Rohan Sunil Mane",
      Address: "Kanpur, Uttarpradesh(34 km from service region)",
      installation: "1 month",
      shared: "3rd Aug, 4:32 pm",
      status: "Rejected",
    },
  ],
  handleStatusChange: (projectId, newStatus) => {
    set((state) => {
      const projects = state.projects.map((project) => {
        if (project.id === projectId) {
          project.status = newStatus;
        }
        return project;
      });
      return { projects };
    });
  },
}));

export default useProjectsStore;
