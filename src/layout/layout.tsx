import { FunctionComponent } from "react";
import { LayoutScreen, BgDiv } from "./layout-styles";
import { LayoutProps } from "./layout.props";

function Layout({ children }: LayoutProps): JSX.Element {
  return (
      <LayoutScreen>
        <BgDiv></BgDiv>
        {children}
      </LayoutScreen>
  );
}

export const WithLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
