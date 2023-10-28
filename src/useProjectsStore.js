import create from "zustand";

const useProjectsStore = create((set) => ({
  projects: [
    { id: 1, name: "4 kW Residential Rooftop Plant", status: "Matched" },
    { id: 2, name: "7 kW Residential Rooftop Plant", status: "Submitted" },
    { id: 3, name: "14 kW Residential Rooftop Plant", status: "Submitted" },
    { id: 4, name: "Installation expected in 1 month", status: "Closed" },
    { id: 5, name: "Project Name 5", status: "Rejected" },
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
