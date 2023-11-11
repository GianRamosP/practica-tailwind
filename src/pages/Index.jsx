import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { items } from "../data/items";

export default function Index() {
  return (
    <>
      <Header />
      <div>
        <h1>Index</h1>

        <div>
          {/* <div>
            {items.map((item) => (
              <div key={item.id}>
                <Link to={`/contact/${item.id}`}>{item.name}</Link>
              </div>
            ))}
          </div> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}
