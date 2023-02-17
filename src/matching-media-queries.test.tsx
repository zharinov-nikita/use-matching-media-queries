import React from "react";
import { render, screen } from "@testing-library/react";
import { useMatchingMediaQueries } from "./matching-media-queries.hook";
import { MatchMedia } from "./matching-media-queries.mock";

const Component = ({ query, role }: { query: string; role: string }) => {
  const isTouch = useMatchingMediaQueries(query);
  return <>{isTouch && <div role={role}>component</div>}</>;
};

describe("test", () => {
  test("toBeInTheDocument - (min-width: 320px)", () => {
    const role = "main";
    const query = "(min-width: 320px)";
    new MatchMedia(query);
    render(<Component role={role} query={query} />);
    const component = screen.getByRole(role);
    expect(component).toBeInTheDocument();
  });
  test("toBeInTheDocument - (max-width: 320px)", () => {
    const role = "main";
    const query = "(max-width: 320px)";
    new MatchMedia(query);
    render(<Component role={role} query={query} />);
    const component = screen.getByRole(role);
    expect(component).toBeInTheDocument();
  });
  test("toBeInTheDocument (max-width: 320px) and (min-width: 720px)", () => {
    const role = "main";
    const query = "(max-width: 320px) and (min-width: 720px)";
    new MatchMedia(query);
    render(<Component role={role} query={query} />);
    const component = screen.getByRole(role);
    expect(component).toBeInTheDocument();
  });
  test("toBeNull", () => {
    const role = "main";
    const queryHook = "(min-width: 320px)";
    const queryMatchMedia = "(min-width: 1000px)";
    new MatchMedia(queryMatchMedia);
    render(<Component role={role} query={queryHook} />);
    const component = screen.queryByRole(role);
    expect(component).toBeNull();
  });
});
