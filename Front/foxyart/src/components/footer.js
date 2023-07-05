import { HashLink as Link } from "react-router-hash-link";
import { BiMenuAltRight } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="p-5 text-center mt-3">
      DEVELOPED BY{" "}
      <a
        href="https://www.facebook.com/FoxRobotics"
        className="underline hover:text-yellow-600"
      >
        FOX CODING
      </a>{" "}
      FOR{" "}
      <a
        href="https://2022.spaceappschallenge.org/challenges/2022-challenges/take-flight/teams/fox-coding/members"
        className="underline hover:text-yellow-600"
      >
        SPACE APPS 2022
      </a>
    </div>
  );
}
