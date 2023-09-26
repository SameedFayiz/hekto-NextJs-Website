import BreadCrumbComponent from "../components/breadCrumb";

export default function Layout({ children }) {
  return (
    <section>
      <BreadCrumbComponent></BreadCrumbComponent>
      {children}
    </section>
  );
}
