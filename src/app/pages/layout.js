import BreadCrumbComponent from "@/components/breadCrumb";
import ToolsContainer from "@/components/toolComponent";

export default function Layout({ children }) {
  return (
    <section>
      <BreadCrumbComponent></BreadCrumbComponent>
      <ToolsContainer>{children}</ToolsContainer>
    </section>
  );
}
