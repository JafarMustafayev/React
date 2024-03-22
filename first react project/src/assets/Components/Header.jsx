import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <header className="header">
        <h1>What we do</h1>

        <Button
          name={"Read more   "}
          icon={<FontAwesomeIcon icon={icons.faArrowRight} />}
        />
      </header>
    </>
  );
}

export default Header;
