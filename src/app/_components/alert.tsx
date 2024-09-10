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
        SUPERBLOG
        </div>
      </Container>
    </div>
  );
};

export default Alert;
