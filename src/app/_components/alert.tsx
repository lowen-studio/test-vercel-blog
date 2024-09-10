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
        <div className="py-6 text-center text-3xl font-bold">
        SUPERBLOG
        </div>
      </Container>
    </div>
  );
};

export default Alert;
