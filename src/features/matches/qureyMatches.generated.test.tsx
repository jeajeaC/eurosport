import { ReactNode } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useMatchesQuery } from "~/features/matches/queryMatches.generated";
import { api } from "~/app/services/baseApi";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const wrapper = ({ children }: { children: ReactNode }) => {
  return <ApiProvider api={api}>{children}</ApiProvider>;
};

describe("LoginForm", () => {
  it("get the list of matches", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useMatchesQuery(), {
      wrapper,
    });

    const initialResponse = result.current;
    expect(initialResponse.data).toBeUndefined();
    expect(initialResponse.isLoading).toBe(true);

    await waitForNextUpdate({ timeout: import.meta.env.VITE_GRAPHQL_ENDPOINT });

    const nextResponse = result.current;
    expect(nextResponse.data).not.toBeUndefined();
    expect(nextResponse.data?.matches[0].id).toEqual("match-1");
    expect(nextResponse.isLoading).toBe(false);
    expect(nextResponse.isSuccess).toBe(true);
  });
});
