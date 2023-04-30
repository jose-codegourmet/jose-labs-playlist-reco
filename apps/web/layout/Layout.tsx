import { Button, NavBar } from "ui";

export default function Layout(props: any) {
  const { children } = props;
  return (
    <div className="w-full relative">
      <NavBar
        logo="test"
        rightSideComponents={<Button className="btn-primary" label="login" />}
      />
      {children}
    </div>
  );
}
