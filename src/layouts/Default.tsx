import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const Default = () => {
  return (
    <>
      <SideBar />
      <main className="main-wrap">
        <Header>
          <div className="col-search">
            <form className="searchform">
              <div className="input-group">
                <input
                  list="search_terms"
                  type="text"
                  className="form-control"
                  placeholder="Search term"
                />
                <button className="btn btn-light bg" type="button">
                  <i className="material-icons md-search"></i>
                </button>
              </div>
              <datalist id="search_terms">
                <option value="Products"></option>
                <option value="New orders"></option>
                <option value="Apple iphone"></option>
                <option value="Ahmed Hassan"></option>
              </datalist>
            </form>
          </div>
        </Header>
        <Outlet />
      </main>
    </>
  );
};

export default Default;
