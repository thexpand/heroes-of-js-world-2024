import { addDays } from "date-fns/addDays";
import { startOfYear } from "date-fns/startOfYear";
import { startOfDay } from "date-fns/startOfDay";

export function GET(
  _: Request,
  { params: { num } }: { params: { num: string } },
) {
  const today = new Date();

  const date = addDays(startOfYear(startOfDay(today)), Number(num) - 1);

  if (Number(num) < 1 || date.getFullYear() !== today.getFullYear()) {
    return Response.json(
      {
        error: "Day not found",
      },
      {
        status: 404,
      },
    );
  }

  return Response.json({
    date,
    humanReadableDate: date.toDateString(),
  });
}
