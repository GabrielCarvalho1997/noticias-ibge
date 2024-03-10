import { cn } from "@/lib/utils";
import { ptBR } from "date-fns/locale";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Switch } from "../ui/switch";

interface FilterContainerProps {
  setFilters: (filters: any) => void;
}

type FilterProps = {
  date: {
    from: Date | null;
    to: Date | null;
  };
  busca: string;
  introsize: number;
  destaque: boolean;
};

const FilterContainer = ({ setFilters }: FilterContainerProps) => {
  const [date, setDate] = useState<DateRange | undefined>();

  const { register, handleSubmit, reset, getValues } = useForm<FilterProps>({
    mode: "all",
    defaultValues: {
      date: {
        from: null,
        to: null,
      },
      busca: "",
      introsize: undefined,
      destaque: true,
    },
  });

  const clearFilters = () => {
    setDate(undefined);
    reset();
  };

  const onSubmit = (data: FilterProps) => {
    const filters: any = {
      de: date?.from ? format(date.from, "MM-dd-yyyy") : undefined,
      ate: date?.to ? format(date.to, "MM-dd-yyyy") : undefined,
      destaque: data.destaque,
    };

    if (data.introsize) {
      filters.introsize = data.introsize;
    }

    if (data.busca) {
      filters.busca = data.busca;
    }

    setFilters(filters);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0 md:space-x-4"
    >
      <div className="flex flex-col justify-between items-start gap-2">
        <Label htmlFor="buscar" className="text-primary text-base font-bold">
          Buscar
        </Label>
        <Input
          id="buscar"
          type="text"
          placeholder="Insira um termo de busca"
          {...register("busca")}
        />
      </div>
      <div className="flex flex-col justify-between items-start gap-2">
        <Label htmlFor="date" className="text-primary text-base font-bold">
          Data
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Escolha um período</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              disabled={{ after: new Date() }}
              locale={ptBR}
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(newDate) => {
                setDate(newDate);
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col justify-between items-start gap-2">
        <Label htmlFor="introsize" className="text-primary text-base font-bold">
          Tamanho do texto
        </Label>
        <Input
          id="introsize"
          type="number"
          placeholder="Introsize"
          {...register("introsize")}
        />
      </div>
      <div className="flex flex-col justify-between items-start gap-2">
        <Label htmlFor="destaque" className="text-primary text-base font-bold">
          Destaque
        </Label>
        <Switch
          defaultChecked={getValues("destaque")}
          id="destaque"
          {...register("destaque")}
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Button
          onClick={clearFilters}
          className="w-32 hover:scale-105 bg-destructive hover:bg-destructive"
        >
          Limpar filtro
        </Button>
      </div>
      <div className="flex flex-col justify-center items-start gap-2">
        <Button type="submit" className="w-32 hover:scale-105 hover:bg-primary">
          Filtrar
        </Button>
      </div>
    </form>
  );
};

export default FilterContainer;
