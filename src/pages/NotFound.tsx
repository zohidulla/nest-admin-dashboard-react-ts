import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="content-main">
      <div className="row mt-60">
        <div className="col-sm-12">
          <div className="w-50 mx-auto text-center">
            <img
              src="/assets/imgs/theme/404.png"
              width="350"
              alt="Page Not Found"
            />
            <h3 className="mt-40 mb-15">Oops! Page not found</h3>
            <p>
              It's looking like you may have taken a wrong turn. Don't worry...
              it happens to the best of us. Here's a little tip that might help
              you get back on track.
            </p>
            <Link to="/dashboard" className="btn btn-primary mt-4">
              <i className="material-icons md-keyboard_return"></i> Back to main
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
