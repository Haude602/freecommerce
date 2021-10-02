import React, { useState } from "react";
import Link from "next/link";
import useSWR from "swr";

function Navbar() {
  const { data, error } = useSWR("/api/config");

  return (
    <>
      {data && (
        <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
          <div className="container">
            <div className="navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                {data.categories.map((category, index) => (
                  <>
                    {category.slug ? (
                      <li key={index} className="nav-item">
                        <Link href={"/category/" + category.slug}>
                          <a className="nav-link">{category.name}</a>
                        </Link>
                      </li>
                    ) : (
                      <li key={index} className="nav-item">
                        <Link href={"/category"}>
                          <a className="nav-link">{category.name}</a>
                        </Link>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </div>{" "}
          </div>{" "}
        </nav>
      )}
    </>
  );
}

export default Navbar;
