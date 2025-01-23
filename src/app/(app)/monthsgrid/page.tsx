import Footer from "~/components/Footer";

type Props = {
  year: string;
  lived: number;
};

export default function MonthsGrid({ year, lived }: Props) {
  return <Footer name={year} lived={lived}></Footer>;
}
