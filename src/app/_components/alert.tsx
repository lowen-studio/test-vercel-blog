import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div className="border-neutral-800" >
      <Container>
        <div className="py-2 text-center text-2xl font-semibold">
        SUPERBLOG
        </div>
      </Container>
    </div>
  );
};

export default Alert;
