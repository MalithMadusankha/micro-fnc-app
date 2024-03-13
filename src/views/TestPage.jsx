import { useRouteError } from "react-router-dom";

export default function TestPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <h1>Oops!</h1>
        <p>Sorry, This page is not avialable.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  );
}
