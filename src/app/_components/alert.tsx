import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div className="border-b" >
      <Container>
        <div className="py-4 text-center text-2xl font-bold">
              <a
                href="/"
                className="border-b hover:text-teal-300 duration-200 transition-colors"
              >
                Superblog
              </a>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
