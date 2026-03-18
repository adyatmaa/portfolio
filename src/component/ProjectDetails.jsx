import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import { project } from "../data/project";

export default function ProjectDetails() {
  const { id } = useParams();
  const projects = project.find((p) => p.id === id);
  if (!project) {
    return (
      <div>
        <p>No project found bish</p>
        <p>go back</p>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <p>tes</p>
      {projects.name}
    </div>
  );
}
